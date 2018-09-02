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
/*kattintás*/
  if (cella[x]==undefined) {
    cella[x]=false;
  }
/*Munkanapról Szabira*/
  if (cella[x]==false&&cellaSz[x]==true) {
    this.Munka -= 11;
    console.log(cella[x]);
    console.log(cellaPP[x]);
    console.log(cellaSz[x]);
    console.log(this.Munka);
    console.log(this.pp);
  }

/*Sima munkanapra kattintás*/

  if (cella[x]==false) {
    this.Munka += 11;
    cella[x]=true;
    console.log(cella[x]);
    console.log(cellaPP[x]);
    console.log(cellaSz[x]);
    console.log(this.Munka);
    console.log(this.pp);
}

/*Munkanapról pihenőnapra*/

if (cella[x]==true&&cellaPP[x]==true) {
  this.Munka -= 11;
  cella[x]=false;
  console.log(cella[x]);
  console.log(cellaPP[x]);
  console.log(cellaSz[x]);
  console.log(this.Munka);
  console.log(this.pp);
}


/*Szabadságról munkanapra*/
  if (cellaSz[x]==true&&cella[x]==true){
    this.Munka +=3;
    this.Szabi -= 1;
    cellaSz[x]=false;
    console.log(cella[x]);
    console.log(cellaPP[x]);
    console.log(cellaSz[x]);
    console.log(this.Munka);
    console.log(this.pp);
  }

/*Plusz pihenőről Munkanapra*/

  if (cellaPP[x]==true&&cella[x]==false){
      this.pp -= 1;
      this.Munka+=11;
      cella[x]==true;
      console.log(cella[x]);
      console.log(cellaPP[x]);
      console.log(cellaSz[x]);
      console.log(this.Munka);
      console.log(this.pp);
  }

  frissit();

};

  function myInputM_b(y)
  {
    if (cella2[y]==undefined) {
      cella2[y]=false;
    }

    if (cella2[y]==false&&cellaSz2[y]==true) {
      this.Munka_b -= 11;

    }

    if (cella2[y]==true&&cellaPP2[y]==true) {
      this.Munka_b -= 11;
      cella2[y]=false;
      console.log(cella[x]);
      console.log(cellaPP[x]);
      console.log(cellaSz[x]);
      console.log(this.Munka);
      console.log(this.pp);
    }

    if (cella2[y]==false) {
      this.Munka_b += 11;
      cella2[y]=true;
  }

    if (cellaSz2[y]==true){
      this.Munka_b +=3;
      this.Szabi_b -= 1;
      cellaSz2[y]=false;
    }

frissit();
console.log(this.Munka_b);

};

function myInputM_c(z)
{
  if (cella3[z]==undefined) {
    cella3[z]=false;
  }

  if (cella3[z]==false&&cellaSz3[z]==true) {
    this.Munka_c -= 11;

  }

  if (cella3[z]==false) {
    this.Munka_c += 11;
    cella3[z]=true;
}

  if (cellaSz3[z]==true){
    this.Munka_c +=3;
    this.Szabi_c -= 1;
    cellaSz3[z]=false;
  }

frissit();
console.log(this.Munka_c);

};

function myInputM_d(zz)
{
  if (cella4[zz]==undefined) {
    cella4[zz]=false;
  }

  if (cella4[zz]==false&&cellaSz4[zz]==true) {
    this.Munka_d -= 11;

  }

  if (cella4[zz]==false) {
    this.Munka_d += 11;
    cella4[zz]=true;
}

  if (cellaSz4[zz]==true){
    this.Munka_d +=3;
    this.Szabi_d -= 1;
    cellaSz4[zz]=false;

  }
frissit();
console.log(this.Munka_d,);

};
/* Pihenőnap kiszámítás*/

function myInputP(){
  if (cella[x]==true) {
    this.Munka - 11;
  }
  console.log(Munka);
}

/*Szabadság kiszámítás*/

var Szabi=0;
var Szabi_b=0;
var Szabi_c=0;
var Szabi_d=0;
cellaSz = [];
cellaSz2 = [];
cellaSz3 = [];
cellaSz4 = [];


