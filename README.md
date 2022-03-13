<img src="static/paimon-og.png" align="right" width="180px"/>

# [Paimon.moe](https://paimon.moe)

Your best Genshin Impact companion! Paimon.moe helps you plan what to farm with ascension calculator and database. It also tracks your progress with a todo list and a wish counter.

Created with [Sapper](https://sapper.svelte.dev/) + [Tailwind CSS](https://tailwindcss.com/)

# Development

```
# install dependencies
yarn

# you need the api to run wish importer and wish tally
git clone https://github.com/MadeBaruna/paimon-moe-api
cd paimon-moe-api
docker-compose up -d

# run in dev mode
cp .env.example .env
vi .env
yarn dev

# export as production static site
yarn export
```

# License

[MIT](https://github.com/MadeBaruna/paimon-moe/blob/main/LICENSE)

This project is not affiliated with HoYoVerse.
Genshin Impact, game content and materials are trademarks and copyrights of HoYoVerse.
