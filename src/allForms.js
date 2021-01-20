//allForms.js

const allForms = [
    {
        name: 'Desenho de estudo',
        label: "desenhoDeEstudo",
        options: [{
            name: 'Ensaio Randomizado Controlado',
            value: '1',
        },
        {
            name: 'Ensaio Não Controlado',
            value: '2',
            },
            {
                name: 'Coorte Controlada',
                value: '3',
            },
            {
                name: 'Transversal',
                value: '4',
            },
            {
                name: 'Caso - Controle',
                value: '5',
            },
            {
                name: 'Relato de Casos',
                value: '6',
            },
            {
                name: 'Publicação Opinativa / Não identificado',
                value: '7',
            }
            ]
    },
    {
        name: 'Tipo de desfecho, que apresenta significância estatística, associado à intervenção / exposição',
        label: 'desfecho',
        options: [
            {
                name: 'Nenhum resultado estatisticamente significante',
                value: '0',
            },
            {
                name: 'Desfecho substituto não clínico(ex.: taxa de resposta)',
                value: '1',
            }, {
                name: 'Desfecho substituto clínico(ex.: PFS)',
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
        options: [
            {
                name: 'Ausente(HR > ou = 1)',
                value: '0',
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
                value: '4',
            }]
    }

]

export default allForms;