function myInputSz(x)
{
  if (cellaSz[x]==undefined) {
    cellaSz[x]=false;
  }
  if (cellaSz[x]==false) {
    this.Szabi += 1;
    this.Munka += 8;
    cellaSz[x]=true;
  }
  if (cella[x]==false&&cellaSz[x]==true) {
    this.Munka -= 11;
  }
  if (cella[x]==true){
    this.Munka -= 11;
  }
  if (cellaPP[x]==true){

    this.pp -=1;
    cellaPP[x]=false;
  }


frissit();


};

function myInputSz_b(y)
{
  if (cellaSz2[y]==undefined) {
    cellaSz2[y]=false;
  }
  if (cellaSz2[y]==false) {
    this.Szabi_b += 1;
    this.Munka_b += 8;
    cellaSz2[y]=true;
  }
  if (cella2[y]==false&&cellaSz2[y]==true) {
    this.Munka_b -= 11;
  }
  if (cella2[y]==true){
    this.Munka_b -= 11;
  }

frissit();
console.log(this.Szabi_b);

};

function myInputSz_c(z)
{
  if (cellaSz3[z]==undefined) {
    cellaSz3[z]=false;
  }
  if (cellaSz3[z]==false) {
    this.Szabi_c += 1;
    this.Munka_c += 8;
    cellaSz3[z]=true;
  }
  if (cella3[z]==false&&cellaSz3[z]==true) {
    this.Munka_c -= 11;
  }
  if (cella3[z]==true){
    this.Munka_c -= 11;
  }
frissit();
console.log(this.Szabi_c);

};

function myInputSz_d(zz)
{
  if (cellaSz4[zz]==undefined) {
    cellaSz4[zz]=false;
  }
  if (cellaSz4[zz]==false) {
    this.Szabi_d += 1;
    this.Munka_d += 8;
    cellaSz4[zz]=true;
  }
  if (cella4[zz]==false&&cellaSz4[zz]==true) {
    this.Munka_d -= 11;
  }
  if (cella4[zz]==true){
    this.Munka_d -= 11;
}

frissit();
console.log(this.Szabi_d);

};

/* +P számolás*/

var pp=0;
var pp_b=0;
var pp_c=0;
var pp_d=0;
cellaPP = [];
cellaPP2 = [];
cellaPP3 = [];
cellaPP4 = [];


function myInputPP(x) {
  if (cellaPP[x]==undefined) {
    cellaPP[x]=false;
    cella.pp+=1;
    console.log(cella[x]);
    console.log(cellaPP[x]);
    console.log(cellaSz[x]);
  }

/*Sima plusz pihenőnap*/

  if (cellaPP[x]==false&&cella[x]==undefined) {
    this.pp += 1;
    cellaPP[x]=true;
    console.log(cellaPP[x]);
    console.log(cella[x]);
    console.log(this.Munka);
    console.log(this.pp);
  }

/*Munkanapról pihenőnapra vissza*/

  if (cella[x]==false&&cellaPP[x]==true){
      this.pp+=1;
      this.Munka -= 11;
      cellaPP[x]=true;
      cella[x]=false;
      console.log(cellaPP[x]);
      console.log(cella[x]);
      console.log(this.Munka);
      console.log(this.pp);
  }

/*Munkanapról pihenőnapra*/

  if (cella[x]==true&&cellaPP[x]==false){
      this.pp+=1;
      this.Munka -= 11;
      cellaPP[x]=true;
      cella[x]=false;
      console.log(cellaPP[x]);
      console.log(cella[x]);
      console.log(this.Munka);
      console.log(this.pp);
  }



  if (cellaSz[x]==true) {

    this.Szabi-=1;
    this.Munka-=8;
  }

frissit();


}

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


};*/

/*Munkaidő korrigálás*/
/*
var korr = document.getElementById('myInputKorr1')
function fix(){
  var Munka = Munka-korr;
}
console.log(munkaOra);
*/


/*Frissítés*/


function frissit(){
  document.getElementById('Munka_a').innerHTML=this.Munka;
  document.getElementById('Munka_b').innerHTML=this.Munka_b;
  document.getElementById('Munka_c').innerHTML=this.Munka_c;
  document.getElementById('Munka_d').innerHTML=this.Munka_d;
  document.getElementById('Szabi_a').innerHTML=this.Szabi;
  document.getElementById('Szabi_b').innerHTML=this.Szabi_b;
  document.getElementById('Szabi_c').innerHTML=this.Szabi_c;
  document.getElementById('Szabi_d').innerHTML=this.Szabi_d;
  document.getElementById('myInputPP').innerHTML=this.pp;
}
