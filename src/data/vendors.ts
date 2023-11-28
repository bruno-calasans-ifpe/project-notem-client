import type { Vendor } from '../types/Vendor'
import items from './items'

const vendors: Vendor[] = [
  {
    id: '0',
    beachId: '0',
    name: 'Deide Costa',
    img: 'https://www.svgrepo.com/show/350417/user-circle.svg',
    rating: 5,
    info: {
      about:
        'Sou um vendedor sério que busca semppre dar muito duro naquilo que faz. Já aguentei muita poha nessa vida. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt exercitationem, earum ea accusantium recusandae eos labore nulla perferendis cupiditate tempore iste blanditiis saepe non, facilis voluptatem unde ipsam at doloribus.',
      contacts: {
        whatsapp: '81 9 12345678',
        instagram: 'deide_costa',
        twitter: '@deide_costa1234',
        email: 'deide_costa@email.com',
      },
      paymentMethods: [{ category: 'débito', name: 'Mastercard' }],
    },
    ratings: [
      {
        user: 'Fábio',
        commentary: 'Vai se fuder. Que praia lixo do krai, nunca mais volto aqui, plmd',
        stars: 1,
        date: '11/09/2005',
      },
      {
        user: 'Ana',
        commentary: 'Praia muito boa, slk',
        stars: 4,
        date: '12/05/2009',
      },

      {
        user: 'Coringa',
        commentary: 'Bem, praia muito boa para certas coisa >:)',
        stars: 5,
        date: '12/05/2009',
      },
      {
        user: 'Claudio',
        commentary: 'Bem, praia muito boa para certas coisa >:)',
        stars: 5,
        date: '12/05/2009',
      },
      {
        user: 'Chupacu',
        commentary: 'Praia muito boa, vei. Tem muitas capivarinhas',
        stars: 5,
        date: '01/01/2023',
      },
    ],
    items,
  },
  {
    id: '1',
    beachId: '1',
    name: 'Thomas Turbando',
    img: 'https://www.svgrepo.com/show/350417/user-circle.svg',
    rating: 1,
    info: {
      about:
        'Sou um vendedor sério que busca semppre dar muito duro naquilo que faz. Já aguentei muita poha nessa vida. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt exercitationem, earum ea accusantium recusandae eos labore nulla perferendis cupiditate tempore iste blanditiis saepe non, facilis voluptatem unde ipsam at doloribus.',
      contacts: {
        whatsapp: '81 9 12345678',
        instagram: 'deide_costa',
        twitter: '@deide_costa1234',
        email: 'deide_costa@email.com',
      },
      paymentMethods: [{ category: 'débito', name: 'Mastercard' }],
    },
    ratings: [
      {
        user: 'Fábio',
        commentary: 'Vai se fuder. Que praia lixo do krai, nunca mais volto aqui, plmd',
        stars: 1,
        date: '11/09/2005',
      },
      {
        user: 'Ana',
        commentary: 'Praia muito boa, slk',
        stars: 4,
        date: '12/05/2009',
      },

      {
        user: 'Coringa',
        commentary: 'Bem, praia muito boa para certas coisa >:)',
        stars: 5,
        date: '12/05/2009',
      },
      {
        user: 'Claudio',
        commentary: 'Bem, praia muito boa para certas coisa >:)',
        stars: 5,
        date: '12/05/2009',
      },
      {
        user: 'Chupacu',
        commentary: 'Praia muito boa, vei. Tem muitas capivarinhas',
        stars: 5,
        date: '01/01/2023',
      },
    ],
    items: items.slice(0, 4),
  },
  {
    id: '2',
    beachId: '4',
    name: 'Paula Tejando',
    img: 'https://www.svgrepo.com/show/350417/user-circle.svg',
    rating: 3,
    info: {
      about:
        'Sou um vendedor sério que busca semppre dar muito duro naquilo que faz. Já aguentei muita poha nessa vida. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt exercitationem, earum ea accusantium recusandae eos labore nulla perferendis cupiditate tempore iste blanditiis saepe non, facilis voluptatem unde ipsam at doloribus.',
      contacts: {
        whatsapp: '81 9 12345678',
        instagram: 'deide_costa',
        twitter: '@deide_costa1234',
        email: 'deide_costa@email.com',
      },
      paymentMethods: [{ category: 'débito', name: 'Mastercard' }],
    },
    ratings: [
      {
        user: 'Fábio',
        commentary: 'Vai se fuder. Que praia lixo do krai, nunca mais volto aqui, plmd',
        stars: 1,
        date: '11/09/2005',
      },
      {
        user: 'Ana',
        commentary: 'Praia muito boa, slk',
        stars: 4,
        date: '12/05/2009',
      },

      {
        user: 'Coringa',
        commentary: 'Bem, praia muito boa para certas coisa >:)',
        stars: 5,
        date: '12/05/2009',
      },
      {
        user: 'Claudio',
        commentary: 'Bem, praia muito boa para certas coisa >:)',
        stars: 5,
        date: '12/05/2009',
      },
      {
        user: 'Chupacu',
        commentary: 'Praia muito boa, vei. Tem muitas capivarinhas',
        stars: 5,
        date: '01/01/2023',
      },
    ],
    items: [items[0]],
  },
]

export default vendors
