const fs = require('fs');
const data = JSON.parse(fs.readFileSync('src/data/products.json', 'utf8'));
const filtered = data.filter(item => item.category !== 'Kağıt Grubu');
fs.writeFileSync('src/data/products.json', JSON.stringify(filtered, null, 4));
