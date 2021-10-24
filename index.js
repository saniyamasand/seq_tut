const express = require('express')
const bodyParser = require('body-parser')
const { Author, Book , User , Customer , Appointment , Transaction , Tailor} = require('./sequelize')
const app = express()
var cors = require('cors')
app.use(bodyParser.json());
app.use(cors());
// Create a Author

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


app.post('/demoApi/author', (req, res) => {
    console.log(req.body)
    Author.create(req.body)
        .then(author => res.json(author))
})
// create a book
app.post('/demoApi/book', (req, res) => {
    console.log("book==>", req.body)
    Book.create(req.body)
        .then(author => res.json(author))
})

// create a user

app.post('/demoApi/user', (req, res) => {
    console.log(req.body)
    User.create(req.body)
        .then(user => res.json(user))
})

// create a customer

app.post('/demoApi/customer', (req, res) => {
    console.log(req.body)
    Customer.create(req.body)
        .then(customer => res.json(customer))
})

// create a appointment

app.post('/demoApi/appt', (req, res) => {
    console.log(req.body)
    Appointment.create(req.body)
        .then(appointment => res.json(appointment))
})

// create a transaction

app.post('/demoApi/transaction', (req, res) => {
    console.log(req.body)
    Transaction.create(req.body)
        .then(transaction => res.json(transaction))
})

// create a tailor

app.post('/demoApi/tailor', (req, res) => {
    console.log(req.body)
    Tailor.create(req.body)
        .then(tailor => res.json(tailor))
})

// get all books
app.get('/demoApi/books', (req, res) => {
    Book.findAll().then(books =>
        res.json(books))


})
// get all authors
app.get('/demoApi/authors', (req, res) => {
    Author.findAll().then(authors =>
        res.json(authors))
})

// get all users
app.get('/demoApi/users', (req, res) => {
    User.findAll().then(users =>
        res.json(users))


})

// get all customers
app.get('/demoApi/customers', (req, res) => {
    Customer.findAll().then(customers =>
        res.json(customers
        ))
    
})

// get all appointments
app.get('/demoApi/appts', (req, res) => {
    Appointment.findAll().then(appointments =>
        res.json(appointments
        ))
})

// get all transactions
app.get('/demoApi/transactions', (req, res) => {
    Transaction.findAll().then(transactions =>
        res.json(transactions
        ))
})

// get all tailors
app.get('/demoApi/tailors', (req, res) => {
    Tailor.findAll().then(tailors =>
        res.json(tailors
        ))
})

// update appointment by id

app.put('/demoApi/appt/:id', function(req, res) {
    Appointment.findByPk(req.params.id).then(function(note) {
        note.update({
            orderCustomer: req.body.orderCustomer,
            orderDescription: req.body.orderDescription,
            apptDate: req.body.apptDate,
            apptTime: req.body.apptTime
        }).then((note) => {
            res.json(note);
        });
    });
});

// delete appointment by id

app.delete('/demoApi/appt/:id', function(req, res) {
    Appointment.findByPk(req.params.id).then(function(note) {
        note.destroy();
    }).then((note) => {
        res.sendStatus(200);
    });
});









// get book by  bookId
app.get('/demoApi/book/:id', (req, res) => {
    Book.findOne(
        {
            where: { id: req.params.id, },
        }
    ).then(book => res.json(book))
})
// get author by id
app.get('/demoApi/author/:id', (req, res) => {
    Author.findOne(
        {
            where: { id: req.params.id, },
        }
    ).then(author => res.json(author))
})
// get author with his book list
app.get('/demoApi/authorHasManyBooks/:id', (req, res) => {
    let query;
query = Author.findAll({
    where: { id: req.params.id, },
    include: [{ model: Book }
    ]
})
return query.then(author => res.json(author))
})
// update authors
app.put('/demoApi/author/:id', function(req, res) {
    Author.findByPk(req.params.id).then(function(note) {
        note.update({
            authorName: req.body.authorName
        }).then((note) => {
            res.json(note);
        });
    });
});

app.delete('/demoApi/author/:id', function(req, res) {
    Author.findByPk(req.params.id).then(function(note) {
        note.destroy();
    }).then((note) => {
        res.sendStatus(200);
    });
});








const port = 3001
app.listen(port, () => {console.log(`Running on http://localhost:${port}`)
})