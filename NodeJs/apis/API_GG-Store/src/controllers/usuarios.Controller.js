import usuarios from '../models/usuario.js';

class UsuarioController {

    static listaUsuarios = (req, res) => {
        usuarios.find((err, usuarios) => {
            res.status(200).json(usuarios);
        });
    };

    static listarUsuariosPorID = (req, res) => {
        let id = req.params.id;
        usuarios.findById(id, (err, usuarios) => {
            if (err) {
                res.status(400).send({ messagem: `Mane deu logo isso aq ${err.message}` })
            }
            else {
                res.status(200).send(usuarios);
            }
        })
    }

    static cadastrarUsuario = (req, res) => {
        let usuario = new usuarios(req.body);
        usuario.save((err) => {
            if (err) {
                res.status(500).send({ message: `Brother deu esse erro aq tlg ${err}` });
            }
            else {
                res.status(201).send({message: 'boa'});
            }
        })
    }

    static atualizarUsuario = (req, res) => {
        const id = req.params.id;
        usuarios.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: `Veinho deu esse erro aq tlg ${err}` })
            }
            else {
                res.status(201).send({ message: 'Deu certo vei'});
            }
        })
    }

    static deletarUsuario = (req, res) => {
        let id = req.params.id;
        usuarios.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: `Mane deu esse erro aq tlg ${err}` })
            }
            else {
                res.status(200).send({message: 'Boa fio'})
            }
        })
    }
};

export default UsuarioController