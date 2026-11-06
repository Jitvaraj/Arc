import sharp from 'sharp';
import fs from 'fs';

async function generateIcons() {
  const svgBuffer = fs.readFileSync('icon.svg');

  // 192x192 PNG
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile('pwa-192x192.png');

  // 512x512 PNG
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile('pwa-512x512.png');

  // Apple Touch Icon (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile('apple-touch-icon.png');

  // Maskable Icon with 10% padding
  await sharp(svgBuffer)
    .resize(410, 410)
    .extend({
      top: 51,
      bottom: 51,
      left: 51,
      right: 51,
      background: '#050505'
    })
    .png()
    .toFile('pwa-maskable-512x512.png');

  console.log('PNG Icons generated successfully!');
}

generateIcons().catch(err => console.error(err));
