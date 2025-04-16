document.addEventListener("DOMContentLoaded", function () {
    let totalPrice = 0;
    
    document.querySelectorAll("input[type='checkbox']").forEach(item => {
        item.addEventListener("change", updatePrice);
    });

    function updatePrice() {
        totalPrice = 0;
        if (document.getElementById("alloys").checked) totalPrice += 5000;
        if (document.getElementById("spoiler").checked) totalPrice += 3000;
        document.getElementById("total-price").innerText = totalPrice;
    }
    
    window.saveCustomization = function () {
        let carModel = document.getElementById("car-model").value;
        let alloys = document.getElementById("alloys").checked ? 1 : 0;
        let spoiler = document.getElementById("spoiler").checked ? 1 : 0;

        fetch("save.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `model=${carModel}&alloys=${alloys}&spoiler=${spoiler}&price=${totalPrice}`
        }).then(response => response.text())
          .then(data => alert(data));
    }
});
