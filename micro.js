//arrows
let print=(saudacao,mensagem)=>saudacao +" "+ mensagem;


console.log(print("Olá","Bom dia"));

let soma=(n1,n2)=> n1+n2;
console.log(soma(10,20));

//callback
let andando="O carro está andando"
let acaoCarro=_=> console.log(andando)
    setInterval(() => 
    {console.log(andando)},1000)

console.log(acaoCarro);



    