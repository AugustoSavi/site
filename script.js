var path = '~/documents/best_candidate_resume';

$(document).ready(function () {

  // Initialize the terminal
  const terminal = $('body').terminal(function (command, term) {

    if (command === 'help') {
      term.echo(toBold('Comandos disponíveis:'));
      topics.forEach(function (topic) {
        term.echo(toBold(' - ' + topic));
      });
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
    onInit: function (term) {
      term.css({
        'background-color': '#2c001e', // Cor de fundo - #2c001e (tom de azul escuro)
        'color': '#ffffff', // Cor do texto - #ffffff (branco)
      });
    }
  });

  terminal.exec('cat cv.md');
  window.terminal = terminal;
});
