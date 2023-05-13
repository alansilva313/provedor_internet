const ico = [
    {
        icone: '<i class="bi bi-cash-coin"></i>',
        titulo: 'Preço Fixo',
        descricao: 'Chega de surpresas na fatura. Aqui na Way, todo o plano tem seu valor, mas nenhum preço terá alteração, tendo o melhor custo benefício do mercado de fibra óptica.'
    },

    {
        icone: '<i class="bi bi-router"></i>',
        titulo: 'WIFI GRÁTIS',
        descricao: 'Todos os planos acompanham um roteador wireless grátis (em forma de comodato). Conecte todos os aparelhos da sua casa com nosso roteador e curta sem moderação.'
    },

    {
        icone: '<i class="bi bi-grid"></i>',
        titulo: 'SEM COMBO',
        descricao: 'Aqui você que manda! Se optar por contratar somente a Internet, nós te damos essa opção. Nossa meta é sempre atender o desejo dos nossos clientes.'
    },

    {
        icone: '<i class="bi bi-tools"></i>',
        titulo: 'SUPORTE TÉCNICO',
        descricao: 'Na Way você conta com suporte técnico especializado, com equipes locais para melhor atende-lo'
    }


]

var opcoesGrid = document.querySelector('#opcoesGrid')
function iniciarIcone(){
   ico.forEach(dados => {

    opcoesGrid.innerHTML += `

   
    <div class='opcoes punchline'>
    <i>${dados['icone']}</i>
    <h3>${dados['titulo']}</h3>
    <p>${dados['descricao']}</p>


  
    `
    
   });
}

iniciarIcone()


//PRECOS DOS SERVICOS 

const servicos = [
    {
        cat: '400MB',
        valor: '89,90',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.',
        btn: 'Assinar',
        info: `
          Contrate e ganhe acesso ao UBOOK + DOIS APLICATIVOS a sua escolha.
         
        `,
        imgApp: './img/aplicativos.png'
    },

    {
        cat: '600MB',
        valor: '99,90',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.',
        btn: 'Assinar',
        info: `
          Contrate e ganhe acesso ao UBOOK + DOIS APLICATIVOS a sua escolha.
         
        `,
        imgApp: './img/aplicativos.png'
    },


    {
        cat: '800MB',
        valor: '109,90',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.',
        btn: 'Assinar',
        info: `
          Contrate e ganhe acesso ao UBOOK + DOIS APLICATIVOS a sua escolha.
         
        `,
        imgApp: './img/aplicativos.png'
    },

    {
        cat: '800MB',
        valor: '139,90',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.',
        btn: 'Assinar',
        info: `
          Contrate e ganhe acesso ao UBOOK e HBO MAX + DOIS APLICATIVOS a sua escolha.
         
        `,
        imgApp: './img/aplicativohbo.png'
    },

    {
        cat: '1GIGA',
        valor: '189,90',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.',
        btn: 'Assinar',
        info: `
          Contrate e ganhe acesso ao UBOOK e HBO MAX + DOIS APLICATIVOS a sua escolha.
         
        `,
        imgApp: './img/aplicativohbo.png'
    },

    {
        cat: '400MB',
        valor: '106,80',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.',
        btn: 'Assinar',
        info: `
        Contrate e ganhe acesso ao UBOOK + HBO MAX.
         
        `,
        imgApp: './img/ubook+hbo.png'
    },

    {
        cat: '600MB',
        valor: '116,80',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.',
        btn: 'Assinar',
        info: `
          Contrate e ganhe acesso ao UBOOK + HBO MAX.
         
        `,
        imgApp: './img/ubook+hbo.png'
    }



]


function iniciarValor(){
    let planos = document.querySelector('#cardPlanos')
    servicos.forEach(function(preco) {
        planos.innerHTML += `
        
        <div class="planosCard punchline">
        <h3>${preco.cat}</h3>
        <h1>R$${preco.valor}/mês</h1>
        <p>${preco.desc}</p>
        <button>${preco.btn}</button>

        <details>
         <summary>Benefícios do Plano</summary>
          <p>${preco.info}</p>
          <img src='${preco.imgApp}' alt=''>

        </details>
    </div>
        
        
        `
    })
}

iniciarValor()




const open = document.querySelector('#open')
const closed = document.querySelector('#closed')
const menuWay = document.querySelector('#menuWay')
const menuOpcoes2 = document.querySelector('#menuOpcoes2')

menuWay.addEventListener('click', function() {
    if(menuWay.checked){
        open.style.display = 'none'
        closed.style.display = 'flex'
        menuOpcoes2.style.display = 'flex'
    }else {
        open.style.display = 'flex'
        closed.style.display = 'none'
        menuOpcoes2.style.display = 'none'
    }
})





