// Dados fictícios de usuários para autenticação
const validUsers = [
    { username: "admin", password: "123456" },
    { username: "usuario1", password: "usa1" },
    { username: "usuario2", password: "usa2" },
  ];
  
  // Manipular o evento de envio do formulário
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("errorMessage");
  
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o recarregamento da página
  
    // Obter os valores dos campos
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Verificar se o usuário é válido
    const user = validUsers.find(
      (user) => user.username === username && user.password === password
    );
  
    if (user) {
      // Login bem-sucedido
      errorMessage.textContent = "";
      alert("Login realizado com sucesso!");
      // Redirecionar para outra página (exemplo)
      window.location.href = "https://github.com/getulio-Dev/lojadetenis-pedevento.git"; // Troque por sua página de destino
    } else {
      // Exibir mensagem de erro
      errorMessage.textContent = "Usuário ou senha inválidos!";
    }
  });
  