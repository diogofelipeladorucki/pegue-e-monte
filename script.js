// Dados de locais de retirada
const locationsData = [
    {
        id: 1,
        name: "Ponto de Retirada - Camaragibe",
        address: "Segunda Travessa Pernambuco, 135",
        neighborhood: "Bairro dos Estados",
        city: "Camaragibe - PE",
        coordinates: "-8.026379,-34.971296",
        hours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h"
    },
    {
        id: 2,
        name: "Ponto de Retirada - Recife",
        address: "Rua das Flores, 456",
        neighborhood: "Boa Viagem",
        city: "Recife - PE",
        coordinates: "-8.113,-34.896",
        hours: "Segunda a Sexta: 9h às 17h"
    }
];

// Dados de inspirações
const inspirationsData = [
    {
        id: 1,
        title: "Festa no Jardim",
        description: "Combinação perfeita de mesas cubo brancas e painel redondo.",
        image: "https://picsum.photos/1600/900?random=300"
    },
    {
        id: 2,
        title: "Batizado Clássico",
        description: "Uso de vasos gregos e bandejas espelhadas para sofisticação.",
        image: "https://picsum.photos/1600/900?random=301"
    },
    {
        id: 3,
        title: "Aniversário Colorido",
        description: "Mistura de boleiras coloridas para um tema divertido.",
        image: "https://picsum.photos/1600/900?random=302"
    },
    {
        id: 4,
        title: "Casamento Rústico",
        description: "Painel ripado com estante escada e elementos naturais.",
        image: "https://picsum.photos/1600/900?random=303"
    },
    {
        id: 5,
        title: "Chá de Bebê Rosa",
        description: "Decoração delicada com tons pastéis e detalhes dourados.",
        image: "https://picsum.photos/1600/900?random=304"
    },
    {
        id: 6,
        title: "Festa Tropical",
        description: "Cores vibrantes com elementos naturais e tropicais.",
        image: "https://picsum.photos/1600/900?random=305"
    }
];

