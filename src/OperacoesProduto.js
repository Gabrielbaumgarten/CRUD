import axios from 'axios'

function cadastrarProduto(titulo, descricao, data, categoria){
    axios.post('http://localhost:8000/produtos',
        {
            titulo: titulo,
            descricao: descricao,
            data: data,
            categoria: categoria
        }
    ).then(async (resposta)=> {
        if(resposta.status === 201){
            var notificacao = document.createElement('div')
            notificacao.classList.add('notificacao')
            notificacao.innerHTML = 'Produto cadastrado com sucesso!'

            var body = document.getElementsByTagName('body')[0]

            body.appendChild(notificacao)

            await new Promise(r => setTimeout(r, 2000))

            body.removeChild(notificacao)

            document.getElementsByClassName('div-novo-produto')[0].style.display = 'none'

        }
        console.log(resposta)
    }) 
}

async function buscarProdutos(){
    var resposta = await axios.get('http://localhost:8000/produtos')

    if(resposta.status === 200){
        return resposta.data
    } else{
        var notificacao = document.createElement('div')
            notificacao.classList.add('notificacao')
            notificacao.innerHTML = 'Ops! Houve algum problema com os produtos'

            var body = document.getElementsByTagName('body')[0]

            body.appendChild(notificacao)

            await new Promise(r => setTimeout(r, 2000))

            body.removeChild(notificacao)

            return null
    }

}

async function alterarProduto(id, titulo, descricao, data, categoria){
    var resposta = await axios.put('http://localhost:8000/produtos/'+id,
                                    {
                                        titulo: titulo,
                                        descricao: descricao,
                                        data: data,
                                        categoria: categoria
                                    }
    )
    if(resposta.status === 200){
        var notificacao = document.createElement('div')
        notificacao.classList.add('notificacao')
        notificacao.innerHTML = 'Produto atualizado com sucesso!'

        var body = document.getElementsByTagName('body')[0]

        body.appendChild(notificacao)

        await new Promise(r => setTimeout(r, 2000))

        body.removeChild(notificacao)

    } else{
            notificacao = document.createElement('div')
            notificacao.classList.add('notificacao')
            notificacao.innerHTML = 'Ops! Houve algum problema com os produtos'

            body = document.getElementsByTagName('body')[0]

            body.appendChild(notificacao)

            await new Promise(r => setTimeout(r, 2000))

            body.removeChild(notificacao)

            return null
    }
}

async function removerProduto(id, titulo, descricao, data, categoria){
    var resposta = await axios.delete('http://localhost:8000/produtos/'+id)
    if(resposta.status === 200){
        var notificacao = document.createElement('div')
        notificacao.classList.add('notificacao')
        notificacao.innerHTML = 'Produto removido com sucesso!'

        var body = document.getElementsByTagName('body')[0]

        body.appendChild(notificacao)

        await new Promise(r => setTimeout(r, 2000))

        body.removeChild(notificacao)

    } else{
            notificacao = document.createElement('div')
            notificacao.classList.add('notificacao')
            notificacao.innerHTML = 'Ops! Houve algum problema com os produtos'

            body = document.getElementsByTagName('body')[0]

            body.appendChild(notificacao)

            await new Promise(r => setTimeout(r, 2000))

            body.removeChild(notificacao)

            return null
    }
}

export {cadastrarProduto, buscarProdutos, alterarProduto, removerProduto};