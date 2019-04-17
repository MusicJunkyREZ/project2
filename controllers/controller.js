// Controller for our posts
// ============================
var db = require("../models");

module.exports = {
    // Find all posts
    findAll: function (req, res) {
        db.Post.findAll().then(function (posts) {
            res.json(posts);
        });
    },
    // Create a new post
    create: function (req, res) {
        db.Post.create(req.body).then(function (newPost) {
            res.json(newPost);
        });
    },
    // Delete the specified post
    delete: function (req, res) {
        db.Post.destroy({ where: { id: req.params.id } }).then(function (deletedPost) {
            res.json(deletedPost);
        });
    },
    update: function (req, res) {
        console.log(req.body);
        db.Post.update({quantity: req.body.quantity},
            {
                where: {id: req.body.postId}
                
            }).then(function(updated) {
            res.json(updated);
        })
    },
    findAllBoxes: function (req, res){

        db.Box.findAll({
            include: [db.Post]
        }).then(function (posts) {
            res.json(posts);
        })
    },
    findBoxesByUserId: function(req, res){
        db.Box.findAll({
            where:{ 
                userId: req.params.userId
            },
            include: [db.Post]
        }).then (function(boxes){
            res.json(boxes);
        })
    }
};
