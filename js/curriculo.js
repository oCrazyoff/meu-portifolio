// dados do currículo — edite aqui e o PDF é gerado de novo a cada clique
const curriculo = {
    nome: "Walysson Ribeiro Rosa",
    cargo: "Desenvolvedor Full Stack",
    nascimento: "2004-09-12", // formato AAAA-MM-DD — a idade é calculada automaticamente (vazio = não mostra)

    contato: [
        { rotulo: "Endereço", texto: "Rua Vicente Moreira, Igarapava - SP, 14540-000" },
        { rotulo: "Telefone", texto: "(16) 98115-1983" },
        { rotulo: "E-mail", texto: "walyssonribeiro3@gmail.com", link: "mailto:walyssonribeiro3@gmail.com" },
        { rotulo: "Site", texto: "www.walysson.com.br", link: "https://www.walysson.com.br" },
        { rotulo: "GitHub", texto: "github.com/oCrazyoff", link: "https://github.com/oCrazyoff" },
        { rotulo: "LinkedIn", texto: "linkedin.com/in/walysson-ribeiro", link: "https://www.linkedin.com/in/walysson-ribeiro-a92ba3260/" }
    ],

    habilidades: [
        "Facilidade de aprendizado e adaptação a novas tecnologias",
        "Conhecimento em sistemas operacionais (Windows e Linux)",
        "Domínio do Pacote Office (Word, Excel, PowerPoint)",
        "Noções de programação",
        "Conhecimentos em banco de dados",
        "Experiência com ensino de informática básica",
        "Boa comunicação e didática para explicar conceitos técnicos",
        "Paciência e habilidade no suporte a usuários",
        "Trabalho em equipe",
        "Organização e gestão de tempo"
    ],

    objetivo: "Busco uma oportunidade de estágio na área de Programação, onde eu possa aplicar meus conhecimentos em desenvolvimento, evoluir tecnicamente e adquirir experiência prática em projetos reais, contribuindo com soluções eficientes para a empresa.",

    formacao: [
        {
            nivel: "Ensino Superior",
            curso: "Sistemas de Informação",
            instituicao: "Uniube - Uberaba, MG",
            status: "Cursando"
        },
        {
            nivel: "Ensino Médio",
            curso: "Técnico em Informática",
            instituicao: "ETEC Antônio Junqueira da Veiga - Igarapava, SP",
            status: "Concluído"
        }
    ],

    // inicio/fim no formato AAAA-MM — fim vazio = "Atual"
    experiencias: [
        {
            cargo: "Instrutor de Informática",
            empresa: "Instituto JMJ",
            inicio: "2025-02",
            fim: "",
            itens: [
                "No instituto, adquiri experiência significativa no ensino de informática básica para crianças do 1º ao 5º ano do Ensino Fundamental I.",
                "Desenvolvi habilidades práticas e técnicas, tanto na comunicação com público infantil quanto na área de manutenção de computadores.",
                "Criação de ferramenta para separar atividades por turma e monitorar presença dos alunos."
            ]
        },
        {
            cargo: "Jovem Aprendiz de Manutenção Agrícola",
            empresa: "Usina Buriti",
            inicio: "2022-01",
            fim: "2023-03",
            itens: [
                "Na usina, aprendi sobre mecânica básica e, principalmente, a lidar com pressão e situações diversas.",
                "Desenvolvi habilidades práticas e técnicas, melhorei meu trabalho em equipe e aprendi a gerenciar meu tempo de forma eficaz.",
                "Essas experiências me ajudaram a crescer profissionalmente e a estar preparado para novos desafios."
            ]
        }
    ]
};

// calcula a idade a partir da data de nascimento
function calcularIdade(nascimento) {
    const [ano, mes, dia] = nascimento.split('-').map(Number);
    const hoje = new Date();
    let idade = hoje.getFullYear() - ano;
    if (hoje.getMonth() + 1 < mes || (hoje.getMonth() + 1 === mes && hoje.getDate() < dia)) idade--;
    return idade;
}

// "2025-02" -> "02/2025"
function formatarMes(data) {
    const [ano, mes] = data.split('-');
    return `${mes}/${ano}`;
}

