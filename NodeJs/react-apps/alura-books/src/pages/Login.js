import { useNavigate } from 'react-router-dom';
import { auth } from '../services/auth.js';
import { useState } from 'react';

export default function Login() {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: 'brother@email.com',
        senha: '123'
    })

    function handleChange(event) {
        const campo = event.target.value;
        setValues(campo);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                auth
                    .login({
                        email: values.email,
                        senha: values.senha
                    })
                    .then(() => {
                        navigate('/');
                    })
                    .catch((err) => {
                        console.log('O erro é logo aq mane')
                        alert('Usuário ou senha inválidos')
                    })
            }}>
                <input
                    onChange={handleChange} placeholder="Email"
                    value={values.email} name='email' />
                <input onChange={handleChange} placeholder="senha"
                    value={values.senha} name='senha' />
                <div>
                    <button>Entrar</button>
                </div>
            </form>
        </div>
    )
}