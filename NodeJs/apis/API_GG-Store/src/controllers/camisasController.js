import camisas from '../models/camisa.js';

class CamisaController {

    static listarCamisas = (req, res) => {
        camisas.find((err, camisas) => {
            res.status(200).json(camisas);
        });
    };

    static listarCamisasPorID = (req, res) => {
        let id = req.params.id;
        camisas.findById(id, (err, camisas) => {
            if (err) {
                res.status(400).send({ messagem: `Mane deu logo isso aq ${err.message}` })
            }
            else {
                res.status(200).send(camisas);
            }
        })
    }

    static cadastrarCamisa = (req, res) => {
        let camisa = new camisas(req.body);
        camisa.save((err) => {
            if (err) {
                res.status(500).send({ message: `Brother deu esse erro aq tlg ${err}` });
            }
            else {
                res.status(201).send(camisa.toJSON());
            }
        })
    }

    static atualizarCamisa = (req, res) => {
        const id = req.params.id;
        camisas.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: `Veinho deu esse erro aq tlg ${err}` })
            }
            else {
                res.status(201).send({ message: 'Deu certo veinho bota fé?' });
            }
        })
    }

    static deletarCamisa = (req, res) => {
        let id = req.params.id;
        camisas.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: `Mane deu esse erro aq tlg ${err}` })
            }
            else {
                res.status(200).send({message: 'Boa fio'})
            }
        })
    }
};

export default CamisaController