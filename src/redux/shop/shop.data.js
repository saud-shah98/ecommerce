
const SHOP_DATA = {
  sofas: {
    id: 1,
    title: 'Sofas',
    routeName: 'sofas',
    items: [
      {
        id: 1,
        name: 'Traditional Sofa Authentic',
        imageUrl: 'https://iwood.pk/wp-content/uploads/2019/02/vhbbb.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://5.imimg.com/data5/TC/EP/MY-37575586/maharaja-sofa-set-500x500.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://www.woodcreations.pk/wp-content/uploads/2020/08/3-300x300.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2pIl_oUoVJoJSnQn5UZIdhrbNToibdcTNFivQoDlm-9QeCH8tfaRJkD1AERJpV7V11g&usqp=CAU',
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfUnipFkwqIJ7hxbT2VmD7GdMTqTjyr8r5FA&usqp=CAU',
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'data:image/jpeg;base64,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',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16
      }
    ]
  },
  tables: {
    id: 2,
    title: 'Tables',
    routeName: 'tables',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: "https://5.imimg.com/data5/SELLER/Default/2020/9/ET/CF/OM/113311882/luxury-dressing-table-500x500.jpg",
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2020/9/ET/CF/OM/113311882/luxury-dressing-table-500x500.jpg',
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnON-NdXa_O6v4emgDWA7nvQrdhHlUavKwlIY4mbjUqQZR04tBShGspB2CgskxmuFdyLg&usqp=CAU',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200
      }
    ]
  },
  chairs: {
    id: 3,
    title: 'Chairs',
    routeName: 'chairs',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185
      }
    ]
  },
  outdoor: {
    id: 4,
    title: 'Outdoor',
    routeName: 'outdoor',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      }
    ]
  },
  indoor: {
    id: 5,
    title: 'Indoor',
    routeName: 'indoor',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
