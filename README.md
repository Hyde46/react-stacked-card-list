# react-stacked-card-list

> React port of [Fireship-IO stacked card list](https://github.com/fireship-io/stacked-card-list)

Checkout [live Version](https://hyde46.github.io/react-stacked-card-list/)

[![NPM](https://img.shields.io/npm/v/react-stacked-card-list.svg)](https://www.npmjs.com/package/react-stacked-card-list) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-stacked-card-list
```

## Usage

```jsx
import React from 'react'

import { StackedCardList, StackedCard } from 'react-stacked-card-list'
import 'react-stacked-card-list/dist/index.css'

const App = () => {
  let tags = {
    "GitHub": "https://github.com/Hyde46/react-stacked-card-list",
    "SomeTag": "#",
  }
  let jdCard = <StackedCard
    input={"I Love You More Than Turk."}
    header={"Jambalaya"}
    author={"John Dorian"}
    authorPrefix={"Dr. M.D"}
    hasAdorableIcon={true}
    tags={tags}
  />
  let turkCard = <StackedCard
    input={"This is the reason why your headache didn't go away. That's actually pronounced 'an-al-ge-sic', not 'anal-gesic'. Sir, the pills go in your mouth."}
    header={"Jambalaya"}
    author={"Turk Turkleton"}
    authorPrefix={"Dr. M.D"}
    hasAdorableIcon={true}
    tags={tags}
  />
  return <StackedCardList stackedCards={[jdCard, turkCard]} />
}
```

## License

MIT © [Hyde46](https://github.com/Hyde46)
