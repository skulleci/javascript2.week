
function hesaplama(mat, almanca,myCallback) {
    let sonuc = (mat + almanca) / 2;
    setTimeout(() => {
        console.log(sonuc);
        myCallback(sonuc);
    }, 2000);
    
}

function myDisplay() {
    setTimeout(() => {
        console.log('Sertifikayı Kazandınız.!!');
    }, 1000);
}

hesaplama(70,80,myDisplay);
