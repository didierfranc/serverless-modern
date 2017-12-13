# serverless-modern

### Installation

The first thing you have to do is setting your AWS credentials.

```js
yarn aws --key 1234 --secret 5678
```

### Develop

Edit your code in `/src` and watch changes at `http://localhost:3000`

```js
yarn dev
```

### Deploy

This will deploy your app to AWS Lambda

```js
yarn deploy
yarn deploy -f hello // only deploy your function (faster)
```

This is it.

<img src="https://raw.githubusercontent.com/didierfranc/donate/master/qr.png" width="100" height="100">
