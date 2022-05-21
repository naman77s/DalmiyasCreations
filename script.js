AOS.init();

var sn = document.getElementById("Snav");
function dump(){
	sn.style.left = "-120%";
}
function pull(){
	sn.style.left = "0";
}


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
const cd = document.querySelector('.container-details');
const name = cd.querySelector("#name");
const price = cd.querySelector("#price");
const buy = document.getElementById("Buy");
const img = document.getElementsByClassName("image");
const section = document.getElementById("section");
const iname = document.getElementById("input-name");
const prompt = document.getElementById("prompt");


$(document).ready(function(){
	const pct = document.querySelector('#p-a');
		const img = pct.querySelectorAll(".p-i");
		const set = document.querySelector('.setA');
		const name = set.querySelectorAll("#name");
		const price = set.querySelectorAll("#price");
		name[0].innerHTML = "Type : " + productA.name ;
		price[0].innerHTML = "Price :" + productA.price;
		for (var i = 0, len = img.length; i < len; i++) {
			img[i].setAttribute("src" , productA.image[i]);
		}
	}
);
$("#p-a").ready(function(){
	const pct = document.querySelector('#p-b');
		const img = pct.querySelectorAll(".p-i");
		const set = document.querySelector('.setA');
		const name = set.querySelectorAll("#name");
		const price = set.querySelectorAll("#price");
		name[1].innerHTML = "Type : " + productB.name ;
		price[1].innerHTML = "Price :" + productB.price;
		for (var i = 0, len = img.length; i < len; i++) {
			img[i].setAttribute("src" , productB.image[i]);
		}
	}
);


function hidee(){
	prompt.style.left = "-300%";
	$("#prompt").hide(1000);
}

function openA(){
	let user = iname.value;
	name.innerHTML = "Type : " + productA.name + " |";
	price.innerHTML = "|  Price :" + productA.price;
	buy.setAttribute("href", "https://wa.me/918950661477?text=Hi%20Ankit,%20I'm%20" + user + "%20and%20am%20interested%20in%20your%20this%20product-%20*Name*:%20" + productA.name + "%20,%20*Color*:%20Any%20.%20Can%20you%20please%20provide%20me%20more%20details%20about%20it?%20");
	for (var i = 0, len = img.length; i < len; i++) {
		img[i].setAttribute("src" , productA.image[i]);
	}
	section.style.bottom = "0";

}
function openB(){
	let user = iname.value;
	name.innerHTML = "Type : " + productB.name + " |";
	price.innerHTML = "|  Price :" + productB.price;
	buy.setAttribute("href", "https://wa.me/918950661477?text=Hi%20Ankit,%20I'm%20" + user + "%20and%20am%20interested%20in%20your%20product-%20*Name*:%20" + productB.name + "%20,%20*Color*:%20Any%20.%20Can%20you%20please%20provide%20me%20more%20details%20about%20it?%20");
	for (var i = 0, len = img.length; i < len; i++) {
		img[i].setAttribute("src" , productB.image[i]);
	}
	section.style.bottom = "0";
}


function drop(){
	section.style.bottom = "-120%";
}



$("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 200
      }, 0, function(){
        window.location.hash = hash;
      });
    }
  });