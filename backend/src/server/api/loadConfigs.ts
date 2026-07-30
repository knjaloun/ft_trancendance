import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

console.log(process.cwd());
const env = dotenv.config({ path: '../.env' });
dotenvExpand.expand(env);

await import('./index.js');
