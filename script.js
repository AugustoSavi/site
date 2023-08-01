var path = '~/documents/best_candidate_resume';

$(document).ready(function () {

  const topics = [
    "resumo"
  ];

  // Informações
  const info = {
    resumo: `
    _      _   _    ____   _   _   ____    _____    ___        ____       _     __     __  ___ 
   / \\    | | | |  / ___| | | | | / ___|  |_   _|  / _ \\      / ___|     / \\    \\ \\   / / |_ _|
  / _ \\   | | | | | |  _  | | | | \\___ \\    | |   | | | |     \\___ \\    / _ \\    \\ \\ / /   | | 
 / ___ \\  | |_| | | |_| | | |_| |  ___) |   | |   | |_| |      ___) |  / ___ \\    \\ V /    | | 
/_/   \\_\\  \\___/   \\____|  \\___/  |____/    |_|    \\___/      |____/  /_/   \\_\\    \\_/    |___|


[[b;#00ff00;]Cientista da computação | Analista de sistemas Pleno | Java | Node | AngularJS | ReactJS | SQL | NoSQL]
  Forquilhinha, Santa Catarina, Brasil

[[b;#00ff00;]Resumo]
  Atualmente trabalhando na stack: PostgreSQL, MongoDB, Docker, Java, Spring boot, AngularJs e JavaScript. 
  Conhecimento intermediário em ReactJs, Python e nos produtos da AWS. 
  Conhecimento básico nos produtos Microsoft Azure. 
  Fui vencedor do Hackathon Unesc 2020 e menção honrosa no Startup Weekend Criciúma 2019. 
  No tempo livre, dedica-se a estudar Spring Boot, ReactJs, Python, C++, Segurança da informação 
  e às vezes testa as novas tecnologias que entram no Github trending...

[[b;#00ff00;]Experiências]

    [[b;#a320ce;]Betha Sistemas]
    Analista de sistemas (abril de 2022 - Presente - 1 ano 4 meses)
    Programador de sistemas (junho de 2021 - abril de 2022 - 11 meses)
    Assistente de desenvolvimento (dezembro de 2020 - junho de 2021 - 7 meses)

    [[b;#a320ce;]Tecsul Sistemas]
    Analista de suporte de sistemas (outubro de 2019 - novembro de 2020 - 1 ano 2 meses)

[[b;#00ff00;]Formação acadêmica]

Universidade do Extremo Sul Catarinense
Bacharelado, Ciência da Computação (junho de 2017 - julho de 2023)

[[b;#00ff00;]Principais competências]

Java
AngularJS
Spring Boot

[[b;#00ff00;]Contato]

Celular: +5548998685622
Email: augustosavijobs@gmail.com
LinkedIn: www.linkedin.com/in/augustosavi
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
      term.echo(toBold(info[command]), { typing: false, delay: 3 });
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
