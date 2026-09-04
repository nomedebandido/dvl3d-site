export type Product = {
  slug: string;
  name: string;
  code: string;
  category: string;
  image: string;
  images: string[];
  imagePosition: string;
  shortDescription: string;
  description: string;
  items: string[];
  colors: string;
  note?: string;
};

export const products: Product[] = [
  {
    slug: "kit-nossa-senhora",
    name: "Kit Nossa Senhora",
    code: "DVL_R01",
    category: "Linha Religiosa",
    image: "/images/kit-nossa-senhora.webp",
    images: [
      "/images/kit-nossa-senhora.webp",
      "/images/nossa-senhora-frontal.webp",
      "/images/nossa-senhora-embalagem.webp",
    ],
    imagePosition: "object-[center_58%]",
    shortDescription:
      "Uma composição criada para espaços de fé, oração e contemplação.",
    description:
      "O Kit Nossa Senhora une formas delicadas e uma combinação marcante de branco, azul e dourado. Desenvolvido para decorar espaços de oração, presentear pessoas especiais e preservar momentos de fé.",
    items: [
      "Imagem de Nossa Senhora",
      "Base decorativa",
      "Porta-vela",
    ],
    colors:
      "Cores e detalhes podem ser personalizados durante o atendimento.",
  },
  {
    slug: "kit-sagrada-familia",
    name: "Kit Sagrada Família",
    code: "DVL_R02",
    category: "Linha Religiosa",
    image: "/images/kit-sagrada-familia.webp",
    images: [
      "/images/kit-sagrada-familia.webp",
      "/images/sagrada-familia-angulo.webp",
    ],
    imagePosition: "object-center",
    shortDescription:
      "Uma composição minimalista que representa fé, união e proteção.",
    description:
      "O Kit Sagrada Família foi criado para se adaptar a diferentes estilos de decoração. Seu acabamento limpo e delicado transforma a peça em uma opção especial para ambientes, celebrações e presentes.",
    items: [
      "Imagem da Sagrada Família",
      "Bandeja decorativa",
      "Porta-vela",
    ],
    colors:
      "Cores e detalhes podem ser personalizados durante o atendimento.",
  },
  {
    slug: "prateleira-melt",
    name: "Prateleira Melt",
    code: "DVL_003",
    category: "Decoração — Coleção MELT",
    image: "/images/prateleira-melt/prateleira-melt-01.webp",
    images: [
      "/images/prateleira-melt/prateleira-melt-01.webp",
      "/images/prateleira-melt/prateleira-melt-02.webp",
      "/images/prateleira-melt/prateleira-melt-03.webp",
    ],
    imagePosition: "object-center",
    shortDescription:
      "Uma prateleira escultural que transforma função em presença.",
    description:
      "A Prateleira Melt combina uma superfície funcional com gotas fluidas e formas marcantes. Criada para destacar pequenos objetos e transformar a parede em parte da composição do ambiente.",
    items: ["1 Prateleira Melt"],
    colors:
      "Produzida sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Objetos decorativos exibidos nas imagens são meramente ilustrativos e não acompanham o produto. Parafusos, buchas e demais itens de fixação não estão inclusos.",
  },
  {
    slug: "vaso-melt",
    name: "Vaso Melt",
    code: "DVL_004",
    category: "Decoração — Coleção MELT",
    image: "/images/vaso-melt/vaso-melt-01.webp",
    images: [
      "/images/vaso-melt/vaso-melt-01.webp",
      "/images/vaso-melt/vaso-melt-02.webp",
      "/images/vaso-melt/vaso-melt-03.webp",
    ],
    imagePosition: "object-center",
    shortDescription:
      "Um vaso de formas fluidas criado para levar movimento à decoração.",
    description:
      "O Vaso Melt combina linhas onduladas, base escultural e recipiente interno removível. Uma peça de destaque para mesas, estantes e aparadores, pensada para unir personalidade e praticidade.",
    items: [
      "1 Estrutura externa Vaso Melt",
      "1 Recipiente interno removível",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Planta, terra, pedras e demais elementos decorativos exibidos nas imagens são meramente ilustrativos e não acompanham o produto.",
  },
  {
    slug: "bandeja-essencial",
    name: "Bandeja Essencial",
    code: "DVL_005",
    category: "Organização",
    image: "/images/bandeja-essencial/bandeja-essencial-01.webp",
    images: [
      "/images/bandeja-essencial/bandeja-essencial-01.webp",
      "/images/bandeja-essencial/bandeja-essencial-02.webp",
      "/images/bandeja-essencial/bandeja-essencial-03.webp",
      "/images/bandeja-essencial/bandeja-essencial-04.webp",
    ],
    imagePosition: "object-center",
    shortDescription:
      "Organização prática para os pequenos objetos que fazem parte da rotina.",
    description:
      "A Bandeja Essencial reúne uma área principal ampla e um compartimento lateral de destaque. Ideal para organizar chaves, óculos, fones e outros itens em aparadores, mesas, cabeceiras e escritórios.",
    items: ["1 Bandeja Essencial"],
    colors:
      "Produzida sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Óculos, chaves, fones e demais objetos exibidos nas imagens são meramente ilustrativos e não acompanham o produto.",
  },
  {
    slug: "organizador-de-perfumes",
    name: "Organizador de Perfumes",
    code: "DVL_006",
    category: "Organização",
    image:
      "/images/organizador-de-perfumes/organizador-de-perfumes-01.webp",
    images: [
      "/images/organizador-de-perfumes/organizador-de-perfumes-01.webp",
      "/images/organizador-de-perfumes/organizador-de-perfumes-02.webp",
      "/images/organizador-de-perfumes/organizador-de-perfumes-03.webp",
      "/images/organizador-de-perfumes/organizador-de-perfumes-04.webp",
      "/images/organizador-de-perfumes/organizador-de-perfumes-05.webp",
      "/images/organizador-de-perfumes/organizador-de-perfumes-06.webp",
      "/images/organizador-de-perfumes/organizador-de-perfumes-07.webp",
    ],
    imagePosition: "object-center",
    shortDescription:
      "Três níveis para organizar, visualizar e destacar sua coleção.",
    description:
      "O Organizador de Perfumes utiliza uma estrutura em três níveis para melhorar a visualização dos frascos e aproveitar melhor o espaço. Uma solução funcional para penteadeiras, prateleiras, closets e áreas de exposição.",
    items: [
      "1 Organizador de Perfumes desmontável",
      "3 superfícies de apoio",
      "Estruturas laterais de encaixe",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Perfumes, cosméticos e demais objetos exibidos nas imagens são meramente ilustrativos e não acompanham o produto.",
  },
  {
    slug: "comedouro-bebedouro-portatil",
    name: "Comedouro e Bebedouro Portátil",
    code: "DVL_007",
    category: "Linha Pet",
    image:
      "/images/comedouro-bebedouro-portatil/comedouro-bebedouro-portatil-01.webp",
    images: [
      "/images/comedouro-bebedouro-portatil/comedouro-bebedouro-portatil-01.webp",
      "/images/comedouro-bebedouro-portatil/comedouro-bebedouro-portatil-02.webp",
      "/images/comedouro-bebedouro-portatil/comedouro-bebedouro-portatil-03.webp",
      "/images/comedouro-bebedouro-portatil/comedouro-bebedouro-portatil-04.webp",
    ],
    imagePosition: "object-center",
    shortDescription:
      "Uma solução compacta para oferecer água ou alimento durante os passeios.",
    description:
      "O Comedouro e Bebedouro Portátil reúne recipiente, reservatório e tampas em um conjunto compacto. Pensado para passeios e deslocamentos, ele pode ser desmontado para uso e encaixado novamente para facilitar o transporte.",
    items: [
      "1 Reservatório com tampa",
      "1 Recipiente externo para servir água ou alimento",
      "1 Tampa auxiliar",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Água, ração e demais elementos exibidos em demonstrações são meramente ilustrativos e não acompanham o produto. Higienize antes e após o uso e não utilize em máquina lava-louças.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}