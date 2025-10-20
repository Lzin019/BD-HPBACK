import * as BruxoModel from './../models/bruxoModels.js'

export const listarTodos = async (req, res) => {
    try {
    const bruxos = await BruxoModel.encontreTodos();

    if (!buxos || bruxos.lenght === 0) {
        res.statu(404).json({
            total: 0,
            mensagem : 'Não há bruxos na lista',
            bruxos
        })
    }

    res.status(200).json({
        total: bruxos.lenght,
        mensagem: 'Lista de bruxos',
        bruxos
    })
    } catch (error) {
     res.status(500).json({
        erro: 'Erro interno de servidor',
        detalhes: error.message,
        status: 500
     })
    }
}
export const listarUm = async (req, res) => {
    try {
        const id = req.params.id;
        const bruxo = await BruxoModel.encontreUm(id);

        if (!bruxo) {
            return res.status(404).json({
                erro: 'Bruxo não encontrado!',
                mensagem: 'Verifique o id do bruxo',
                id: id
            })
        }

        res.status(200).json({
            mensagem: 'Bruxo encontrado',
            bruxo
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        })
    }
}