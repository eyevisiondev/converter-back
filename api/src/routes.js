const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const converterfolder = require('./service/converterfolder')
const generateweb = require('./service/generateweb');
const converter = require('./service/converter')

const Post = require('./models/Post');

// List files
routes.get('/posts', async (req,res) =>{
  const posts = await Post.find();

  return res.json(posts);
})

// upload files
routes.post('/posts', multer(multerConfig).single('file'), async (req, res) => {
  const post = await Post.create({
    name: req.file.originalname,
    size: req.file.size,
    key: req.file.filename,
    path: req.file.path
  });

  await converterfolder(req.file.filename);
  await generateweb(req.file.filename);
  await converter(req.file.filename);

  return res.json(post)
});

// delete files
routes.delete('/posts/:id', async (req, res) =>{
  const post = await Post.findById(req.params.id);

  await post.remove();

  return res.send();
})


module.exports = routes;