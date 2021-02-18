
function hesaplama (mat,almanca){
    let sonuc = (mat + almanca) / 2;
    return new Promise (function(resolve,reject){
        if (sonuc >= 70){
            setTimeout(() => {
                resolve("Ortalamanız : " + sonuc);            
            }, 2000);            
        } else {
            reject("Sertifikayı Kazanamadınız..:(");
        }   
    });
}
function oneri() {
    setTimeout(() => {
        console.log("Tebrikler !!, Sertifikayı kazandınız..:)");
    }, 500);
}

hesaplama(90,80)
    .then((data) => {
        console.log(data);
        oneri();
        return 'ikinci islem';
    })
    .catch((hata) => {
        console.log(hata);
        
    });