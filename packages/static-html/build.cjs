// test comment

const fs = require('fs');
const path = require('path');

// 指定したディレクトリからファイルのリストを取得する関数
function getFilesFromDirectory(dir) {
    return fs.readdirSync(dir).reduce(function (files, file) {
        const name = path.join(dir, file);
        const isDirectory = fs.statSync(name).isDirectory();
        return isDirectory ? [...files, ...getFilesFromDirectory(name)] : [...files, name];
    }, []);
}

// src ディレクトリから HTML ファイルのリストを取得
getFilesFromDirectory(path.join(__dirname, 'src')).filter(file => file.endsWith('.html')).forEach(file => {
    // HTML ファイルを読み込み、React Element にパース
    const htmlContent = fs.readFileSync(file, 'utf8');

    // dist ディレクトリに出力
    const outputFilePath = path.join(__dirname, 'dist', path.basename(file, '.html') + '.js');
    fs.writeFileSync(outputFilePath, `export const reactElement = \`${htmlContent}\``);
});
