function pesquisar() {

    // Log para depuração: indica que a função foi chamada
    console.log("clicou");
  
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // String vazia para armazenar os resultados gerados
    let resultados = "";
  
    // Itera sobre cada dado da pesquisa e gera o HTML correspondente
    for(let dado of dados) {
      // Adiciona o HTML de um item da pesquisa à string de resultados
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado[0].titulo}</a>
          </h2>
          <p class="descricao-meta">${dado[1].descricao}</p>
          <a href${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  
    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
  }