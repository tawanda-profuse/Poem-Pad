const Poem = require("../models/poem");

const poem_index = async (req, res) => {
  let page = parseInt(req.query.page) || 1;
  let limit = parseInt(req.query.limit) || 5;
  let query = Poem.find().sort({ createdAt: -1 });

  // Pagination
  const totalPoems = await Poem.countDocuments(query);
  const poems = await query
    .select("title username snippet likes")
    .skip((page - 1) * limit)
    .limit(limit)
    .exec();

  try {
    res.status(200).send({
      poems: poems,
      currentPage: page,
      totalPages: Math.ceil(totalPoems / limit),
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: `Error: ${error}`,
    });
  }
};

const poem_details = (req, res) => {
  const id = req.params.id;
  Poem.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};

const poem_create_get = (req, res) => {
  res.json({ title: "Write a new poem" });
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

const poem_update = (req, res) => {
  const id = req.params.id;
  const { likes } = req.body;
  // Find and update the item in the database by id
  Poem.findByIdAndUpdate(id, { likes }, { new: true }, (err, item) => {
    if (err) {
      // Send an error response if something goes wrong
      res.status(500).json({ message: err.message });
    } else {
      // Send a success response with the updated item data
      res.status(200).json(item);
    }
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
  poem_update,
};
