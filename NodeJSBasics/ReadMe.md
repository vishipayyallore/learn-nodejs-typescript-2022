```
npm i -y

tsc --init

npm i ts-node typescript
npm i concurrently nodemon -D

npm i --save-dev @types/node
```

**Scripts** block inside package.json
```
"scripts": {
    "build": "tsc",
    "execute": "node ./lib/index.js",
    "start": "nodemon ./lib/index.js",
    "dev": "concurrently \"npm run build\" \"npm run start\""
  }
```
