import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import app from "./firebase-config.js";

window.atualizarEmail = function () {
  const input = document.getElementById("usuario");
  const preview = document.getElementById("previewUsuario");

  // Permite apenas letras, números e ponto
  input.value = input.value.replace(/[^a-zA-Z0-9.]/g, "");

  preview.textContent = input.value.trim() || "-";
};

window.validarCadastro = async function (event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;
  const erro = document.getElementById("erroCadastro");
  const sucesso = document.getElementById("mensagemSucesso");

  erro.textContent = "";
  sucesso.textContent = "";

  if (!usuario || !senha || !confirmarSenha) {
    erro.textContent = "⚠️ Preencha todos os campos.";
    return;
  }

  if (!/^[a-zA-Z0-9.]+$/.test(usuario)) {
    erro.textContent = "⚠️ Use apenas letras, números e ponto no nome de usuário.";
    return;
  }

  if (senha !== confirmarSenha) {
    erro.textContent = "⚠️ As senhas não coincidem.";
    return;
  }

  const emailCompleto = `${usuario}@maxiconsystems.com.br`;

  try {
    const auth = getAuth(app);
    const userCredential = await createUserWithEmailAndPassword(auth, emailCompleto, senha);

    await sendEmailVerification(userCredential.user);

    sucesso.textContent = "✅ Conta criada! Verifique seu e-mail antes de fazer login.";
    document.querySelector("form").reset();
    document.getElementById("previewUsuario").textContent = "-";
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      erro.textContent = "⚠️ Este e-mail já está cadastrado.";
    } else if (error.code === "auth/weak-password") {
      erro.textContent = "⚠️ A senha precisa ter pelo menos 6 caracteres.";
    } else {
      erro.textContent = "❌ Erro ao criar conta: " + error.message;
    }
  }
};
