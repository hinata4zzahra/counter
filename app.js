var number=0;
var hasil= document.getElementById('count1');
var tambah= document.getElementById('tambah');
var kurang= document.getElementById('min')

tambah.addEventListener("click", function(){
  number= number +1
  hasil.innerHTML=number
});

kurang.addEventListener("click", function(){
  number= number -1
  hasil.innerHTML=number
});