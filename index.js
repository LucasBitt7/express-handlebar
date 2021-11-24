const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
  partialsDir: ['views/partials/']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', function (req, res) {
  const user = {
    name: 'lucas',
    surname: 'bitencourt'
  }
  const auth = true 
  res.render('home', { user: user, auth: auth})
})

app.get('/dashboard', function (req, res) {
  const itens = ["item 1", "item 2", "item 3"]
  res.render('dashboard',{itens: itens})
})

app.get('/blog', function (req, res) {
  const posts = [{
    title: 'btc banned again',
    category:'crypto oh yeah',
    body:' ching lings have banned bitcoin, another time'
  },
  {
  title: 'eth banned again',
  category:'crypto oh yeah',
  body:' ching lings have banned ethereum, another time'
},
{
title: 'aave banned again',
category:'crypto oh yeah',
body:' ching lings another time'
}
]
  res.render('blog',{ posts})
})

app.get('/posts', function (req, res) {
  const posts = {
    title: 'btc banned again',
    category:'crypto oh yeah',
    body:' ching lings have banned bitcoin, another time'
  }
  res.render('posts',{posts})
})

app.listen(3060)