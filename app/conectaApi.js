async function listaProdutos() {
  const conexao = await fetch(
    "https://my-json-server.typicode.com/Fivesz/api-alurageek/produtos"
  );
  const conexaoConvertida = await conexao.json();
  console.log(conexaoConvertida);

  return conexaoConvertida;
}

async function criaProduto(nome, imagem, valor) {
  const conexao = await fetch(
    "https://my-json-server.typicode.com/Fivesz/api-alurageek/produtos",
    {
      method: "POST",
      headers: {
        "Content-type": "aplication/json",
      },
      body: JSON.stringify({
        nome: nome,
        imagem: imagem,
        valor: valor,
      }),
    }
  );

  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

async function deletaProduto(id) {
  const response = await fetch(
    `https://my-json-server.typicode.com/Fivesz/api-alurageek/produtos/${id}`,
    {
      method: "DELETE",
    }
  );
  const responseConvertida = await response.json();

  return responseConvertida;
}

export const conectaApi = {
  listaProdutos,
  criaProduto,
  deletaProduto,
};
