
$(document).ready(function() {
// Get references to page elements
var $postText = $("#post-text");
var $postDescription = $("#post-description");
var $submitBtn = $("#submit");
var $postList = $("#post-list");
$(document).on("click", ".delete", deleteProduct);
$(document).on("click", ".increase", increaseProduct);
$(document).on("click", ".decrease", decreaseProduct);
// The API object contains methods for each kind of request we'll make
var API = {
  savepost: function(post) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/posts",
      data: JSON.stringify(post)
    });
  },
  getposts: function() {
    return $.ajax({
      url: "api/posts",
      type: "GET"
    });
  },
  deletepost: function(id) {
    return $.ajax({
      url: "api/posts/" + id,
      type: "DELETE"
    });
  }
};

// refreshposts gets new posts from the db and repopulates the list
function refreshPosts() {
  $.get("api/post", function(data){
    posts = data;
    initializePackage();   
  });
}

function initializePackage() {
  $postList.empty();
  var rowsToAdd = [];
  for (var i = 0; i < posts.length; i++) {
    rowsToAdd.push(createNewRow(posts[i]));    
  }
$postList.prepend(rowsToAdd);
}

function createNewRow(post) {
  var $newInputRow = $(
    [
      "<li class='list-group-item product'>",
      "<span>",
      "ID:" + (post.id) + " | " + (post.product_name) +  " | Quantity: " + post.quantity,
      "</span>",
      "<input type='string' class='edit' style='display: none;'>",
      "<button class='delete btn float-right'>x</button>",
      "<button class='decrease btn float-right'>↓</button>",
      "<button class='increase btn float-right'>↑</button>",
      "</li>"
    ].join("")
  );
  $newInputRow.find("button.delete").data("id", post.id);
  $newInputRow.find("button.decrease").data("id", post.id);
  $newInputRow.find("button.increase").data("id", post.id);

  return $newInputRow;
}

refreshPosts();

function deleteProduct(event) {
  event.preventDefault();
  var id = $(this).data("id");
  $.ajax({
    method: "DELETE",
    url: "api/posts/" + id
  }).then(refreshPosts);
}

function increaseProduct(event){
  event.stopPropagation();
  var id = $(this).data("id");
  console.log("The" + id);
  console.log(posts);
  $.get("/api/post", function(data) {
    for (var i = 0; i < posts.length; i++) {
      // console.log("This" + posts[i].id);
     if (id === posts[i].id) {
        posts[i].quantity ++;
        console.log(posts[i].quantity);
        console.log(posts[i]);
        updateQuantity(posts[i]);
        return;
    

     } 
    }
  });

}
 function updateQuantity(posts) {
   console.log("whoo");
   $.ajax({
     method: "PUT",
     url:"/api/post",
     data: posts
   })
   .then(function(){
    //  console.log(posts);
    //  refreshPosts();
    location.reload();
     console.log("update");
   })
 }

function decreaseProduct(event) {
  post.quantity--;
}

});

// function decreaseProduct(event){
//   event.stopPropagation();
//   var id = $(this).data("id");
//   console.log("ID:" + id);
//   console.log(posts);
//   $.get("/api/post", function(data) {
//     for (var i = 0; i < posts.length; i++) {
//       // console.log("This" + posts[i].id);
//      if (id === posts[i].id) {
//         posts[i].quantity --;
//         console.log(posts[i].quantity);
//         console.log(posts[i]);
//         updateQuantity(posts[i]);
//         return;

//      } 
//     }
//   });
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

// handleFormSubmit is called whenever we submit a new post
// Save the new post to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var post = {
//     text: $postText.val().trim(),
//     description: $postDescription.val().trim()
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


