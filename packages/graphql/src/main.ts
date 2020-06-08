import * as fs from 'fs';

fs.readdir(__dirname, (error, files) => {
  if (error) {
    console.error(error.message);
    return;
  }
  console.log(files);
});
