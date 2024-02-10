const perguntas = [
    {
      Pergunta: "O que é JavaScript?",
      Respostas: [
        "Uma linguagem de programação de servidor",
        "Uma biblioteca de design de interface",
        "Uma linguagem de programação de script para navegador"
      ],
      Correta: 2
    },
    {
      Pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      Respostas: [
        "let x = 5;",
        "const x = 5;",
        "var x = 5;"
      ],
      Correta: 0
    },
    {
      Pergunta: "Como você faz um comentário de uma linha em JavaScript?",
      Respostas: [
        "// Isso é um comentário",
        "/* Isso é um comentário */",
        "# Isso é um comentário"
      ],
      Correta: 0
    },
    {
      Pergunta: "Qual é a função do operador '=== ' em JavaScript?",
      Respostas: [
        "Atribuição",
        "Comparação de valor e tipo",
        "Concatenação"
      ],
      Correta: 1
    },
    {
      Pergunta: "O que é o DOM em JavaScript?",
      Respostas: [
        "Document Object Model - Uma interface de programação para documentos HTML e XML.",
        "Directory of Modules - Uma estrutura de organização de arquivos no JavaScript.",
        "Data Object Model - Um modelo de dados para armazenar informações no JavaScript."
      ],
      Correta: 0
    },
    {
      Pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
      Respostas: [
        "Selecionar um elemento pelo ID",
        "Selecionar um elemento pelo nome da tag",
        "Selecionar um elemento usando um seletor CSS"
      ],
      Correta: 2
    },
    {
      Pergunta: "O que é o evento 'click' em JavaScript?",
      Respostas: [
        "Um evento relacionado ao teclado",
        "Um evento relacionado ao mouse",
        "Um evento relacionado à rotação do dispositivo"
      ],
      Correta: 1
    },
    {
      Pergunta: "O que é o AJAX em JavaScript?",
      Respostas: [
        "Uma biblioteca de animação",
        "Uma técnica de programação assíncrona",
        "Um novo tipo de variável"
      ],
      Correta: 1
    },
    {
      Pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      Respostas: [
        "'let' é usado para variáveis que não podem ser alteradas, enquanto 'const' é para variáveis que podem ter seu valor reatribuído.",
        "'let' é usado para variáveis de escopo global, enquanto 'const' é para variáveis de escopo local.",
        "'let' é usado para variáveis que podem ter seu valor reatribuído, enquanto 'const' é para variáveis que não podem ser alteradas."
      ],
      Correta: 2
    },
    {
      Pergunta: "Qual é a principal diferença entre 'null' e 'undefined' em JavaScript?",
      Respostas: [
        "'null' representa a ausência de valor atribuído intencionalmente, enquanto 'undefined' representa a ausência de valor atribuído automaticamente.",
        "'null' representa a ausência de valor atribuído automaticamente, enquanto 'undefined' representa a ausência de valor atribuído intencionalmente.",
        "'null' e 'undefined' são usados de forma intercambiável em JavaScript."
      ],
      Correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de '+ totalDePerguntas
  
  
  for(const item of perguntas) {
    //alert(item.Pergunta)
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.Pergunta
    
    for(const resposta of item.Respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.Respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.Correta
        //se encontrar o item selecionado na lista ele deleta
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de '+ totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    //remove a primeira resposta
    quizItem.querySelector('dl dt').remove()
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
    
  }
  
  