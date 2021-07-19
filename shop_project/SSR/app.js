const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const colors = require('colors');

const Table = require(`./models/tableModel`);

require('dotenv').config();

const app = express();

// Connecting MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(res => {
  console.log(`Connected to MongoDB`.blue.underline);
  // --- STARTING SERVER ---
app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`.yellow.underline.bold)
  );
})
  .catch(err => console.log(err.red.underline));

// Middle wares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.path = req.path;

  next();
})

// -- adding ejs template engine to project
app.set('view engine', 'ejs');


// Routes
// -- Home page
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });

});

// About Me page
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

// Gallery
app.get('/gallery', (req, res) => {
  Table.find()
    .then(result => res.render('gallery', { title: 'Gallery', data: result }))
    .catch(err => console.log(err));
});

// Orders
app.get('/orders', (req, res) => {
  res.render('orders', { title: 'orders' });
});

// Contacts
app.get('/contacts', (req, res) => {
  res.render('contacts', { title: 'Contact Us'})
});

// // ---- Adding single post yo DB
// app.post(`./blog`, (req, res) => {
//   const post = new Post(req.body);

//   post
//     .save()
//     .then(result => res.redirect(`/admin`))
//     .catch(err => console.log(err));
// });

// -- Single post page

app.get(`/blog/:id`, (req, res) => {
  let id = +req.params.id;

  Post.findById(id)
    .then(result => res.render(`table`, { title: result.title, table: result }))
    .catch(err => console.log(err));
  
  // let post = posts.find(post => post.id === id);

  // res.render(`post`, { title: post.title, post });
});

// ---- removing single post from DB

app.delete(`/blog/:id`, (req, res) => {
  const id = +req.params.id;

  // Table.findByIdAndDelete(id)
  // .then(result => res.json({message: `Post deleted`}))
  // .catch(err => console.log(err))
  
  // let post = posts.find(post => post.id === id);

  // res.render(`post`, { title: post.title, post });
})


// ADMIN page
app.get('/admin', (req, res) => {
  Table.find()
  .then(result => res.render('admin', { title: 'Admin panel', posts: result }))
  .catch(err => console.log(err));
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404 - Page Not Found' });
});

// --- STARTING SERVER ---
// app.listen(process.env.PORT, () =>
//   console.log(`Server is running on port ${process.env.PORT}`.yellow.underline.bold)
// );


// <!-- <section class="name-block">
// <h3>Name:</h3>
// <%= data[0].name %>
// </section>
// <section class="age-block">
// <h3>Age:</h3>
// <%= data[0].age %>
// </section>
// <section class="email-block">
// <h3>email</h3>
// <%= data[0].email %>
// </section> -->