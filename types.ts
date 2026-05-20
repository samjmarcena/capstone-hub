
export enum ProjectCategory {
  ADMINISTRACAO = 'Administração, Economia e Finanças',
  AUTOMACAO_INDUSTRIAL = 'Automação Industrial',
  BIOENGENHARIA = 'Bioengenharia',
  CIBERSEGURANCA = 'Cibersegurança',
  CIENCIA_DADOS = 'Ciência dos Dados',
  CLOUD_COMPUTING = 'Computação em Nuvem',
  CONTROLE_SISTEMAS = 'Controle de Sistemas Dinâmicos',
  EFICIENCIA_ENERGETICA = 'Eficiência Energética',
  HARDWARE = 'Hardware & IoT',
  MOBILIDADE = 'Engenharia da Mobilidade',
  SOFTWARE = 'Engenharia de Software',
  INOVACAO_SOCIAL = 'Inovação Social',
  AI = 'Inteligência Artificial',
  LOGISTICA = 'Logística e Supply Chain',
  MANUFATURA_AVANCADA = 'Manufatura Avançada',
  ROBOTICA = 'Robótica',
  SIMULACAO = 'Simulação Computacional',
  EMBARCADOS = 'Sistemas Embarcados',
  SISTEMAS_INTERATIVOS = 'Sistemas Interativos',
  SISTEMAS_INFORMACAO = 'Sistemas de Informação',
}

export enum AwardType {
  NENHUM = 'Nenhum',
  DESTAQUE = 'Destaque Falconi',
  EXCELENCIA = 'Excelência Falconi'
}

export interface Student {
  id: string;
  name: string;
  role: string;
  photoUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  semester: '1' | '2';
  year: number;
  category: ProjectCategory;
  thumbnailUrl: string;
  videoUrl?: string;
  galleryUrls: string[];
  presentationUrl?: string;
  awardType: AwardType;
  students: Student[];
  advisor: string;
  longDescription: string;
  tags: string[];
  partner?: string;
}

export type ViewState = 'IDLE' | 'DASHBOARD' | 'PROJECT_DETAIL' | 'AWARDS_WALL';
