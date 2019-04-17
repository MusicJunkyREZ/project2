var imgs = ["https://i.imgur.com/H95Y1Eu.jpg", "https://i.imgur.com/ipAkG5n.jpg", "https://i.imgur.com/3EyFOWx.jpg","https://i.imgur.com/xBgM0k4.jpg","https://i.imgur.com/myYS2sh.jpg","https://i.imgur.com/F88Tfj7.jpg","https://i.imgur.com/zaGLLTC.jpg","https://i.imgur.com/FZqI7nj.jpg","https://i.imgur.com/xQbXeqJ.jpg","https://i.imgur.com/78ytynN.jpg","https://i.imgur.com/NYUcfcG.jpg","https://i.imgur.com/x3dO5PE.jpg","https://i.imgur.com/E5FKzqn.jpg"];
var imgURL = imgs[Math.floor(imgs.length * Math.random())];



// $(document).click(function (event) {
//   $(‘.hide’).fadeOut();
//   $(‘.show’).show(“slow”);

// });


$(document).ready(function() {
// Get references to page elements

var $postText = $("#post-text");
var $postDescription = $("#post-description");
var $submitBtn = $("#submit");
var $postList = $("#post-list");

$(document).on("click", ".delete", deleteProduct);
$(document).on("click", ".increase", increaseProduct);
$(document).on("click", ".decrease", decreaseProduct);

$("#img-gallery").attr("src", imgURL);
$("#load-logo").attr("src", "https://i.imgur.com/8qNyPIY.png");

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
  }};



$(document).click(function (event) { 
  $('.hide').fadeOut();           
  $('.show').fadeIn("slow");  
});

// refreshposts gets new posts from the db and repopulates the list
function refreshPosts() {
  firebase.auth().onAuthStateChanged(function(user){
    if (user){
      var userId = firebase.auth().currentUser.uid;
      $.get(`/api/boxes/${userId}`, function(data){
        posts = data;
        console.log("Posts:" , posts);
        // initializePackage();   
      });
    }
})
 
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
  const dataObj = {
    id: posts.id,
    quantity: posts.quantity,
    uid: firebase.auth().currentUser.uid
  }
   console.log("whoo");
   $.ajax({
     method: "PUT",
     url:"/api/post",
     data: dataObj
   })
   .then(function(){
    //  console.log(posts);
    //  refreshPosts();
    location.reload();
     console.log("update");
   })
 }
});
function decreaseProduct(event){
  event.stopPropagation();
  var id = $(this).data("id");
  $.get("/api/post", function(data) {
    for (var i = 0; i < posts.length; i++) {
      // console.log("This" + posts[i].id);
     if (id === posts[i].id) {
        posts[i].quantity --;
        console.log(posts[i].quantity);
        console.log(posts[i]);
        updateDecQuantity(posts[i]);
        return;

     } 
    }
  });

}

  function updateDecQuantity(posts) {
    const dataObj = {
      id: posts.id,
      quantity: posts.quantity,
      box: boxId,
      userId: firebase.auth().currentUser.uid
    }
    console.log(dataObj);
    console.log("whoo");
    $.ajax({
      method: "PUT",
      url:"/api/post",
      data: dataObj
    })
    .then(function(){
     //  console.log(posts);
     //  refreshPosts();
     location.reload();
      console.log("update");
    })
  }
