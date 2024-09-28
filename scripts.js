var productContainer = document.getElementById("product");
    var search = document.getElementById("search");
    var productList = productContainer.querySelectorAll(".product-box");

    search.addEventListener("input", function(event) {
        var enteredValue = event.target.value.toUpperCase();
        for (var count = 0; count < productList.length; count++) {
            var productName = productList[count].querySelector("p").textContent;
            if (productName.toUpperCase().indexOf(enteredValue) < 0) {
                productList[count].style.display = "none";
            } else {
                productList[count].style.display = "block";
            }
        }
    });