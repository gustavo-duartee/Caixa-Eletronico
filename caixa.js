function caixa(){
    //Capturar os campos
    var Valor = document.getElementById('txtValor').value;
    var outNota1 = document.getElementById('outNota1');
    var outnota2 = document.getElementById('outNota2');
    var outnota3 = document.getElementById('outNota3');

    //Verificação 
    var numero = 10
    
    if(Valor % numero ===0){}
    
    else {alert('Notas Indisponíveis')
    txtValor.focus();
    return;}

    if(Valor <= 0 || Valor == ''){
        alert('Informe um valor corretamente')
    txtValor.focus();
    document.getElementById('txtValor').value = '';
    return;}

    


    //Separar as notas
    var nota1 = 100;
    var nota2 = 50;     
    var nota3 = 10;

    if(Valor >= 100){
        if (nota1 >=0){
            nota1 = Math.floor(Valor / 100);
            Valor = Valor % 100;
            outNota1.textContent= `${nota1} Nota(s) de R$100`  
        }
    }
    if(Valor >=50){
        if (nota2 >=0){
            nota2 = Math.floor(Valor / 50);
            Valor = Valor % 50;
            outnota2.textContent= `${nota2} Nota(s) de R$50`  
        }
    }
    if(Valor >=10){
        if (nota3 >=0){
            nota3 =  Math.floor(Valor / 10);
            Valor = Valor % 10;
            outNota3.textContent = `${nota3} Nota(s) de R$10`  
        }
    }
    
    
    
}


function limpar(){

    document.getElementById('txtValor').value = '';
    document.getElementById(`outNota1`).textContent = '';
    document.getElementById(`outNota2`).textContent = '';
    document.getElementById(`outNota3`).textContent = '';
    
    document.getElementById('txtValor').focus();

}


//Botões
document.getElementById('btnVerificar').addEventListener('click', caixa)
document.getElementById('btnLimpar').addEventListener('click', limpar);