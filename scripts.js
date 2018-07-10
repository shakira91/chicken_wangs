class wingClass {
      
    constructor (amount, price, img) {
         this.amount = amount;
         this.price = price;
         this.img = img;
    }

    getPrice () {
        console.log(Math.round(this.price * this.amount));
    }

    getAmount () {
        console.log(this.amount);
    }

    getCalories () {
        console.log(81 * this.amount);
    }
    
    addWingAmountToDom(){
            for (var i = 0; i <= this.amount; i++) {
          document.getElementById("bucket").innerHTML += this.img + "\n";
        }     		
    }
}

document.addEventListener("click", function(e) {
  if (e.target.id == "plain") {
    var wingOrderPlain = new wingClass(document.getElementById("wing-amount").value, 0.98, "<img src='assets/wing.png'/>");
    wingOrderPlain.addWingAmountToDom();
    wingOrderPlain.getPrice();
    wingOrderPlain.getCalories()
} else if (e.target.id === "bbq" || e.target.id === "honey-bbq") {
    var wingOrderBBQ = new wingClass(document.getElementById("wing-amount").value, 1.05);
    wingOrderBBQ.getPrice();
} else if (e.target.id === "sweet-chilli") {
    var wingOrderSweetChilli = new wingClass(document.getElementById("wing-amount").value, 1.19);
    wingOrderSweetChilli.getPrice();
} else {
    document.getElementById("bucket").innerHTML = "";
}
});