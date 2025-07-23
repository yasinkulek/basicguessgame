let dogruSayi = Math.floor(Math.random() * 100) + 1
const buton = document.getElementById("btn")
const tahminInput = document.getElementById('tahmin')
const mesajDiv = document.getElementById("mesaj")
let tahminSayisi = 0;
let resetbtn=document.getElementById('resetBtn')
const tahminDiv = document.getElementById("tahminDiv")

console.log(dogruSayi)

buton.addEventListener('click', function () {
    const tahmin = Number(tahminInput.value);
    tahminSayisi++;
    console.log("tahmin edilen sayi", tahmin)
    
    if (tahmin === dogruSayi) {
        mesajDiv.innerHTML = `Tebrikler,doğru bildin hemde ${tahminSayisi} tahminde`
        tahminDiv.innerText="";

         tahminInput.disabled = true;
         buton.disabled = true;
    confetti({
         particleCount: 150,
         spread: 100,
         origin: { y: 0.6 }
});

        return;
    } else if (tahmin > dogruSayi) {
        mesajDiv.innerHTML = 'Biraz in'
    }
    else {
        mesajDiv.innerHTML = 'Biraz çık'
    }
    if (tahminSayisi <= 6) {
    
} else if (tahminSayisi <= 9) {
  tahminDiv.innerText = `Hadi artık çok oyalandın ${tahminSayisi} oldu`;
} else if (tahminSayisi <= 15) {
  tahminDiv.innerText = `AHAHAHAHAHAHA ${tahminSayisi} oldu`;
} else {
  tahminDiv.innerText = `Oynamasanda olurmuş ya ${tahminSayisi} oldu`;
}
});


resetbtn.addEventListener("click",function(){
    tahminSayisi=0;
    dogruSayi = Math.floor(Math.random() * 100) + 1
    mesajDiv.innerHTML=''
    tahminInput.value=''
    console.log(dogruSayi)
    tahminDiv.innerText="";
    tahminInput.disabled = false;
    buton.disabled = false;
})

document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        buton.click();
        event.preventDefault();
    }
})

