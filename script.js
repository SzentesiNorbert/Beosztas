/*Új dolgozó felvitele*/

function ujDolg(){
  var vnev = document.getElementById('vnev').value;
  var knev = document.getElementById('knev').value;
  var table = document.getElementsByTagName('table')[0];
  var table2 = document.getElementsByTagName('table')[1];
  var dolgozo = table.insertRow(0);
  var dolgozo2 = table.insertRow(1);
  var cell1 = dolgozo.insertCell(0);
  var cell2 = dolgozo.insertCell(1);
  cell1.innerHTML = vnev;
  cell2.innerHTML = knev;
}


/*Munkaóra kiszámítás*/
var Munka=0;
function myInputM()
{
 this.Munka = Munka + 11;
console.log(this.Munka);

};

function munkaOra() {
  cell.innerHTML = dolgozo1.this.Munka;

return myInputM();


}
/*Munkaidő korrigálás*/

var korr = document.getElementById('myInputKorr1')
function fix(){
  var Munka = Munka-korr;
}
console.log(munkaOra);
