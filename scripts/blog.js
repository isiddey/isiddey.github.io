$('document').ready(function(){
    console.log(postDB.numberOfPosts)
});
function loadPosts(category){
    console.log(category, " ");
    switch(category){
        case 'latest':{

            break;
        }
        case 'technology':{
            $.get("/posts/1.html", function( my_var ) {
                console.log(my_var);
            });
            break;
        }
    }
}
var postDB={
    "numberOfPosts": 1,
    "latest":{
        "number": 1,
        "fileNames":["1"]
    },
    "technology":{
        "number": 1,
        "fileNames":["1"]
    },
    "lifestyle":{
        "number": 0,
        "fileNames":[]
    },
    "rantsAndRaves":{
        "number": 0,
        "fileNames":[]
    }

};