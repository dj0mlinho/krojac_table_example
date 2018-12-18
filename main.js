// let prvaRataSum = document.querySelector("#prvaRata");
// let drugaRataSum = document.querySelector("#drugaRata");
// let trecaRataSum = document.querySelector("#trecaRata");
// let prvaRata = document.querySelectorAll(".installment-1.placeno");
// let drugaRata = document.querySelectorAll(".installment-2.placeno");


// let sum1 = 0;
// let sum2 = 0;
// let sum3 = 0;
// let sum4 = 0;
// for (let i = 0; i < prvaRata.length; i++) {
//   sum1 += parseInt(prvaRata[i].innerHTML);
//   prvaRataSum.innerHTML = sum1;
// }
// for (let i = 0; i < drugaRata.length; i++) {
//   sum2 += parseInt(drugaRata[i].innerHTML);
//   drugaRataSum.innerHTML = sum2;
// }

// for (let i = 0; i < prvaRata.length; i++) {
//   if (prvaRata[i].nextElementSibling.className.indexOf('neplaceno') > -1) {
//     sum3 += Number(prvaRata[i].nextElementSibling.innerHTML);
//   }
//   drugaRataSum.innerHTML = `${sum2} (${sum3})`
// }

// for (let i = 0; i < drugaRata.length; i++) {
//   if (drugaRata[i].nextElementSibling.className.indexOf('neplaceno') > -1) {
//     sum4 += Number(drugaRata[i].nextElementSibling.innerHTML);
//   }
//   trecaRataSum.innerHTML = `0 (${sum4})`
// }

// let names = document.querySelectorAll("a");
// for (let i = 0; i < names.length; i++) {
//   let name = names[i].innerHTML;
//   if (name.indexOf("Zdravko") > -1) {
//     names[i].innerHTML = "Branko Branković" + i
//   }
// }
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
$.each($('.installment-1.placeno'), function (i, e) {
  c1 += parseInt($(e).html())
})
$.each($('.installment-2.placeno'), function (i, e) {
  c2 += parseInt($(e).html())
})
$('#prvaRata').html(c1)
$('#drugaRata').html(c2)

$.each($('installment-1.placeno').next('.installment-2.neplaceno'), function (i, e) {
  c3 += parseInt($(e).html())
});
$('#drugaRata').html($('#drugaRata').html() + "(" + c3 + ")");
$.each($('installment-2.placeno').next('.installment-3.neplaceno'), function (i, e) {
  c4 += parseInt($(e).html());
});
$('#trecaRata').html($('#trecaRata').html() + "(" + c4 + ")");