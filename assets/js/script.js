const form = document.querySelector('#form1')
form.addEventListener('submit', function(e){
    e.preventDefault();
})
function clicar() {

    let peso = document.querySelector('#ipeso')
    let altura = document.querySelector('#ialtura')
    let resultado = Number(peso.value) / (Number(altura.value) * Number(altura.value))
    
    let textarea= ''
if (resultado <= 18.5) {
   textarea +=`<p class='ruim'>Você está abaixo do peso</p>`
   
} else if (resultado <= 24.9) {
    textarea = `<p class="bom">Normal</p>`
}
else if (resultado <=29.9) {
    textarea=`<p class="ruim">Você está com Sobrepeso`
} else if(resultado <=39.9) {
    textarea=`<p class="ruim">você está com obesidade</p>`
}else {
textarea = `<p class="ruim">Você está com obesidade GRAVE!</p>`
}
document.querySelector('#resposta').innerHTML = resultado.toFixed(2);
 document.querySelector('#text').innerHTML = textarea
}