const dotenv = require('dotenv');
dotenv.config();

const app = require('./src/app');

const PORT = 3000;
app.listen(PORT, () => {
    console.log('app is listening in  port no : ' + PORT);
});
