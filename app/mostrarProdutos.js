import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");
function constroiCard(nome, imagem, valor, id) {
  const produto = document.createElement("li");
  produto.id = `${id}`;
  produto.className = "produtos__pratileira__item";
  produto.innerHTML = `
    <img class="produtos__pratileira__item__imagem" src="${imagem}" alt="">
                    <p class="produtos__pratileira__item__nome">${nome}</p>
                    <div class="produtos__pratileira__item__preco-flex">
                        <span class="produtos__pratileira__item__preco__valor">$ ${valor}</span>
                        <button id="7${id}" class="produtos__pratileira__item__preco__botao"><img src="assets/icone/🦆 icon _trash 2_.svg" alt=""></button>
                    </div>
    `;

  return produto;
}

async function listaProduto() {
  const listaApi = await conectaApi.listaProdutos();
  listaApi.forEach((elemento) =>
    lista.appendChild(
      constroiCard(elemento.nome, elemento.imagem, elemento.valor, elemento.id)
    )
  );
}

listaProduto();
