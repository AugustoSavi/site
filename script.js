$(document).ready(function() {


  const topics = [
    "resumo",
    "experiencia",
    "formacao",
    "competencias",
    "certificacoes",
    "contatos",
    "help"
  ];

  // Informações
  const info = {
    resumo: "Atualmente trabalhando na stack: PostgreSQL, MongoDB, Docker, Java, Spring boot, AngularJs e JavaScript.\n\nConhecimento intermediário em ReactJs, Python e nos produtos da AWS.\n\nConhecimento básico nos produtos Microsoft Azure.\n\nFui vencedor do Hackathon Unesc 2020 e menção honrosa no Startup Weekend Criciúma 2019.\n\nNo meu tempo livre estou estudando Spring Boot, ReactJs, Python, C++, Segurança da informação e as vezes testando as novas tecnologias que entram no Github trending...",
    experiencia: "Betha Sistemas\n\nAnalista de sistemas (abril de 2022 - Presente - 1 ano 4 meses)\n\nProgramador de sistemas (junho de 2021 - abril de 2022 - 11 meses)\n\nAssistente de desenvolvimento (dezembro de 2020 - junho de 2021 - 7 meses)\n\n\n\nTecsul Sistemas\n\nAnalista de suporte de sistemas (outubro de 2019 - novembro de 2020 - 1 ano 2 meses)",
    formacao: "Universidade do Extremo Sul Catarinense\n\nBacharelado, Ciência da Computação (junho de 2017 - julho de 2023)",
    competencias: "Java\n\nAngularJS\n\nSpring Boot\n\nReactJS\n\nSQL\n\nNoSQL\n\nPython\n\nAWS\n\nMicrosoft Azure\n\nC++\n\nSegurança da Informação\n\nDocker\n\nMongoDB\n\nPostgreSQL\n\nJavaScript",
    certificacoes: "Semana Omnistack 11\n\nAuto Cad Civil 3D para iniciantes\n\nComo elaborar resumos científicos\n\nIntrodução à linguagem JavaScript\n\nComunicação Oral - Extensão e Ensino/Experiência - Arquitetura e Urbanismo; Engenharia Civil; Ciência da Computação",
    contatos: "+5548998685622 (Mobile)\n\naugustosavijobs@gmail.com\n\nwww.linkedin.com/in/augustosavi (LinkedIn)"
  };

  // Initialize the terminal
  const terminal =  $('body').terminal(function(command, term) {
    if (command === 'help') {
      term.echo(toBold('Tópicos disponíveis:'));
      topics.forEach(function(topic) {
        term.echo(toBold(' - ' + topic));
      });
      term.echo('digite o topico + enter e acesse o conteudo')
    } else if (topics.includes(command)) {
      term.echo(toBold(info[command]), { typing: true, delay: 30 });
    } else {
      term.echo('comando não encontrado')
    }
  }, {
    greetings: greetings.innerHTML,
    prompt: '> '
  });

  function toBold(string){
    return '[[b;;;;;;]' + string + ']'
  }
  
  terminal.insert('help');
});
