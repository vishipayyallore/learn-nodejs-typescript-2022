# Learn TypeScript

## Multiply Demo

```
npm init
npm i -D typescript nodemon ts-node concurrently
npx tsc --init

ts-node .\src\multiplydemo.ts

npx tsc .\src\multiplydemo.ts
node .\src\multiplydemo.js
```

## Tips

`"module": "commonjs" /* NodeJS uses commonjs. Specify what module code is generated. */`

```
npm install -g typescript ts-node

tsc --init
```

## Couple of ways to execute

```
ts-node .\src\variables.ts
tsc && node .\dist\variables.js
```
