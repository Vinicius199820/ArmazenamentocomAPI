// Função para lidar com o envio do formulário
  document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);

    // Requisição para a API do file.io com key
    fetch('https://file.io/?username=5QN6QSQ.PEH26DH-4BK41KF-KSMW057-P26Q57G', {
      method: 'POST',
      body: formData
    })

    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert('Arquivo enviado com sucesso!');

      // Adiciona o arquivo enviado à lista de arquivos
      var uploadedFilesList = document.getElementById('uploadedFiles');
      var listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.innerHTML = `<a href="${data.link}" target="_blank">${data.name}</a>`;
      uploadedFilesList.appendChild(listItem);
    })
    .catch(error => {
      console.error('Erro ao enviar o arquivo:', error);
      alert('Erro ao enviar o arquivo. Por favor, tente novamente.');
    });
  });

