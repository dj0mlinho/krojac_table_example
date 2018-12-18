let prvaRataSum = document.querySelector("#prvaRata");
let drugaRataSum = document.querySelector("#drugaRata");
let trecaRataSum = document.querySelector("#trecaRata");
let prvaRata = document.querySelectorAll(".installment-1.placeno");
let drugaRata = document.querySelectorAll(".installment-2.placeno");


let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;
for (let i = 0; i < prvaRata.length; i++) {
  sum1 += parseInt(prvaRata[i].innerHTML);
  prvaRataSum.innerHTML = sum1;
}
for (let i = 0; i < drugaRata.length; i++) {
  sum2 += parseInt(drugaRata[i].innerHTML);
  drugaRataSum.innerHTML = sum2;
}

for (let i = 0; i < prvaRata.length; i++) {
  if (prvaRata[i].nextElementSibling.className.indexOf('neplaceno') > -1) {
    sum3 += Number(prvaRata[i].nextElementSibling.innerHTML);
  }
  drugaRataSum.innerHTML = `${sum2} (${sum3})`
}

for (let i = 0; i < drugaRata.length; i++) {
  if (drugaRata[i].nextElementSibling.className.indexOf('neplaceno') > -1) {
    sum4 += Number(drugaRata[i].nextElementSibling.innerHTML);
  }
  trecaRataSum.innerHTML = `0 (${sum4})`
}

let names = document.querySelectorAll("a");
for (let i = 0; i < names.length; i++) {
  let name = names[i].innerHTML;
  if (name.indexOf("Zdravko") > -1) {
    names[i].innerHTML = "Branko Branković" + i
  }
}

console.log(document);