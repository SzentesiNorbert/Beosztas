/*Új dolgozó felvitele*/

function ujDolg(){
  var vnev = document.getElementById('vnev').value;
  var knev = document.getElementById('knev').value;
  var table = document.getElementsByTagName('table')[0];
  var table2 = document.getElementsByTagName('table')[1];
  var dolgozo = table.insertRow(0);
  var cell1 = dolgozo.insertCell(0);
  var cell2 = dolgozo.insertCell(1);
  cell1.innerHTML = vnev;
  cell2.innerHTML = knev;
}


/*Munkaóra kiszámítás*/
var Munka=0;
var Munka_b=0;
var Munka_c=0;
var Munka_d=0;
cella=[];
cella2=[];
cella3=[];
cella4=[];
//cella[0]=false;
function myInputM(x)
{
  if (cella[x]==undefined) {
    cella[x]=false;
  }
  if (cella[x]==false) {
    this.Munka += 11;
    cella[x]=true;
  }
  console.log(this.Munka);
};

  function myInputM_b(y)
  {
    if (cella2[y]==undefined) {
      cella2[y]=false;
    }
    if (cella2[y]==false) {
      this.Munka_b += 11;
      cella2[y]=true;
    }

console.log(this.Munka_b);

};

function myInputM_c(z)
{
  if (cella3[z]==undefined) {
    cella3[z]=false;
  }
  if (cella3[z]==false) {
    this.Munka_c += 11;
    cella3[z]=true;
  }

console.log(this.Munka_c);

};

function myInputM_d(zz)
{
  if (cella4[zz]==undefined) {
    cella4[zz]=false;
  }
  if (cella4[zz]==false) {
    this.Munka_d += 11;
    cella4[zz]=true;
  }

console.log(this.Munka_d,);

};

/*Szabadság kiszámítás*/

var Szabi=0;
var Szabi_b=0;
var Szabi_c=0;
var Szabi_d=0;
cellaSz = [];
cellaSz2 = [];
cellaSz3 = [];
cellaSz4 = [];

//cella[0]=false;
function myInputSz(x)
{
  if (cellaSz[x]==undefined) {
    cellaSz[x]=false;
  }
  if (cellaSz[x]==false) {
    this.Szabi += 8;
    cellaSz[x]=true;
  }


console.log(this.Szabi);

};

function myInputSz_b(y)
{
  if (cellaSz2[y]==undefined) {
    cellaSz2[y]=false;
  }
  if (cellaSz2[y]==false) {
    this.Szabi_b += 8;
    cellaSz2[y]=true;
  }


console.log(this.Szabi_b);

};

function myInputSz_c(z)
{
  if (cellaSz3[z]==undefined) {
    cellaSz3[z]=false;
  }
  if (cellaSz3[z]==false) {
    this.Szabi_c += 8;
    cellaSz3[z]=true;
  }


console.log(this.Szabi_c);

};

function myInputSz_d(zz)
{
  if (cellaSz4[zz]==undefined) {
    cellaSz4[zz]=false;
  }
  if (cellaSz4[zz]==false) {
    this.Szabi_d += 8;
    cellaSz4[zz]=true;
  }


console.log(this.Szabi_d);

};

/*Betegség kiszámítás*/
/*
var BSzabi=0;
cella = [];
//cella[0]=false;
function myInputB(x)
{
  if (cella[x]==undefined) {
    cella[x]=false;
  }
  if (cella[x]==false) {
    Munka - 3;
    cella[x]=true;
  }


console.log(this.Munka, cella[x]);


};
function munkaOra() {
  cell.innerHTML = dolgozo1.this.Munka;

return myInputM();


}
/*Munkaidő korrigálás*/
/*
var korr = document.getElementById('myInputKorr1')
function fix(){
  var Munka = Munka-korr;
}
console.log(munkaOra);
*/
