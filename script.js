const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    // Ajusta o tamanho do canvas para cobrir a tela inteira
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();

    // Caracteres estilo Matrix (Katakana japonês + numéricos/símbolos)
    const characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);

    // Posição vertical Y de cada coluna
    let drops = Array(columns).fill(1);

    function draw() {
      // Cria o efeito de rastro escurecendo a tela a cada frame
      ctx.fillStyle = 'rgba(2, 11, 20, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Configuração da cor e fonte das letras (Tom ciano/azul)
      ctx.fillStyle = '#00f0ff';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Seleciona um caractere aleatório
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Desenha o caractere na coluna correspondente
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reseta o rastro para o topo após passar da borda da tela
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    // Executa a animação
    setInterval(draw, 33);

    // Mantém o efeito responsivo caso o usuário redimensione a janela
    window.addEventListener('resize', () => {
      resizeCanvas();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    });