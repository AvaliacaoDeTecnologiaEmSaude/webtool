//allForms.js

const allForms = [
    {
        name: 'Desenho de estudo',
        label: "desenhoDeEstudo",
        cathegory: 'Geral',
        id: 0,
        options: [{
            name: 'Ensaio Randomizado Controlado',
            value: '7',
        },
        {
            name: 'Ensaio Não Controlado',
            value: '6',
            },
            {
                name: 'Coorte Controlada',
                value: '5',
            },
            {
                name: 'Transversal',
                value: '4',
            },
            {
                name: 'Caso - Controle',
                value: '3',
            },
            {
                name: 'Relato de Casos',
                value: '2',
            },
            {
                name: 'Publicação Opinativa / Não identificado',
                value: '-10',
            }
            ]
    },
    {
        name: 'Tipo de desfecho, que apresenta significância estatística, associado à intervenção / exposição',
        cathegory: 'Resultado',
        id: 0,
        label: 'desfecho',
        options: [
            {
                name: 'Nenhum resultado estatisticamente significante',
                value: '-10',
            },
            {
                name: 'Desfecho substituto não clínico(ex.: taxa de resposta)',
                value: '1',
            }, {
                name: 'Desfecho substituto clínico (ex.: PFS)',
                value: '2',
            }, {
                name: 'Desfecho duro(ex.: sobrevida global, qualidade de vida)',
                    value: '3',
            }, {
                name: 'Informação ausente / Não avaliado',
                value: '4',
            }]
    },
    {
        name: 'Magnitude do benefício clínico associado à intervenção/ exposição',
        label: 'beneficio',
        cathegory: 'Resultado',
        id: 1,
        options: [
            {
                name: 'Ausente(HR > ou = 1)',
                value: '-10',
            }, {
                name: 'Presente, magnitude pequena(0, 7 < HR < 1)',
                value: '1',
            }, {
                name: 'Presente, magnitude moderada(0, 4 < HR < 0, 7)',
                value: '2',
            }, {
                name: 'Presente, magnitude grande(HR < 0, 4)',
                value: '3',
            }, {
                name: 'Informação ausente / não avaliado',
                value: '-10',
            }]
    }

]

export default allForms;