const Poem = require("../models/poem");

const poem_index = (req, res) => {
  Poem.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const poem_details = (req, res) => {
  const id = req.params.id;
  Poem.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err)
    });
};

const poem_create_get = (req, res) => {
  res.json({title: "Write a new poem"});
};

const poem_create_post = (req, res) => {
  const poem = new Poem(req.body);

  poem
    .save()
    .then((result) => {
      res.json(result);
      res.redirect("/poems");
    })
    .catch((err) => {
      console.log(err);
    });
};

const poem_delete = (req, res) => {
  const id = req.params.id;

  Poem.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/poems" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  poem_index,
  poem_details,
  poem_create_get,
  poem_create_post,
  poem_delete,
};
