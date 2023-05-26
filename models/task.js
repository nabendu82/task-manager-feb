const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
    desc: {
        type: String,
        required: true,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    }
})

module.exports = Task