const { Contact } = require("../../model/Contact");

const handleDelete = async (req, res) => {
  const findContact = await Contact.findOne({ _id: req.body.id });
  console.log(findContact);
  res.status(201).json({
    message: req.body,
  });
};

module.exports = { handleDelete };
