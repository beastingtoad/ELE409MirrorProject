const mongoose = require ('mongoose');

const preferenceSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please enter a preference']
        }
    }, 
        {
        timestamps: true, 
        }
);

// name of mongo db models:
module.exports = mongoose.model('Preference', preferenceSchema);