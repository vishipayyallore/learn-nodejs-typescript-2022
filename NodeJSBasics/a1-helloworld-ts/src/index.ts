
const userName = process.argv[2];

if (userName === undefined) {
    console.log('Please pass User Name. Usage: node index.js <User Name>');
} else {
    console.log(`${userName} Grace !!`);
}