function gerarCurriculo() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });

    const cores = {
        principal: [255, 164, 0],
        fundo: [10, 10, 10],
        texto: [30, 30, 30],
        cinza: [110, 110, 110],
        claro: [231, 231, 231]
    };

    const alturaPagina = 297;
    const larguraLateral = 68;
    const margem = 10;
    const xPrincipal = larguraLateral + 10;
    const larguraPrincipal = 210 - xPrincipal - margem;
    const limiteY = alturaPagina - 15;

    const desenharLateral = () => {
        doc.setFillColor(...cores.fundo);
        doc.rect(0, 0, larguraLateral, alturaPagina, 'F');
        doc.setFillColor(...cores.principal);
        doc.rect(larguraLateral, 0, 1.2, alturaPagina, 'F');
    };

    desenharLateral();

    // ---------- lateral ----------
    let yL = 18;
    const larguraTextoLateral = larguraLateral - margem * 2;

    const tituloLateral = (texto) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(...cores.principal);
        const linhas = doc.splitTextToSize(texto.toUpperCase(), larguraTextoLateral);
        doc.text(linhas, margem, yL);
        yL += (linhas.length - 1) * 4.5 + 2;
        doc.setDrawColor(...cores.principal);
        doc.setLineWidth(0.3);
        doc.line(margem, yL, margem + 12, yL);
        yL += 6;
    };

    // nome
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(255, 255, 255);
    const linhasNome = doc.splitTextToSize(curriculo.nome, larguraTextoLateral);
    doc.text(linhasNome, margem, yL);
    yL += linhasNome.length * 7;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...cores.principal);
    doc.text(curriculo.cargo, margem, yL);
    yL += 5;

    if (curriculo.nascimento) {
        doc.setTextColor(...cores.claro);
        doc.text(`${calcularIdade(curriculo.nascimento)} anos`, margem, yL);
        yL += 5;
    }
    yL += 7;

    // contato
    tituloLateral('Contato');
    curriculo.contato.forEach(({ rotulo, texto, link }) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(...cores.cinza);
        doc.text(rotulo.toUpperCase(), margem, yL);
        yL += 4;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(255, 255, 255);
        const linhas = doc.splitTextToSize(texto, larguraTextoLateral);
        doc.text(linhas, margem, yL);
        if (link) doc.link(margem, yL - 3, larguraTextoLateral, linhas.length * 4, { url: link });
        yL += linhas.length * 4 + 3;
    });
    yL += 5;

    // habilidades
    tituloLateral('Habilidades e Competências');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    curriculo.habilidades.forEach(habilidade => {
        const linhas = doc.splitTextToSize(habilidade, larguraTextoLateral - 4);
        doc.setFillColor(...cores.principal);
        doc.rect(margem, yL - 2.2, 1.5, 1.5, 'F');
        doc.setTextColor(255, 255, 255);
        doc.text(linhas, margem + 4, yL);
        yL += linhas.length * 4 + 2;
    });

    // ---------- coluna principal ----------
    let y = 20;

    const garantirEspaco = (altura) => {
        if (y + altura > limiteY) {
            doc.addPage();
            desenharLateral();
            y = 20;
        }
    };

    const tituloSecao = (texto) => {
        garantirEspaco(14);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.setTextColor(...cores.fundo);
        doc.text(texto.toUpperCase(), xPrincipal, y);
        y += 2.5;
        doc.setDrawColor(...cores.principal);
        doc.setLineWidth(0.6);
        doc.line(xPrincipal, y, xPrincipal + larguraPrincipal, y);
        y += 7;
    };

    const paragrafo = (texto, x, largura, tamanho = 9.5) => {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(tamanho);
        doc.setTextColor(...cores.texto);
        const linhas = doc.splitTextToSize(texto, largura);
        garantirEspaco(linhas.length * 4.5);
        doc.text(linhas, x, y, { lineHeightFactor: 1.35 });
        y += linhas.length * 4.5;
    };

    // objetivo
    tituloSecao('Objetivo');
    paragrafo(curriculo.objetivo, xPrincipal, larguraPrincipal);
    y += 8;

    // formação
    tituloSecao('Formação Acadêmica');
    curriculo.formacao.forEach(({ nivel, curso, instituicao, status }) => {
        garantirEspaco(18);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(...cores.fundo);
        doc.text(`${nivel}: ${curso}`, xPrincipal, y);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(...cores.cinza);
        doc.text(status, xPrincipal + larguraPrincipal, y, { align: 'right' });
        y += 5;

        doc.setFontSize(9.5);
        doc.setTextColor(...cores.texto);
        doc.text(instituicao, xPrincipal, y);
        y += 8;
    });
    y += 2;

    // experiência
    tituloSecao('Experiência Profissional');
    curriculo.experiencias.forEach(({ cargo, empresa, inicio, fim, itens }) => {
        garantirEspaco(20);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(...cores.fundo);
        doc.text(cargo, xPrincipal, y);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(...cores.cinza);
        const periodo = `${formatarMes(inicio)} - ${fim ? formatarMes(fim) : 'Atual'}`;
        doc.text(periodo, xPrincipal + larguraPrincipal, y, { align: 'right' });
        y += 5;

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(...cores.principal);
        doc.text(empresa.toUpperCase(), xPrincipal, y);
        y += 6;

        itens.forEach(item => {
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(9.5);
            const linhas = doc.splitTextToSize(item, larguraPrincipal - 5);
            garantirEspaco(linhas.length * 4.5);
            doc.setFillColor(...cores.principal);
            doc.rect(xPrincipal, y - 2.2, 1.5, 1.5, 'F');
            paragrafo(item, xPrincipal + 5, larguraPrincipal - 5);
            y += 2;
        });
        y += 5;
    });

    // rodapé com a data de geração
    const totalPaginas = doc.getNumberOfPages();
    for (let i = 1; i <= totalPaginas; i++) {
        doc.setPage(i);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7);
        doc.setTextColor(...cores.cinza);
        doc.text(`Gerado em ${new Date().toLocaleDateString('pt-BR')}`, 210 - margem, alturaPagina - 8, { align: 'right' });
    }

    doc.setProperties({ title: `Currículo - ${curriculo.nome}`, author: curriculo.nome });
    return doc;
}

// botão do currículo: gera o PDF e abre em outra guia
document.querySelectorAll('[data-curriculo]').forEach(botao => {
    botao.addEventListener('click', (e) => {
        if (!window.jspdf) return; // se a lib não carregou, segue o link pro PDF estático
        e.preventDefault();
        const url = gerarCurriculo().output('bloburl');
        window.open(url, '_blank');
    });
});
