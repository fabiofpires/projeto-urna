let seuVotoPara = document.querySelector('.d-1-1 span'); 
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = '';
let votoBranco = false;
let votos = []; //PARA GUARDAR OS VOTOS 

function comecarEtapa(){
    let etapa = etapas[etapaAtual]; 

    let numeroHtml = '';

    numero = ''; //ZERAR NUMERO 

    votoBranco = false;

    for (let i=0; i< etapa.numeros; i++) { 
        if( i === 0 ){
           numeroHtml += '<div class="numero pisca"></div>' 
          }else{
            numeroHtml += '<div class="numero"></div>'
          }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml; 
}

function atualizaInterface(){
   let etapa = etapas[etapaAtual]; 

   let candidato = etapa.candidatos.filter((item) => { //No array vai pegar um candidato e vai fazer uma função filter
        if(item.numero === numero){ //na função item.numero se eu digitar um numero q esta no array
            return true; // vai voltar verdadeiro 
        }else{
           return false; // senao: vai voltar falso
        }
   })
   if(candidato.length > 0) { // Se ele achar algum candidato
      candidato = candidato[0]; //puxar o candidato da array 
      seuVotoPara.style.display = 'block'; //Para mostrar na tela 
      aviso.style.display = 'block'; //Para mostrar na tela 
      descricao.innerHTML = `Nome: ${candidato.nome} </br> Partido: ${candidato.partido}`; //Mostrar o candidato e o partido 

      let fotosHtml = ''; 

      for(let i in candidato.fotos){
         if(candidato.fotos[i].small){ //USO O IMAGE SMALL PARA AS FOTOS DO PREFEITO CABER NA TELA
            fotosHtml += `<div class="d-1-image small"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
         }else{
            fotosHtml += `<div class="d-1-image"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
         }
         }
         

      lateral.innerHTML = fotosHtml; 
   } else{
      seuVotoPara.style.display = 'block';
      aviso.style.display = 'block';
      descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'

   }
}

function clicou(n){
   let elNumero = document.querySelector('.numero.pisca');
   if (elNumero !== null) {
      elNumero.innerHTML = n;
      numero = `${numero}${n}`

      elNumero.classList.remove('pisca'); 
      if(elNumero.nextElementSibling !== null){
         elNumero.nextElementSibling.classList.add('pisca');
      }else{
         atualizaInterface();
      }
   }
}

function branco(){
   if( numero === ''){
      votoBranco = true; 
      seuVotoPara.style.display = 'block';
      aviso.style.display = 'block';
      numeros.innerHTML = '';
      descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>'
   }else {
      alert("Para vota em BRANCO, não pode ter digitado nenhum número!")
   }
}

function corrige(){
    comecarEtapa();  //USA ESSA FUNÇÃO PARA CORRIGIR. 
}

function confirma(){
   let etapa = etapas[etapaAtual];

   let votoConfirmado = false; 

   if(votoBranco === true){
      votoConfirmado = true; 
      votos.push({ //USAR O PUSH PARA GUARDAR O VOTO 
         etapa: etapas[etapaAtual].titulo,
         voto: 'branco'
      });
   }else if(numero.length === etapa.numeros) {
      votoConfirmado = true;
      votos.push({ //USAR O PUSH PARA GUARDAR O VOTO 
         etapa: etapas[etapaAtual].titulo,
         voto: numero
      });
   }

   if(votoConfirmado){
      etapaAtual++;
        if(etapas[etapaAtual] !== undefined){
           comecarEtapa();
        }else{
           document.querySelector('.tela').innerHTML = '<div class="aviso--gigante pisca">FIM</div>';
           console.log(votos); //Para guardar nesse console os dados de voto
        }
   }
}

comecarEtapa(); 