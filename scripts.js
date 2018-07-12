var totalWings = 0;
var totalPrice = 0;
var cityID = [];

class wingClass {
      
    constructor (amount, price, img) {
         this.amount = amount;
         this.price = price;
         this.img = img;
    }

    getTotal () {
        totalWings += parseInt(this.amount);
        document.getElementById("amount").innerHTML = "<strong>" + totalWings + "</strong>" + " wings"
    }

    getPrice () {
        totalPrice += this.amount * this.price;
        document.getElementById("order-total").innerHTML = "Order Total: <strong>$" + totalPrice.toFixed(2) + "</strong>";
     }
 
    getCalories () {
        document.getElementById("calories").innerHTML = "<strong>" + 81 * totalWings + "</strong>" + " calories"
    }
    
    addWingAmountToDom(){
        if (document.querySelectorAll(".wing").length < 25) {
            for (var i = 0; i < this.amount; i++) {
                document.getElementById("bucket").innerHTML += this.img + "\n";
              }   
        }
          		
    }
}

function setUp(e) {
    if (e.target.id === "plain" && document.querySelector('input[name=plain]:checked')) {
        e.target.parentElement.classList.add("disabled")
        var wingOrderPlain = new wingClass(document.querySelector('input[name=plain]:checked').value, 0.98, "<div class='wing-container'><img class='wing' src='assets/wing.png'/></div>");
        wingOrderPlain.addWingAmountToDom();
        wingOrderPlain.getTotal()
        wingOrderPlain.getPrice();
        wingOrderPlain.getCalories()
    } else if (e.target.id === "bbq" && document.querySelector('input[name=bbq]:checked')) {
        e.target.parentElement.classList.add("disabled")
        var wingOrderBBQ = new wingClass(document.querySelector('input[name=bbq]:checked').value, 1.05, "<div class='wing-container'><img class='wing' src='assets/wing_bbq.png'/></div>");
        wingOrderBBQ.addWingAmountToDom();
        wingOrderBBQ.getTotal()
        wingOrderBBQ.getPrice();
        wingOrderBBQ.getCalories()
    } else if (e.target.id === "sweet-chilli" && document.querySelector('input[name=sc]:checked')) {
        e.target.parentElement.classList.add("disabled")
        var wingOrderSweetChilli = new wingClass(document.querySelector('input[name=sc]:checked').value, 1.19, "<div class='wing-container'><img class='wing' src='assets/wing_sc.png'/></div>");
        wingOrderSweetChilli.addWingAmountToDom();
        wingOrderSweetChilli.getTotal()
        wingOrderSweetChilli.getPrice();
        wingOrderSweetChilli.getCalories()
    } else if (e.target.id === "clear") {
        window.location.reload();
    }
    if (document.querySelectorAll(".wing").length > 12) {
        for (var w = 0; w < document.querySelectorAll(".wing").length; w++) {
            document.querySelectorAll(".wing")[w].style.width = "150px";
        }
    }
}

var checkInputs = setInterval(function(){ 
    if (document.querySelectorAll(".disabled").length == 3) {
        var button = document.createElement("button");
        button.innerHTML = "Feeling for wings now, eh?";
        button.setAttribute("id", "finish");
        document.getElementById("side-bar").appendChild(button);
        clearInterval(checkInputs);
    }
}, 1000);

function ajaxCall(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader("user_key", "3d0894f8acb53ba06e0b2dfed5a06eb2");
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status == 200)
          JSON.parse(xhr.responseText).location_suggestions.forEach(element => {
            cityID.push(element.id);
            var cityName = document.createElement("p");
            cityName.innerHTML = element.name;
            cityName.setAttribute("id", element.id);
            document.getElementById("city-names").appendChild(cityName);

            
            
        
            // document.getElementById("city-name").innerHTML += element.name + "<br>"
            // console.log(cityID)
            // if (cityID) {
            //     JSON.parse(xhr.responseText).restaurants.forEach(element => {
            //         console.log(element)
            //     });
            // }
          });  
        }
          else {
            return xhr.statusText;
         }
      };
}


document.addEventListener("click", function(e) { 
    setUp(e);
    if (e.target.id === "finish") {
        var city = prompt("What city do you live in?");
        ajaxCall("https://developers.zomato.com/api/v2.1/cities?q=" + city);
    }
    if (cityID.indexOf(parseInt(e.target.id)) > -1) {
       ajaxCall("https://developers.zomato.com/api/v2.1/cities?entity_id="+ parseInt(e.target.id) + "&entity_type=city&q=wings");
    }
});
