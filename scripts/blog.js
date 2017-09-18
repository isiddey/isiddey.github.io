var postDB = {};
$.getJSON("posts/posts.json", function (json) {
    postDB = json;
})

function loadPosts(category) {
    console.log(category, " ");
    switch (category) {
        case 'latest':
            {
                var recent = postDB.numberOfPosts > 6 ? postDB.numberOfPosts - 6 : postDB.numberOfPosts;
                var title = "";
                var content = "";
                var postImage = "";
                var counter = 0;
                var changedHTML = "";
                while (recent > 0) {
                    $.get("posts/" + recent + ".json", function (lVar) {
                        console.log(lVar)
                        postImage = lVar.image;
                        title = lVar.title;
                        content = lVar.content.length > 150 ? lVar.content.substring(0, 150) : lVar.content;
                    }).done(function () {
                        changedHTML += '<div class="panel row post"><a href="#"> <img src="images/'+postImage+'"alt="postImage" class="postImage col-lg-4 col-md-4 col-sm-4 col-xs-12"> <div class="postDescription col-lg-8 col-md-8 col-sm-8 col-xs-12"><h3>' + title + '</h3><p>' + content + '....</p></div></a></div>'
                        counter++;
                        if (counter == 2) $("#content").html(changedHTML);
                    });
                    recent--;
                }
                break;
            }
        case 'technology':
            {
                loadDynamicPosts('technology', 6);
                break;
            }
        case 'lifestyle':{
            loadDynamicPosts('lifestyle', 6);
            break;
        }
        case 'rantsAndRaves':{
            loadDynamicPosts('rantsAndRaves', 6);
        break;
        }
    }
}

function loadDynamicPosts(category, highRange) {
    var totalPosts = postDB[category].number;
    var lowRange = 1;
    highRange = highRange > totalPosts ? totalPosts : highRange;
    lowRange = highRange - 6 > 0 ? highRange - 6 : 1;
    var title = "";
    var content = "";
    var postImage = "";
    var counter = 0;
    var changedHTML = totalPosts==0? 'No posts yet. Check soon!': "";
    console.log(postDB[category].number)
    for (; lowRange <= highRange; lowRange++) {
        $.get("posts/" + lowRange + ".json", function (lVar) {
            console.log(lVar)
            title = lVar.title;
            postImage = lVar.image;
            content = lVar.content.length > 150 ? lVar.content.substring(0, 150) : lVar.content;
        }).done(function () {
            changedHTML += '<div class="panel row post"><a href="#"> <img src="images/'+postImage+'"alt="postImage" class="postImage col-lg-4 col-md-4 col-sm-4 col-xs-12"> <div class="postDescription col-lg-8 col-md-8 col-sm-8 col-xs-12"><h3>' + title + '</h3><p>' + content + '....</p></div></a></div>'
            counter++;
            if (counter == highRange) {
                if(highRange > 6) changedHTML += '<button class="left">Previous</button>'
                if(highRange < totalPosts) changedHTML += '<button class="right">Next</button>'
                $("#content").html(changedHTML);
            }
        });
    }
}