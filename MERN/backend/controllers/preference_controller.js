const asyncHandler = require('express-async-handler');
const Preference = require('../mdb_models/preference_model');


// @desc    Get preference
// @route   GET /api/preferences
// @access  private
const getPreferences = asyncHandler(async (req, res) => {
    const preferences = await Preference.find()
    console.log(preferences);
    res.status(200).json(preferences);
});

// @desc    Set new preference
// @route   POST /api/preferences
// @access  private
const setPreferences = asyncHandler(async (req, res) => {
    console.log(req.body);
    // error handling:
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please enter into the text field')
    }
    const preference = await Preference.create(
        {text: req.body.text,})
    res.status(200).json(preference);
});

// @desc    update preference
// @route   PUT /api/preferences/:id
// @access  private
const updatePreferences = asyncHandler(async (req, res) => {
    const preference = await Preference.findById(req.params.id);

    if (!preference) {
        res.status(400)
        throw new Error('Please specify an id in the url')
    }
    
    const updated_preference = await Preference.findByIdAndUpdate(
        req.params.id, req.body, {new: true}
    );

    console.log(req.body);

    res.status(200).json(updated_preference);
});

// @desc    delete preferences
// @route   DELETE /api/preferences/:id
// @access  private
const deletePreferences = asyncHandler(async (req, res) => {
    const preference = await Preference.findById(req.params.id);

    if (!preference){
        res.status(400)
        throw new Error('Please specify an id in the url')
    }

    await preference.remove()

    console.log(`Deleted id: ${req.params.id}`);

    res.status(200).json({ id: req.params.id});
});

module.exports = {
    getPreferences,
    setPreferences,
    updatePreferences,
    deletePreferences,
}