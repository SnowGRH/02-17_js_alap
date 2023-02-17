window.addEventListener("load",init)

function init(){
    console.log("Itt vagyok");
    console.log(document.querySelector("button"))
    valtozok();
    elagazas();
    ciklus();

}
function Udvozlet(){
    alert('Hello');
}

function valtozok(){
    var szam1;
    let szam2 = 3.14;
    const SZAM3 = 4;
    szam1 = 2;
    let vmi = 3<2;

    console.log("szam1 ", szam1, typeof szam1);
    console.log("szam2 ", szam2, typeof szam2);
    console.log("SZAM3 ", SZAM3, typeof SZAM3);
    console.log("vmi ", vmi, typeof vmi);
    //muveletek
    var eredmeny = parseFloat(szam1)+parseFloat(szam2);
    eredmeny = szam1 + szam2;
    console.log("eredmeny ", eredmeny, typeof eredmeny);
}

function elagazasok(){
    var adott = 132;
    if (adott % 2 === 0 && adott % 3 === 0){
        console.log("oszthato 2vel es 3mmal is")
    } else if (adott % 2 === 0){
        console.log("oszthato 2vel")
    } else if (adott % 3 === 0){
        console.log("oszthato 3mal")
    } else {
        console.log("nem osztoja se a 2 se a 3")
    }


    var nap = 22;
    nap = Math.floor(Math.random()*(7)+1);
    switch(nap){
        case 1:
            console.log("Hétfő");
            break;
        case 2:
            console.log("Kedd");
            break;
        case 3:
            console.log("Szerda");
            break;
        case 4:
            console.log("Csütörtök");
            break;
        case 5:
            console.log("Péntek");
            break;
        case 6:
            console.log("Szombat");
            break;
        case 7:
            console.log("Vasárnap");
            break;
        default:
            console.log("Nincs ilyen nap")
            break;
    }
}