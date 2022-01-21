import Glob from 'glob';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

interface entryObj {
  [basename: string]: string;
}

export function getEntry(globPath: string): entryObj {
  const entries: entryObj = { main: './src/main.ts' };
  Glob.sync(globPath).forEach((entry:string) => {
    const basename: string = path.basename(entry, path.extname(entry));
    const pathname: string = path.dirname(entry);
    entries[basename] = `${pathname}/${basename}`;
  });
  return entries;
}

export function getHtmlWebpackPlugin(globPath: string): HtmlWebpackPlugin[] {
  const htmlPlugins: HtmlWebpackPlugin[] = [];
  Glob.sync(globPath).forEach((entry:string) => {
    const basename: string = path.basename(entry, path.extname(entry));
    const pathname: string = path.dirname(entry);
    htmlPlugins.push(new HtmlWebpackPlugin({
      title: basename,
      filename: `${basename}.html`,
      template: `${pathname}/${basename}.html`,
      chunks: [basename, 'main'],
      minify: true,
    }));
  });
  return htmlPlugins;
}
