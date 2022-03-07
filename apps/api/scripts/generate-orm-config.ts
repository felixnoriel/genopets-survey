import fs = require('fs');
import { databaseConfig } from '../src/config/database';

fs.writeFileSync('ormconfig.json', JSON.stringify(databaseConfig, null, 2));
