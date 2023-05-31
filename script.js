//كود الحساب
var x = document.getElementById("container");
$(document).ready(function () {
    const form = $("#calculator-form");
    form.on("submit", function (event) {
        event.preventDefault();

        const tahsily = parseFloat($("#tahsily").val());
        const codrat = parseFloat($("#codrat").val());
        const thanoy = parseFloat($("#thanoy").val());
        const tahsilyp = parseInt($("#tahsilyp").val());
        const codratp = parseInt($("#codratp").val());
        const thanoyp = parseInt($("#thanoyp").val());
        const Avg=tahsily*(tahsilyp/100)+codrat*(codratp/100)+thanoy*(thanoyp/100);
    $("#result").text(Avg);
    console.log(tahsily);
    console.log(codrat);
    console.log(thanoy);
    console.log(Avg);
    });
});
//كود القائمة عشان تصير حركات
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))