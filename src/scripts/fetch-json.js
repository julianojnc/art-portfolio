// json
function load() {
  fetch('https://raw.githubusercontent.com/julianojnc/MyFiles/refs/heads/main/imagens/img.json')
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector('.ilustration-content');
      data.forEach(illustration => {

        const card = document.createElement('div');
        card.classList.add('ilustration-content-card');
        card.title = illustration.name;

        const img = document.createElement('img');
        img.classList.add('ilustration-content-img');
        img.src = illustration.link;
        img.alt = illustration.name;

        card.appendChild(img);
        container.appendChild(card);
      })
    });
}

load();
