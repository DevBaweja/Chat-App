const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'client/dist');
const dest = path.join(__dirname, 'server/dist');

console.log('Copying build files...');
console.log('Source:', src);
console.log('Destination:', dest);

// Check if source exists
if (!fs.existsSync(src)) {
    console.error('❌ Client dist directory not found at:', src);
    process.exit(1);
}

// Create destination directory if it doesn't exist
if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
    console.log('✅ Created destination directory:', dest);
}

// Copy function
const copyDir = (src, dest) => {
    if (fs.lstatSync(src).isDirectory()) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        fs.readdirSync(src).forEach(file => {
            copyDir(path.join(src, file), path.join(dest, file));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
};

try {
    copyDir(src, dest);
    console.log('✅ Build files copied successfully!');
    console.log('Files in destination:', fs.readdirSync(dest));
} catch (error) {
    console.error('❌ Error copying files:', error);
    process.exit(1);
}
