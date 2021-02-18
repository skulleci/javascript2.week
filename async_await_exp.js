function hesaplama (mat,almanca){
    let sonuc = (mat + almanca) / 2;
    return new Promise (function(resolve,reject){
        if (sonuc >= 70){
            setTimeout(() => {
                resolve(sonuc);            
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

async function islemSirasi (){
    await hesaplama(80,80)
        .then((data) => {
        console.log(data);
        oneri();
        return 'ikinci islem';
    })
        .catch((hata) => {
            console.log(hata);
            
    });
}
islemSirasi ();