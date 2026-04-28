
import { Project, ProjectCategory, AwardType } from './types';

export const COLORS = {
  PRIMARY: '#EF3340', // PANTONE 2034 C
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  TEAL: '#00AFAD',    // PANTONE 3258 C
  LIME: '#84BD00',    // PANTONE 7487 C
  YELLOW: '#FEDD00',  // PANTONE YELLOW C
  ORANGE: '#E89923',  // PANTONE 7411 C
  MAGENTA: '#DF1995', // PANTONE 218 C
  PURPLE: '#802FDE',  // PANTONE 2593 C
};

export const PARTNERS = [
  'A.C. Camargo','Airis Tecnologia','Akaer','Binario Cloud','Boldr','BYX','CTI Renato Archer','Dell Technologies', 'Embraer', 'Fanatee','Hospital Sírio-Libanês',
  'HP','IPT','Intelbras','J.ASSY','Mercedes-Benz','Mottu','Rockwell Automation','Tata Consultancy Services','WEG'
].sort();

export const MOCK_PROJECTS: Project[] = [
  {
    id: '202502001',
    title: 'Impressão 3D de estabilizador bucal para radioterapia',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.BIOENGENHARIA,
    thumbnailUrl: 'https://neofeed.com.br/wp-content/uploads/2024/10/ac-camargo-fachada.webp',
    videoUrl: '',
    galleryUrls: [
      ''
    ],
    awardType: AwardType.NENHUM,
    students: [
      { id: '1351', name: 'Bruno Alencar Braghette', role: 'Engenharia Mecânica' },
      { id: '1422', name: 'Paulo Augusto dos Passos Oliveira', role: 'Engenharia Mecânica' },
      { id: '1358', name: 'Daniel Vergamini Luna Frussa', role: 'Engenharia Mecânica' },
      { id: '1437', name: 'Ruy de Paula Souza Neto', role: 'Engenharia Mecânica' },
    ],
    advisor: 'Raphael Galdino dos Santos',
    longDescription: 'Dispositivos como bolus e estabilizador bucal são utilizados durante a radioterapia para melhor eficácia do tratamento. O estabilizador bucal e o bolus (utilizado em outras áreas do corpo) são métodos pioneiros do A.C.Camargo que permitem um posicionamento adequado do paciente durante a sessão de radioterapia, o qual é essencial para garantir a precisão na entrega da dose de radiação ao tumor, minimizando danos aos tecidos saudáveis. O bolus e o estabilizador bucal garantem um posicionamento consistente em cada sessão e visam também o conforto do paciente. Esses materiais são produzidos na fase de planejamento do tratamento, com apoio de imagens como tomografias e ressonâncias, para definir o posicionamento ideal e a área exata a ser tratada e definindo o formato, molde e dimensões do bolus ou estabilizador. Após medições, a equipe segue para a confecção dos dispositivos que é feita de forma individual e artesanal. A equipe desprende algumas horas na confecção dos mesmos. Em resumo, o posicionamento do paciente influencia diretamente a eficácia e a segurança do tratamento, sendo essencial a colaboração entre o paciente, o oncologista e a equipe de radioterapia. Desta forma, o objetivo desta proposta seria customizar a confecção destes dispositivos. Nesta proposta teria a inclusão de pacientes com indicação de confecção do estabilizador bucal e bolus.',
    tags: ['3Dprinting','Bioengineering','PatientExperience'],
    partner: 'A.C. Camargo'
  },
  {
    id: '202502002',
    title: 'Mapeamento de produtos em supermercado',
    description: 'Criação de um sistema de mapeamento dinâmico e adaptativo que reconstrói a planta do supermercado e otimiza rotas com base na análise autônoma do fluxo e comportamento dos carrinhos de compras.',
    semester: '2',
    year: 2025,
    category: ProjectCategory.EMBARCADOS,
    thumbnailUrl: 'https://media.licdn.com/dms/image/v2/D4D0BAQG89u7a-qc-mg/company-logo_200_200/B4DZUl2CxbHkAI-/0/1740096679438/airis_tecnologia_logo?e=1778112000&v=beta&t=CxWB886z4esYN8cf0JN8YoJL8Ecz3iqnx5mlrw4K9ZY',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.NENHUM,
    students: [
      { id: '1342', name: 'Ananda Julia Galvão Campêlo', role: 'Engenharia de Computação' },
      { id: '1186', name: 'Kevin Nagayuki Shinohara', role: 'Engenharia de Computação' },
      { id: '591', name: 'Luca Cazzolato Machado', role: 'Engenharia de Computação' },      
      { id: '1441', name: 'Thiago Gonçalves Guadagnoli de Sousa', role: 'Engenharia de Computação' },      

    ],
    advisor: 'Vinicius Licks',
    longDescription: 'Criação de um sistema de mapeamento dinâmico e inteligente que reconstrói a planta de supermercados e otimiza rotas a partir do comportamento de fluxo dos carrinhos.',
    tags: ['ComputerVision', 'IoT', 'DataScience'],
    partner: 'Airis Tecnologia'
  },
  {
    id: '202502003',
    title: 'Desenvolvimento de Navegação Autônoma para VANT Utilizando Técnicas de Aprendizado por Reforço',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.ROBOTICA,
    thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0KoegQUJ9WxFLSH_V59aOFYUWfEseiUjqg&s',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.NENHUM,
    students: [
      { id: '1384', name: 'Henrique Turco Gera', role: 'Ciência da Computação' },
      { id: '1408', name: 'Luigi Orlandi Quinze', role: 'Ciência da Computação' },
      { id: '1445', name: 'Victoria Leal Garcia de Souza', role: 'Engenharia Mecatrônica' },      
      { id: '1399', name: 'Leonardo Sterman Freitas', role: 'Ciência da Computação' },      

    ],
    advisor: 'Fabricio Jailson Barth',
    longDescription: 'Este projeto visa desenvolver, em simulação, um sistema de navegação para um VANT (Veículo Aéreo Não Tripulado) de asa fixa utilizando aprendizado por reforço. (Reinforcement Learning). O ambiente de treinamento foi implementado diretamente sobre a modelagem mecânica do VANT (Aerosonde), no referencial NED (North-East-Down), garantindo que a dinâmica (atuadores, restrições e equações de movimento) utilizada pelo VANT reflita seu comportamento físico. O veículo emprega Proximal Policy Optimization (PPO), adequado a espaços de ação contínuos (complexos) e estáveis para controle fino, aprendendo a minimizar distância ao alvo (waypoint), alinhar direção e respeitar os limites operacionais. Em paralelo, a modelagem mecânica foi consolidada (MATLAB) para validação e análise, enquanto o ambiente em Python (compatível com a biblioteca Gymnasium) integra o mesmo conjunto de equações ao loop de interação do aprendizado por reforço. Essa integração do modelo mecânico com o ambiente de Reinforcement Learning assegura consistência entre simulação física e aprendizado, favorecendo a transferência de resultados e a avaliação comparativa de algoritmos.',
    tags: ['DataScience', 'Simulation', 'ReinforcementLearning'],
    partner: 'Akaer'
  },
  {
    id: '202502004',
    title: 'Monitoramento de rede em máquinas virtuais em uma infraestrutura OpenStack Kolla-Ansible',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.CLOUD_COMPUTING,
    thumbnailUrl: 'https://cdn.prod.website-files.com/643d2eea03135260bdaca209/6585cea39ae01230757b9f31_QuantumCloud.webp',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.NENHUM,
    students: [
      { id: '1432', name: 'Raphael Cavalcanti Banov', role: 'Engenharia de Computação' },
      { id: '1391', name: 'João Pedro Gardenal Sarti', role: 'Ciência da Computação' },
      { id: '1355', name: 'Carlos Eduardo Porciuncula Yamada', role: 'Engenharia de Computação' },            
    ],
    advisor: 'Tiago Augusto Orcajo Demay Cordeiro',
    longDescription: 'Desenvolvimento de uma ferramenta independente para monitoramento granular de tráfego em nuvem OpenStack, capaz de distinguir fluxos internos e externos para identificação proativa de anomalias.',
    tags: ['Cloud', 'OpenStack', 'Networking'],
    partner: 'Binario Cloud'
  },
  {
    id: '202502005',
    title: 'Widget Launchpad: Design, Build & Ship with Boldr',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.SOFTWARE,
    thumbnailUrl: 'https://play-lh.googleusercontent.com/fP2wyT-MmhqYChvbykVtOrIxdYMWHrYZJX2kE4bFD373e7rufv8lnAxFFwHrRNu_Hm5z',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.DESTAQUE,
    students: [
      { id: '1403', name: 'Luca Santana Feltrin', role: 'Ciência da Computação' },
      { id: '1362', name: 'Eduardo Takei Yaginuma', role: 'Ciência da Computação' },
      { id: '1364', name: 'Esther Caroline Cunha Rodrigues', role: 'Ciência da Computação' },      
      { id: '1370', name: 'Gabriel Fernando Missaka Mendes', role: 'Ciência da Computação' },      

    ],
    advisor: 'Luiz Fernando Cardoso dos Santos Durão',
    longDescription: 'Desenvolvimento e lançamento de widgets mobile multiplataforma focados em design, vivenciando o ciclo completo de entrega de software e métricas de usuário em um ambiente real de startup.',
    tags: ['MobileDevelopment'],
    partner: 'Boldr'
  },
  {
    id: '202502006',
    title: 'Diagnóstico de Dados Aplicado ao Fluxo de Empréstimo Consignado Público',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.CIENCIA_DADOS,
    thumbnailUrl: 'https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/513077152_698120752995043_4582130344216184866_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2a1932&_nc_ohc=tNkl-ziJZRgQ7kNvwGCQr_j&_nc_oc=AdqU8ACdhO8r-zgmECS5rZo6kDDqLIzS1VmRz9OOivMhg88RHRfpAtdf38fH4iokTL8&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_gid=BYMuzm8bgL0g7ZS5_9m8-g&_nc_ss=7a3a8&oh=00_Af0J0yhm5J60Ak_cVsoAu6PpPF9HKyTEEA_unDe9QrDdtw&oe=69E84437',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.DESTAQUE,
    students: [
      { id: '1423', name: 'Pedro Antônio Braga Dutra', role: 'Engenharia de Computação' },
      { id: '1369', name: 'Fernando Pinheiro Silva Fernandes de Mattos', role: 'Engenharia de Computação' },
      { id: '1438', name: 'Sérgio Carmelo Torres Filho', role: 'Engenharia de Computação' },            
    ],
    advisor: 'Raul Ikeda Gomes da Silva',
    longDescription: 'Aplicação de diagnóstico de dados e inteligência analítica para identificar gargalos e aumentar a taxa de conversão na esteira de originação de crédito consignado.',
    tags: ['DataScience'],
    partner: 'BYX'
  },
  {
    id: '202502007',
    title: 'Otimização de uma CPU RISC-V',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.EMBARCADOS,
    thumbnailUrl: 'https://www.forumcampinas.org.br/interdependencia/wp-content/uploads/2023/11/CTI-2023-entrada.jpg',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.EXCELENCIA,
    students: [
      { id: '1398', name: 'Leonardo Merlin Paloschi', role: 'Engenharia de Computação' },
      { id: '1427', name: 'Pedro Pereira Cecílio Ventura', role: 'Engenharia de Computação' },
      { id: '1405', name: 'Lucas Fernando de Souza Lima', role: 'Engenharia de Computação' },
      { id: '1386', name: 'Ilana Chaia Finger', role: 'Engenharia de Computação' },            
            
    ],
    advisor: 'Rafael Corsi Ferrão',
    longDescription: 'Otimização de hardware e software de uma CPU RISC-V em VHDL para aumentar o desempenho e a confiabilidade de sistemas de processamento em satélites.',
    tags: ['ComputerArchitecture','EmbeddedSystems'],
    partner: 'CTI Renato Archer'
  },
  {
    id: '202502008',
    title: 'Um framework para avaliação de Vision Language Models',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.AI,
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/34/RR1-_Dell_Campus.jpg',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.EXCELENCIA,
    students: [
      { id: '1383', name: 'Henrique Scofield Sotto Mayor', role: 'Ciência da Computação' },
      { id: '1363', name: 'Ellen Coutinho Lião da Silva', role: 'Engenharia de Computação' },
      { id: '1227', name: 'Rodrigo Eiji Furukawa', role: 'Engenharia Mecatrônica' },
      { id: '1409', name: 'Luis Antonio Santana Rodrigues', role: 'Engenharia de Computação' },            
            
    ],
    advisor: 'Fabio Jose Ayres',
    longDescription: 'Desenvolvimento de um framework modular em Python para avaliação sistemática de modelos multimodais (VLMs) em tarefas de interpretação e resposta sobre conteúdos de vídeo.',
    tags: ['VLM','ComputerVision','DeepLearning'],
    partner: 'Dell Technologies'
  },
  {
    id: '202502009',
    title: 'Avaliação de Simulação de CFD com aplicação aeronáutica',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.SIMULACAO,
    thumbnailUrl: 'https://www3.al.sp.gov.br/repositorio/noticia/N-08-2025/fg351160.jpeg',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.EXCELENCIA,
    students: [
      { id: '1401', name: 'Lourenço Junqueira Franco Meirelles', role: 'Engenharia Mecânica' },
      { id: '1419', name: 'Melina Belli Stergiou', role: 'Engenharia Mecânica' },
      { id: '1410', name: 'Luis Filippe Silva Gomes', role: 'Engenharia Mecânica' },
      { id: '1375', name: 'Gustavo Colombi Ribolla', role: 'Ciência da Computação' },                   
    ],
    advisor: 'Paulo Roberto Bufacchi Mendes',
    longDescription: 'Validação e otimização de simulações CFD para prever fenômenos aerodinâmicos críticos em regimes transônicos, comparando malhas computacionais com dados experimentais de túnel de vento.',
    tags: ['NumericalSimulation','Aerodynamics'],
    partner: 'Embraer'
  },
  {
    id: '202502010',
    title: 'Generation of Puzzles For Logic Game',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.AI,
    thumbnailUrl: 'https://play-lh.googleusercontent.com/nhx3GgJLnv20HowhHNRjWhbmoqWIYkvfKaH850GyCColpRmy_du73HrIfBFSx18X1Q=w3840-h2160-rw',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.NENHUM,
    students: [
      { id: '1418', name: 'Mateus Moreira Pereira', role: 'Ciência da Computação' },
      { id: '1433', name: 'Raul Rangel Moraes Bezerra', role: 'Engenharia de Computação' },
      { id: '1447', name: 'Yan Vieira Romano', role: 'Engenharia de Computação' },                 
    ],
    advisor: 'Luciano Pereira Soares',
    longDescription: 'Desenvolvimento de um gerador de puzzles Nonogram que utiliza IA generativa para criar arte e um solver que emula o raciocínio humano para garantir a jogabilidade e fornecer dicas intuitivas.',
    tags: ['GenerativeAI','LogicPuzzles', 'ProceduralGeneration'],
    partner: 'Fanatee'
  },
  {
    id: '202502011',
    title: 'Triagem e Otimização do Check-up',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.SISTEMAS_INFORMACAO,
    thumbnailUrl: 'https://hospitalsiriolibanes.org.br/sites/institucional/files/2025-12/interna_belavista-1.jpg',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.EXCELENCIA,
    students: [
      { id: '1431', name: 'Rafaela Afferri de Oliveira', role: 'Ciência da Computação' },
      { id: '1429', name: 'Rafael Dourado Bastos de Oliveira', role: 'Engenharia de Computação' },
      { id: '1347', name: 'Beatriz Rodrigues de Freitas', role: 'Engenharia de Computação' },
      { id: '1396', name: 'Laura Pontiroli Machado', role: 'Ciência da Computação' },                   
    ],
    advisor: 'Tiago Fernandes Tavares',
    longDescription: 'Implementação de um chatbot de triagem e análise de dados para identificar queixas de pacientes no pré-atendimento, otimizando o encaminhamento médico e a conversão de serviços hospitalares.',
    tags: ['HealthTech','Chatbot','HospitalManagement','PatientExperience'],
    partner: 'Hospital Sírio-Libanês'
  },
  {
    id: '202502012',
    title: 'Combate à Pirataria de Cartuchos HP no Mercado Livre',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.SOFTWARE,
    thumbnailUrl: 'https://logosmarcas.net/wp-content/uploads/2020/12/Hewlett-Packard-Logo-2008-2014.jpg',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.NENHUM,
    students: [
      { id: '1343', name: 'Andre Pereira de Oliveira', role: 'Ciência da Computação' },
      { id: '1430', name: 'Rafael Gordon Paves', role: 'Engenharia de Computação' },
      { id: '1411', name: 'Luiz Eduardo Herreros Pini', role: 'Engenharia de Computação' },
      { id: '1394', name: 'Julia Almeida Silva', role: 'Ciência da Computação' },                   
    ],
    advisor: 'Humberto Rodrigo Sandmann',
    longDescription: 'Desenvolvimento de uma plataforma automatizada de triagem e priorização de anúncios fraudulentos no Mercado Livre para otimizar o combate à pirataria de suprimentos HP.',
    tags: ['Dashboard','WebScraping','MarketplaceMonitoring'],
    partner: 'HP'
  },
  {
    id: '202502013',
    title: 'Aprimorando Modelos de Elevação para construir cidades mais resilientes',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.CIENCIA_DADOS,
    thumbnailUrl: 'https://yt3.googleusercontent.com/3PfQYVO7HASuprs_eU-ZOcOAkmrRGCiUWzmJ5-AntxnFYEc71k2ZLsgnySO8bP3JoWDcEnFkCuQ=s900-c-k-c0x00ffffff-no-rj',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.NENHUM,
    students: [
      { id: '1376', name: 'Gustavo de Lorenzi Cancellier Katz', role: 'Engenharia Mecatrônica' },
      { id: '1387', name: 'Isabella Leão Pereira Lima', role: 'Engenharia Mecatrônica' },
      { id: '1215', name: 'Ana Beatriz Parra Ferreira', role: 'Engenharia Mecatrônica' },
      { id: '1213', name: 'Rodrigo Bandeira Villela', role: 'Engenharia Mecânica' },                   
    ],
    advisor: 'Victor Antonio Seixas de Menezes Paiva',
    longDescription: 'Desenvolvimento de algoritmos de visão computacional e ciência de dados para refinar modelos de elevação gratuitos, removendo ruídos e aumentando a resolução para simulações precisas de inundações urbanas.',
    tags: ['UrbanResilience','ComputerVision'],
    partner: 'IPT'
  },
  {
    id: '202502014',
    title: 'Web Client for Port Video Monitoring with Defense AI',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.SOFTWARE,
    thumbnailUrl: 'https://backend.intelbras.com/sites/default/files/2026-02/logo-intelbras-novo.png',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.NENHUM,
    students: [
      { id: '1425', name: 'Pedro de Lucca Sartori Chagas Ferro', role: 'Engenharia de Computação' },
      { id: '1359', name: 'David Matheus Conselvan', role: 'Engenharia de Computação' },
      { id: '1368', name: 'Fernando Alzueta', role: 'Engenharia de Computação' },
      { id: '1412', name: 'Luiza Ferreira Ehrenberger', role: 'Engenharia de Computação' },                   
    ],
    advisor: 'Marcel Parolin Jackowski',
    longDescription: 'Desenvolvimento de um cliente web moderno e seguro para monitoramento portuário, integrando sistemas de segurança inteligente e conversão de vídeo em tempo real para maior acessibilidade e conformidade.',
    tags: ['WebDevelopment','FullStack', 'VideoMonitoring','Cybersecurity'],
    partner: 'Intelbras'
  },
  {
    id: '202502015',
    title: 'Desenvolvimento de bancada de testes de resistência à água em produtos do setor agroindustrial',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.AUTOMACAO_INDUSTRIAL,
    thumbnailUrl: 'https://www.jassy.ag/wp-content/uploads/2019/08/Entrada_J.Assy_010819-1024x958.jpg',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.NENHUM,
    students: [
      { id: '1349', name: 'Breno Brolacci Schiavon', role: 'Engenharia Mecânica' },
      { id: '1225', name: 'Maia Fleider', role: 'Engenharia Mecatrônica' },
      { id: '1223', name: 'Leandra Ferreira Fontes', role: 'Engenharia Mecatrônica' },
      { id: '1416', name: 'Mariana Ribeiro Sávio', role: 'Engenharia Mecatrônica' },                   
    ],
    advisor: 'Fabio Ferraz Junior',
    longDescription: 'Desenvolvimento de uma bancada automatizada com CLP para testes de resistência à água e estanqueidade de componentes agroindustriais, seguindo normas internacionais de proteção.',
    tags: ['AgroTech','Estanqueidade','AutomacaoIndustrial','Sustainability'],
    partner: 'J.ASSY'
  },
  {
    id: '202502016',
    title: 'Protótipo de Validação Automatizada de Dados de Consumo de Energia com IA para Sustentabilidade',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.AI,
    thumbnailUrl: 'https://cdn.motor1.com/images/mgl/xWk8k/s1/mercedes-benz-social-distancing-logo.jpg',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.NENHUM,
    students: [
      { id: '1372', name: 'Giúlia Gomes Vallente', role: 'Ciência da Computação' },
      { id: '1357', name: 'Daniel da Rocha Prado', role: 'Ciência da Computação' },
      { id: '1348', name: 'Beni Sliozbergas', role: 'Ciência da Computação' },
      { id: '1341', name: 'Ana Helena Caiafa', role: 'Ciência da Computação' },                   
    ],
    advisor: 'Graziela Simone Tonin',
    longDescription: 'Implementação de um pipeline automatizado com IA e OCR para validar dados de consumo de energia e combustíveis, garantindo a integridade dos relatórios de emissões (ESG) da Mercedes-Benz.',
    tags: ['Sustainability','ESG'],
    partner: 'Mercedes-Benz'
  },
  {
    id: '202502017',
    title: 'Driving Behaviour de Condutores via Machine Learning',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.CIENCIA_DADOS,
    thumbnailUrl: 'https://cms-gazzconecta.s3.amazonaws.com/gazzconecta/2020/07/31173437/Mottu-Stock-20-07-28-2067.jpg',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.NENHUM,
    students: [
      { id: '1374', name: 'Gustavo Barroso Souza Cruz', role: 'Ciência da Computação' },
      { id: '1442', name: 'Thiago Penha Pinheiro da Costa', role: ' Ciência da Computação' },
      { id: '1353', name: 'Caio Frigerio Liberal', role: 'Ciência da Computação' }                 
    ],
    advisor: 'Marcio Fernando Stabile Junior',
    longDescription: 'Desenvolvimento de modelos de Machine Learning para classificar perfis de condutores e prever riscos operacionais com base em padrões de uso e telemetria da frota.',
    tags: ['DrivingBehaviour','MachineLearning','DataScience'],
    partner: 'Mottu'
  },
  {
    id: '202502018',
    title: 'Inteligência Artificial na Manutenção Preditiva: Detecção de Anomalias Multivariáveis com Machine Learning',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.AI,
    thumbnailUrl: 'https://rockwellautomation.scene7.com/is/image/rockwellautomation/OurCompany-1.3840.jpg',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.NENHUM,
    students: [
      { id: '1218', name: 'Cleilton Sousa Serra', role: 'Engenharia Mecatrônica' },
      { id: '1446', name: 'Vinícius Garcia Lopes', role: 'Engenharia Mecatrônica' },
      { id: '1074', name: 'Natan Kron Goldenberg Lewi', role: 'Engenharia Mecânica' },
    ],
    advisor: 'Carlos Magno de Oliveira Valente',
    longDescription: 'Desenvolvimento de uma solução de IA para detecção de anomalias multivariáveis e classificação automática de falhas industriais, integrada à plataforma FactoryTalk para manutenção preditiva em tempo real.',
    tags: ['MachineLearning','IIoT', 'PredictiveMaintenance'],
    partner: 'Rockwell Automation'
  },
  {
    id: '202502019',
    title: 'Exams PDF reader/converter',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.AI,
    thumbnailUrl: 'https://ifs-p-001.sitecorecontenthub.cloud/api/public/content/new_size_948-711_ifs_tata_consultancy_services_logo_july_2022_670x300.jpg-273f76?v=676a79ee',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.NENHUM,
    students: [
      { id: '1214', name: 'Victor Pacheco dos Santos', role: 'Engenharia Mecânica' },
      { id: '1207', name: 'Guilherme da Franca Silva Escobar', role: 'Engenharia Mecânica' },
      { id: '1045', name: 'Guilherme Caproni de Faria', role: 'Engenharia de Computação' },                   
    ],
    advisor: 'Diego Pavan Soler',
    longDescription: 'Desenvolvimento de um sistema inteligente capaz de ler e extrair dados de exames médicos em PDF (digitais ou manuscritos) para integração automatizada em sistemas ERP.',
    tags: ['ComputerVision','HealthTech','DataScience'],
    partner: 'Tata Consultancy Services'
  },
  {
    id: '202502020',
    title: 'Control of medicine stock in hospitals and clinics',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.SISTEMAS_INFORMACAO,
    thumbnailUrl: 'https://ifs-p-001.sitecorecontenthub.cloud/api/public/content/new_size_948-711_ifs_tata_consultancy_services_logo_july_2022_670x300.jpg-273f76?v=676a79ee',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.NENHUM,
    students: [
      { id: '1381', name: 'Henrique Manequini Rocha Pinto', role: 'Engenharia Mecatrônica' },
      { id: '1421', name: 'Nina Savoy de Sa', role: 'Ciência da Computação' },
      { id: '1385', name: 'Ian Cordibello Desponds', role: 'Ciência da Computação' },
      { id: '1221', name: 'Giselle Vieira de Melo', role: 'Engenharia Mecatrônica' },                   
      { id: '1378', name: 'Gustavo Rollo Dias Paulino', role: 'Engenharia Mecatrônica' },                   

    ],
    advisor: 'Alex Camilli Bottene',
    longDescription: 'Implementação de um sistema inteligente de controle de estoque para hospitais, focado na previsão de demanda e otimização da distribuição para eliminar desperdícios e garantir a disponibilidade de medicamentos.',
    tags: ['SupplyChain','InventoryOptimization','HospitalManagement',],
    partner: 'Tata Consultancy Services'
  },
  {
    id: '202502021',
    title: 'Chatbot Para Primeiro Atendimento',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.AI,
    thumbnailUrl: 'https://media.maisretorno.com/portal/wp-content/uploads/2021/07/WEG-5-1024x544.jpg',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.NENHUM,
    students: [
      { id: '1366', name: 'Felipe Affonso Ribeiro de Maia', role: 'Engenharia de Computação' },
      { id: '1402', name: 'Luca Caruso', role: 'Engenharia de Computação' },
      { id: '1361', name: 'Eduardo Selber Castanho', role: 'Engenharia de Computação' },
      { id: '1380', name: 'Henrique Fazzio Badin', role: 'Engenharia de Computação' },                   
    ],
    advisor: 'Fabio Roberto de Miranda',
    longDescription: 'Desenvolvimento de um chatbot baseado em RAG para a WEG, capaz de realizar triagem técnica e responder dúvidas de colaboradores via Microsoft Teams, otimizando o fluxo de chamados internos.',
    tags: ['Chatbot','RAG','GenerativeAI','Industry40'],
    partner: 'WEG'
  },
  {
    id: '202502022',
    title: 'Sistema de Inteligência Artificial para Monitoramento Preditivo de Processos Industriais',
    description: '',
    semester: '2',
    year: 2025,
    category: ProjectCategory.AI,
    thumbnailUrl: 'https://media.maisretorno.com/portal/wp-content/uploads/2021/07/WEG-5-1024x544.jpg',
    galleryUrls: [
      '',
    ],
    awardType: AwardType.NENHUM,
    students: [
      { id: '1377', name: 'Gustavo Morin de Sousa', role: 'Engenharia Mecatrônica' },
      { id: '1389', name: 'João Antônio Gomes Garcia', role: 'Engenharia de Computação' },
      { id: '1397', name: 'Layne Pereira da Silva', role: 'Engenharia Mecatrônica' },
      { id: '1373', name: 'Guilherme Katayama Kaidei', role: 'Ciência da Computação' },
      { id: '1356', name: 'Carol Magario de Mattos Barretto', role: 'Engenharia Mecatrônica' },                   
    ],
    advisor: 'Lie Pablo Grala Pinto',
    longDescription: 'Desenvolvimento de um sistema de IA para monitoramento em tempo real de redes IIoT, focado na detecção de anomalias e previsão de falhas com alta precisão para evitar paradas produtivas.',
    tags: ['Industry40','IIoT','PredictiveMaintenance','MachineLearning',],
    partner: 'WEG'
  },
];
