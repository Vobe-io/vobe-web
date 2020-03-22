import express from 'express';
import config from './server.config.mjs';
import history from 'connect-history-api-fallback';


const app = express();

app.use(express.static(config.dir));  // DON'T CHANGE
app.use(history());                   // YES IT NEEDS
app.use(express.static(config.dir));  // TO BE IMPLEMENTED TWICE

app.get('/', (req, res) => res.render(config.index));
app.listen(config.port, () => console.log('Server running on %s', config.port));
