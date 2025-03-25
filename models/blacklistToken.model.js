const mongoose = require('mongoose');

const blackListTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '1d' // Token will be removed after 1 day
    }
});

module.exports = mongoose.models.BlacklistToken || mongoose.model('BlacklistToken', blackListTokenSchema);