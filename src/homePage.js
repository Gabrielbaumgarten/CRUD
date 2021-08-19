import React from 'react'
import './home.css'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {cadastrarProduto} from './OperacoesProduto';
import { Link } from 'react-router-dom'


const HomePage = () => {

    const [newProduct, setNewProduct] = React.useState(false)
    const [titulo, setTitulo] = React.useState()
    const [descricao, setDescricao] = React.useState()
    const [data, setData] = React.useState()
    const [categoria, setCategoria] = React.useState()


    if(newProduct){
        return(
            <React.Fragment id='body'>
    
                <div className="logo">
                    <p>CRUD</p>
                </div>
    
                <div className='conteudo'>
    
                    <h1>Criar Primeiro Produto</h1>

                    <div className='formulario'>
                        <div>
                            <label htmlFor="titulo">Título</label>
                            <input id='titulo' type="text" onChange={(event)=>{setTitulo(event.target.value)}} />
                        </div>
                        <div>
                            <label htmlFor="descricao">Descrição</label>
                            <input id='descricao' type="text" onChange={(event)=>{setDescricao(event.target.value)}} />
                        </div>
                        <div>
                            <label htmlFor="data">Data</label>
                            <input id='data' type="date" onChange={(event)=>{setData(event.target.value)}} />
                        </div>
                        <div>
                            <label htmlFor="data">Categoria</label>
                            <Select
                                value={categoria}
                                onChange={(event)=>{setCategoria(event.target.value)}}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                className='select'
                                >
                                <MenuItem value={'Roupa'}>Roupa</MenuItem>
                                <MenuItem value={'Calçado'}>Calçado</MenuItem>
                                <MenuItem value={'Acessório'}>Acessório</MenuItem>
                                </Select>
                        </div>

                        <button onClick={async () =>{
                                                    cadastrarProduto(titulo, descricao, data, categoria);
                                                    await new Promise(r => setTimeout(r, 2000))
                                                    document.getElementById('list-page').click()}}
                                                    >Adicionar</button>
                    </div>

                    <Link id='list-page' to='/listar'/>
                </div>
                
            </React.Fragment>
        );
    } else{
        return(
            <React.Fragment id='body'>
    
                <div className="logo">
                    <p>CRUD</p>
                </div>
    
                <div className='conteudo'>
    
                        <button onClick={()=> {setNewProduct(true)}}>Criar primeiro Produto</button>
    
                    <Link to='/listar'>
                        <button>Listar Produtos</button>
                    </Link>

                </div>
                
            </React.Fragment>
        );
    }
}

export default HomePage