
/* Modal */

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

  /*Carregar Imagem*/

  function loadFile(event){
    //variável que recebe o elemento img
    var imgPrev = document.getElementById('imgPrev')

    //link para a imagem
    var url = URL.createObjectURL(event.target.files[0])

    //altera a propriedade src para o link da imagem
    imgPrev.src = url
    }
