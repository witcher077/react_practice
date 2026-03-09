//@desc Get all contacts
//@route GET /api/contacts
const getContact = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create new contact
//@route POST /api/contacts
const createContact = (req, res) => {
  res.status(201).json({ message: "Contact created" });
};

//@desc Update contact
//@route PUT /api/contacts/:id
const updateContact = (req, res) => {
  res.status(200).json({
    message: `Update contact with id ${req.params.id}`,
  });
};

//@desc Delete contact
//@route DELETE /api/contacts/:id
const deleteContact = (req, res) => {
  res.status(200).json({
    message: `Delete contact with id ${req.params.id}`,
  });
};

export { getContact, createContact, updateContact, deleteContact };