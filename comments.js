//Create web server
const express = require('express');
const router = express.Router();

//Import model
const Comment = require('../models/Comment');

//Import controllers
const {
    getComments,
    getComment,
    createComment,
    updateComment,
    deleteComment
} = require('../controllers/comments');

//Import middleware
const { protect } = require('../middleware/auth');

//Import advancedResults middleware
const advancedResults = require('../middleware/advancedResults');

router
    .route('/')
    .get(advancedResults(Comment), getComments)
    .post(protect, createComment);

router
    .route('/:id')
    .get(getComment)
    .put(protect, updateComment)
    .delete(protect, deleteComment);

module.exports = router;