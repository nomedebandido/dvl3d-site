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
      "/images/prateleira-melt/prateleira-melt-04.webp",
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
      "/images/vaso-melt/vaso-melt-04.webp",
      "/images/vaso-melt/vaso-melt-05.webp",
      "/images/vaso-melt/vaso-melt-06.webp",
      "/images/vaso-melt/vaso-melt-07.webp",
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
      "/images/bandeja-essencial/bandeja-essencial-05.webp",
      "/images/bandeja-essencial/bandeja-essencial-06.webp",
      "/images/bandeja-essencial/bandeja-essencial-07.webp",
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
      "Vaso, flores, óculos, chaves, fones e demais objetos exibidos nas imagens são meramente ilustrativos e não acompanham o produto.",
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
{
    slug: "porta-guardanapos-natalinos",
    name: "Kit Porta-Guardanapos Natalinos",
    code: "DVL_N01",
    category: "Natal — Mesa posta",
    image: "/images/natal/porta-guardanapos-natalinos.webp",
    images: ["/images/natal/porta-guardanapos-natalinos.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Conjunto com seis modelos natalinos para deixar a mesa mais especial.",
    description:
      "O Kit Porta-Guardanapos Natalinos reúne seis desenhos temáticos para compor a mesa posta de dezembro com um toque divertido e elegante. Uma peça simples de usar e fácil de combinar com diferentes estilos de decoração.",
    items: [
      "6 porta-guardanapos natalinos com modelos variados",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Guardanapos e demais elementos exibidos na imagem são meramente ilustrativos e não acompanham o produto.",
  },
  {
    slug: "arvore-de-natal-decorativa",
    name: "Árvore de Natal Decorativa",
    code: "DVL_N02",
    category: "Natal — Decoração",
    image: "/images/natal/arvore-de-natal-decorativa.webp",
    images: ["/images/natal/arvore-de-natal-decorativa.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Uma árvore decorativa de presença marcante, disponível em dois tamanhos.",
    description:
      "A Árvore de Natal Decorativa DVL3D combina camadas orgânicas e uma estrela no topo em uma composição clean e moderna. Disponível em dois tamanhos, funciona bem sozinha ou em dupla em mesas, aparadores e estantes.",
    items: [
      "1 Árvore de Natal Decorativa",
      "Opção de tamanho pequeno ou grande",
    ],
    colors:
      "Cores da árvore, base e estrela podem ser combinadas sob encomenda.",
    note:
      "Vendido por unidade. Elementos decorativos da foto não acompanham o produto.",
  },
  {
    slug: "bola-papai-noel",
    name: "Bola Decorativa Papai Noel",
    code: "DVL_N03",
    category: "Natal — Enfeites",
    image: "/images/natal/bola-papai-noel.webp",
    images: ["/images/natal/bola-papai-noel.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Um enfeite em formato de bola com cenário interno de Papai Noel.",
    description:
      "A Bola Decorativa Papai Noel traz um pequeno cenário natalino em relevo dentro de uma peça esférica vazada. É uma opção de destaque para árvore de Natal, guirlandas e composições decorativas.",
    items: [
      "1 Bola Decorativa Papai Noel",
    ],
    colors:
      "Produzida sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Cordão ou fita podem variar conforme disponibilidade. Demais elementos da imagem não acompanham o produto.",
  },
  {
    slug: "arvore-flexi-natalina",
    name: "Árvore de Natal Flexi",
    code: "DVL_N04",
    category: "Natal — Decoração divertida",
    image: "/images/natal/arvore-flexi-natalina.webp",
    images: ["/images/natal/arvore-flexi-natalina.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Uma árvore articulada e divertida para decorar de um jeito diferente.",
    description:
      "A Árvore de Natal Flexi mistura decoração e movimento em uma peça leve e cheia de personalidade. As pernas articuladas permitem diferentes posições, deixando o produto divertido tanto para decorar quanto para presentear.",
    items: [
      "1 Árvore de Natal Flexi articulada",
    ],
    colors:
      "Produzida sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Itens decorativos exibidos na imagem não acompanham o produto.",
  },
  {
    slug: "rena-tricot-decorativa",
    name: "Rena Tricot Decorativa",
    code: "DVL_N05",
    category: "Natal — Linha Tricot",
    image: "/images/natal/rena-tricot-decorativa.webp",
    images: ["/images/natal/rena-tricot-decorativa.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Rena decorativa com textura inspirada em tricô e visual acolhedor.",
    description:
      "A Rena Tricot Decorativa combina a forma clássica da rena com uma textura que remete ao tricô. Uma peça delicada para mesas, aparadores, estantes e composições natalinas.",
    items: [
      "1 Rena Tricot Decorativa",
    ],
    colors:
      "Produzida sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Elementos decorativos da imagem não acompanham o produto.",
  },
  {
    slug: "enfeite-natal-personalizado",
    name: "Enfeite de Natal Personalizado",
    code: "DVL_N06",
    category: "Natal — Personalizados",
    image: "/images/natal/enfeite-natal-personalizado.webp",
    images: ["/images/natal/enfeite-natal-personalizado.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Enfeite em formato de bola com estrela e nome personalizado.",
    description:
      "O Enfeite de Natal Personalizado DVL3D transforma o nome escolhido em parte da decoração. Com estrutura vazada e estrela central, é uma opção especial para árvore de Natal, lembranças e presentes personalizados.",
    items: [
      "1 enfeite de Natal com nome personalizado",
    ],
    colors:
      "Nome e cores podem ser personalizados durante o atendimento.",
    note:
      "Produzido sob encomenda. Cordão ou fita podem variar conforme disponibilidade.",
  },
  {
    slug: "luminaria-pinheiro",
    name: "Luminária Pinheiro",
    code: "DVL_N07",
    category: "Natal — Iluminação",
    image: "/images/natal/luminaria-pinheiro.webp",
    images: ["/images/natal/luminaria-pinheiro.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Uma peça vazada que cria desenhos de luz e está disponível em dois tamanhos.",
    description:
      "A Luminária Pinheiro usa uma estrutura vazada para transformar a luz em parte da decoração. O efeito projetado ao redor da peça cria um clima acolhedor e funciona muito bem em mesas, aparadores e cantinhos de Natal.",
    items: [
      "1 Luminária Pinheiro",
      "Opção de tamanho pequeno ou grande",
    ],
    colors:
      "Produzida sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Consulte no atendimento sobre o sistema de iluminação utilizado. Elementos decorativos da foto não acompanham o produto.",
  },
  {
    slug: "luminaria-alce",
    name: "Luminária Alce",
    code: "DVL_N08",
    category: "Natal — Iluminação",
    image: "/images/natal/luminaria-alce.webp",
    images: ["/images/natal/luminaria-alce.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Alce decorativo vazado com efeito de iluminação aconchegante.",
    description:
      "A Luminária Alce combina uma silhueta divertida com uma estrutura vazada que valoriza a luz no interior da peça. É uma opção diferente para criar pontos de destaque na decoração natalina.",
    items: [
      "1 Luminária Alce",
    ],
    colors:
      "Produzida sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Consulte no atendimento sobre o sistema de iluminação utilizado. Elementos decorativos da foto não acompanham o produto.",
  },
  {
    slug: "contagem-regressiva-natal",
    name: "Contagem Regressiva de Natal",
    code: "DVL_N09",
    category: "Natal — Interativos",
    image: "/images/natal/contagem-regressiva-natal.webp",
    images: ["/images/natal/contagem-regressiva-natal.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Calendário decorativo para acompanhar os dias até o Natal.",
    description:
      "A Contagem Regressiva de Natal transforma a espera pelo dia 25 em parte da decoração. Com elementos móveis e visual temático, é uma peça interativa para acompanhar dezembro em família.",
    items: [
      "1 calendário de contagem regressiva",
      "Elementos móveis para marcação dos dias",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Peça decorativa e interativa. Demais elementos exibidos na imagem não acompanham o produto.",
  },
  {
    slug: "pote-boneco-de-neve",
    name: "Pote Boneco de Neve",
    code: "DVL_N10",
    category: "Natal — Utilidades",
    image: "/images/natal/pote-boneco-de-neve.webp",
    images: ["/images/natal/pote-boneco-de-neve.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Pote decorativo para doces, bombons e pequenos itens.",
    description:
      "O Pote Boneco de Neve une utilidade e decoração em uma peça divertida para o Natal. Pode ser usado em mesas, aparadores e recepções para acomodar doces, lembrancinhas ou pequenos objetos.",
    items: [
      "1 Pote Boneco de Neve",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Doces e demais itens exibidos na imagem são meramente ilustrativos e não acompanham o produto.",
  },
  {
    slug: "saco-de-natal-decorativo",
    name: "Saco Decorativo de Natal",
    code: "DVL_N11",
    category: "Natal — Utilidades",
    image: "/images/natal/saco-de-natal-decorativo.webp",
    images: ["/images/natal/saco-de-natal-decorativo.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Um porta-trecos temático inspirado no tradicional saco de presentes.",
    description:
      "O Saco Decorativo de Natal traz o visual clássico dos presentes natalinos para uma peça funcional. Pode ser usado para bombons, chaves, lembrancinhas ou pequenos objetos, além de compor a decoração.",
    items: [
      "1 Saco Decorativo de Natal",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Doces, chaves, enfeites e demais itens exibidos na imagem não acompanham o produto.",
  },
  {
    slug: "rena-natalina-decorativa",
    name: "Rena Natalina Decorativa",
    code: "DVL_N12",
    category: "Natal — Decoração",
    image: "/images/natal/rena-natalina-decorativa.webp",
    images: ["/images/natal/rena-natalina-decorativa.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Uma rena divertida e presenteável para composições de Natal.",
    description:
      "A Rena Natalina Decorativa aposta em formas arredondadas e detalhes clássicos para criar uma peça simpática e fácil de combinar. Ideal para mesas, aparadores, estantes e presentes.",
    items: [
      "1 Rena Natalina Decorativa",
    ],
    colors:
      "Produzida sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Elementos decorativos da foto não acompanham o produto.",
  },
  {
    slug: "porta-vela-arvore",
    name: "Porta-Vela Árvore",
    code: "DVL_N13",
    category: "Natal — Decoração",
    image: "/images/natal/porta-vela-arvore.webp",
    images: ["/images/natal/porta-vela-arvore.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Porta-vela em formato de árvore, disponível em dois tamanhos.",
    description:
      "O Porta-Vela Árvore cria uma composição natalina elegante usando uma silhueta vazada e espaço frontal para a vela. Disponível em dois tamanhos, funciona sozinho ou em conjunto.",
    items: [
      "1 Porta-Vela Árvore",
      "Opção de tamanho pequeno ou grande",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Vela e demais elementos exibidos na imagem não acompanham o produto, salvo quando combinado no atendimento.",
  },
  {
    slug: "calendario-lareira-papai-noel",
    name: "Calendário Lareira do Papai Noel",
    code: "DVL_N14",
    category: "Natal — Interativos",
    image: "/images/natal/calendario-lareira-papai-noel.webp",
    images: ["/images/natal/calendario-lareira-papai-noel.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Uma contagem regressiva temática com Papai Noel e lareira.",
    description:
      "O Calendário Lareira do Papai Noel transforma os dias que antecedem o Natal em uma brincadeira decorativa. A peça reúne números, trilho e cenário temático para acompanhar a contagem regressiva até o dia 24.",
    items: [
      "1 Calendário Lareira do Papai Noel",
      "Peças numeradas para a contagem regressiva",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Peça decorativa e interativa. Elementos externos da foto não acompanham o produto.",
  },
  {
    slug: "papai-noel-tricot",
    name: "Papai Noel Tricot",
    code: "DVL_N15",
    category: "Natal — Linha Tricot",
    image: "/images/natal/papai-noel-tricot.webp",
    images: ["/images/natal/papai-noel-tricot.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Papai Noel decorativo com textura inspirada em tricô.",
    description:
      "O Papai Noel Tricot traz a estética acolhedora do tricô para uma peça decorativa produzida em impressão 3D. O contraste entre vermelho, branco e detalhes escuros cria um personagem marcante para a decoração.",
    items: [
      "1 Papai Noel Tricot",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Elementos decorativos da foto não acompanham o produto.",
  },
  {
    slug: "boneco-gengibre-tricot",
    name: "Boneco de Gengibre Tricot",
    code: "DVL_N16",
    category: "Natal — Linha Tricot",
    image: "/images/natal/boneco-gengibre-tricot.webp",
    images: ["/images/natal/boneco-gengibre-tricot.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Boneco de gengibre com textura de tricô e visual divertido.",
    description:
      "O Boneco de Gengibre Tricot combina um personagem clássico do Natal com uma textura inspirada em peças de tricô. É uma opção leve e presenteável para compor mesas, estantes e aparadores.",
    items: [
      "1 Boneco de Gengibre Tricot",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Elementos decorativos da foto não acompanham o produto.",
  },
  {
    slug: "urso-polar-tricot",
    name: "Urso Polar Tricot",
    code: "DVL_N17",
    category: "Natal — Linha Tricot",
    image: "/images/natal/urso-polar-tricot.webp",
    images: ["/images/natal/urso-polar-tricot.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Urso polar decorativo com gorro natalino e textura de tricô.",
    description:
      "O Urso Polar Tricot une o visual fofo do personagem a um acabamento que remete ao tricô. Uma peça delicada para decoração de fim de ano e para presentear.",
    items: [
      "1 Urso Polar Tricot",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Elementos decorativos da foto não acompanham o produto.",
  },
  {
    slug: "pinguim-tricot",
    name: "Pinguim Tricot",
    code: "DVL_N18",
    category: "Natal — Linha Tricot",
    image: "/images/natal/pinguim-tricot.webp",
    images: ["/images/natal/pinguim-tricot.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Pinguim natalino com gorro e acabamento inspirado em tricô.",
    description:
      "O Pinguim Tricot combina preto, branco, laranja e detalhes natalinos em uma peça compacta e divertida. Ideal para compor a linha de personagens de Natal.",
    items: [
      "1 Pinguim Tricot",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Elementos decorativos da foto não acompanham o produto.",
  },
  {
    slug: "gorro-natalino-tricot",
    name: "Gorro Natalino Tricot",
    code: "DVL_N19",
    category: "Natal — Linha Tricot",
    image: "/images/natal/gorro-natalino-tricot.webp",
    images: ["/images/natal/gorro-natalino-tricot.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Gorro decorativo com textura inspirada em tricô.",
    description:
      "O Gorro Natalino Tricot é uma peça simples e temática para complementar composições de Natal. Seu acabamento texturizado valoriza a forma e combina especialmente bem com os demais personagens da linha.",
    items: [
      "1 Gorro Natalino Tricot",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Elemento exclusivamente decorativo.",
  },
  {
    slug: "gatinho-tricot-natalino",
    name: "Gatinho Tricot Natalino",
    code: "DVL_N20",
    category: "Natal — Linha Tricot",
    image: "/images/natal/gatinho-tricot-natalino.webp",
    images: ["/images/natal/gatinho-tricot-natalino.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Gatinho decorativo com gorro de Natal e textura de tricô.",
    description:
      "O Gatinho Tricot Natalino une um personagem querido a um acabamento inspirado em tricô. Uma opção fofa para decoração e presente, especialmente para quem gosta de gatos.",
    items: [
      "1 Gatinho Tricot Natalino",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Elementos decorativos da foto não acompanham o produto.",
  },
  {
    slug: "boneco-de-neve-tricot",
    name: "Boneco de Neve Tricot",
    code: "DVL_N21",
    category: "Natal — Linha Tricot",
    image: "/images/natal/boneco-de-neve-tricot.webp",
    images: ["/images/natal/boneco-de-neve-tricot.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Boneco de neve com gorro, cachecol e textura inspirada em tricô.",
    description:
      "O Boneco de Neve Tricot traz uma estética acolhedora e divertida para a decoração de Natal. O acabamento texturizado e os detalhes em vermelho criam uma peça fácil de combinar.",
    items: [
      "1 Boneco de Neve Tricot",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Elementos decorativos da foto não acompanham o produto.",
  },
  {
    slug: "arvore-de-natal-tricot",
    name: "Árvore de Natal Tricot",
    code: "DVL_N22",
    category: "Natal — Linha Tricot",
    image: "/images/natal/arvore-de-natal-tricot.webp",
    images: ["/images/natal/arvore-de-natal-tricot.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Árvore compacta com textura de tricô e estrela no topo.",
    description:
      "A Árvore de Natal Tricot combina uma forma simples com textura inspirada em tricô. É uma peça compacta para mesas, nichos, aparadores e pequenos cantinhos natalinos.",
    items: [
      "1 Árvore de Natal Tricot",
    ],
    colors:
      "Produzida sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Elementos decorativos da foto não acompanham o produto.",
  },
  {
    slug: "bandeja-arvore-de-natal",
    name: "Bandeja Árvore de Natal",
    code: "DVL_N23",
    category: "Natal — Mesa posta",
    image: "/images/natal/bandeja-arvore-de-natal.webp",
    images: ["/images/natal/bandeja-arvore-de-natal.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Bandeja temática em formato de árvore para doces, biscoitos e petiscos.",
    description:
      "A Bandeja Árvore de Natal leva o formato clássico do pinheiro para uma peça funcional de mesa. Ideal para servir biscoitos, doces, petiscos ou organizar pequenos itens durante as confraternizações.",
    items: [
      "1 Bandeja Árvore de Natal",
    ],
    colors:
      "Produzida sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Alimentos e demais elementos exibidos na imagem não acompanham o produto.",
  },
  {
    slug: "kit-flocos-de-neve",
    name: "Kit Flocos de Neve Decorativos",
    code: "DVL_N24",
    category: "Natal — Enfeites",
    image: "/images/natal/kit-flocos-de-neve.webp",
    images: ["/images/natal/kit-flocos-de-neve.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Conjunto de flocos com desenhos variados para diferentes composições.",
    description:
      "O Kit Flocos de Neve Decorativos reúne diferentes desenhos para usar na árvore, guirlandas, embalagens ou composições de mesa. Uma opção leve e versátil para espalhar pequenos detalhes natalinos pelo ambiente.",
    items: [
      "Kit de flocos de neve decorativos com modelos variados",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Cordões, fitas e demais elementos de montagem podem variar conforme a forma de uso escolhida.",
  },
  {
    slug: "arvore-wave-natalina",
    name: "Árvore Wave Natalina",
    code: "DVL_N25",
    category: "Natal — Decoração",
    image: "/images/natal/arvore-wave-natalina.webp",
    images: ["/images/natal/arvore-wave-natalina.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Árvore escultural com linhas onduladas e visual contemporâneo.",
    description:
      "A Árvore Wave Natalina traduz o formato do pinheiro em uma peça fluida e minimalista. As curvas contínuas criam movimento e deixam a decoração mais moderna sem perder a referência clássica do Natal.",
    items: [
      "1 Árvore Wave Natalina",
    ],
    colors:
      "Produzida sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Elementos decorativos da foto não acompanham o produto.",
  },
  {
    slug: "arvore-giratoria-interativa",
    name: "Árvore de Natal Giratória Interativa",
    code: "DVL_N26",
    category: "Natal — Brinquedos",
    image: "/images/natal/arvore-giratoria-interativa.webp",
    images: ["/images/natal/arvore-giratoria-interativa.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Brinquedo giratório que combina movimento, montagem e tema natalino.",
    description:
      "A Árvore de Natal Giratória Interativa é uma peça lúdica com elementos móveis pensados para serem manuseados e girados. Além do visual natalino, a atividade trabalha coordenação motora fina e torna a peça uma opção diferente de presente.",
    items: [
      "1 brinquedo Árvore de Natal Giratória",
      "Peças móveis para montagem e giro",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Utilizar sob supervisão adequada à idade. Peças pequenas podem não ser indicadas para crianças muito pequenas.",
  },
  {
    slug: "porta-kinder-rena",
    name: "Porta-Kinder Rena",
    code: "DVL_N27",
    category: "Natal — Lembrancinhas",
    image: "/images/natal/porta-kinder-rena.webp",
    images: ["/images/natal/porta-kinder-rena.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Suporte em formato de rena para transformar um chocolate em lembrancinha de Natal.",
    description:
      "O Porta-Kinder Rena cria uma apresentação divertida para chocolates em formato de barrinha. É uma opção de lembrancinha simples para escolas, empresas, confraternizações e presentes rápidos.",
    items: [
      "1 suporte Porta-Kinder Rena",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Chocolate não acompanha o produto, salvo quando combinado no atendimento.",
  },
  {
    slug: "porta-bombom-rena",
    name: "Porta-Bombom Rena",
    code: "DVL_N28",
    category: "Natal — Lembrancinhas",
    image: "/images/natal/porta-bombom-rena.webp",
    images: ["/images/natal/porta-bombom-rena.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Suporte de rena para apresentar bombons de forma divertida.",
    description:
      "O Porta-Bombom Rena transforma um bombom redondo em parte do personagem, criando uma lembrancinha compacta e fácil de presentear no Natal.",
    items: [
      "1 suporte Porta-Bombom Rena",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Bombom não acompanha o produto, salvo quando combinado no atendimento.",
  },
  {
    slug: "rena-minimalista",
    name: "Rena Minimalista Decorativa",
    code: "DVL_N29",
    category: "Natal — Decoração",
    image: "/images/natal/rena-minimalista.webp",
    images: ["/images/natal/rena-minimalista.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Rena de linhas suaves e visual clean, disponível em dois tamanhos.",
    description:
      "A Rena Minimalista Decorativa aposta em formas simples e elegantes para quem prefere uma decoração natalina mais neutra. Disponível em dois tamanhos, funciona muito bem em composições com poucos elementos.",
    items: [
      "1 Rena Minimalista Decorativa",
      "Opção de tamanho pequeno ou grande",
    ],
    colors:
      "Produzida sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Vendido por unidade. Elementos decorativos da foto não acompanham o produto.",
  },
  {
    slug: "chaveiros-natalinos",
    name: "Chaveiros Natalinos",
    code: "DVL_N30",
    category: "Natal — Lembrancinhas",
    image: "/images/natal/chaveiros-natalinos.webp",
    images: ["/images/natal/chaveiros-natalinos.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Chaveiros temáticos nos modelos Boneco de Gengibre e Duende.",
    description:
      "Os Chaveiros Natalinos DVL3D são pequenas lembranças para presentear no fim do ano. Os personagens Boneco de Gengibre e Duende trazem cor e movimento para uma opção compacta e colecionável.",
    items: [
      "1 chaveiro natalino no modelo escolhido",
    ],
    colors:
      "Modelos e combinações de cores podem ser escolhidos durante o atendimento.",
    note:
      "Argola acompanha o chaveiro. Consulte disponibilidade de modelos e cores.",
  },
  {
    slug: "presepio-natalino",
    name: "Presépio Natalino Decorativo",
    code: "DVL_N31",
    category: "Natal — Religiosa",
    image: "/images/natal/presepio-natalino.webp",
    images: ["/images/natal/presepio-natalino.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Um presépio completo de visual delicado para celebrar o significado do Natal.",
    description:
      "O Presépio Natalino Decorativo reúne Sagrada Família, reis magos, animais e estrela em uma composição única. O visual clean valoriza as formas e cria uma peça especial para espaços de oração, aparadores e presentes.",
    items: [
      "1 conjunto Presépio Natalino Decorativo",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Elementos externos de ambientação exibidos na foto não acompanham o produto.",
  },
  {
    slug: "arvore-personalizada-com-nome",
    name: "Árvore de Natal Personalizada com Nome",
    code: "DVL_N32",
    category: "Natal — Personalizados",
    image: "/images/natal/arvore-personalizada-com-nome.webp",
    images: ["/images/natal/arvore-personalizada-com-nome.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Decoração em formato de árvore criada com os nomes escolhidos pelo cliente.",
    description:
      "A Árvore de Natal Personalizada com Nome transforma nomes e palavras em uma composição decorativa exclusiva. É uma peça feita sob medida para famílias, casais, presentes e lembranças de fim de ano, com possibilidade de incluir o ano.",
    items: [
      "1 Árvore de Natal personalizada com os nomes escolhidos",
    ],
    colors:
      "Nomes, ano e combinação de cores são definidos durante o atendimento.",
    note:
      "A disposição e proporção dos nomes podem variar conforme a quantidade e o tamanho dos textos escolhidos.",
  },
  {
    slug: "luminaria-arvore-presente",
    name: "Luminária Árvore de Natal",
    code: "DVL_N33",
    category: "Natal — Iluminação",
    image: "/images/natal/luminaria-arvore-presente.webp",
    images: ["/images/natal/luminaria-arvore-presente.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Árvore iluminada que também pode receber embalagem temática e doces opcionais.",
    description:
      "A Luminária Árvore de Natal combina camadas de pinheiro com iluminação interna para criar um ponto de destaque no ambiente. Para presente, pode ser acompanhada por embalagem temática e doces opcionais.",
    items: [
      "1 Luminária Árvore de Natal",
    ],
    colors:
      "Produzida sob encomenda, com opções de cores disponíveis no atendimento. Embalagem temática e doces podem ser adicionados opcionalmente.",
    note:
      "Embalagem vermelha e doces exibidos na imagem são opcionais e não acompanham automaticamente o produto. Consulte no atendimento sobre o sistema de iluminação.",
  },
  {
    slug: "boneco-de-neve-minimalista",
    name: "Boneco de Neve Minimalista",
    code: "DVL_N34",
    category: "Natal — Decoração",
    image: "/images/natal/boneco-de-neve-minimalista.webp",
    images: ["/images/natal/boneco-de-neve-minimalista.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Boneco de neve de linhas limpas para uma decoração mais elegante.",
    description:
      "O Boneco de Neve Minimalista traz o personagem clássico do Natal para uma linguagem mais clean. O corpo com textura vertical, chapéu escuro e cachecol neutro criam uma peça discreta e sofisticada.",
    items: [
      "1 Boneco de Neve Minimalista",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Elementos decorativos da foto não acompanham o produto.",
  },
  {
    slug: "porta-guardanapos-treno",
    name: "Porta-Guardanapos Trenó de Natal",
    code: "DVL_N35",
    category: "Natal — Mesa posta",
    image: "/images/natal/porta-guardanapos-treno.webp",
    images: ["/images/natal/porta-guardanapos-treno.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Porta-guardanapos em formato de trenó com detalhes natalinos.",
    description:
      "O Porta-Guardanapos Trenó de Natal combina função e decoração em uma peça inspirada no trenó do Papai Noel. Árvores, flocos e rena formam o cenário enquanto os guardanapos ficam organizados para a mesa posta.",
    items: [
      "1 Porta-Guardanapos Trenó de Natal",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Guardanapos e demais elementos exibidos na imagem não acompanham o produto.",
  },
  {
    slug: "kit-arvore-de-natal-montavel",
    name: "Kit Árvore de Natal Montável",
    code: "DVL_N36",
    category: "Natal — Interativos",
    image: "/images/natal/kit-arvore-de-natal-montavel.webp",
    images: ["/images/natal/kit-arvore-de-natal-montavel.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Kit com peças destacáveis para montar uma árvore de Natal.",
    description:
      "O Kit Árvore de Natal Montável transforma a montagem em parte da experiência. As peças são destacadas e encaixadas para formar uma pequena árvore, criando uma atividade manual temática que depois pode virar decoração.",
    items: [
      "1 kit com peças para montagem da árvore",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Utilizar sob supervisão adequada à idade. Peças pequenas podem não ser indicadas para crianças muito pequenas.",
  },
  {
    slug: "arvore-nevada-decorativa",
    name: "Árvore Nevada Decorativa",
    code: "DVL_N37",
    category: "Natal — Decoração",
    image: "/images/natal/arvore-nevada-decorativa.webp",
    images: ["/images/natal/arvore-nevada-decorativa.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Pinheiro texturizado com aparência volumosa inspirada em uma árvore nevada.",
    description:
      "A Árvore Nevada Decorativa chama atenção pela textura densa e orgânica, criando uma leitura mais realista e aconchegante do pinheiro de Natal. Funciona especialmente bem em tons claros e naturais.",
    items: [
      "1 Árvore Nevada Decorativa",
    ],
    colors:
      "Produzida sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Elementos decorativos da foto não acompanham o produto.",
  },
  {
    slug: "porta-copos-floco-de-neve",
    name: "Kit Porta-Copos Floco de Neve",
    code: "DVL_N38",
    category: "Natal — Mesa posta",
    image: "/images/natal/porta-copos-floco-de-neve.webp",
    images: ["/images/natal/porta-copos-floco-de-neve.webp"],
    imagePosition: "object-center",
    shortDescription:
      "Porta-copos em diferentes desenhos de floco de neve para compor a mesa.",
    description:
      "O Kit Porta-Copos Floco de Neve combina proteção para a superfície com uma decoração delicada de Natal. Os diferentes desenhos criam variedade na mesa e funcionam com canecas, xícaras e copos.",
    items: [
      "Kit de porta-copos com modelos variados de floco de neve",
    ],
    colors:
      "Produzido sob encomenda, com opções de cores disponíveis no atendimento.",
    note:
      "Caneca, bebida e demais elementos exibidos na imagem são meramente ilustrativos e não acompanham o produto.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
