



$(window).on('load', function () {
  var aData = [{ codigo: '001001', nome: 'Jose da Silva', email: 'jose@email.com', telefone: '(11) 99901-1234' },

  { codigo: '001002', nome: 'Marcio de Souza', email: 'marcio@email.com', telefone: '(11) 99902-1234' },

  { codigo: '001003', nome: 'Mauricio Cruz', email: 'mauricio@email.com', telefone: '(11) 99903-1234' },

  { codigo: '001004', nome: 'Fabiana Dias', email: 'fabiana@email.com', telefone: '(11) 99904-1234' }

  ]


  for (i = 0; i < aData.length; i++) {
    $('.lista').append(`
    <div class="col">
    <div class="card bg-gray-400">
      <div class="card-body">
        <p class="card-text text-danger">${aData[i].codigo}</p>
        <h5 class="card-title"><strong class="bg-danger text-light">${aData[i].nome}</strong></h5>
        <a href="mailto:${aData[i].email} class="card-text">${aData[i].email}</a>
        <p class="card-text">${aData[i].telefone}</p>
      </div>
    </div>
  </div>`
    )
  }


  $('button').click((e) => {
    e.preventDefault()
    console.log('ola')
    aData.push({ codigo: `${$('#codigo').val()}`, nome: `${$('#nome').val()}`, email: `${$('#email').val()}`, telefone: `${$('#telefone').val()}` })
    console.log(aData)

    for (i = aData.length - 1; i < aData.length; i++) {

      if ($('#codigo').val() == '' || $('#nome').val() == '' || $('#email').val() == '' || $('#telefone').val() == '') {
        $('btn').setAttribute("disabled", "disabled");
      }

      else {
        $('.lista').append(`
        <div class="col">
        <div class="card bg-gray-400">
          <div class="card-body">
            <p class="card-text text-danger">${aData[i].codigo}</p>
            <h5 class="card-title"><strong class="bg-danger text-light">${aData[i].nome}</strong></h5>
            <a href="mailto:${aData[i].email} class="card-text">${aData[i].email}</a>
            <p class="card-text">${aData[i].telefone}</p>
          </div>
        </div>
      </div>`
        )
      }
    }

  })

  $(document).ready(() => {
    $('#codigo').mask('000000');
    $('#telefone').mask('(00) 00000-0000')
  })

})
