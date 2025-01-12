<<<<<<< HEAD
document.querySelectorAll('.apply-promo-item').forEach(button => {
    button.addEventListener('click', function() {
        const inputField = this.previousElementSibling; 
        const promoMessage = this.nextElementSibling; 
        const originalPrice = parseFloat(this.getAttribute('data-price'));
        const promoCode = inputField.value.trim().toUpperCase();
        
        if (promoCode === 'NOSK25') {
            const discount = 0.25; // 25% discount
            const discountedPrice = originalPrice - (originalPrice * discount);
            promoMessage.textContent = `Promo applied! Your discounted price is NPR ${discountedPrice.toFixed(2)}`;
            promoMessage.style.color = 'green';
            this.closest('.products').querySelector('.product-price').textContent = `NPR ${discountedPrice.toFixed(2)}`;
        } else {
            promoMessage.textContent = 'Invalid promo code.';
            promoMessage.style.color = 'red';
        }
    });
=======
document.addEventListener("DOMContentLoaded", () => {
    const promoButtons = document.querySelectorAll(".apply-promo-item");
    const cartButtons = document.querySelectorAll(".add-to-cart");
    const cartTotalElement = document.getElementById("cart-total");

    let cartTotal = 0;

    promoButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productContainer = button.parentElement;
            const promoCodeInput = productContainer.querySelector(".promo-code");
            const productPriceElement = productContainer.querySelector(".product-price");
            const promoMessage = productContainer.querySelector(".promo-message");

            const originalPrice = parseFloat(button.getAttribute("data-price"));
            const promoCode = promoCodeInput.value.trim();

            if (promoCode === "NOSK25") {
                const discountedPrice = originalPrice * 0.75;
                productPriceElement.textContent = `NPR ${discountedPrice.toFixed(2)}`;
                promoMessage.textContent = "Promo code applied! 25% discount applied.";
                promoMessage.style.color = "green";

                button.setAttribute("data-price", discountedPrice.toFixed(2));
                promoCodeInput.disabled = true;
                button.disabled = true;
            } else {
                promoMessage.textContent = "Invalid promo code. Please try again.";
                promoMessage.style.color = "red";
            }
        });
    });

    cartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const price = parseFloat(button.getAttribute("data-price"));
            cartTotal += price;

            updateCartTotal();
        });
    });

    function updateCartTotal() {
        cartTotalElement.textContent = `NPR ${cartTotal.toFixed(2)}`;
    }
>>>>>>> 15d56be34d2edec1e06476f8c3163d8916fb75d3
});
