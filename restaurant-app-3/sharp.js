const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images-lg');
const destinationLg = path.resolve(__dirname, 'src/public/images-md');
const destinationSm = path.resolve(__dirname, 'src/public/images-sm');

if (!fs.existsSync(destinationLg)) {
	fs.mkdirSync(destinationLg);
}
if (!fs.existsSync(destinationSm)) {
	fs.mkdirSync(destinationSm);
}

fs.readdirSync(target).forEach((image) => {
	// mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
	sharp(`${target}/${image}`)
		.resize(768)
		.toFile(
			path.resolve(
				__dirname,
				`${destinationLg}/${image.split('.').slice(0, -1).join('.')}.jpg`
			)
		);

	// mengubah ukuran gambar dengan lebar 480px, dengan prefix -medium.jpg
	sharp(`${target}/${image}`)
		.resize(480)
		.toFile(
			path.resolve(
				__dirname,
				`${destinationSm}/${image.split('.').slice(0, -1).join('.')}.jpg`
			)
		);
});
