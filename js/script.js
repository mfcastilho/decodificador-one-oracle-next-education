var x = "";

let form = document.querySelector("form");
let textoCriptografado = document.querySelector("#texto_criptografado");
let botaoCriptografar = document.querySelector("#botao-criptografar");
let botaDescriptografar = document.querySelector("#botao-descriptografar");
let campoTextArea = document.querySelector("#campo-text_area");

function validandoTexto(x){
  //expressão regular(letras maiúsculas e letras com acentuação)
  let regex = /^[A-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/g;
  
  for(let i = 0; i < x.length; i++){
    
    if(regex.test(x.charAt(i))){
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}

function criptografar(){
  form.addEventListener("submit", function(event){
    event.preventDefault();
    x = document.getElementById("campo-text_area").value;
    let resultado = "";
    let resp = validandoTexto(x);

    if(!resp){
      for(let i = 0; i < x.length; i++){
        if(x.charAt(i) == 'a'){
          resultado += "ai";
        }else if(x.charAt(i) == 'e'){
          resultado += "enter";
        }else if(x.charAt(i) == 'i'){
          resultado += "imes";
        }else if(x.charAt(i) == 'o'){
          resultado += "ober";
        }else if(x.charAt(i) == 'u'){
          resultado += "ufat";
        }else{
          resultado += x.charAt(i);
        }
      }

      textoCriptografado.classList.remove("danger");
      textoCriptografado.textContent = resultado;   
    }else if(resp){
    
      textoCriptografado.classList.add("danger");

      textoCriptografado.classList.remove("invisivel");
      textoCriptografado.textContent =  "Erro!É aceito somento letras minúsculas e sem acento!";
     
    }

  });
}

function descriptografar(){
  form.addEventListener("submit", function(event){
    event.preventDefault();
    let textoCriptografado = document.querySelector("#texto_criptografado");
    console.log(textoCriptografado.value)
    x = document.getElementById("campo-text_area").value;
    let resultado = "";
    let y  = textoCriptografado.value

    
    
    for(let i = 0; i < x.length; i++){
      

      if(x.charAt(i) == 'a'){
        resultado += "a";
        i+=1;
      }else if(x.charAt(i) == 'e'){
        resultado += "e";
        i+=4;
      }else if(x.charAt(i) == 'i'){
        resultado += "i";
        i+=3;
      }else if(x.charAt(i) == 'o'){
        resultado += "o";
        i+=3;
      }else if(x.charAt(i) == 'u'){
        resultado += "u";
        i+=3;
      }else{
        resultado += x.charAt(i);
      }
      
      textoCriptografado.textContent = resultado;
      textoCriptografado.classList.remove("danger");
         
      textoCriptografado.classList.remove("invisivel");
    }  
  });
}

function copiaTexto() {
  
  var copiaTexto = document.querySelector("#texto_criptografado");
  navigator.clipboard.writeText(copiaTexto.value);
  Swal.fire('Texto Copiado');
  document.querySelector("#campo-text_area").value = copiaTexto.value;
  // alert("Texto Copiado");
  // form.reset();
  textoCriptografado.textContent = "";
}




