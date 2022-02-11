# ReactJS Auth0 Bootstrap

Example project on how to create a react single page application that authenticates with Auth0 and
has private routes.

You can see the full tutorial on how to
[Build A ReactJS TypeScript OAuth App Template With Private Routes](https:/codingwithmanny.medium.com).

## Requirements

- Node `v12.18.4` or NVM
- TypeScript `v4.1.2`
- Yarn `v1.22.10`

## Quick Start

### 1 - Install Dependencies

```bash
nvm install;
yarn;
cp public/env.example.js env.js;
```

### 2 - Set Auth0 Keys

Set values from Auth0 for `public/env.js`

```javascript
window.REACT_APP_AUTH0_DOMAIN = 'XXXXXXXX.XX.auth0.com';
window.REACT_APP_AUTH0_CLIENT_ID = 'XXXXXXXX';
```

### 3 - Start

```bash
yarn start;
```
