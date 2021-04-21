if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}
const replaceAll = require("replaceall");
const fs = require('fs'),
  filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  let mergeGroup = replaceAll("\r\n\r\n", ",", data);
  let _data = mergeGroup.replace(/[\r\n]/g, "")
  const groups = _data.split(",")
  let count = 0;
  for (let i =0; i < groups.length; i++) {
    count += uniqueCharaters(groups[i]).size;
  }
  console.log(`Total Count: ${count}`);
});


function uniqueCharaters(group){
  return new Set(group);
}