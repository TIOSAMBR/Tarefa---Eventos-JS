// Função para gerar uma cor aleatória em formato hexadecimal
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Adiciona o manipulador de eventos para cada div interna
  const innerDivs = document.querySelectorAll('.inner-div');
  innerDivs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      const randomColor = getRandomColor();
      div.style.backgroundColor = randomColor;
    });
  });
  