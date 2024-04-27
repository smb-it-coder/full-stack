
const fs = require('fs/promises');
const filePath = 'myData.json';
const data = {
    "fruit": "Apple",
    "size": "Large",
    "color": "Red"
};

async function writeFile() {
  try {
    await fs.writeFile(filePath, JSON.stringify(data));
    console.log('File written successfully!');
  } catch (err) {
    console.error(err);
  }
}

writeFile();


async function readFile() {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data); // Parse the JSON string to an array/object
      console.log('File reading content : ',jsonData);
    return jsonData; 
  } catch (err) {
    console.error(err);
  }
}

readFile();


