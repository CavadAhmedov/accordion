var h1 = document.getElementById("hfirst");
var	h2 = document.getElementById("hsecond");
var	h3 = document.getElementById("hthird");
var h4 = document.getElementById("hfourth");
var t1 = document.getElementById("tfirst");
var t2 = document.getElementById("tsecond");
var t3 = document.getElementById("tthird");
var t4 = document.getElementById("tfourth");
var c1 = document.querySelector(".cont1");
var c2 = document.querySelector(".cont2");
var c3 = document.querySelector(".cont3");
var c4 = document.querySelector(".cont4");

h1.onclick = function(){
	if(c1.style.height = "50px"){
		t1.style.display = "block";
		t2.style.display = "none";
		t3.style.display = "none";
		t4.style.display = "none";
		c1.style.height = "450px";
		c2.style.height = "50px";
		c3.style.height = "50px";
		c4.style.height = "50px";
	}
}

h2.onclick = function(){
	if(c2.style.height = "50px"){
		t1.style.display = "none";
		t2.style.display = "block";
		t3.style.display = "none";
		t4.style.display = "none";
		c1.style.height = "50px";
		c2.style.height = "450px";
		c3.style.height = "50px";
		c4.style.height = "50px";
	}
}

h3.onclick = function(){
	if(c3.style.height = "50px"){
		t1.style.display = "none";
		t2.style.display = "none";
		t3.style.display = "block";
		t4.style.display = "none";
		c3.style.height = "450px";
		c1.style.height = "50px";
		c2.style.height = "50px";
		c4.style.height = "50px";
	}
}

h4.onclick = function(){
	if(c4.style.height = "50px"){
		t1.style.display = "none";
		t2.style.display = "none";
		t3.style.display = "none";
		t4.style.display = "block";
		c1.style.height = "50px";
		c2.style.height = "50px";
		c3.style.height = "50px";
		c4.style.height = "450px";
	}
}

