const mongoose = require ('mongoose');

const preferenceSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,    // requiring an assoiation to an ObjectId  
        required: true,
        ref: 'User'     // reference, i.e., a User
    },
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