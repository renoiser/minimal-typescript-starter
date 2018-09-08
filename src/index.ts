
import packageJson from '../package.json';
const text: string = `You are using ${packageJson.name} version ${packageJson.version}.`
document.write(text);
