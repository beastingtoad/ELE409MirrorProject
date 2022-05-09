const mongoose = require ('mongoose');

const messageSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please enter a message to be sent to smart mirror']
        }
    }, 
        {
        timestamps: true, 
        }
);

// name of mongo db models:
module.exports = mongoose.model('Preference', preferenceSchema);