var search = {}
search.items = elements;
search.semblants = function(){
	var value = document.getElementById("in").value;
	document.getElementById("semblants").innerHTML = "";
	for(s in search.items){
		if(search.items[s].includes(value)){
			document.getElementById("semblants").innerHTML = document.getElementById("semblants").innerHTML + "<a class='hover-text' href='data.html?&q=" + search.items[s] + "'>" + search.items[s] + "</a><br><br>";
		}
	}
}
search.search = function(){
	var value = document.getElementById("in").value;
	if(search.items.indexOf(value) >= 0){
		document.getElementById("error").innerHTML = "<br><div class='hover'><a class='hover-text' href='data.html?&q=" + value + "'>Go to:" + value + "</a></div>"
	}
	else{
		search.semblants()
		document.getElementById("error").innerHTML = "<p style='color:red'>There is no apartat called: '" + value + "'.</p><br><br><p>Maybe:</p>";
	}
}
search.advance = function(event){
	if(event.keyCode === 13){
		search.search()
	}
}
window.addEventListener("keypress",search.advance)