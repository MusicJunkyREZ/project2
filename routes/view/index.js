var router = require("express").Router();
var db = require("../../models");

// This route renders the homepage
router.get("/", function (req, res) {
    db.Post.findAll({}).then(function(posts) {
        res.render("index");
    });
});

// This is a placeholder/test page
router.get("/test", function (req, res){
    res.render("test");
})

// This route renders the individual post page
// router.get("/post/:id", function(req, res) {
//     db.Post.findOne({ where: { id: req.params.id } }).then(function(newPost) {
//         res.render("post", {
//             post: newPost
//         });
//     });
// });

// This route renders the 404
router.get("*", function (req, res) {
    res.render("404");
});

module.exports = router;

