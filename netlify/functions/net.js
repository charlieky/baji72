// netlify/functions/net.js
const fs = require('fs').promises;
const path = require('path');
console.log(__dirname);
exports.handler = async (event) => {
  try {
    const filePath = path.join(__dirname, '..', '..', 'axw1dq0u7pe9d59akl8nt78phbkjdn.html');
    const data = await fs.readFile(filePath, 'utf8');

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
      },
      body: data
    };
  } catch (error) {
    return {
      statusCode: 404,
      body: `File not found: ${error.message}`
    };
  }
};
