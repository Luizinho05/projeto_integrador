import React, { Component } from 'react'
import './login.css'


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            senha: '',

        }
        this.login = this.login.bind(this)
    }

    login(event) {
        event.preventDefault()
        const { email, senha } = this.state
        if (email === '' || senha === '') {
            alert('Preencha todos os Campos')
            return
        }
        alert(`E-mail: ${email} \nSenha: ${senha}`)
        this.setState({
            email: '',
            senha: ''
        })

    }

    render() {
        return (
            <div id='loginsite'>
                <h1 class="FormularioLogin">Área de Login</h1>
                <form onSubmit={this.login}>
                    <label class="informaçõesLogin">E-mail:</label>
                    <input id='espaçoL'
                        type='email'
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                    /><br />
                    <label class="informaçõesLogin">Senha:</label>
                    <input id='espaçoL'
                        type='password'
                        value={this.state.senha}
                        onChange={(e) => this.setState({ senha: e.target.value })}
                    /><br /><br />
                    <button type='submit' class='botaologin'><strong class="logar">Logar</strong></button>
                </form>
            </div>
        )
    }
}

export default Login;