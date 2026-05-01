const express = require('express');
const session = require('express-session');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
  secret: 'election-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

const votes = { A: 0, B: 0, C: 0, D: 0 };
const candidates = ['A', 'B', 'C', 'D'];

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/eligibility', (req, res) => {
  res.render('eligibility', { result: null });
});

app.post('/eligibility', (req, res) => {
  const age = parseInt(req.body.age);
  const result = age >= 18 ? 'Eligible to vote' : 'Not eligible';
  res.render('eligibility', { result });
});

app.get('/vote', (req, res) => {
  res.render('vote', { candidates, votes, voted: req.session.voted, selected: req.session.selected });
});

app.post('/vote', (req, res) => {
  if (!req.session.voted) {
    const candidate = req.body.candidate;
    if (votes[candidate] !== undefined) {
      votes[candidate]++;
      req.session.voted = true;
      req.session.selected = candidate;
    }
  }
  res.redirect('/vote');
});

app.get('/info', (req, res) => {
  res.render('info');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});