import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Logo from '~/assets/img/kadoo.png';
import api from '~/services/api';
import { login } from '~/services/auth';

import { Form, Container } from './styles';

const SignIn = () => {
    var history = useHistory();
    const [email, setEmail] = useState('luis@gmail.com');
    const [password, setPassword] = useState('12345678');
    const [email_err, setEmailErr] = useState('');
    const [password_err, setPasswordErr] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        document.title = 'Kadoo Tecnologia - Login';
    }, []);

    async function handleSignIn(e) {
        e.preventDefault();
        // const { email, password } = this.state;

        if(email.length == 0) {
            setEmailErr("Campo Obrigatório");
        }

        if (password.length == 0) {
            setPasswordErr("Campo Obrigatório")
        }

        if (!email || !password) {
            setError("Preencha todos os campos para entrar ");

        } else {
            try {
                // Connect to API

                // const response = await api.post("/users/auth", {
                //     email,
                //     password
                // });

                // If your using API, erase this line and show 'Connect to API' & 'Set JWT in localstorage'
                if(!email == 'luis@gmail.com' || !password == '12345678')
                    return 0;

                // Set JWT in localstorage
                // login(true);

                history.push('/');
            } catch (err) {
                setError("Email ou Senha incorretos")
            }
        }
    }

    return (
        <>
        <Container style={{ height: '100vh', padding: "0 10px"}}>
            <Form autoComplete="off" onSubmit={handleSignIn}>
                <img src={Logo} alt="Airbnb" />
                {error && <p>{error}</p>}
                <input
                    type="email"
                    name="email"
                    placeholder="Seu Email.."
                    onChange={(e) => { setEmail(e.target.value); setEmailErr('') }}
                    value={email}
                    className={email_err != '' ? 'invalid' : '' }
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Sua Senha Secreta.."
                    onChange={(e) => { setPassword(e.target.value); setPasswordErr('') }}
                    value={password}
                    className={password_err != '' ? 'invalid' : '' }
                />
                <button type="submit">Entrar</button>
                <hr />
                <Link to="/signup">Não tem uma Conta ? Cadastre-se !</Link>
            </Form>
        </Container>
        </>
    );

}

export default SignIn;
