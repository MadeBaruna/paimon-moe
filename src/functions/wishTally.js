import dayjs from 'dayjs';
import { getAccountPrefix } from '../stores/account';
import { readSave } from '../stores/saveManager';
import { process } from './wish';

const bannerCategories = ['beginners', 'standard', 'character-event', 'weapon-event'];

async function sendWish(data) {
  try {
    await fetch(`${import.meta.env.VITE_API_HOST}/wish`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error(err);
  }
}

async function sendWishTotal(data) {
  try {
    await fetch(`${import.meta.env.VITE_API_HOST}/wish/total`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error(err);
  }
}

async function sendWishConstellation(data) {
  try {
    await fetch(`${import.meta.env.VITE_API_HOST}/wish/constellation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error(err);
  }
}

export async function submitWishTally() {
  let prefixId = 0;

  const prefixAccount = getAccountPrefix();
  const uid = await readSave(`${prefixAccount}wish-uid`);

  const constellations = {};

  for (const id of bannerCategories) {
    prefixId += 100000;

    const data = await process(id);
    if (data === null) continue;
    if (data.hasManualInput) continue;

    console.log('processing wish tally', id);

    const { pulls, banner, tally } = data;

    await sendWishTotal({
      type: id,
      uid,
      total: tally.allTotal,
      legendary: tally.legendaryTotal,
      rare: tally.rareTotal,
      rateOffLegendary: tally.rateOffLegendary,
      rateOffRare: tally.rateOffRare,
    });

    const firstFivePulls = pulls
      .slice(0, 5)
      .map((e) => [dayjs(e.time).unix().toString(), e.id, e.type, e.pity, e.group === 'group']);

    for (let i = banner.length - 1; i >= Math.max(banner.length - 7, 0); i--) {
      const total = banner[i].total;
      if (total === 0) continue;

      const pityCount = [...banner[i].pityCount].map((e) => e || 0);
      if (pityCount.length > 90) continue;

      const rarePity = banner[i].rarePity;
      const legendaryCount = banner[i].legendary.length;
      const rareCount = banner[i].rare.character.length + banner[i].rare.weapon.length;
      const legendaryPulls = banner[i].legendary.map((e) => [
        dayjs(e.time).unix().toString(),
        e.id,
        e.type,
        e.pity,
        e.group === 'group',
        e.guaranteed,
        5,
      ]);

      // specific 4star include
      if (banner[i].rare) {
        const includedRarePulls = banner[i].rare.character.map((e) => [
          dayjs(e.time).unix().toString(),
          e.id,
          e.type,
          e.pity,
          e.group === 'group',
          e.guaranteed,
          4,
        ]);
        const includedRareWeaponPulls = banner[i].rare.weapon.map((e) => [
          dayjs(e.time).unix().toString(),
          e.id,
          e.type,
          e.pity,
          e.group === 'group',
          e.guaranteed,
          4,
        ]);
        legendaryPulls.push(...includedRarePulls);
        legendaryPulls.push(...includedRareWeaponPulls);
      }

      // console.log(pityCount);
      // console.log(legendaryPulls);
      // console.log(rarePity);
      // console.log(legendaryCount, rareCount, total);

      await sendWish({
        firstPulls: firstFivePulls,
        legendaryPulls,
        rarePulls: rarePity,
        banner: prefixId + i + 1,
        total,
        legendary: legendaryCount,
        rare: rareCount,
        pityCount,
        uid,
      });

      await sendWishConstellation({
        banner: prefixId + i + 1,
        uid,
        items: Object.entries(banner[i].constellation).map(([name, count]) => [name, count]),
      });
    }

    for (const [id, count] of Object.entries(tally.constellation)) {
      if (constellations[id] === undefined) constellations[id] = 0;
      constellations[id] += count;
    }
  }

  await sendWishConstellation({
    uid,
    items: Object.entries(constellations).map(([name, count]) => [name, count]),
  });
}
