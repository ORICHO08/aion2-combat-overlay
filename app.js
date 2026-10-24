const fs = require('fs');
class ConfigLoader {
  constructor(path) { this.path = path; }
  load() { try { return JSON.parse(fs.readFileSync(this.path, 'utf8')); } catch (e) { return {}; } }
}
console.log('Loaded', Object.keys(new ConfigLoader('./config.json').load()).length);
