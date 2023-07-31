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
    resumo: "Atualmente trabalhando na stack: PostgreSQL, MongoDB, Docker, Java, Spring boot, AngularJs e JavaScript.\nConhecimento intermediário em ReactJs, Python e nos produtos da AWS.\nConhecimento básico nos produtos Microsoft Azure.\nFui vencedor do Hackathon Unesc 2020 e menção honrosa no Startup Weekend Criciúma 2019.\nNo meu tempo livre estou estudando Spring Boot, ReactJs, Python, C++, Segurança da informação e as vezes testando as novas tecnologias que entram no Github trending...",
    experiencia: "Betha Sistemas\nAnalista de sistemas (abril de 2022 - Presente - 1 ano 4 meses)\nProgramador de sistemas (junho de 2021 - abril de 2022 - 11 meses)\nAssistente de desenvolvimento (dezembro de 2020 - junho de 2021 - 7 meses)\n\nTecsul Sistemas\nAnalista de suporte de sistemas (outubro de 2019 - novembro de 2020 - 1 ano 2 meses)",
    formacao: "Universidade do Extremo Sul Catarinense\nBacharelado, Ciência da Computação (junho de 2017 - julho de 2023)",
    competencias: "Java\nAngularJS\nSpring Boot\nReactJS\nSQL\nNoSQL\nPython\nAWS\nMicrosoft Azure\nC++\nSegurança da Informação\nDocker\nMongoDB\nPostgreSQL\nJavaScript",
    certificacoes: "Semana Omnistack 11\nAuto Cad Civil 3D para iniciantes\nComo elaborar resumos científicos\nIntrodução à linguagem JavaScript\nComunicação Oral - Extensão e Ensino/Experiência - Arquitetura e Urbanismo; Engenharia Civil; Ciência da Computação",
    contatos: "+5548998685622 (Mobile)\naugustosavijobs@gmail.com\nwww.linkedin.com/in/augustosavi (LinkedIn)"
  };

  // Initialize the terminal
  $('body').terminal(function(command, term) {
    if (command === 'help') {
      term.echo('Tópicos disponíveis:');
      topics.forEach(function(topic) {
        term.echo(' - ' + topic);
      });
      term.echo('digite o topico + enter e acesse o conteudo')
    } else if (topics.includes(command)) {
      term.echo(info[command]);
    } else {
      // Animação de digitação
      let index = 0;
      const typeAnimation = setInterval(function() {
        term.set_command(command.substr(0, index));
        index++;
        if (index > command.length) {
          clearInterval(typeAnimation);
          term.echo(""); // Pula linha após a animação
        }
      }, 50); // Velocidade da animação (50ms)
    }
  }, {
    greetings: greetings.innerHTML,
    prompt: '> '
  });
});