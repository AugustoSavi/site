setTimeout(function () {
  terminal.echo(`<div class="button"><a id="comandos">Comandos</a><a id="projetos">Projetos</a></div>`, { raw: true });
  
  // Adicionar um ouvinte de evento para o evento de clique
  document.getElementById("projetos").addEventListener("click", function () {
    // Coloque a função que deseja executar quando o botão for clicado aqui
    window.terminal.exec('projetos')
  });

  // Adicionar um ouvinte de evento para o evento de clique
  document.getElementById("comandos").addEventListener("click", function () {
    // Coloque a função que deseja executar quando o botão for clicado aqui
    window.terminal.exec('help')
  });
},200)
