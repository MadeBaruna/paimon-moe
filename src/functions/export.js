import { Workbook } from 'exceljs';
import { bannerTypes } from '../data/bannerTypes';
import { banners } from '../data/banners';

import dayjs from 'dayjs';
import { getTimeOffset } from '../stores/server';
import { process } from './wish';

const bannerCategories = {
  'character-event': 'Character Event',
  'weapon-event': 'Weapon Event',
  standard: 'Standard',
  beginners: "Beginners' Wish",
};

function createWorkbook() {
  const workbook = new Workbook();
  workbook.creator = 'Paimon.moe';
  workbook.created = new Date();
  workbook.modified = new Date();

  return workbook;
}

/**
 *
 * @param {Workbook} workbook
 */
function addSheet(workbook) {
  for (const [_, category] of Object.entries(bannerCategories)) {
    workbook.addWorksheet(category, { views: [{ state: 'frozen', ySplit: 1 }] });
  }
  workbook.addWorksheet('Banner List');
  workbook.addWorksheet('Information');
}

function convertBlobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}

/**
 *
 * @param {Workbook} workbook
 * @returns {Promise<Array>}
 */
async function addBanners(workbook) {
  console.log('adding banners');
  const sheet = workbook.getWorksheet('Banner List');

  sheet.columns = [
    { header: 'Image', key: 'image', width: 29 },
    { header: 'Name', key: 'name', width: 32 },
    { header: 'Start', key: 'start', width: 19 },
    { header: 'End', key: 'end', width: 19 },
  ];

  const diff = 8 - getTimeOffset();
  const icons = {};

  for (const [_, category] of Object.entries(banners)) {
    for (const banner of category) {
      const res = await fetch(`/images/banners/${banner.name} ${banner.image}.png`, {
        method: 'GET',
      });

      const imageBlob = await res.blob();
      const imageB64 = await convertBlobToBase64(imageBlob);

      const imageId = workbook.addImage({
        base64: imageB64,
        extension: 'png',
      });

      icons[`/images/banners/${banner.name} ${banner.image}.png`] = imageId;

      const row = sheet.addRow({
        name: banner.name,
        start: dayjs(banner.start).subtract(diff, 'hour').format('YYYY-MM-DD HH:mm:ss'),
        end: dayjs(banner.end).subtract(diff, 'hour').format('YYYY-MM-DD HH:mm:ss'),
      });

      row.height = 98;

      sheet.addImage(imageId, {
        tl: { col: 0, row: row.number - 1 },
        ext: { width: 200, height: 100 },
      });
    }
  }

  return icons;
}

/**
 *
 * @param {Workbook} workbook
 */
async function addInformation(workbook) {
  console.log('adding information');
  const sheet = workbook.getWorksheet('Information');

  sheet.getColumn('A').width = 28;
  sheet.getColumn('B').width = 28;
  sheet.getColumn('B').style = {
    alignment: {
      horizontal: 'left',
    },
  };

  sheet.addRow(['Paimon.moe Wish History Export']);
  sheet.addRow(['Version', 1]);
  sheet.addRow(['Export Date', dayjs().format('YYYY-MM-DD HH:mm:ss')]);

  sheet.mergeCells('A1:B1');
}

/**
 *
 * @param {Workbook} workbook
 * @param {Array} icons
 */
async function addWishHistory(workbook, icons) {
  for (const [id, category] of Object.entries(bannerCategories)) {
    const data = process(id);

    const sheet = workbook.getWorksheet(category);
    sheet.columns = [
      { header: 'Time', width: 22, style: { alignment: { horizontal: 'left' } } },
      { header: 'Pity', width: 4, style: { alignment: { horizontal: 'center' } } },
      { header: 'Name', width: 32 },
      { header: '⭐', width: 2.5, style: { alignment: { horizontal: 'center' } } },
      { header: 'Type', width: 9 },
      { header: '#Roll', width: 7, style: { alignment: { horizontal: 'center' } } },
      { header: 'Group', width: 7, style: { alignment: { horizontal: 'center' } } },
      { header: 'Banner', width: 24 },
      { header: 'Icon', width: 5.5 },
    ];

    sheet.getRow(1).font = {
      bold: true,
    };

    if (data === null) continue;

    let groupCount = 0;
    let lastTime = 0;
    let lastBanner = '';
    for (const pull of data) {
      if (lastBanner !== pull.banner.image) {
        groupCount = 0;
      }
      if (lastTime !== pull.time) {
        groupCount++;
      }

      lastBanner = pull.banner.image;
      lastTime = pull.time;

      const row = sheet.addRow([
        dayjs.unix(pull.time).toDate(),
        pull.pity,
        pull.name,
        pull.rarity,
        pull.type,
        pull.at,
        groupCount,
        pull.banner.name,
      ]);

      const bgColor = pull.striped ? 'ffeeeeee' : 'ffffffff';
      for (let i = 1; i <= 8; i++) {
        row.getCell(i).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: bgColor },
        };
      }

      row.getCell(1).numFmt = 'yyyy-mm-dd hh:mm:ss';

      row.font = {
        color: { argb: pull.rarity === 5 ? 'FFCC9832' : pull.rarity === 4 ? 'FF8A6995' : 'FF000000' },
        bold: pull.rarity >= 4,
      };

      row.border = {
        bottom: { style: 'thin', color: { argb: 'ffdddddd' } },
        left: { style: 'thin', color: { argb: 'ffdddddd' } },
        right: { style: 'thin', color: { argb: 'ffdddddd' } },
      };

      sheet.addImage(icons[pull.banner.image], {
        tl: { col: 8, row: row.number - 1 },
        ext: { width: 40, height: 20 },
      });
    }
  }
}

/**
 *
 * @param {Workbook} workbook
 */
async function downloadFile(workbook) {
  console.log('downloading the excel file');

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer]);

  const fileURL = window.URL.createObjectURL(blob);
  const fileLink = document.createElement('a');
  fileLink.download = 'paimonmoe_wish_history.xlsx';
  fileLink.href = fileURL;
  document.body.appendChild(fileLink);
  fileLink.click();
}

export async function exportToExcel() {
  const workbook = createWorkbook();

  addSheet(workbook);
  const icons = await addBanners(workbook);

  await addInformation(workbook);
  await addWishHistory(workbook, icons);
  await downloadFile(workbook);
}
