import React from 'react'
import './list.css'
import IconAdd from './assets/icon-add.svg'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {cadastrarProduto, buscarProdutos, alterarProduto, removerProduto} from './OperacoesProduto';


class ListPage extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            produtos: [],
            titulo: '',
            descricao: '',
            data: '',
            categoria: '',
            atualiza: false,
            novoProduto: ''
        }
        this.CriaProdutos = this.CriaProdutos.bind(this)
        this.AbrirEditar = this.AbrirEditar.bind(this)
        this.BuscarProdutos = this.BuscarProdutos.bind(this)
        this.AbrirNovoProduto = this.AbrirNovoProduto.bind(this)
        this.MontaFormulario = this.MontaFormulario.bind(this)
    }

    MontaFormulario(){
        return(
            <div className='conteudo'>

                <h1>Criar Primeiro Produto</h1>

                <div className='formulario'>
                <div>
                        <label htmlFor="titulo">Título</label>
                        <input id='titulo' type="text" onChange={(event)=>{this.setState({titulo: event.target.value})}} />
                    </div>
                    <div>
                        <label htmlFor="descricao">Descrição</label>
                        <input id='descricao' type="text" onChange={(event)=>{this.setState({descricao: event.target.value})}} />
                    </div>
                    <div>
                        <label htmlFor="data">Data</label>
                        <input id='data' type="date" onChange={(event)=>{this.setState({data: event.target.value})}} />
                    </div>
                    <div>
                        <label htmlFor="data">Categoria</label>
                        <Select
                            value={this.state.categoria}
                            onChange={(event)=>{
                                this.setState({categoria: event.target.value})
                                console.log(this.state.categoria)
                                }}
                            inputProps={{ 'aria-label': 'Without label' }}
                            className='select'
                            >
                            <MenuItem value={'Roupa'}>Roupa</MenuItem>
                            <MenuItem value={'Calçado'}>Calçado</MenuItem>
                            <MenuItem value={'Acessório'}>Acessório</MenuItem>
                        </Select>
                    </div>

                    <button onClick={() =>{cadastrarProduto(this.state.titulo, this.state.descricao, this.state.data, this.state.categoria)}}>Adicionar</button>
                </div>

            </div>
        );
    }
    
    AbrirNovoProduto(){
        document.getElementsByClassName('div-novo-produto')[0].style.display = 'block'
    }

    AbrirEditar(id){

        var formulario = document.getElementById('formulario'+id)
        if(formulario.classList.contains('abrir')){
            formulario.classList.add('fechar')
            formulario.classList.remove('abrir')
            
        }else{
            formulario.classList.add('abrir')
            formulario.classList.remove('fechar')
        }
    }


    CriaProdutos(produto){

        this.setState({
            titulo: produto.titulo,
            descricao: produto.descricao,
            data: produto.data,
            categoria: produto.categoria,
        })

        return(
            <div>
                <div className="product">
                    <p id='id'>{produto.id}</p>
                    <p id='titulo'>{produto.titulo}</p>
                    <p id='descricao'>{produto.descricao}</p>
                    <p id='data'>{produto.data}</p>
                    <p id='categoria'>{produto.categoria}</p>

                    <div className='buttons'>
                        <div onClick={()=>{this.AbrirEditar(produto.id)}}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.03984 17.625C6.08672 17.625 6.13359 17.6203 6.18047 17.6133L10.1227 16.9219C10.1695 16.9125 10.2141 16.8914 10.2469 16.8563L20.182 6.92109C20.2038 6.89941 20.221 6.87366 20.2328 6.8453C20.2445 6.81695 20.2506 6.78656 20.2506 6.75586C20.2506 6.72516 20.2445 6.69477 20.2328 6.66642C20.221 6.63806 20.2038 6.61231 20.182 6.59063L16.2867 2.69297C16.2422 2.64844 16.1836 2.625 16.1203 2.625C16.057 2.625 15.9984 2.64844 15.9539 2.69297L6.01875 12.6281C5.98359 12.6633 5.9625 12.7055 5.95312 12.7523L5.26172 16.6945C5.23892 16.8201 5.24707 16.9493 5.28545 17.071C5.32384 17.1927 5.39132 17.3032 5.48203 17.393C5.63672 17.543 5.83125 17.625 6.03984 17.625V17.625ZM7.61953 13.5375L16.1203 5.03906L17.8383 6.75703L9.3375 15.2555L7.25391 15.6234L7.61953 13.5375V13.5375ZM20.625 19.5938H3.375C2.96016 19.5938 2.625 19.9289 2.625 20.3438V21.1875C2.625 21.2906 2.70937 21.375 2.8125 21.375H21.1875C21.2906 21.375 21.375 21.2906 21.375 21.1875V20.3438C21.375 19.9289 21.0398 19.5938 20.625 19.5938Z" fill="#E3D6D5"/>
                            </svg>
                        </div>

                        <div onClick={()=>{
                            removerProduto(produto.id);
                            this.BuscarProdutos()
                            }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0735 12L16.3135 8.76001C16.4227 8.63247 16.4797 8.46842 16.4733 8.30064C16.4668 8.13285 16.3972 7.97369 16.2785 7.85496C16.1598 7.73623 16.0006 7.66668 15.8328 7.6602C15.665 7.65372 15.501 7.71079 15.3735 7.82001L12.1335 11.0267L8.87345 7.76667C8.74592 7.65746 8.58187 7.60039 8.41408 7.60687C8.2463 7.61335 8.08714 7.6829 7.96841 7.80163C7.84968 7.92036 7.78013 8.07952 7.77365 8.2473C7.76716 8.41509 7.82423 8.57914 7.93345 8.70667L11.1868 12L8.00012 15.1467C7.93033 15.2064 7.87365 15.28 7.83364 15.3627C7.79362 15.4454 7.77113 15.5355 7.76759 15.6273C7.76404 15.7191 7.77951 15.8107 7.81303 15.8962C7.84654 15.9818 7.89738 16.0595 7.96235 16.1244C8.02732 16.1894 8.10502 16.2402 8.19057 16.2738C8.27612 16.3073 8.36768 16.3228 8.45949 16.3192C8.5513 16.3157 8.64139 16.2932 8.7241 16.2532C8.80681 16.2131 8.88035 16.1565 8.94012 16.0867L12.1201 12.9067L15.2801 16.0667C15.4077 16.1759 15.5717 16.233 15.7395 16.2265C15.9073 16.22 16.0664 16.1504 16.1852 16.0317C16.3039 15.913 16.3734 15.7538 16.3799 15.586C16.3864 15.4183 16.3293 15.2542 16.2201 15.1267L13.0735 12Z" fill="#E3D6D5"/>
                                <path d="M11.9999 22.6667C9.89026 22.6667 7.82797 22.0411 6.07384 20.869C4.31972 19.6969 2.95254 18.031 2.14521 16.082C1.33787 14.1329 1.12664 11.9882 1.53821 9.91904C1.94979 7.84991 2.96569 5.94929 4.45745 4.45753C5.94921 2.96577 7.84983 1.94987 9.91896 1.53829C11.9881 1.12671 14.1328 1.33795 16.0819 2.14528C18.031 2.95262 19.6969 4.31979 20.8689 6.07392C22.041 7.82804 22.6666 9.89033 22.6666 12C22.6666 14.829 21.5428 17.5421 19.5424 19.5425C17.542 21.5429 14.8289 22.6667 11.9999 22.6667V22.6667ZM11.9999 2.66667C10.154 2.66667 8.34946 3.21406 6.8146 4.23962C5.27974 5.26518 4.08347 6.72284 3.37705 8.42829C2.67063 10.1337 2.4858 12.0104 2.84593 13.8208C3.20606 15.6313 4.09497 17.2944 5.40026 18.5997C6.70555 19.905 8.36859 20.7939 10.1791 21.154C11.9896 21.5141 13.8662 21.3293 15.5716 20.6229C17.2771 19.9165 18.7347 18.7202 19.7603 17.1853C20.7859 15.6505 21.3333 13.846 21.3333 12C21.3333 9.52465 20.3499 7.15068 18.5996 5.40034C16.8492 3.65 14.4753 2.66667 11.9999 2.66667V2.66667Z" fill="#E3D6D5"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="alterar-produto">
                <div id={'formulario'+produto.id} className='formulario'>
                        <div>
                            <label htmlFor="titulo">Título</label>
                            <input id='titulo' type="text" value={this.state.titulo} onChange={(event)=>{this.setState({titulo: event.target.value})}} />
                        </div>
                        <div>
                            <label htmlFor="descricao">Descrição</label>
                            <input id='descricao' type="text" value={this.state.descricao} onChange={(event)=>{this.setState({descricao: event.target.value})}} />
                        </div>
                        <div>
                            <label htmlFor="data">Data</label>
                            <input id='data' type="date" value={this.state.data} onChange={(event)=>{this.setState({data: event.target.value})}} />
                        </div>
                        <div>
                            <label htmlFor="data">Categoria</label>
                            <Select
                                value={this.state.categoria}
                                onChange={(event)=>{
                                    this.setState({categoria: event.target.value})
                                    }}
                                inputProps={{ 'aria-label': 'Without label' }}
                                className='select'
                                >
                                <MenuItem value={'Roupa'}>Roupa</MenuItem>
                                <MenuItem value={'Calçado'}>Calçado</MenuItem>
                                <MenuItem value={'Acessório'}>Acessório</MenuItem>
                            </Select>
                        </div>

                        <button onClick={
                            async () =>{
                                alterarProduto(produto.id, this.state.titulo, this.state.descricao, this.state.data, this.state.categoria);
                                await new Promise(r => setTimeout(r, 2250))
                                this.AbrirEditar(produto.id)
                                this.BuscarProdutos();
                                }}>Alterar Produto</button>
                    </div>
                </div>
            </div>
        )
    }

    async BuscarProdutos(){
        var produtos_servidor = await buscarProdutos()

        if(produtos_servidor !== null){
            var map = produtos_servidor.map((produto) => {
                return this.CriaProdutos(produto)
            });

            this.setState({produtos: map})
        }
    }

    render(){
        return(
        <div id='container' onLoad={this.BuscarProdutos}>

            <div className="logo-list">
                <p>CRUD</p>
            </div>

            <div className='conteudo-list'>

                <div className="headers">
                    <p class='id'>Id</p>
                    <p class='titulo'>Título</p>
                    <p class='descricao'>Descrição</p>
                    <p class='data'>Data</p>
                    <p class='categoria'>Categoria</p>


                    <div className='novo-produto' onClick={()=>{this.AbrirNovoProduto()}}>
                        <img src={IconAdd} alt="Novo Produto" />
                        <p>Novo Produto</p>
                    </div>
                </div>

                <div id='product-list' className='product-list'>
                    {this.state.produtos}
                </div>

            </div>
            <div className='div-novo-produto'>

                <div className="top">
                    <h1>Criar Primeiro Produto</h1>

                    <div className ='close' onClick={()=>{
                        document.getElementsByClassName('div-novo-produto')[0].style.display = 'none'
                        }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.0735 12L16.3135 8.76001C16.4227 8.63247 16.4797 8.46842 16.4733 8.30064C16.4668 8.13285 16.3972 7.97369 16.2785 7.85496C16.1598 7.73623 16.0006 7.66668 15.8328 7.6602C15.665 7.65372 15.501 7.71079 15.3735 7.82001L12.1335 11.0267L8.87345 7.76667C8.74592 7.65746 8.58187 7.60039 8.41408 7.60687C8.2463 7.61335 8.08714 7.6829 7.96841 7.80163C7.84968 7.92036 7.78013 8.07952 7.77365 8.2473C7.76716 8.41509 7.82423 8.57914 7.93345 8.70667L11.1868 12L8.00012 15.1467C7.93033 15.2064 7.87365 15.28 7.83364 15.3627C7.79362 15.4454 7.77113 15.5355 7.76759 15.6273C7.76404 15.7191 7.77951 15.8107 7.81303 15.8962C7.84654 15.9818 7.89738 16.0595 7.96235 16.1244C8.02732 16.1894 8.10502 16.2402 8.19057 16.2738C8.27612 16.3073 8.36768 16.3228 8.45949 16.3192C8.5513 16.3157 8.64139 16.2932 8.7241 16.2532C8.80681 16.2131 8.88035 16.1565 8.94012 16.0867L12.1201 12.9067L15.2801 16.0667C15.4077 16.1759 15.5717 16.233 15.7395 16.2265C15.9073 16.22 16.0664 16.1504 16.1852 16.0317C16.3039 15.913 16.3734 15.7538 16.3799 15.586C16.3864 15.4183 16.3293 15.2542 16.2201 15.1267L13.0735 12Z" fill="#38434D"/>
                            <path d="M11.9999 22.6667C9.89026 22.6667 7.82797 22.0411 6.07384 20.869C4.31972 19.6969 2.95254 18.031 2.14521 16.082C1.33787 14.1329 1.12664 11.9882 1.53821 9.91904C1.94979 7.84991 2.96569 5.94929 4.45745 4.45753C5.94921 2.96577 7.84983 1.94987 9.91896 1.53829C11.9881 1.12671 14.1328 1.33795 16.0819 2.14528C18.031 2.95262 19.6969 4.31979 20.8689 6.07392C22.041 7.82804 22.6666 9.89033 22.6666 12C22.6666 14.829 21.5428 17.5421 19.5424 19.5425C17.542 21.5429 14.8289 22.6667 11.9999 22.6667V22.6667ZM11.9999 2.66667C10.154 2.66667 8.34946 3.21406 6.8146 4.23962C5.27974 5.26518 4.08347 6.72284 3.37705 8.42829C2.67063 10.1337 2.4858 12.0104 2.84593 13.8208C3.20606 15.6313 4.09497 17.2944 5.40026 18.5997C6.70555 19.905 8.36859 20.7939 10.1791 21.154C11.9896 21.5141 13.8662 21.3293 15.5716 20.6229C17.2771 19.9165 18.7347 18.7202 19.7603 17.1853C20.7859 15.6505 21.3333 13.846 21.3333 12C21.3333 9.52465 20.3499 7.15068 18.5996 5.40034C16.8492 3.65 14.4753 2.66667 11.9999 2.66667V2.66667Z" fill="#38434D"/>
                        </svg>
                    </div>
                </div>

                <div className='formulario'>
                <div>
                        <label htmlFor="titulo">Título</label>
                        <input id='titulo' type="text" onChange={(event)=>{this.setState({titulo: event.target.value})}} />
                    </div>
                    <div>
                        <label htmlFor="descricao">Descrição</label>
                        <input id='descricao' type="text" onChange={(event)=>{this.setState({descricao: event.target.value})}} />
                    </div>
                    <div>
                        <label htmlFor="data">Data</label>
                        <input id='data' type="date" onChange={(event)=>{this.setState({data: event.target.value})}} />
                    </div>
                    <div>
                        <label htmlFor="data">Categoria</label>
                        <Select
                            value={this.state.categoria}
                            onChange={(event)=>{
                                this.setState({categoria: event.target.value})
                                console.log(this.state.categoria)
                                }}
                            inputProps={{ 'aria-label': 'Without label' }}
                            className='select'
                            >
                            <MenuItem value={'Roupa'}>Roupa</MenuItem>
                            <MenuItem value={'Calçado'}>Calçado</MenuItem>
                            <MenuItem value={'Acessório'}>Acessório</MenuItem>
                        </Select>
                    </div>

                    <button onClick={() =>{cadastrarProduto(this.state.titulo, this.state.descricao, this.state.data, this.state.categoria); this.BuscarProdutos()}}>Adicionar</button>
                </div>

            </div>
        </div>
        )
    };
}

export default ListPage