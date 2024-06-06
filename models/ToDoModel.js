const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true,
        default: ''
    }
});

const ToDoItem = mongoose.model('ToDo Item', todoSchema)

module.exports = ToDoItem;