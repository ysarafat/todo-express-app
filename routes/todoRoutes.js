const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const todoSchema = require('../schemas/todoSchema');
const Todo = new mongoose.model("Todo", todoSchema);
// save todo in db
router.post('/', async (req, res) => {
    try {
      const newTodo = new Todo(req.body);
      await newTodo.save();
      res.status(200).json({
        status: true,
        message: 'Todo saved successfully'
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        message: 'Error from server'
      });
    }
  });

module.exports = router;
