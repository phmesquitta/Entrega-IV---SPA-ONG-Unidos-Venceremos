export const Templates = {
  home: `<h1>Home</h1><a href="#" data-route="projetos">Ir para Projetos</a>`,
  projetos: `<h1>Projetos</h1><a href="#" data-route="contato">Ir para Contato</a>`,
  contato: `
    <h1>Contato</h1>
    <form id="contatoForm">
      <input id="nome" required minlength="3" placeholder="Nome"><br>
      <input id="email" type="email" required placeholder="Email"><br>
      <textarea id="mensagem" required minlength="10"></textarea><br>
      <button type="submit">Enviar</button>
    </form>
    <a href="#" data-route="home">Voltar</a>
  `
};
