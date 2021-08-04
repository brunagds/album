//variavel que recebe o elemento html(modal)
var exampleModal = document.getElementById('confirmationModal')

//adiciona um evento toda vez que o modal for aberto
  exampleModal.addEventListener('show.bs.modal', function (event) {

    //botão que acionou o modal
    var button = event.relatedTarget

    //variavel que recebe o formulario modal
    var form = document.getElementById('formDeletePhoto')

    //alterando o Action(rota) do formulario
    form.action = "/photos/"+ button.getAttribute('data-photo-id')
  })
