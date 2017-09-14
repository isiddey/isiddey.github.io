var postDB={};
$.getJSON("posts/posts.json", function(json){
    postDB=json;
} )
$('document').ready(function(){
    console.log(postDB.numberOfPosts)
});
function loadPosts(category){
    console.log(category, " ", postDB.numberOfPosts);
}