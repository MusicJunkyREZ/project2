// // Get references to page elements
// var $postText = $("#post-text");
// var $postDescription = $("#post-description");
// var $submitBtn = $("#submit");
// var $postList = $("#post-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   savepost: function(post) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/posts",
//       data: JSON.stringify(post)
//     });
//   },
//   getposts: function() {
//     return $.ajax({
//       url: "api/posts",
//       type: "GET"
//     });
//   },
//   deletepost: function(id) {
//     return $.ajax({
//       url: "api/posts/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshposts gets new posts from the db and repopulates the list
// var refreshposts = function() {
//   API.getposts().then(function(data) {
//     var $posts = data.map(function(post) {
//       var $a = $("<a>")
//         .text(post.text)
//         .attr("href", "/post/" + post.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": post.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $postList.empty();
//     $postList.append($posts);
//   });
// };

// // handleFormSubmit is called whenever we submit a new post
// // Save the new post to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var post = {
//     text: $postText.val(),
//     description: $postDescription.val()
//   };

//   if (!(post.text && post.description)) {
//     alert("You must enter an post text and description!");
//     return;
//   }

//   API.savepost(post).then(function() {
//     refreshposts();
//   });

//   $postText.val("");
//   $postDescription.val("");
// };

// // handleDeleteBtnClick is called when an post's delete button is clicked
// // Remove the post from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deletepost(idToDelete).then(function() {
//     refreshposts();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $postList.on("click", ".delete", handleDeleteBtnClick);
