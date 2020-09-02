// FileServer/controllers/upload-controller.js

const IncomingForm = require('formidable').IncomingForm;

const path = require('path');
const fs = require('fs');

var fileDir = path.join(__dirname, './../uploads');

var dbDocPath = '';

module.exports = function uploadAsset(req, res) {
	console.log('upload-controller.js');
	var form = new IncomingForm();

	form.on('file', (field, file) => {
 	
  	console.log(path.join(form.uploadDir, file.name));
	console.log(fileDir);
	console.log(file);

	// destination.txt will be created or overwritten by default.
	fs.copyFile(file.path, path.join(fileDir, file.name), (err) => {
  	if (err) throw err;
  		console.log(file.path + ' was copied to ' + path.join(fileDir, file.name));
	});

  })
  form.on('end', () => {
    res.json();
  })
  form.parse(req);
}