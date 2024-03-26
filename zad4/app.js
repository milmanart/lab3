const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    const now = new Date();
    const dateFormatted = `${now.getFullYear()}-${('0' + (now.getMonth() + 1)).slice(-2)}-${('0' + now.getDate()).slice(-2)}T${('0' + now.getHours()).slice(-2)}:${('0' + now.getMinutes()).slice(-2)}:${('0' + now.getSeconds()).slice(-2)}.${('00' + now.getMilliseconds()).slice(-2)}`;
    console.log(`Request ${req.method} on path ${req.url} ${dateFormatted}`);
    next();
});

function toUpperCase(text) {
    return text.toUpperCase();
}

let students = [];

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/student', (req, res) => {
    res.sendFile(__dirname + '/views/student.html');
});

app.get('/add-student', (req, res) => {
    res.sendFile(__dirname + '/views/add-student.html');
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

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
