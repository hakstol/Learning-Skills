// Arquitetura Hexagonal
// Ports & Adapters
// Facilitar e personalizar o uso do fetch

export async function fetchAdapter(fetchUrl, fetchOptions) {
    const options = {
        ...fetchOptions,
        headers: {
            'Content-Type': 'application/json',
            ...fetchOptions.headers,
        },
        body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
    };
    return fetch(fetchUrl, options)
        .then(async (respostaDoServidor) => {
            return {
                ok: respostaDoServidor.ok,
                body: await respostaDoServidor.json(),
            }
        });
}