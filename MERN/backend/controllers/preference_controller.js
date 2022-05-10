const asyncHandler = require('express-async-handler');
const Preference = require('../mdb_models/preference_model');
const User = require('../mdb_models/user_model');

// @desc    Get preference
// @route   GET /api/preferences
// @access  private
const getPreferences = asyncHandler(async (req, res) => {
    // will only show preferences for login credentials
    const preferences = await Preference.find({user: req.user.id})
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
        {text: req.body.text, user: req.user.id})
    res.status(200).json(preference);
});

// @desc    update preference
// @route   PUT /api/preferences/:id
// @access  private
const updatePreferences = asyncHandler(async (req, res) => {
    const preference = await Preference.findById(req.params.id);

    if (!preference) {
        res.status(400)
        throw new Error('Preference not found')
    }
    
    const user = await User.findById(req.user.id);

    // Ensure that there is a user
    if (!user) {
        res.status(401)
        throw new Error('User id not found')
    }
    // Ensure PUT request is only for the logged in user
    if (preference.user.toString() !== user.id){
        res.status(401)
        throw new Error('Unauthorized, can only update personal preferences')
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

    const user = await User.findById(req.user.id);

    // Ensure that there is a user
    if (!user) {
        res.status(401)
        throw new Error('User id not found')
    }
    // Ensure DELETE request is only for the logged in user
    if (preference.user.toString() !== user.id){
        res.status(401)
        throw new Error('Unauthorized, can only update personal preferences')
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