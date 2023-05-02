const botaoApagar = document.querySelector("#botaoApagar");
const botaoCopiar = document.querySelector("#botaoCopiar");

const botaoApagarLinha = document.querySelector("#botaoApagarLinha");

// seleciona a div pelo ID
const minhaDiv = document.querySelector("#minhaDiv");





botaoApagar.addEventListener("click", function() {
    // limpa o array
    linhasDeTexto = [];
    // atualiza o conteúdo da div
    atualizarDiv();
  });
  
  botaoCopiar.addEventListener("click", function() {
    // cria um elemento de texto temporário
    const tempEl = document.createElement("textarea");
    // define o valor do texto como o conteúdo da div
    tempEl.value = linhasDeTexto.map(linha => linha.texto).join("\n");
    // adiciona o elemento temporário ao DOM
    document.body.appendChild(tempEl);
    // seleciona todo o texto no elemento temporário
    tempEl.select();
    // copia o texto selecionado para a área de transferência
    document.execCommand("copy");
    // remove o elemento temporário do DOM
    document.body.removeChild(tempEl);
  });
  
  botaoApagarLinha.addEventListener("click", function() {
    // verifica se há linhas de texto
    if (linhasDeTexto.length > 0) {
      // remove a última linha do array
      linhasDeTexto.splice(linhasDeTexto.length - 1, 1);
      // atualiza o conteúdo da div
      atualizarDiv();
    }
  });
  
  // função para atualizar o conteúdo da div
  function atualizarDiv() {
    // define o conteúdo da div como vazio
    minhaDiv.innerHTML = "";
    // itera sobre o array de linhas de texto, do último para o primeiro
    for (let i = linhasDeTexto.length - 1; i >= 0; i--) {
      // adiciona cada linha de texto à div, com uma quebra de linha
      minhaDiv.innerHTML += linhasDeTexto[i].texto + "<br>";
    }
  }