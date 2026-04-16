
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
  'A.C. Camargo','Airis Tecnologia',
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
      { id: '22610459', name: 'Bruno Alencar Braghette', role: 'Engenharia Mecânica' },
      { id: '20610371', name: 'Paulo Augusto dos Passos Oliveira', role: 'Engenharia Mecânica' },
      { id: '21610342', name: 'Daniel Vergamini Luna Frussa', role: 'Engenharia Mecânica' },
      { id: '22610573', name: 'Ruy de Paula Souza Neto', role: 'Engenharia Mecânica' },
    ],
    advisor: 'Raphael Galdino dos Santos',
    longDescription: 'Dispositivos como bolus e estabilizador bucal são utilizados durante a radioterapia para melhor eficácia do tratamento. O estabilizador bucal e o bolus (utilizado em outras áreas do corpo) são métodos pioneiros do A.C.Camargo que permitem um posicionamento adequado do paciente durante a sessão de radioterapia, o qual é essencial para garantir a precisão na entrega da dose de radiação ao tumor, minimizando danos aos tecidos saudáveis. O bolus e o estabilizador bucal garantem um posicionamento consistente em cada sessão e visam também o conforto do paciente. Esses materiais são produzidos na fase de planejamento do tratamento, com apoio de imagens como tomografias e ressonâncias, para definir o posicionamento ideal e a área exata a ser tratada e definindo o formato, molde e dimensões do bolus ou estabilizador. Após medições, a equipe segue para a confecção dos dispositivos que é feita de forma individual e artesanal. A equipe desprende algumas horas na confecção dos mesmos. Em resumo, o posicionamento do paciente influencia diretamente a eficácia e a segurança do tratamento, sendo essencial a colaboração entre o paciente, o oncologista e a equipe de radioterapia. Desta forma, o objetivo desta proposta seria customizar a confecção destes dispositivos. Nesta proposta teria a inclusão de pacientes com indicação de confecção do estabilizador bucal e bolus.',
    tags: ['3D printing','Bioengenharia'],
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
      { id: '23610764', name: 'Ananda Julia Galvão Campêlo', role: 'Engenharia de Computação' },
      { id: '21620395', name: 'Kevin Nagayuki Shinohara', role: 'Engenharia de Computação' },
      { id: '19610496', name: 'Luca Cazzolato Machado', role: 'Engenharia de Computação' },      
      { id: '22610435', name: 'Thiago Gonçalves Guadagnoli de Sousa', role: 'Engenharia de Computação' },      

    ],
    advisor: 'Vinicius Licks',
    longDescription: 'Criação de um sistema de mapeamento dinâmico e inteligente que reconstrói a planta de supermercados e otimiza rotas a partir do comportamento de fluxo dos carrinhos.',
    tags: ['Computer Vision', 'IoT', 'Data Science'],
    partner: 'Airis Tecnologia'
  },
  
];
