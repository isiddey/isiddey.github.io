$('document').ready(function(){
    var menu=document.querySelector('.navbar-nav');
    menu.addEventListener('click', function(event){
        if(event.target.innerText != event.currentTarget.innerText){
            console.log(event.target.innerText)
            event.preventDefault();
            var data = event.target.innerText,
            data = data == "Home"? "index" : data.toLowerCase();
            url = data + ".html";
            history.pushState(data, data, url);
        } 
            event.stopPropagation();
    }, false);
    window.addEventListener('popstate', function(event){
        var character = event.state;
        console.log(event)
        /*
        if (character == null) {
            
        } else {
          updateText(character);
          requestContent(character + ".php");
          addCurrentClass(character);
          document.title = "Ghostbuster | " + character;
        }*/
      })
});
