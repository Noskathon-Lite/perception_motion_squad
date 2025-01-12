document.addEventListener("DOMContentLoaded", () => {
    const promoButtons = document.querySelectorAll(".apply-promo-item");
    const cartButtons = document.querySelectorAll(".add-to-cart");
    const cartTotalElement = document.getElementById("cart-total");

    let cartTotal = 0;

    // Handle applying promo code for each product
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

                // Update button price for cart addition
                button.setAttribute("data-price", discountedPrice.toFixed(2));
                promoCodeInput.disabled = true;
                button.disabled = true;
            } else {
                promoMessage.textContent = "Invalid promo code. Please try again.";
                promoMessage.style.color = "red";
            }
        });
    });

    // Handle adding items to cart
    cartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const price = parseFloat(button.getAttribute("data-price"));
            cartTotal += price;

            // Update cart total
            updateCartTotal();
        });
    });

    // Update cart total display
    function updateCartTotal() {
        cartTotalElement.textContent = `NPR ${cartTotal.toFixed(2)}`;
    }
});
