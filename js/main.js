import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import app from "./firebase-config.js";

window.validarLogin = async function (event) {
  event.preventDefault();

  const email = document.querySelector('input[type="email"]').value.trim();
  const senha = document.querySelector('input[type="password"]').value;
  const erro = document.getElementById("erroLogin");
  const sucesso = document.getElementById("mensagemSucesso");

  erro.textContent = "";
  sucesso.textContent = "";

  if (!email || !senha) {
    erro.textContent = "⚠️ Preencha todos os campos.";
    return;
  }

  try {
    const auth = getAuth(app);
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);

    // ❗Verifica se o e-mail foi confirmado
    if (!userCredential.user.emailVerified) {
      erro.textContent = "⚠️ E-mail ainda não verificado. Verifique sua caixa de entrada.";
      return;
    }

    sucesso.textContent = "✅ Login realizado com sucesso!";
    // Redirecionar: window.location.href = "home.html";
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      erro.textContent = "⚠️ Usuário não encontrado.";
    } else if (error.code === "auth/wrong-password") {
      erro.textContent = "⚠️ Senha incorreta.";
    } else {
      erro.textContent = "Erro ao entrar: " + error.message;
    }
  }
};
