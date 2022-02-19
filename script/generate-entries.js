import { resolve, extname, basename } from 'path';
import glob from 'glob';

/**
 *  遍历生成多入口
 * @param {*} excludes 排除文件/目录
 * @returns entriesConfig
 */
const generateEntries = (excludes = []) => {
  const entryFiles = glob.sync(resolve(__dirname, '../html', '*.html'), {
    ignore: excludes,
  });

  return entryFiles.reduce((entries, filePath) => {
    const extension = extname(filePath); // 获取文件后缀名
    const fileName = basename(filePath, extension); // 获取没有后缀的文件名
    entries[fileName] = resolve(__dirname, `../html/${fileName}.html`);

    return entries;
  }, {});
};

export default generateEntries;
