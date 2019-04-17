var router = require("express").Router();
var db = require("../../models");

// This route renders the homepage
router.get("/", function (req, res) {
    db.Post.findAll().then(function(posts) {
        res.render("index");

      
    });
});
router.get("/api/post", function(req, res){
    db.Post.findAll().then(function(posts){
        res.json(posts);
    })
})
// This is a placeholder/test page
router.get("/test", function (req, res){
    db.Post.findAll().then(function(posts) {
    res.render("test");
});
});


// This route renders the signup page
router.get("/signup", function(req, res){
    res.render("signup")
})

router.get("/newUser", function(req, res) {
    res.render("newUser")
})
router.get("/confirm", function(req, res) {
    res.render("confirm")
})
// This route renders the 404
router.get("*", function (req, res) {
    res.render("404");
});

module.exports = router;

