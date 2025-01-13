document.querySelectorAll('.apply-promo-item').forEach(button => {
    button.addEventListener('click', function() {
        const inputField = this.previousElementSibling; 
        const promoMessage = this.nextElementSibling; 
        const originalPrice = parseFloat(this.getAttribute('data-price'));
        const promoCode = inputField.value.trim().toUpperCase();
        
        if (promoCode === 'NOSK25') {
            const discount = 0.25; 
            const discountedPrice = originalPrice - (originalPrice * discount);
            promoMessage.textContent = `Promo applied! Your discounted price is NPR ${discountedPrice.toFixed(2)}`;
            promoMessage.style.color = 'green';
            this.closest('.products').querySelector('.product-price').textContent = `NPR ${discountedPrice.toFixed(2)}`;
        } else {
            promoMessage.textContent = 'Invalid promo code.';
            promoMessage.style.color = 'red';
        }
    });
});
