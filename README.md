<p align="center">
  <a href="https://evand.com">
    <img width="200" src="https://blog.evand.com/wp-content/themes/evand/assets/evand.png">
  </a>
</p>

<a href="https://evandhq.github.io/react-jupiter">
    <h1 align="center">
      Evand Design System - react-jupiter
    </h1>
  </a>

## An UI design language with React implementation

### 🔱 __Features__

- An enterprise UI design system for web applications.
- A set of high-quality React components.
- Written in ES6 and styled-components.
- Use [react-hook-form](https://github.com/react-hook-form/react-hook-form) for form handling

### 📦 __Install__

```bash
  npm install --save react-jupiter
```

or

```bash
  yarn add react-jupiter
```

### 🙌🏼 __Usage__

```jsx
  import { Button } from 'react-jupiter';

  ReactDOM.render(<Button>Submit</Button>, mountNode);
```

### 🛠 __Development__

Use Gitpod, a free online dev environment for GitHub.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/evandhq/react-design-system)

Or clone locally:

```bash
  git clone https://github.com/evandhq/react-design-system.git
  cd react-design-system
  npm install
  npm start
```

### ⬛️ __Commands__

_start development and view doc. Open your browser and visit <http://127.0.0.1:3000>_

```bash
  npm start
```

_show stories of storybook. Open your browser and visit <http://127.0.0.1:9009:>_

```bash
  npm run storybook
```

_running all tests:_

```bash
  npm run test
```

_show linter errors (linter prevent changes to commit):_

```bash
  npm run lint
```

_fix linter errors automatically:_

```bash
  npm run lint:fix
```

_create changelog:_

```bash
  npm run version
```

_generate static site of storybook:_

```bash
  npm run build:storybook
```

_build production of documents and samples:_

```bash
  npm run build:doc
```

_build version of design system:_

```bash
  npm run build:lib
```

### 🤝 __Contributing__ [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Read our [contributing guide](https://evand.com) and let's build a better react design system.

### 🎓 __Licence__

_react design system_ is available under MIT licence.
