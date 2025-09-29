function mostrarCurso(curso) {
    // esconde todos
    document.querySelectorAll('.detalhe-curso').forEach(secao => secao.style.display = 'none');

    // mostra apenas o escolhido
    const secao = document.getElementById(`detalhe-${curso}`);
    if (secao) {
      secao.style.display = 'block';
      secao.scrollIntoView({ behavior: "smooth" });
    }
  }