import React, { Component } from 'react'
import './cadastro.css'

class Cadastro extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            email: '',
            senha: '',
            sexo: '',
            preferencia: ''
        }
        this.cadastrar = this.cadastrar.bind(this)
    }

    cadastrar(event) {
        event.preventDefault()
        const { nome, email, senha, sexo, preferencia } = this.state
        if (nome === '' || email === '' || senha === '' || sexo === '' || preferencia === '') {
            alert('Preencha todos os Campos')
            return
        }
        alert(`Nome: ${nome} \nE-mail: ${email} \nSenha: ${senha} \nSexo: ${sexo} \nPreferencia: ${preferencia}`)
        this.setState({
            nome: '',
            email: '',
            senha: '',
            sexo: '',
            preferencia: ''
        })

    }



    render() {
        return (
            <div id='estruturacadastro'>
                <h1 class="FormularioCadastro">Formulário de Cadastro</h1>
                <form onSubmit={this.cadastrar}>
                    <label class="informaçõesCadastro">Nome:</label>
                    <input id='espaçoC'
                        type='text'
                        value={this.state.nome}
                        onChange={(e) => this.setState({ nome: e.target.value })}
                    /><br />
                    <label class="informaçõesCadastro">E-mail:</label>
                    <input id='espaçoC'
                        type='email'
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                    /><br />
                    <label class="informaçõesCadastro">Senha:</label>
                    <input id='espaçoC'
                        type='password'
                        value={this.state.senha}
                        onChange={(e) => this.setState({ senha: e.target.value })}
                    /><br />
                    <label class="informaçõesCadastro">Sexo:</label>
                    <select id='espaçoC'
                        value={this.state.sexo}
                        onChange={(e) => this.setState({ sexo: e.target.value })}>
                        <option value=''></option>
                        <option value='feminino'>Feminino</option>
                        <option value='masculino'>Masculino</option>
                    </select><br />
                    <div value={this.state.preferencia}
                        onChange={(e) => this.setState({ preferencia: e.target.value })}>
                        <label id='espaçoC' class="informaçõesCadastro">Qual sua preferência?</label>
                        <label class="preferencia"><br />
                            <input type="radio" name="preferencia"  id="circuloPreferencia"  value="Conforto" />Roupa de Conforto</label><br />
                        <label class="preferencia">
                            <input type="radio" name="preferencia" id="circuloPreferencia" value="Estetica" />Roupa de Estética</label><br />
                    </div><br /><br/>

                    <button type='submit' class='botaocadastro'><strong class="cadastrar">Cadastrar</strong></button>
                </form>
            </div>
        )
    }
}

export default Cadastro;