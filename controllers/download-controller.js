// FileServer/controllers/download-controller.js

const path = require('path');
var fileDir = path.join(__dirname, './../uploads');

var requestedFileName;



// Create controller for GET request to '/download'
exports.downloadAsset = async (req, res) => {
	
	let fileName = req.query.filename;
	console.log('requested file name :' + fileName);

	// Import json with list of asset
	const asset = require(fileDir + '/' + fileName);
	res.json(asset);	
}