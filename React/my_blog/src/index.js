import express from 'express';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import route from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'views'));

route(app);

app.listen(3000);
