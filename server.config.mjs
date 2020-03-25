import {dirname, join} from 'path';
import {fileURLToPath} from 'url';


const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  port: 8081,
  dir: join(__dirname, 'dist'),
  index: join(__dirname, 'dist', 'index.html')
}
