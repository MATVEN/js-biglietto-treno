// var
var age = parseInt(prompt("How old are you?"));
var km = parseInt(prompt("How many km do you have to do?"));
var price = Math.round(0.21 * km);
var sale;
// html
var boxsconto = document.getElementById('scontato');
var boxintero = document.getElementById('intero');
var boxtot = document.getElementById('totale');

// calculate ticket price
// old price
if(age>=65) {
  boxintero.innerHTML = price + "€";
  sale = Math.round(price * 0.4);
  boxsconto.innerHTML = sale + "€ sconto anziani ";
  boxtot.innerHTML = price - sale + "€";

  // young price
} else if (age<=17) {
  boxintero.innerHTML = price + "€";
  sale = Math.round(price * 0.2);
  boxsconto.innerHTML = sale + "€ sconto giovani ";
  boxtot.innerHTML = price - sale + "€";

  // normal price
} else {
  boxintero.innerHTML = price + "€";
  boxsconto.innerHTML = "0€";
  boxtot.innerHTML = price + "€";
}
