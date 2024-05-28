function changeQuantity(button, delta) {
    const input = button.parentElement.querySelector('input');
    let value = parseInt(input.value) + delta;
    if (value < 0) value = 0;
    input.value = value;
    updateTotal();
}

function updateTotal() {
    const boxes = document.querySelectorAll('.box');
    let total = 0;
    boxes.forEach(box => {
        const price = parseFloat(box.querySelector('.price').innerText);
        const quantity = parseInt(box.querySelector('input').value);
        total += price * quantity;
    });
    document.getElementById('total').innerText = total.toFixed(2);
}

function saveTotal() {
    const total = document.getElementById('total').innerText;
    localStorage.setItem('totalCompra', total);
}