import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let posts = []

function Post(user, title, content) {
  this.id = posts.length
  this.user = user
  this.title = title
  this.content = content
  this.date = new Date().toLocaleString()
}
var initialize = false
if (initialize == false) {
  let first = new Post("itsjeremyhsieh", "Hello World!", "Hello World! This is the first post!")
  posts.push(first)
  initialize = true
}


app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", {posts: posts})
});
app.get("/new", (req, res) => {
  res.render("add.ejs")
});

app.post("/create", (req, res) => {
  var user = req.body["username"]
  var title = req.body["title"]
  var content = req.body["content"]
  let post = new Post(user, title, content)
  posts.push(post)
  res.redirect("/")
});

app.get("/view/edit/:id", (req, res) => {
  var index = req.params.id;
  var post = posts[index];
  res.render("edit.ejs", {id:index, title: post.title, content: post.content, user: post.user, date: post.date})
})

app.get("/view/delete/:id", (req, res) => {
  var index = req.params.id;
  posts.splice(index, 1)
  res.redirect("/")
})

app.post("/update/:id", (req, res) => {
  var index = req.params.id;
  var title = req.body["title"]
  var content = req.body["content"]
  posts[index].title = title
  posts[index].content = content
  res.redirect("/")
})

app.get("/view/:id", (req, res) => {
  var index = req.params.id;
  var post = posts[index];
  res.render("post.ejs", {id: index, title: post.title, content: post.content, user: post.user, date: post.date});
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  