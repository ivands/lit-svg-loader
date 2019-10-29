# Usage

```
npm i -D lit-svg-loader
```

```js
module: {
  rules: [
    {
      test: /\.svg$/,
      loader: 'lit-svg-loader'
    }
  ]
}
```

```js
import { LitElement, html, customElement } from 'lit-element'

import icon from './icon.svg'

@customElement('icon-el')
export class extends LitElement {
  render() {
    return html`<p>such style. very win. ${ icon }</p>`
  }
}
```
