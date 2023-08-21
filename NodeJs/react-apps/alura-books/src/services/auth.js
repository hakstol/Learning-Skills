import { fetchAdapter } from '../services/fetchAdapter.js';
import jwt_decode from "jwt-decode";

export const auth = {
    async login({ email, senha }) {
        return await fetchAdapter('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: { email, senha }
        })

            .then(async (response) => {
                let jsonToken = response.body.accessToken
                let token = jwt_decode(jsonToken)
                console.log(token)
            })
            .catch(() => {
                console.log('vai tomar no cu geral')
            })
    }
}