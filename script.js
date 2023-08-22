var path = '~/documents/best_candidate_resume';

$(document).ready(function () {

  const topics = [
    "resumo"
  ];

  // Informações
  const info = {
    resumo: `
------- Augusto Savi -------


Vencedor do Hackathon Unesc 2020.

Menção honrosa Startup Weekend Criciúma 2019. 


[[b;#00ff00;]Resumo]
  Atualmente trabalhando na stack: 
    - PostgreSQL
    - MongoDB
    - Docker
    - Java
    - Spring boot
    - AngularJs
    - JavaScript

  Conhecimento intermediário:
    - ReactJs
    - Python
    - AWS 

[[b;#00ff00;]Experiências]

    [[b;#a320ce;]Betha Sistemas]
    - Analista de sistemas (abr/22 - Presente - 1 ano 4 meses)

    - Programador de sistemas (jun/21 - abl/22 - 11 meses)

    - Assistente de desenvolvimento (dez/20 - jun/21 - 7 meses)

    [[b;#a320ce;]Tecsul Sistemas]
    - Analista de suporte de sistemas (out/19 - nov/20 - 1 ano 2 meses)

[[b;#00ff00;]Formação acadêmica]
  Bacharelado em Ciência da Computação pela Universidade do Extremo Sul Catarinense (jun/17 - jul/23)

[[b;#00ff00;]Contato]
  Whatsapp: [[!;;;;https://wa.me/554899868522?text=Ol%C3%A1!%20Encontrei%20voc%C3%AA%20pelo%20site%20e%20gostaria%20de%20saber%20um%20pouco%20mais%20sobre%20voc%C3%AA.%20Estou%20interessado%20em%20saber%20sobre%20suas%20experi%C3%AAncias%20e%20habilidades.%20Se%20poss%C3%ADvel,%20podemos%20agendar%20uma%20conversa%20para%20discutirmos%20mais%20detalhes.%20Aguardo%20ansiosamente%20sua%20resposta!%20Atenciosamente]Mande uma mensagem]
  Email: augustosavijobs@gmail.com
  LinkedIn: [[!;;;;https://www.linkedin.com/in/augustosavi/]Connect with me]
  Github: [[!;;;;https://github.com/AugustoSavi]AugustoSavi]
`
  };

  // Initialize the terminal
  const terminal = $('body').terminal(function (command, term) {


    if (command === 'help') {
      term.echo(toBold('Comandos disponíveis:'));
      topics.forEach(function (topic) {
        term.echo(toBold(' - ' + topic));
      });
      term.echo('digite o comando + enter para ver mais detalhes')
    } else if (topics.includes(command)) {
      term.echo(toBold(info[command]));
    } else {
      term.echo('comando não encontrado')
    }
  }, {
    greetings: false,
    prompt() {
      return `${color('green', 'best@recruiter')}:${color('blue', path)}$ `;
    },
    onInit: function(term) {
      term.css({
        'background-color': '#2c001e', // Cor de fundo - #2c001e (tom de azul escuro)
        'color': '#ffffff', // Cor do texto - #ffffff (branco)
      });
      // Definindo cor de destaque de links clicáveis
      term.css('a', {
        'color': '#4e9a06', // Cor dos links - #4e9a06 (verde)
        'text-decoration': 'underline', // Sublinhado nos links
      });
    }
  });

  function toBold(string) {
    return '[[b;;;;;;]' + string + ']'
  }

  terminal.exec('resumo');

  setTimeout(function(){
    var scroller = document.getElementsByClassName('terminal-scroller');
    scroller[0].scrollTop = 0;
  }, 100)
});

function color(name, string) {
  var colors = {
    blue: '#55f',
    green: '#4d4',
    grey: '#999',
    red: '#A00',
    yellow: '#FF5',
    violet: '#a320ce',
    white: '#fff'
  }
  if (colors[name]) {
    return '[[;' + colors[name] + ';]' + string + ']';
  } else {
    return string;
  }
}
