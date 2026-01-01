import fs from 'fs';
import path from 'path';
import heicConvert from 'heic-convert';

const pensDir = path.resolve(process.cwd(), 'public', 'assets', 'products', 'Pens');

async function main() {
  if (!fs.existsSync(pensDir)) {
    console.error('Pens directory not found:', pensDir);
    process.exit(1);
  }
  const entries = fs.readdirSync(pensDir);
  const heicFiles = entries.filter(f => /\.heic$/i.test(f));
  if (heicFiles.length === 0) {
    console.log('No HEIC files found in Pens directory');
    return;
  }
  console.log('Converting HEIC files to JPG using heic-convert...');
  for (const file of heicFiles) {
    const src = path.join(pensDir, file);
    const base = file.replace(/\.heic$/i, '');
    const out = path.join(pensDir, `${base}.jpg`);
    try {
      const buf = fs.readFileSync(src);
      const outputBuffer = await heicConvert({
        buffer: buf,
        format: 'JPEG',
        quality: 0.82
      });
      fs.writeFileSync(out, outputBuffer);
      console.log(`Converted: ${file} -> ${path.basename(out)}`);
    } catch (err) {
      console.error('Failed to convert', file, err.message);
    }
  }
  console.log('Conversion complete.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
