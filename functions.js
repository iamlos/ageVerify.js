//Creado por nadien, nadie sabe nadie supo

	var Cukie = getCookie("ageVerify");

	//make the element div to show the fake window
	$("document").ready(function(){
		var square = document.createElement('div');
		square.id = "Show-page";
		$(square).insertBefore("body");
	});

	

//if cookie is not set, show the window with styles
 if(Cukie!="1"){
	
	document.write('<style>#Show-page {font-family: "Comic Sans MS", cursive, sans-serif; overflow: hidden; margin: -10px; width: 100%; height: 100%; background: rgb(0,0,0); position: absolute; z-index: 99990;} h1:nth-child(odd){ margin-top: 25%; margin-left: 35%; color: red; float: left; } h1:nth-child(even){ margin-top: 25%; color: white; float:left; margin-left: 40px; } </style>');

	
	displayBlock();
 }



//for the cookies
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}


//Create elements and instance events
function displayBlock(){
		
	
	$("document").ready(function(){
		old = document.createElement("h1");
		teen = document.createElement("h1");
		old.innerHTML = "I have +18";
		teen.innerHTML = "I have -18";
	
	$("#Show-page").append(old, teen);
	
	//+18
	$("h1:first").click(function(){
		setCookie("ageVerify","1",1);
		$("#Show-page").hide(2000);
	});
	
	//-18
	$("h1:eq(1)").click( 
		function(){
		window.location.href = 'javascript:alert("Sorry, you cannot get in.");';
		}
	);
	});
			
}







	
	 
	
	
	

