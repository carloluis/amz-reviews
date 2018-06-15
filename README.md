# Amz-Reviews &middot; :scroll: :mag:

> Reviews Demo Project

[![GitHub Page](https://img.shields.io/badge/GitHub-Page-brightgreen.svg)](https://carloluis.github.io/amz-reviews/ "Amazon Reviews Demo")
[![GitHub license](https://img.shields.io/github/license/carloluis/amz-reviews.svg)](https://github.com/carloluis/amz-reviews/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/carloluis/amz-reviews.svg)](https://github.com/carloluis/amz-reviews/stargazers)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

## Setup

Clone repository and restore packages:

```bash
git clone https://github.com/carloluis/amz-reviews.git
cd amz-reviews
yarn
```

## Running

Provide `API_URL` environment variable when running:

```bash
API_URL=<reviews-api-url> yarn dev
```

## Features

- Infinite Scroll
- Search Filter
- Stars Filter
- Group by Day/Week/Month
- Order by Asc/Desc (on time)

<details>
<summary>Extras</summary>

- Service Worker (intercept [GitHub Page](https://carloluis.github.io/amz-reviews/ "Amazon Reviews Demo") api requests)
- Specs (using Jest)
- Webpack
- Redux
- Sass

</details>

## License

MIT © [Carloluis](https://github.com/carloluis)
