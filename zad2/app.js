const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

function toUpperCase(text) {
    return text.toUpperCase();
}

let students = [];

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
                <form action="/add-student" method="post">
                    <label for="firstName">Imię:</label><br>
                    <input type="text" id="firstName" name="firstName"><br>
                    <label for="lastName">Nazwisko:</label><br>
                    <input type="text" id="lastName" name="lastName"><br>
                    <label for="major">Kierunek:</label><br>
                    <input type="text" id="major" name="major"><br>
                    <button type="submit">Submit</button>
                </form>
            </body>
        </html>
    `);
});

app.post('/add-student', (req, res) => {
    const { firstName, lastName, major } = req.body;
    students.push({ firstName, lastName, major });
    res.send(`
        <html>
            <head>
                <title>${toUpperCase('Student Added')}</title>
            </head>
            <body>
                <h1>Hello, ${firstName} ${lastName} on ${major} studies!</h1>
            </body>
        </html>
    `);
});

app.get('/students', (req, res) => {
    let studentList = '<ul>';
    students.forEach(student => {
        studentList += `<li><p>${student.firstName} ${student.lastName} - ${student.major}</p></li>`;
    });
    studentList += '</ul>';
    res.send(studentList);
});

// Uruchomienie serwera na porcie 3000
app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
