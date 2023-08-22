
let nome = "Funcionário(a): Andressa Lorena Marinho";
let idade = 22;

let salario = 1499.45;


function Calcular(salario){
    let porcentagem = 0;
    let reajuste = 0;
    let salarioatual = 0;


    if(salario <= 280)
        {
            porcentagem = 0.2;
            reajuste = salario * porcentagem;
            salarioatual = salario + reajuste;

        }else if(salario > 280 && salario <= 700){

            porcentagem = 0.15;
            reajuste = salario * porcentagem;
            salarioatual = salario + reajuste;

        }else if(salario > 700 && salario < 1500){
            
            porcentagem = 0.1;
            reajuste = salario * porcentagem;
            salarioatual = salario + reajuste;

        }else if(salario >= 1500){

            porcentagem = 0.05;
            reajuste = salario * porcentagem;
            salarioatual = salario + reajuste;
            
        }

        console.log("\nO salário antes do reajuste: R$ "+ salario);
        console.log("O percentual de aumento aplicado: "+ porcentagem +"%");
        console.log("O valor do aumento: R$ "+ reajuste+",00");
        console.log("O novo salário, após o aumento: R$ "+ salarioatual +"\n"); 
    }

Calcular(salario);