import { PDFDocument } from 'pdf-lib';
import fs from 'fs';

const images = [
  'C:\\Users\\nasya\\.gemini\\antigravity\\brain\\c5a5d87d-669e-4743-bc0e-0259311ff6d3\\splash_screen_1779089592017.png',
  'C:\\Users\\nasya\\.gemini\\antigravity\\brain\\c5a5d87d-669e-4743-bc0e-0259311ff6d3\\dashboard_1779089627985.png',
  'C:\\Users\\nasya\\.gemini\\antigravity\\brain\\c5a5d87d-669e-4743-bc0e-0259311ff6d3\\schedule_view_1779089683083.png',
  'C:\\Users\\nasya\\.gemini\\antigravity\\brain\\c5a5d87d-669e-4743-bc0e-0259311ff6d3\\gpa_view_1779089706498.png',
  'C:\\Users\\nasya\\.gemini\\antigravity\\brain\\c5a5d87d-669e-4743-bc0e-0259311ff6d3\\tasks_view_1779089735820.png',
  'C:\\Users\\nasya\\.gemini\\antigravity\\brain\\c5a5d87d-669e-4743-bc0e-0259311ff6d3\\more_view_1779089796504.png'
];

async function createPdf() {
  const pdfDoc = await PDFDocument.create();

  for (const imagePath of images) {
    const imageBytes = fs.readFileSync(imagePath);
    let image;
    if (imagePath.endsWith('.png')) {
      image = await pdfDoc.embedPng(imageBytes);
    } else {
      image = await pdfDoc.embedJpg(imageBytes);
    }
    
    const page = pdfDoc.addPage([image.width, image.height]);
    page.drawImage(image, {
      x: 0,
      y: 0,
      width: image.width,
      height: image.height,
    });
  }

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('C:\\Users\\nasya\\.gemini\\antigravity\\brain\\c5a5d87d-669e-4743-bc0e-0259311ff6d3\\PharmAssist_Screenshots.pdf', pdfBytes);
  console.log('PDF created successfully!');
}

createPdf().catch(console.error);
