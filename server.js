const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let nextId = 7;

let users = [
  {
    id: 1,
    name: "Ming Liu",
    username: "bookr",
    email: "skysthelimit68@gmail.com",
    password: "test123",
    canEdit: false,
  },
  {
    id: 2,
    name: "Hannah Banana",
    username: "hannah",
    email: "luvfido@gmail.com",
    password: "test123",
    canEdit: false,
  }
]

let nextUserId = 3;

let books = [
  {
    id: 1,
    title: 'The Foot Book',
    author: 'Dr. Seuss',
    publisher: 'Board Books',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: 'https://images-na.ssl-images-amazon.com/images/I/819v3bE727L.jpg',
    category: 'Children',
    stars:[3, 5],
    reviews:[
      {
        reviewer: "Ming Liu",
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        stars : 3
      },
      {
        reviewer: "Hannah Banana",
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        stars : 5
      }
    ]
  },
  {
    id: 2,
    title: 'Educated: a Memoir',
    author: 'Tara Westover',
    publisher: 'Random House',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg',
    category: 'Biography',
    stars:[4,2],
    reviews:[
      {
        reviewer: "Ming Liu",
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        stars : 4
      },
      {
        reviewer: "Hannah Banana",
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        stars : 2
      }
    ]
  },
  {
    id: 3,
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    publisher: 'Scholastic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg',
    category: 'Fiction',
    stars:[3,4],
    reviews:[
      {
        reviewer: "Ming Liu",
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        stars : 3
      },
      {
        reviewer: "Hannah Banana",
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        stars : 4
      }
    ]
  },
  {
    id: 4,
    title: 'Charlotte\'s Web',
    author: 'E.B. White',
    publisher: 'HarperCollins',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61%2B3z1o4oUL._SX334_BO1,204,203,200_.jpg',
    category: 'Children',
    stars:[4,1],
    reviews:[
      {
        reviewer: "Ming Liu",
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        stars : 4
      },
      {
        reviewer: "Hannah Banana",
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        stars : 1
      }
    ]
  },
  {
    id: 5,
    title: 'The Diary of a Young Girl',
    author: 'Ann Frank',
    publisher: 'Everyman\'s Library',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: 'https://images-na.ssl-images-amazon.com/images/I/51EPqZ9kFnL.jpg',
    category: 'History',
    stars:[5, 5],
    reviews:[
      {
        reviewer: "Ming Liu",
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        stars : 5
      },
      {
        reviewer: "Hannah Banana",
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        stars : 5
      }
    ]
  },
  {
    id: 6,
    title: 'The Guest Book: A Novel',
    author: 'Sarah Blake',
    publisher: 'Flatiron Books',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: 'https://images-na.ssl-images-amazon.com/images/I/417tKA0sQoL.jpg',
    category: 'Fiction',
    stars:[4, 5],
    reviews:[
      {
        reviewer: "Ming Liu",
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        stars : 4
      },
      {
        reviewer: "Hannah Banana",
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        stars : 5
      }
    ]
  }
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User be logged in to do that.' });
  }
}

app.post('/api/login', (req, res) => {
  const {username, password} = req.body;
  const user = users.find(user => user.username === username);

  if(user && user.password === password) {
    req.loggedIn = true;
    res.status(200).json({
      payload: [token, user],
    });
  } else {
    res 
    .status(403)
    .json({ error: 'Username or Password incorrect. Please try again.'});
  }

  /*const { username, password } = req.body;
  if (username === 'bookr' && password === 'test123') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }*/
});

app.post('/api/signup', (req, res) => {
  const {username, password, name, email} = req.body;
  const user = users.find(user => user.username === username);
  const useremail = users.find(user => user.email === email);

  if(!user && !useremail) {
    const newUser = { id : getNextUserId(), ...req.body}
    users = [...users, newUser];
    res.send(users);
  } else {
    res
    .status(409)
    .json({ error: "Username and / or email already in use.  Please try again."})
  }
  /*
  const book = { id: getNextId(), ...req.body };

  books = [...books, book];

  res.send(books);*/
});


app.get('/api/books', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(books);
  }, 1000);
});

app.get('/api/books/:id', authenticator, (req, res) => {
  const book = books.find(f => f.id == req.params.id);

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).send({ msg: 'Book not found' });
  }
});

app.post('/api/books', authenticator, (req, res) => {
  const book = { id: getNextId(), ...req.body };

  books = [...books, book];

  res.send(books);
});

app.put('/api/books/:id', authenticator, (req, res) => {
  const { id } = req.params;

  const bookIndex = books.findIndex(f => f.id == id);

  if (bookIndex > -1) {
    const book = { ...books[bookIndex], ...req.body };

    books = [
      ...books.slice(0, bookIndex),
      book,
      ...books.slice(bookIndex + 1)
    ];
    res.send(books);
  } else {
    res.status(404).send({ msg: 'Book not found' });
  }
});

app.delete('/api/books/:id', authenticator, (req, res) => {
  const { id } = req.params;

  books = books.filter(f => f.id !== Number(id));

  res.send(books);
});

function getNextId() {
  return nextId + 1;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

function getNextUserId() {
  return nextUserId + 1;
}