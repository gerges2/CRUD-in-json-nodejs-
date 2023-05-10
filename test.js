const fs = require('fs');

const content = 'Some contwn,mnent!';

fs.writeFileSync('data.json', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});