class wingClass {
      
    constructor (amount, price, img) {
         this.amount = amount;
         this.price = price;
         this.img = img;
    }

    getPrice () {
        //console.log(Math.round(this.price * this.amount));
    }

    getAmount () {
        //console.log(this.amount);
    }

    getCalories () {
        //console.log(81 * this.amount);
    }
    
    addWingAmountToDom(){
        for (var i = 0; i < this.amount; i++) {
          document.getElementById("bucket").innerHTML += this.img + "\n";
        }     		
    }
}

var wingCount = 4; 
document.getElementById("wing-amount").innerHTML = wingCount;
document.addEventListener("click", function(e) {
    if (e.target.id == "more") {
        document.getElementById("wing-amount").innerHTML = wingCount = wingCount + 1;
    } 
});


document.addEventListener("click", function(e) {
 if (e.target.id == "plain") {
    var wingOrderPlain = new wingClass(parseInt(document.getElementById("wing-amount").innerHTML), 0.98, "<div class='wing-container'><img class='wing' src='assets/wing.png'/></div>");
    wingOrderPlain.getAmount();
    wingOrderPlain.addWingAmountToDom();
    wingOrderPlain.getPrice();
    wingOrderPlain.getCalories()
} else if (e.target.id === "bbq" || e.target.id === "honey-bbq") {
    var wingOrderBBQ = new wingClass(document.getElementById("wing-amount").innerHTML, 1.05, "<div class='wing-container'><img class='wing' src='assets/wing_bbq.png'/></div>");
    wingOrderBBQ.addWingAmountToDom();
    wingOrderBBQ.getPrice();
    wingOrderBBQ.getCalories()
} else if (e.target.id === "sweet-chilli") {
    var wingOrderSweetChilli = new wingClass(document.getElementById("wing-amount").value, 1.19);
    wingOrderSweetChilli.getPrice();
} else if (e.target.id === "clear") {
    document.getElementById("bucket").innerHTML = "";
    wingCount = 4;
    document.getElementById("wing-amount").innerHTML = wingCount;
}

if (document.querySelectorAll(".wing").length > 12) {
    for (var w = 0; w < document.querySelectorAll(".wing").length; w++) {
        document.querySelectorAll(".wing")[w].style.width = "150px";
    }
}

});

