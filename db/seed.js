require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Show = require('../models/Show');

const shows = [
  {
    title: "The Simpsons",
    creator: "Matt Groening",
    launched: 1989,
    genre: "comedy",
    image: "https://ychef.files.bbci.co.uk/976x549/p02fc1jw.jpg",
    description: "The series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie. The show is set in the fictional town of Springfield and parodies American culture and society, television, and the human condition."
  },
  {
    title: "Naruto",
    creator: "Masashi Kishimoto",
    launched: 1994,
    genre: "adventures",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Naruto_logo.svg",
    description: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki"
  },
  {
    title: "Dragon Ball",
    creator: "Masashi Kishimoto",
    launched: 1988,
    genre: "adventures",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeqfG2xGT4b62VQBvsgv_9WRgvsNa-g0biqpmvMY_ST243zWTC9I-9nYj4F3feRn01W1c&usqp=CAU",
    description: "Dragon Ball is a Japanese media franchise created by Akira Toriyama in 1984. ... Funimation Entertainment's English dub, are titled Dragon Ball Z Kai"
  }
]

mongoose
  .connect(process.env.MONGO_URL)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .then(() => {
    return Show.create(shows)
  })
  .then((created) => {
    console.log(`${created}.length shows`)
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })
  .finally(() => {
    mongoose.connection.close()
  })