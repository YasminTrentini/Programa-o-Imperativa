
for (let contagem = 1; contagem <= 5; contagem ++){
    console.log("Ola mundo")
}
calculo(10)
    function calculo(impar){
for (let impares = 0; impares <=10 ; impares ++){
    if (impares % 2 != 0){
    console.log("impares: ",impares)
    }
}
    }

    for (let tabuada =0; tabuada <=10; tabuada ++){
        console.log( tabuada * 7)
    
    let i =0
    for (let contagem =0;contagem <=10; contagem ++){
        console.log( contagem,"*",i++,"=",tabuada)
    }
}