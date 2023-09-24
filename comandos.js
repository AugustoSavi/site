const info = {
        'cat cv.md': `
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

[[b;#00ff00;]Contatos]
Email: augustosavijobs@gmail.com
LinkedIn: [[!;;;;https://www.linkedin.com/in/augustosavi/]conecte-se]
Github: [[!;;;;https://github.com/AugustoSavi]Acessar]
`,

'projetos': 'Em desenvolvimento 👨‍🔧'
};

const topics = [
    "cat cv.md",
    "projetos"
];

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

function toBold(string) {
    return '[[b;;;;;;]' + string + ']'
}
