import fs from 'fs';

fs.writeFileSync('./syn.text', 'My name is Tanzeel01.');

console.log(1);

const result = fs.readFileSync('./syn.text', 'utf-8');

console.log(result);

console.log(2);

fs.appendFileSync('./syn.text', '\nWatching Ducky Bhai');

fs.readFile('./syn.text', 'utf8', (err, result) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(result);
});

console.log(3);
console.log(4);
console.log(5);