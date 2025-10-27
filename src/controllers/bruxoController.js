import * as BruxoModel from './../models/bruxoModels.js'

export const listarTodos = async (req, res) => {
    try {
    const bruxos = await BruxoModel.encontreTodos();

    if (!bruxos || bruxos.lenght === 0) {
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

export const criar = async (req, res) => {
    try {
        const { nome, casa, patrono, varinha, anoMatricula } = req.body;

        const  dado = req.body

        const camposObrigatorios = ['nome', 'casa', 'varinha', 'anoMatricula'];

        const faltando = camposObrigatorios.filter(campo => !dado[campo]);
        
        if (faltando.length > 0) {
          return res.status(400).json({
            erro: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}.`
          });
        }

        const casasValidas = ['Grifinória', 'Sonserina', 'Corvinal', 'Lufa-Lufa'];
    if (!casasValidas.includes(casa)) {
      return res.status(400).json({
        erro: 'Casa inválida! O Chapéu Seletor só reconhece as 4 casas',
        casasValidas
      });
    }
    
    const novoBruxo = await BruxoModel.criar(req.body)

    res.status(201).json({
        message: "Bruxo criado com sucesso!",
        bruxo: novoBruxo
    })

    } catch (error) {
        res.status(500).json({
            erro: "Erro ao criar bruxo",
            detalhes: error.message
        })
    }
}

export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const bruxoExiste = await BruxoModel.encontreUm(id);

        if(!bruxoExiste) {
            return res.status(404).json({
                erro: "Bruxo não encontrado com esse id",
                id: id
            })
        }

        await BruxoModel.deletar(id);

        res.status(200).json({
            message: "Bruxo apagado com sucesso!",
            bruxoRemovido: bruxoExiste
        })
        
    } catch (error) {
        res.status(500).json({
            erro: "Erro ao apagar bruxo!",
            detalhes: error.mensagem
        })
    }
}

export const atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;

        const bruxoExiste = await BruxoModel.encontreUm(id);
        if(!bruxoExiste) {
            return res.status(404).json({
                erro: "Bruxo não existe!",
                id: id
            })
        }

        if (dados.casa) {
            const casasValidas = ['Grifinória', 'Sonserina', 'Corvinal', 'Lufa-Lufa'];
            if (!casasValidas.includes(dados.casa)) {
              return res.status(400).json({
                erro: 'Casa inválida! O Chapéu Seletor só reconhece as 4 casas',
                casasValidas
              });
            }
        

        const bruxoAtualizado = await BruxoModel.atualizar(id, dados)
        
        res.status(200).json({
            message: "Bruxo atualizado com sucesso!",
            bruxo: bruxoAtualizado
        })

        }
    } catch (error) {
        res.status(500).json({
            erro: "Erro ao atualizar bruxo",
            detalhes: error.message
        })
    }
}