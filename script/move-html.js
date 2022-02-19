// 移动html脚本
const fs = require('fs');

// 查看dist下的所有目录
const dirNames = fs.readdirSync('./dist/html');

// copy
for (let i = 0; i < dirNames.length; i++) {
  fs.copyFileSync(`./dist/html/${dirNames[i]}`, `./dist/${dirNames[i]}`);
}

fs.rmdirSync('./dist/html', { recursive: true });
