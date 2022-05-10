const asyncHandler = require('express-async-handler');
const Message = require('../mdb_models/message_model');

// @desc    Get messsages
// @route   GET /messages/:id
// @access  public TEMP
const getMessages = asyncHandler(async (req, res) => {
    const messages = await Message.find(req.body.text)
    //const message = ({message: 'Hello World'})
    console.log(messages);
    res.status(200).json(messages);
});

// @desc    Set new messsage
// @route   POST /message
// @access  public TEMP
const postMessages = asyncHandler(async (req, res) => {
    console.log(req.body);
    // error handling:
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please enter into the text field')
    }
    const messages = await Message.create(
        {text: req.body.text},)
    res.status(200).json(messages);
});

// @desc    update messsages
// @route   PUT /message/:id
// @access  public TEMP
const updateMessages = asyncHandler(async (req, res) => {
    const messages = await Message.findById(req.params.id);

    if (!messages) {
        res.status(400)
        throw new Error('Message not found')
    }

    const updated_message = await Message.findByIdAndUpdate(
        req.params.id, req.body, {new: true}
    );

    console.log(req.body);

    res.status(200).json(updated_message);
});

// @desc    delete messsages
// @route   DELETE /messsage/:id
// @access  public TEMP
const deleteMessages = asyncHandler(async (req, res) => {
    const messages = await Message.findById(req.params.id);

    if (!messages){
        res.status(400)
        throw new Error('Please specify an id in the url')
    }

    await messages.remove()

    console.log(`Deleted id: ${req.params.id}`);

    res.status(200).json({ id: req.params.id});
});
module.exports = {getMessages, postMessages, updateMessages, deleteMessages};