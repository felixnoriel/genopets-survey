import fs = require('fs');
import { databaseConfig } from '../src/database/config';

fs.writeFileSync('ormconfig.json', JSON.stringify(databaseConfig, null, 2));
