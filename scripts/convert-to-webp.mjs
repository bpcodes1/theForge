import sharp from 'sharp'
import { readdirSync, statSync, unlinkSync } from 'fs'
import { join, extname, basename } from 'path'

const INPUT_DIR = './public/images'
const EXTENSIONS = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG']

function getFiles(dir) {
  const results = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      results.push(...getFiles(full))
    } else if (EXTENSIONS.includes(extname(entry))) {
      results.push(full)
    }
  }
  return results
}

const files = getFiles(INPUT_DIR)
console.log(`Found ${files.length} images to convert...\n`)

for (const file of files) {
  const out = file.replace(/\.(jpg|jpeg|png)$/i, '.webp')
  try {
    await sharp(file).webp({ quality: 85 }).toFile(out)
    unlinkSync(file)
    console.log(`✓ ${file} → ${out}`)
  } catch (err) {
    console.error(`✗ Failed: ${file}`, err.message)
  }
}

console.log('\nDone!')
