import { process } from './wish';

const bannerCategories = ['beginners', 'standard', 'character-event', 'weapon-event'];

async function sendWish(data) {
  try {
    await fetch(`${__paimon.env.API_HOST}/wish`, {
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
  for (const id of bannerCategories) {
    prefixId += 100000;

    const data = process(id);
    if (data === null) continue;
    if (data.hasManualInput) continue;

    console.log('processing wish tally', id);

    const { pulls, banner } = data;

    const firstFivePulls = pulls.slice(0, 5).map((e) => [e.time.toString(), e.id, e.type, e.pity, e.group === 'group']);

    for (let i = banner.length - 1; i >= Math.max(banner.length - 2, 0); i--) {
      const total = banner[i].total;
      if (total === 0) continue;

      const rarePity = banner[i].rarePity;
      const legendaryCount = banner[i].legendary.length;
      const rareCount = banner[i].rare.character.length + banner[i].rare.weapon.length;
      const legendaryPulls = banner[i].legendary.map((e) => [
        e.time.toString(),
        e.id,
        e.type,
        e.pity,
        e.group === 'group',
      ]);

      console.log(legendaryPulls);
      console.log(rarePity);
      console.log(legendaryCount, rareCount, total);
      await sendWish({
        firstPulls: firstFivePulls,
        legendaryPulls,
        rarePulls: rarePity,
        banner: prefixId + i + 1,
        total,
        legendary: legendaryCount,
        rare: rareCount,
      });
    }
  }
}
