const express = require('express');
const app = express();

function toUpperCase(text) {
    return text.toUpperCase();
}

app.get('/home', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>${toUpperCase('Home')}</title>
            </head>
            <body>
                <h1>${toUpperCase('Home')}</h1>
            </body>
        </html>
    `);
});

app.get('/student', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>${toUpperCase('Student')}</title>
            </head>
            <body>
                <h1>${toUpperCase('Student')}</h1>
            </body>
        </html>
    `);
});

app.get('/add-student', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>${toUpperCase('Add Student')}</title>
            </head>
            <body>
                <h1>${toUpperCase('Add Student')}</h1>
            </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