// Dados do catálogo
const catalogData = [
  // Kits Completos (Geralmente únicos)
  {
    id: 1,
    name: "Kit Festa Jardim Encantado",
    category: "Kits Completos",
    images: [
      "https://images.unsplash.com/photo-1761839258044-e59f324b5a7f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1768409234914-96f61529b7e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1766012368210-14b362ad9805?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description: "Kit completo com painel, trio de mesas e peças decorativas.",
    tags: ["jardim", "flores", "menina", "rosa", "natureza"],
    price: 250.0,
    originalPrice: 320.0,
    maxQuantity: 1,
  },
  {
    id: 2,
    name: "Kit Bolofofos",
    category: "Kits Completos",
    images: [
      "https://picsum.photos/200/200?random=2",
      "https://picsum.photos/200/200?random=201",
    ],
    description: "Personagens em feltro, boleira e bandejas coloridas.",
    tags: ["bolofofos", "desenho", "colorido", "unissex", "musica"],
    price: 180.0,
    originalPrice: 210.0,
    maxQuantity: 1,
  },
  {
    id: 11,
    name: "Kit Safari Baby",
    category: "Kits Completos",
    images: ["https://picsum.photos/200/200?random=11"],
    description: "Tema Safari com pelúcias e painel sublimado.",
    tags: ["safari", "animais", "floresta", "verde", "menino"],
    price: 220.0,
    maxQuantity: 1,
  },
  {
    id: 12,
    name: "Kit Sereia Luxo",
    category: "Kits Completos",
    images: ["https://picsum.photos/200/200?random=12"],
    description: "Decoração fundo do mar com brilho e paetês.",
    tags: ["sereia", "mar", "azul", "roxo", "luxo"],
    price: 300.0,
    originalPrice: 380.0,
    maxQuantity: 1,
  },
  {
    id: 13,
    name: "Kit Astronauta",
    category: "Kits Completos",
    images: ["https://picsum.photos/200/200?random=13"],
    description: "Decoração espacial com foguetes e planetas.",
    tags: ["espaco", "foguete", "planeta", "azul", "menino"],
    price: 240.0,
    maxQuantity: 1,
  },
  {
    id: 14,
    name: "Kit Circo Vintage",
    category: "Kits Completos",
    images: ["https://picsum.photos/200/200?random=14"],
    description: "Cores vibrantes e elementos clássicos de circo.",
    tags: ["circo", "palhaco", "colorido", "vermelho", "festivo"],
    price: 260.0,
    originalPrice: 290.0,
    maxQuantity: 1,
  },
  {
    id: 15,
    name: "Kit Dinossauros",
    category: "Kits Completos",
    images: ["https://picsum.photos/200/200?random=15"],
    description: "Cenário pré-histórico com dinossauros realistas.",
    tags: ["dinossauro", "jurassic", "floresta", "verde", "aventura"],
    price: 230.0,
    maxQuantity: 1,
  },

  // Paineis
    {
    id: 37,
    name: "Princesa Tiana - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/285993072/205128-princesa-tiana-1-hwhulr9k2v.png"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "princesa", "tiane", "disney", "verde"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },
{
    id: 40,
    name: "Bob Esponja - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/278098331/205030-bob-esponja-uzt0ze5477.png"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "bob esponja", "verde"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

{
    id: 41,
    name: "Roblox - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/339660756/painel-de-mesa-roblox-sublimado-3d-6d65c0b4-nx637yvtet.png"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Roblox", "menino", "jogo", "azul"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

  {
    id: 42,
    name: "Roblox - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/277937884/204994-roblox-rosa-t9cz2uch5c.png"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Roblox", "menina", "jogo", "Rosa"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },
    
  {
    id: 43,
    name: "Bluey - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/357059902/painel-de-mesa-bluey-sublimado-3d-d2179f64-23td6autf6.png"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Bluey", "azul", "menina", "jogo"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },
    
  {
    id: 44,
    name: "Barbie - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/230382552b986619136.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Barbie", "rosa", "menina", "boneca"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },
  
  {
    id: 45,
    name: "Bobbie Goods - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/364399511/painel-de-mesa-bobbie-goods-sublimado-3d-9ff9d894-x7iml38li8.png"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Bobbie Goods", "menina", "menino"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },
  
  {
    id: 46,
    name: "Batman - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/248647614466b7e3baf.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Batman", "preto","super heroi"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

  {
    id: 47,
    name: "Branca de neve - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/268920531bead8b76d8.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Branca de neve", "branca", "Disney", "princesa"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

    {
    id: 48,
    name: "Baby shark - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/248763358bbc3d39053.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Baby Shark", "azul", "marinho", "peixe"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

      {
    id: 49,
    name: "Magali - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/23038038156ec16192a.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Magali", "amarela", "menina"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

{
    id: 50,
    name: "Jardim - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/2490250300b5d9f10bf.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Jardim", "verde", "natureza"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

{
    id: 51,
    name: "Toy Story - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/369998691/painel-de-mesa-toy-story-sublimado-3d-5d36c765-rhp8xiejuh.png"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Toy Story", "menino"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

{
    id: 52,
    name: "Guerreiras do K pop  - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/372972226/painel-de-mesa-guerreiras-do-k-pop-sublimado-3d-5be947db-bsv0ujmtt9.png"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Guerreiras do K pop", "mulheres", "k pop"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

{
    id: 53,
    name: "Unicórnio  - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/369998674/painel-de-mesa-unicornio-sublimado-3d-757e6041-sz660ucoh9.png"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Unicórnio", "rosa", "fantasia"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

{
    id: 54,
    name: "Enaldinho  - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/349365312/painel-de-mesa-enaldinho-sublimado-3d-6551e4d1-pj3a5pjffi.png"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Enaldinho", "vermelho", "youtuber"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

{
    id: 55  ,
    name: "Os Vingadores  - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/24874106407a63dc19e.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Os Vingadores", "super heróis", "marvel"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },
 
{
    id: 56  ,
    name: "Homem aranha  - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/2303790745b52b6a153.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Homem aranha", "super heróis", "marvel"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  }, 
 
{
    id: 57  ,
    name: "Frutas cute  - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/24870084084e80e9991.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Frutas cute", "cute", "festa"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  }, 
  
  {
    id: 58  ,
    name: "Fazendinha  - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/277940623/205022-fazendinha-virj06s794.png"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Fazendinha", "fazenda", "animais"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  }, 
  
  {
    id: 59  ,
    name: "Frozen  - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/369449595/painel-de-mesa-frozen-sublimado-3d-19803d2a-1xs4jdukd4.png"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Frozen", "disney", "princesa"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  }, 

  {
    id: 60  ,
    name: "Free fire  - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/2303868472894cbf4cc.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Free fire", "jogo", "gamer"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },
  
  {
    id: 61  ,
    name: "Os aventureiros  - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/369449620/painel-de-mesa-os-aventureiros-sublimado-3d-32e2c470-7pvtkkio9x.png  "
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Os aventureiros", "super heróis", "lucas neto", "youtuber", "aventureiro"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

  {
    id: 62  ,
    name: "Os rosas  - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/363395706/painel-de-mesa-os-rosas-sublimado-3d-ed202b91-4ez12u9uzu.png"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Os rosas", "youtuber"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

 {
    id: 63  ,
    name: "O maior pintor do mundo  - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/365799244/painel-de-mesa-o-maior-pintor-do-mundo-sublimado-3d-69544404-9fllctov3o.png"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "O maior pintor do mundo", "biblico"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

 {
    id: 64  ,
    name: "Super mario - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/372972176/painel-de-mesa-super-mario-sublimado-3d-88da47c3-a8sfesq9w2.png"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Super mario", "jogo", "video game"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

  {
    id: 65  ,
    name: "Stitch - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/265435217ddc2ecb37f.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Stitch", "disney", "azul", "extraterrestre"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

    {
    id: 66  ,
    name: "Stitch - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/23037752298d918477e.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Stitch", "disney", "azul", "extraterrestre"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

    {
    id: 67  ,
    name: "Sonic - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/2303863205601926bb7.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Sonic", "jogo", "video game"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

 {
    id: 68  ,
    name: "Safari - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/2579537638279028b5c.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Safari", "natureza", "animais"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

 {
    id: 69  ,
    name: "Minecraft - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/315671692/205478-minecraft-nvma61lfut.png"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Minecraft", "jogo", "video game"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

  {
    id: 70  ,
    name: "Moana - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/323348381/205656-moana-ptxtynwaek.png"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Moana", "disney", "princesa", "oceano"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

  {
    id: 71  ,
    name: "Minnie - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/230385079e4ec90176a.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Minnie", "disney", "princesa", "rosa"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

 {
    id: 72  ,
    name: "Minions - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/23038752198e8e4f55e.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Minions", "disney", "amarelo", "filme"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },
  
{
    id: 73  ,
    name: "Mulher maravilha - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/2487226559e60f9be9e.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Mulher maravilha", "heroína", "filme"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },
 
{
    id: 74  ,
    name: "Rapunzel (Enrolados) - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/2303811253f1136dfd9.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Rapunzel", "filme", "enrolados", "disney", "princesa"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

 {
    id: 75  ,
    name: "Rei leão - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/248734370212bdfe735.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Rei leão", "filme", "disney", "animal"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

     {
    id: 76  ,
    name: "Arca de Noé - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2500x2500/2394/2394401/produto/248230001587bf51b75.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Arca de Noé", "biblico", "animais", "cristão"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

     {
    id: 77  ,
    name: "Animais do bosque - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/248743689caf67affe6.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Animais do bosque", "animais", "natureza"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

     {
    id: 78  ,
    name: "As meninas super poderosas - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/265437005a91133cc3b.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "As meninas super poderosas", "super poderosas", "filme", "desenho"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

     {
    id: 79  ,
    name: "Princesas - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/230379086864b79d993.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Princesas", "filme", "desenho", "princesas"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

     {
    id: 80  ,
    name: "Patrulha canina - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/230382147698e025a70.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Patrulha canina", "desenho", "cachorro"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

     {
    id: 81  ,
    name: "Princesa Sofia - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2500x2500/2394/2394401/produto/372972275/painel-de-mesa-princesa-sofia-sublimado-3d-908ac4ad-5s4ony390m.png"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Princesa Sofia", "filme", "desenho", "princesa"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

     {
    id: 82  ,
    name: "Peppa pig - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/230385836c150f21dff.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Peppa pig", "desenho", "porquinha"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

     {
    id: 83  ,
    name: "Carros - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2500x2500/2394/2394401/produto/249025343465beb80c7.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Carros", "filme", "desenho", "carrida"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

     {
    id: 84  ,
    name: "Casa mágica da Gaby - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/230384079c6acfced78.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Casa mágica da Gaby", "filme", "desenho", "casa"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

     {
    id: 85  ,
    name: "Chaves - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/230378313f0f297aa86.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Chaves","desenho", "filme", "chaves"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

     {
    id: 86  ,
    name: "Chapeuzinho vermelho - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/26543390488742b71fc.jpg"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Chapeuzinho vermelho","desenho", "filme", "chapeuzinho"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },

  
     {
    id: 87  ,
    name: "Capivara - Painel de Mesa",
    category: "Paineis de Mesa",
    images: [
      "https://cdn.awsli.com.br/2394/2394401/produto/372972126/painel-de-mesa-capivara-sublimado-3d-a82db225-08js1o6rry.png"
    ],
    description: "Locação de painel de mesa 50 cm, em tecido sublimado de alta qualidade, acompanhado de estrutura de mini arco de mesa redondo.",
    tags: ["painel de mesa", "Capivara", "animal", "natureza"],
    price: 20.0,
    originalPrice: 20.0,
    maxQuantity: 1,
  },


  // Mesas e Cilindros
{
    id: 38,
    name: "Mesa Cavalete",
    category: "Mesas e Cilindros",
    images: [
      "https://picsum.photos/200/200?random=3",
      "https://picsum.photos/200/200?random=301",
      "https://picsum.photos/200/200?random=302",
    ],
    description: "Boleira alta em cerâmica rosa bebê.",
    tags: ["boleira", "rosa", "ceramica", "suporte", "doce"],
    price: 35.0,
    originalPrice: 45.0,
    maxQuantity: 5,
  },
  {
    id: 39,
    name: "Mesa Arco-Íris",
    category: "Mesas e Cilindros",
    images: [
      "https://picsum.photos/200/200?random=3",
      "https://picsum.photos/200/200?random=301",
      "https://picsum.photos/200/200?random=302",
    ],
    description: "Boleira alta em cerâmica rosa bebê.",
    tags: ["boleira", "rosa", "ceramica", "suporte", "doce"],
    price: 35.0,
    originalPrice: 45.0,
    maxQuantity: 5,
  },
{
    id:40,
    name: "Mesa Trio cilindricos",
    category: "Mesas e Cilindros",
    images: [
      "https://picsum.photos/200/200?random=3",
      "https://picsum.photos/200/200?random=301",
      "https://picsum.photos/200/200?random=302",
    ],
    description: "Boleira alta em cerâmica rosa bebê.",
    tags: ["boleira", "rosa", "ceramica", "suporte", "doce"],
    price: 35.0,
    originalPrice: 45.0,
    maxQuantity: 5,
  },

  // Boleras Bandejas e Jarros (Podem ter mais unidades)
  {
    id: 3,
    name: "Boleira Cerâmica Rosa",
    category: "Boleras Bandejas e Jarros",
    images: [
      "https://picsum.photos/200/200?random=3",
      "https://picsum.photos/200/200?random=301",
      "https://picsum.photos/200/200?random=302",
    ],
    description: "Boleira alta em cerâmica rosa bebê.",
    tags: ["boleira", "rosa", "ceramica", "suporte", "doce"],
    price: 35.0,
    originalPrice: 45.0,
    maxQuantity: 5,
  },
  {
    id: 4,
    name: "Vaso Grego Dourado",
    category: "Boleras Bandejas e Jarros",
    images: ["https://picsum.photos/200/200?random=4"],
    description: "Par de vasos estilo grego dourado.",
    tags: ["vaso", "dourado", "flor", "luxo", "decoracao"],
    price: 45.0,
    maxQuantity: 2,
  },
  {
    id: 21,
    name: "Bandeja Espelhada",
    category: "Boleras Bandejas e Jarros",
    images: ["https://picsum.photos/200/200?random=21"],
    description: "Bandeja retangular com fundo espelhado.",
    tags: ["bandeja", "espelho", "prata", "doce", "festa"],
    price: 25.0,
    originalPrice: 35.0,
    maxQuantity: 10,
  },
  {
    id: 22,
    name: "Suporte para Doces 3 Andares",
    category: "Boleras Bandejas e Jarros",
    images: ["https://picsum.photos/200/200?random=22"],
    description: "Estrutura metálica para doces finos.",
    tags: ["suporte", "ferro", "torre", "doce", "mesa"],
    price: 40.0,
    maxQuantity: 3,
  },
  {
    id: 23,
    name: "Vaso Murano Azul",
    category: "Boleras Bandejas e Jarros",
    images: ["https://picsum.photos/200/200?random=23"],
    description: "Vaso decorativo em vidro tipo Murano.",
    tags: ["vaso", "azul", "vidro", "luxo", "arranjo"],
    price: 55.0,
    originalPrice: 70.0,
    maxQuantity: 4,
  },
  {
    id: 24,
    name: "Boleira Madeira Rústica",
    category: "Boleras Bandejas e Jarros",
    images: ["https://picsum.photos/200/200?random=24"],
    description: "Ideal para festas com tema campestre.",
    tags: ["boleira", "madeira", "rustico", "fazendinha", "suporte"],
    price: 30.0,
    maxQuantity: 6,
  },
  {
    id: 25,
    name: "Personagens Disney Feltro",
    category: "Boleras Bandejas e Jarros",
    images: ["https://picsum.photos/200/200?random=25"],
    description: "Kit com 4 personagens clássicos em feltro.",
    tags: ["disney", "mickey", "feltro", "personagem", "boneco"],
    price: 60.0,
    maxQuantity: 1,
  },

  // Balões
{
    id: 41,
    name: "Balões desconstruídos",
    category: "Balões",
    images: ["https://picsum.photos/200/200?random=35"],
    description: "Carrinho decorativo para entrada ou doces.",
    tags: ["carrinho", "gourmet", "branco", "madeira", "movel"],
    price: 150.0,
    originalPrice: 190.0,
    maxQuantity: 1,
  },

  // Estruturas
  {
    id: 5,
    name: "Arco Redondo Ferro",
    category: "Estruturas",
    images: ["https://picsum.photos/200/200?random=5"],
    description: "Estrutura desmontável para capas de tecido.",
    tags: ["painel", "estrutura", "ferro", "redondo", "fundo"],
    price: 80.0,
    originalPrice: 100.0,
    maxQuantity: 1,
  },
  {
    id: 6,
    name: "Mini Arco Romano",
    category: "Estruturas",
    images: ["https://picsum.photos/200/200?random=6"],
    description: "Trio de mesas cubo desmontáveis brancas.",
    tags: ["mesa", "cubo", "branco", "trio", "suporte"],
    price: 100.0,
    maxQuantity: 1,
  },
  {
    id: 31,
    name: "Mini Arco de Mesa Romano",
    category: "Estruturas",
    images: ["https://picsum.photos/200/200?random=31"],
    description: "Painel retangular com arco superior.",
    tags: ["painel", "romano", "arco", "madeira", "fundo"],
    price: 90.0,
    originalPrice: 120.0,
    maxQuantity: 1,
  },
  {
    id: 32,
    name: "Mesa Cilindro Transparente",
    category: "Estruturas",
    images: ["https://picsum.photos/200/200?random=32"],
    description: "Trio de cilindros em acrílico para balões.",
    tags: ["mesa", "cilindro", "acrilico", "transparente", "balao"],
    price: 120.0,
    maxQuantity: 1,
  },
  {
    id: 33,
    name: "Estante Escada",
    category: "Estruturas",
    images: ["https://picsum.photos/200/200?random=33"],
    description: "Estante decorativa para lembrancinhas.",
    tags: ["estante", "escada", "lembrancinha", "madeira", "rustico"],
    price: 50.0,
    maxQuantity: 1,
  },
  {
    id: 34,
    name: "Painel Ripado Madeira",
    category: "Estruturas",
    images: ["https://picsum.photos/200/200?random=34"],
    description: "Painel em madeira pinus natural.",
    tags: ["painel", "ripado", "madeira", "rustico", "fundo"],
    price: 110.0,
    maxQuantity: 1,
  },
  {
    id: 35,
    name: "Carrinho Gourmet",
    category: "Estruturas",
    images: ["https://picsum.photos/200/200?random=35"],
    description: "Carrinho decorativo para entrada ou doces.",
    tags: ["carrinho", "gourmet", "branco", "madeira", "movel"],
    price: 150.0,
    originalPrice: 190.0,
    maxQuantity: 1,
  }
];

// Cart State
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Função para iniciar o site
document.addEventListener('DOMContentLoaded', () => {
    setupFilters();
    renderCatalog(catalogData);
    renderInspirations();
    renderLocations();
    setupCart();
    updateFooterYear();
});

let currentCategory = 'Todos';
let searchTerm = '';

function setupFilters() {
    const searchInput = document.getElementById('search-input');
    const categoryButtonsContainer = document.getElementById('category-buttons');

    // Obter categorias únicas
    const categorySet = new Set(catalogData.map(item => item.category));
    const categories = ['Todos', ...categorySet];

    // Criar botões
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.textContent = category;
        btn.className = category === 'Todos' ? 'filter-btn active' : 'filter-btn';
        btn.addEventListener('click', () => {
            // Atualizar classes dos botões
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentCategory = category;
            filterAndRender();
        });
        categoryButtonsContainer.appendChild(btn);
    });

    // Event listener para pesquisa
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        filterAndRender();
    });
}

function filterAndRender() {
    const filtered = catalogData.filter(product => {
        const matchesCategory = currentCategory === 'Todos' || product.category === currentCategory;

        // Pesquisa em nome, descrição e tags
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = product.name.toLowerCase().includes(searchLower) ||
            product.description.toLowerCase().includes(searchLower) ||
            (product.tags && product.tags.some(tag => tag.toLowerCase().includes(searchLower)));

        return matchesCategory && matchesSearch;
    });

    renderCatalog(filtered);
}

function renderCatalog(productsToRender) {
    const catalogContainer = document.getElementById('catalog');
    catalogContainer.innerHTML = ''; // Limpar conteúdo anterior

    if (productsToRender.length === 0) {
        catalogContainer.innerHTML = '<p style="text-align: center; font-size: 1.2rem; color: #666;">Nenhum produto encontrado.</p>';
        return;
    }

    // Agrupar produtos por categoria (se estiver filtrando por categoria específica, só haverá um grupo)
    const categories = {};

    productsToRender.forEach(product => {
        if (!categories[product.category]) {
            categories[product.category] = [];
        }
        categories[product.category].push(product);
    });

    // Gerar o HTML para cada categoria
    for (const [categoryName, products] of Object.entries(categories)) {
        const categorySection = document.createElement('section');
        categorySection.className = 'category-section';

        const title = document.createElement('h2');
        title.className = 'category-title';
        title.textContent = categoryName;

        const grid = document.createElement('div');
        grid.className = 'products-grid';

        products.forEach(product => {
            const card = createProductCard(product);
            grid.appendChild(card);
        });

        categorySection.appendChild(title);
        categorySection.appendChild(grid);
        catalogContainer.appendChild(categorySection);
    }
}

function createProductCard(product) {
    const article = document.createElement('article');
    article.className = 'product-card';

    const priceFormatted = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    let priceHtml = `<div class="price-container"><span class="current-price">${priceFormatted}</span></div>`;
    let discountBadge = '';

    if (product.originalPrice && product.originalPrice > product.price) {
        const originalFormatted = product.originalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

        priceHtml = `
            <div class="price-container">
                <span class="old-price">${originalFormatted}</span>
                <span class="current-price">${priceFormatted}</span>
            </div>
        `;

        discountBadge = `<div class="discount-badge">${discountPercent}% OFF</div>`;
    }

    // Button state check
    const inCart = cart.find(i => i.id === product.id);
    const currentQty = inCart ? inCart.quantity : 0;
    const maxQty = product.maxQuantity || 1;
    const isMaxed = currentQty >= maxQty;

    const btnText = isMaxed ? "Max. Atingido" : "Adicionar +";
    const disabledAttr = isMaxed ? "disabled" : "";

    // Image Slider Logic
    let imageHtml = `<img id="prod-img-${product.id}" src="${product.images[0]}" data-index="0" alt="${product.name}" loading="lazy">`;
    let dotsHtml = '';
    let arrowsHtml = '';

    if (product.images && product.images.length > 1) {
        const dots = product.images.map((_, index) =>
            `<span id="dot-${product.id}-${index}" class="slider-dot ${index === 0 ? 'active' : ''}" onclick="changeProductImage(${product.id}, ${index})"></span>`
        ).join('');

        dotsHtml = `<div class="slider-dots">${dots}</div>`;

        arrowsHtml = `
            <button class="slider-arrow prev" onclick="navigateImage(${product.id}, -1)">&#10094;</button>
            <button class="slider-arrow next" onclick="navigateImage(${product.id}, 1)">&#10095;</button>
        `;
    }

    article.innerHTML = `
        ${discountBadge}
        <div class="card-image">
            ${imageHtml}
            ${arrowsHtml}
            ${dotsHtml}
        </div>
        <div class="card-content">
            <span class="category-tag">${product.category}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            ${priceHtml}
            <div class="card-actions">
                <button class="add-to-cart-btn" data-id="${product.id}" onclick="addToCart(${product.id})" ${disabledAttr}>${btnText}</button>
            </div>
        </div>
    `;

    return article;
}

function navigateImage(productId, delta) {
    const product = catalogData.find(p => p.id === productId);
    if (!product || !product.images) return;

    const imgElement = document.getElementById(`prod-img-${productId}`);
    let currentIndex = parseInt(imgElement.getAttribute('data-index') || 0);

    let newIndex = currentIndex + delta;
    if (newIndex < 0) {
        newIndex = product.images.length - 1;
    } else if (newIndex >= product.images.length) {
        newIndex = 0;
    }

    changeProductImage(productId, newIndex);
}

function changeProductImage(productId, index) {
    const product = catalogData.find(p => p.id === productId);
    if (!product || !product.images) return;

    const imgElement = document.getElementById(`prod-img-${productId}`);
    if (imgElement) {
        imgElement.style.opacity = '0.5';
        setTimeout(() => {
            imgElement.src = product.images[index];
            imgElement.setAttribute('data-index', index);
            imgElement.style.opacity = '1';
        }, 150);
    }

    // Update active dot
    const allDots = document.querySelectorAll(`[id^="dot-${productId}-"]`);
    allDots.forEach(d => d.classList.remove('active'));

    const activeDot = document.getElementById(`dot-${productId}-${index}`);
    if (activeDot) activeDot.classList.add('active');
}

// --- Cart Logic ---

function setupCart() {
    const cartBtn = document.getElementById('cart-btn');
    const modal = document.getElementById('cart-modal');
    const closeBtn = document.querySelector('.close-modal');
    const checkoutForm = document.getElementById('checkout-form');

    cartBtn.onclick = () => {
        updateCartModal();
        modal.style.display = "block";
    }

    closeBtn.onclick = () => {
        modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    checkoutForm.onsubmit = (e) => {
        e.preventDefault();
        finishOrder();
    }

    updateCartIcon();
}

function updateProductButtonState(productId) {
    const product = catalogData.find(p => p.id === productId);
    const inCart = cart.find(i => i.id === productId);
    const btn = document.querySelector(`.add-to-cart-btn[data-id="${productId}"]`);

    if (!btn || !product) return;

    const currentQty = inCart ? inCart.quantity : 0;
    const maxQty = product.maxQuantity || 1;

    if (currentQty >= maxQty) {
        btn.disabled = true;
        btn.textContent = "Max. Atingido";
        btn.style.backgroundColor = "";
    } else {
        btn.disabled = false;
        btn.textContent = "Adicionar +";
        btn.style.backgroundColor = "";
    }
}

function addToCart(productId) {
    const product = catalogData.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    const maxQty = product.maxQuantity || 1; // Default to 1 if not specified

    if (existingItem) {
        if (existingItem.quantity < maxQty) {
            existingItem.quantity += 1;
        } else {
            alert(`Limite máximo de ${maxQty} unidades para este item.`);
            return;
        }
    } else {
        cart.push({ ...product, quantity: 1, maxQuantity: maxQty });
    }

    saveCart();
    updateCartIcon();
    updateProductButtonState(productId);

    // Feedback visual
    const btn = document.querySelector(`.add-to-cart-btn[data-id="${productId}"]`);
    if (btn && !btn.disabled) {
        const originalText = btn.textContent;
        btn.textContent = "Adicionado!";
        btn.style.backgroundColor = "#25D366";
        setTimeout(() => {
            // Only revert if still enabled (state check might override)
            updateProductButtonState(productId);
        }, 1000);
    }
}

function changeQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    const newQty = item.quantity + delta;
    const maxQty = item.maxQuantity || 1;

    if (newQty > maxQty) {
        return;
    }

    if (newQty <= 0) {
        return;
    } else {
        item.quantity = newQty;
        saveCart();
        updateCartModal();
        updateCartIcon();
        updateProductButtonState(productId);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartModal();
    updateCartIcon();
    updateProductButtonState(productId);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartIcon() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function updateCartModal() {
    const container = document.getElementById('cart-items');
    const totalEl = document.querySelector('.cart-total');
    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-cart-msg">Seu carrinho está vazio.</p>';
        totalEl.innerHTML = `Total: <span id="cart-total-price">R$ 0,00</span>`;
        return;
    }

    let total = 0;
    let totalSavings = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        // Calculate Savings
        const originalPrice = (item.originalPrice && item.originalPrice > item.price) ? item.originalPrice : item.price;
        if (originalPrice > item.price) {
            totalSavings += (originalPrice - item.price) * item.quantity;
        }

        const priceFormatted = item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        let quantityControls = `<span>${item.quantity}x</span>`;

        // Show controls only if maxQuantity > 1
        if (item.maxQuantity > 1) {
            const isMaxed = item.quantity >= item.maxQuantity;
            const plusDisabledStyle = isMaxed ? 'opacity: 0.5; cursor: not-allowed;' : 'cursor: pointer;';
            const plusDisabledAttr = isMaxed ? 'disabled' : '';

            const isMin = item.quantity <= 1;
            const minusDisabledStyle = isMin ? 'opacity: 0.5; cursor: not-allowed;' : 'cursor: pointer;';
            const minusDisabledAttr = isMin ? 'disabled' : '';

            quantityControls = `
                <div class="cart-qty-controls" style="display: flex; align-items: center; gap: 8px;">
                    <button type="button" onclick="changeQuantity(${item.id}, -1)" ${minusDisabledAttr} style="width: 24px; height: 24px; border-radius: 50%; border: 1px solid #ccc; background: #fff; ${minusDisabledStyle}">-</button>
                    <span>${item.quantity}</span>
                    <button type="button" onclick="changeQuantity(${item.id}, 1)" ${plusDisabledAttr} style="width: 24px; height: 24px; border-radius: 50%; border: 1px solid #ccc; background: #fff; ${plusDisabledStyle}">+</button>
                </div>
            `;
        }

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div style="display: flex; align-items: center; gap: 10px; margin-top: 5px;">
                    ${quantityControls}
                    <div class="cart-item-price">${priceFormatted} unid.</div>
                </div>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${item.id})" title="Remover item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
            </button>
        `;
        container.appendChild(div);
    });

    if (totalSavings > 0) {
        totalEl.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span style="color: #666;">Subtotal:</span>
                <span tyle="color: #666;">${(total + totalSavings).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <div style="display: flex; justify-content: space-between; color: #2ecc71; margin-bottom: 5px;">
                <span>Desconto:</span>
                <span>- ${totalSavings.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 1.2rem; margin-top: 10px; border-top: 1px solid #eee; padding-top: 10px;">
                <strong>Total:</strong>
                <span id="cart-total-price" style="color: #42A49C;">${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
        `;
    } else {
        totalEl.innerHTML = `Total: <span id="cart-total-price">${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>`;
    }
}

function finishOrder() {
    if (cart.length === 0) return alert("Seu carrinho está vazio!");

    const name = document.getElementById('client-name').value;
    const phone = document.getElementById('client-phone').value;
    const email = document.getElementById('client-email').value;
    const address = document.getElementById('client-address').value;
    const pickupDate = document.getElementById('client-pickup-date').value;
    const returnDate = document.getElementById('client-return-date').value;
    const referral = document.getElementById('client-referral').value;
    const obs = document.getElementById('client-obs').value;

    // Formatar datas para PT-BR
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', { timeZone: 'UTC' }); // UTC to prevent timezone shift issues
    };

    // Check if required fields are filled (HTML required attribute catches most, but good to check)
    if (!name || !phone || !email || !address || !pickupDate || !returnDate || !referral) {
        return alert("Por favor, preencha todos os campos obrigatórios.");
    }

    let total = 0;
    let totalSavings = 0;

    let message = `*Novo Pedido Pegue e Monte*\n\n`;
    message += `*Dados do Cliente:*\n`;
    message += `Nome: ${name}\n`;
    message += `Celular: ${phone}\n`;
    message += `E-mail: ${email}\n`;
    message += `Endereço: ${address}\n`;
    message += `Retirada: ${formatDate(pickupDate)}\n`;
    message += `Devolução: ${formatDate(returnDate)}\n`;
    message += `Conheceu por: ${referral}\n`;

    if (obs) {
        message += `Observações: ${obs}\n`;
    }

    message += `\n*Itens Selecionados:*\n`;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const originalPrice = (item.originalPrice && item.originalPrice > item.price) ? item.originalPrice : item.price;
        if (originalPrice > item.price) {
            totalSavings += (originalPrice - item.price) * item.quantity;
        }

        message += `- ${item.quantity}x ${item.name} (R$ ${item.price.toFixed(2).replace('.', ',')})\n`;
    });

    if (totalSavings > 0) {
        message += `\nSubtotal: R$ ${(total + totalSavings).toFixed(2).replace('.', ',')}`;
        message += `\n*Desconto: - R$ ${totalSavings.toFixed(2).replace('.', ',')}*`;
    }

    message += `\n*Total Estimado: R$ ${total.toFixed(2).replace('.', ',')}*`;
    message += `\n\n_Aguardando confirmação de disponibilidade._`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5581988973733?text=${encodedMessage}`;

    // Limpar carrinho após pedido (Desativado)
    // cart = [];
    // saveCart();
    // updateCartIcon();
    document.getElementById('cart-modal').style.display = "none";

    window.open(whatsappUrl, '_blank');
}

// Função para renderizar inspirações
function renderInspirations() {
    const inspirationsGrid = document.getElementById('inspirations-grid');
    
    inspirationsData.forEach(inspiration => {
        const card = document.createElement('div');
        card.className = 'inspiration-card';
        
        card.innerHTML = `
            <img src="${inspiration.image}" alt="${inspiration.title}" loading="lazy">
            <div class="inspiration-info">
                <h3>${inspiration.title}</h3>
                <p>${inspiration.description}</p>
            </div>
        `;
        
        inspirationsGrid.appendChild(card);
    });
}

// Função para renderizar locais
let currentLocationIndex = 0;

function renderLocations() {
    const locationSection = document.querySelector('#location .location-content');
    locationSection.innerHTML = '';
    
    // Criar container do carrossel
    const carouselWrapper = document.createElement('div');
    carouselWrapper.className = 'locations-carousel-wrapper';
    
    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'locations-carousel';
    carouselContainer.id = 'locations-carousel';
    
    locationsData.forEach((location, index) => {
        const locationCard = document.createElement('div');
        locationCard.className = `location-card ${index === 0 ? 'active' : ''}`;
        
        const googleMapsUrl = `https://maps.google.com/?q=${location.coordinates}`;
        const embedUrl = `https://maps.google.com/maps?q=${location.coordinates}&z=17&output=embed`;
        
        locationCard.innerHTML = `
            <div class="location-text">
                <h3>${location.name}</h3>
                <p class="address-paragraph">
                    <strong>Endereço:</strong> ${location.address}<br>
                    ${location.neighborhood}, ${location.city}
                </p>
                <p><strong>Horário:</strong> ${location.hours}</p>
                
                <p class="steps-intro" style="margin-top: 2rem; margin-bottom: 0.5rem;">Nosso sistema funciona no modelo <strong>Pegue e Monte</strong>:</p>
                <ul style="margin-top: 0;">
                    <li>1. Você escolhe as peças no site.</li>
                    <li>2. Agenda a retirada pelo WhatsApp.</li>
                    <li>3. Retira no nosso endereço, monta sua festa e devolve depois!</li>
                </ul>
                
                <a href="${googleMapsUrl}" target="_blank" class="map-link-btn">Abrir no Google Maps</a>
            </div>
            <div class="map-container">
                <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="${embedUrl}"></iframe>
            </div>
        `;
        
        carouselContainer.appendChild(locationCard);
    });
    
    // Adicionar setas se houver mais de um local
    if (locationsData.length > 1) {
        const prevArrow = document.createElement('button');
        prevArrow.className = 'carousel-arrow prev';
        prevArrow.innerHTML = '&#10094;';
        prevArrow.onclick = () => navigateLocation(-1);
        
        const nextArrow = document.createElement('button');
        nextArrow.className = 'carousel-arrow next';
        nextArrow.innerHTML = '&#10095;';
        nextArrow.onclick = () => navigateLocation(1);
        
        carouselWrapper.appendChild(prevArrow);
        carouselWrapper.appendChild(carouselContainer);
        carouselWrapper.appendChild(nextArrow);
    } else {
        carouselWrapper.appendChild(carouselContainer);
    }
    
    locationSection.appendChild(carouselWrapper);
}

function navigateLocation(direction) {
    currentLocationIndex += direction;
    
    if (currentLocationIndex < 0) {
        currentLocationIndex = locationsData.length - 1;
    } else if (currentLocationIndex >= locationsData.length) {
        currentLocationIndex = 0;
    }
    
    goToLocation(currentLocationIndex);
}

function goToLocation(index) {
    currentLocationIndex = index;
    
    // Fade out todos os cards
    document.querySelectorAll('.location-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Fade in o card ativo após um delay
    setTimeout(() => {
        document.querySelectorAll('.location-card')[index].classList.add('active');
    }, 300);
}

// Função para atualizar o ano no footer
function updateFooterYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('footer-copyright').textContent = `© ${currentYear} Pegue e Monte com Encanto. Todos os direitos reservados.`;
}
