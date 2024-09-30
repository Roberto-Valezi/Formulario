
const inputs = document.querySelectorAll('.campo')
const campoObrigatorio = document.querySelectorAll('.campo-obrigatorio')
const botaoEnviar = document.querySelector('.btn-enviar')


botaoEnviar.addEventListener('click', function(event){
    event.preventDefault(); //impede de enviar ?
    
    inputs.forEach((input,index) =>{
        if(input.value.trim() == ""){
            input.classList.add('campo-vazio');
            campoObrigatorio[index].classList.add('campo-vazio');
            input.classList.remove('campo-preenchido')
        }
        else{
            input.classList.add('campo-preenchido');
            campoObrigatorio[index].classList.remove('campo-vazio');
            input.classList.remove('campo-vazio');
        }
    })
})