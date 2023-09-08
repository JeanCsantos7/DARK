const pegar_btn = document.querySelector('.botao');

pegar_btn.addEventListener("click", function(parar_fluxo) {
  parar_fluxo.preventDefault();

  const nome = document.querySelector('.nome');
  const alterar_nome = document.querySelector('.alterar_nome');
  alterar_nome.textContent = nome.value;

  const email = document.querySelector('.email');
  const alterar_email = document.querySelector('.alterar_email');
  alterar_email.textContent = email.value;
});

const botao_dark = document.querySelector('a');

botao_dark.addEventListener('click', function(alterar_fluxo) {
  alterar_fluxo.preventDefault();

  const fundo = document.querySelector('body');
  fundo.style.backgroundColor = '#383838';

  const textos = document.querySelectorAll('label');
  textos.forEach(cor => {
    cor.style.color = '#FFF';
    cor.style.fontWeight = 'bold';
  });

  const alterar_nome = document.querySelector('.alterar_nome')
  const alterar_email = document.querySelector('.alterar_email')
alterar_nome.style.color = '#FFF'
alterar_email.style.color = '#FFF'

 


  const conteudo = document.querySelector('.conteudo')
  conteudo.innerHTML = '<img src="./Assets/pessoa em branco.png" alt="">'


});






botao_dark.addEventListener('dblclick', function(alterar_fluxo) {
  alterar_fluxo.preventDefault();
  const fundo = document.querySelector('body');
  fundo.style.backgroundColor = '#FFF';

  const textos = document.querySelectorAll('label');
  textos.forEach(cor => {
    cor.style.color = 'black';
    cor.style.fontWeight = 'bold';
  });

  const alterar_nome = document.querySelector('.alterar_nome')
  const alterar_email = document.querySelector('.alterar_email')
alterar_nome.style.color = 'black'
alterar_email.style.color = 'black'

  const conteudo = document.querySelector('.conteudo')
  conteudo.innerHTML = '<img id="imagem" src="./Assets/do-utilizador.png" alt="">'

});


