
var months = ["January","February","March","April","May"];
var tuesdays = "Tuesday";
var meeting = ["3:30PM","other"];
var dates = ["11th","8th","8th","12th","10th","25th","22nd","22nd","26th","24th"]

function addColumnHeaders() { 
  var i = 0;
  while (i < 5) {
     document.getElementsByTagName("th") [i].innerHTML = months[i];
	 i++;
	}
  }
function meetDates() {
   var paragraphs = "";
	for (var i = 0; i < 10; i++) {
		var datc = i + 1;
		var datCell = document.getElementById("dater" + datc);
		paragraphs = datCell.getElementsByTagName("p");
		paragraphs[1].innerHTML += dates[i];
	}
}

  
  
  
  
  
  
  function calcTotal() { 
			var itemTotal = 0;
			var tryhack = 0;
			var donate10 = document.getElementById("donate10"); 
			var donate15 = document.getElementById("donate15"); 
			var donate20 = document.getElementById("donate20");
			var donate30 = document.getElementById("donate30"); 
			var thme = document.getElementById("thme"); 
			(donate10.checked) ? (itemTotal += 10) : (itemTotal += 0); 
			(donate15.checked) ? (itemTotal += 15) : (itemTotal += 0);
			(donate20.checked) ? (itemTotal += 20) : (itemTotal += 0);
			(donate30.checked) ? (itemTotal += 30) : (itemTotal += 0);
			(thme.checked) ? (tryhack += 30) : (tryhack += 0);
			var salesTaxRate = 0.085;
			itemTotal *= 100;
			tryhack *= 100;
			var orderTotal = (itemTotal + (tryhack * salesTaxRate) + tryhack) / 100;
			alert("Your order total is $" + orderTotal);
		}
		document.getElementById("submit").addEventListener("click", calcTotal, false);
		
		
function setUpPage() {
	  addColumnHeaders();
	  meetDates();
  }
// runs addColumnHeaders () function when page loads
  if (window.addEventListener) {
	  window.addEventListener("load", setUpPage, false);
  } else if (window.attachEvent) {
  window.attachEvent("onload", setUpPage);}