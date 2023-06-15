const AWS = require('aws-sdk');
const fs = require('fs');

AWS.config.update({
  accessKeyId: '',
  secretAccessKey: '',
  region: ''
});

const s3 = new AWS.S3();
const bucketName = '';
const folderName = ''; // Specify the folder name

const filePath = '';
const fileContent = fs.readFileSync(filePath);

var timestamp = new Date();
var month = timestamp.getMonth() + 1;

var filename = "Opportunity";
filename +=
  "-" +
  timestamp.getFullYear() +
  "-" +
  ("0" + month).slice(-2) +
  "-" +
  ("0" + timestamp.getDate()).slice(-2) +
  "-" +
  ("0" + timestamp.getHours()).slice(-2) +
  "h-" +
  ("0" + timestamp.getMinutes()).slice(-2) +
  "m-" +
  ("0" + timestamp.getSeconds()).slice(-2) +
  "s.json";

const uploadParams = {
  Bucket: bucketName,
  Key: folderName + '/' + filename, // Combine the folder name and file path
  Body: fileContent,
  ACL: '' // Set the desired access control level
};

s3.upload(uploadParams, function(err, data) {
  if (err) {
    console.error('Error uploading file:', err);
  } else {
    console.log('File uploaded successfully. Location:', data.Location);
  }
});
console.log(s3)
