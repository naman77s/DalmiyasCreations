AOS.init();

var productA = {
	name : "Matte Fabric" ,
	color : "Blue / Green" ,
	price : "180₹",
	image : ["./assets/img/matte/B1.png" , "./assets/img/matte/B2.png" , "./assets/img/matte/G2.png"]
};
var productB = {
	name : "Non-wooven Fabric" ,
	color : "Blue / Green" ,
	price : "80₹" ,
	image : ["./assets/img/nw/B1.png" , "./assets/img/nw/B2.png" , "./assets/img/nw/G2.png"]
};
const name = document.getElementById("name");
const price = document.getElementById("price");
const buy = document.getElementById("Buy");
const img = document.getElementsByClassName("image");
const section = document.getElementById("section");
var i = 0;
	var user = prompt("🔷 What's your name?");
function openA(){
	name.innerHTML = "Type : " + productA.name + " |";
	price.innerHTML = "|  Price :" + productA.price;
	buy.setAttribute("href", "https://wa.me/918950661477?text=Hi%20Ankit,%20I'm%20" + user + "%20and%20am%20interested%20in%20your%20this%20product-%20*Name*:%20" + name.innerHTML + "%20,%20*Color*:%20Any%20.%20Can%20you%20please%20provide%20me%more%details%20about%20it?%20");
	for (var i = 0, len = img.length; i < len; i++) {
		img[i].setAttribute("src" , productA.image[i]);
	}
	section.style.bottom = "0";
}
function openB(){
	name.innerHTML = "Type : " + productB.name + " |";
	price.innerHTML = "|  Price :" + productB.price;
	buy.setAttribute("href", "https://wa.me/918950661477?text=Hi%20Ankit,%20I'm%20" + user + "%20and%20am%20interested%20in%20your%20product-%20*Name*:%20" + name.innerHTML + "%20,%20*Color*:%20Any%20.%20Can%20you%20please%20provide%20me%more%details%20about%20it?%20");
	for (var i = 0, len = img.length; i < len; i++) {
		img[i].setAttribute("src" , productB.image[i]);
	}
	section.style.bottom = "0";
}
function drop(){
	section.style.bottom = "-120%";
}