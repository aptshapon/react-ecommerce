
const SHOP_DATA = [
    {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: "https://i.ibb.co/gzG7LK4/brown-brim.png",
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: "https://i.ibb.co/CwwCQM9/blue-beanie.png",
          price: 18
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: "https://i.ibb.co/DQs8Sg1/brown-cowboy.png",
          price: 35
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: "https://i.ibb.co/VBsdhSJ/grey-brim.png",
          price: 25
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: "https://i.ibb.co/B4zRbCn/green-beanie.png",
          price: 18
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: "https://i.ibb.co/Dkfkw5S/palm-tree-cap.png",
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: "https://i.ibb.co/bRfCXJT/red-beanie.png",
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: "https://i.ibb.co/d0bZ3XY/wolf-cap.png",
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: "https://i.ibb.co/JnszPnS/blue-snapback.png",
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 10,
          name: 'Adidas NMD',
          imageUrl: "https://i.ibb.co/DMXSbWk/adidas-nmd.png", 
          price: 220
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          imageUrl: "https://i.ibb.co/RcJ2vqY/yeezy.png",
          price: 280
        },
        {
          id: 12,
          name: 'Black Converse',
          imageUrl: "https://i.ibb.co/7z7f3HX/black-converse.png",
          price: 110
        },
        {
          id: 13,
          name: 'Nike White AirForce',
          imageUrl: "https://i.ibb.co/1Q5hm8W/white-nike-high-tops.png",
          price: 160
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl: "https://i.ibb.co/dgRPvZ0/nikes-red.png",
          price: 160
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: "https://i.ibb.co/xCkPQfj/nike-brown.png",
          price: 160
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: "https://i.ibb.co/6szwm3P/nike-funky.png",
          price: 190
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: "https://i.ibb.co/VHH6yq8/timberlands.png",
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 18,
          name: 'Black Jean Shearling',
          imageUrl: "https://i.ibb.co/5n5TBRQ/black-shearling.png",
          price: 125
        },
        {
          id: 19,
          name: 'Blue Jean Jacket',
          imageUrl: "https://i.ibb.co/cy80Jt8/blue-jean-jacket.png",
          price: 90
        },
        {
          id: 20,
          name: 'Grey Jean Jacket',
          imageUrl: "https://i.ibb.co/gJypH5Q/grey-jean-jacket.png",
          price: 90
        },
        {
          id: 21,
          name: 'Brown Shearling',
          imageUrl: "https://i.ibb.co/xm2yDMF/brown-shearling.png",
          price: 165
        },
        {
          id: 22,
          name: 'Tan Trench',
          imageUrl: "https://i.ibb.co/9b0Mbbk/brown-trench.png",
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 23,
          name: 'Blue Tanktop',
          imageUrl: "https://i.ibb.co/k6Dhpnj/blue-tank.png",
          price: 25
        },
        {
          id: 24,
          name: 'Floral Blouse',
          imageUrl: "https://i.ibb.co/4jwPgQB/floral-blouse.png",
          price: 20
        },
        {
          id: 25,
          name: 'Floral Dress',
          imageUrl: "https://i.ibb.co/mDrKWny/floral-skirt.png",
          price: 80
        },
        {
          id: 26,
          name: 'Red Dots Dress',
          imageUrl: "https://i.ibb.co/x2CL6F4/red-polka-dot-dress.png",
          price: 80
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imageUrl: "https://i.ibb.co/nnybsbN/striped-sweater.png",
          price: 45
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: "https://i.ibb.co/f4RJwnJ/yellow-track-suit.png",
          price: 135
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: "https://i.ibb.co/xYDxm9k/white-vest.png",
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 30,
          name: 'Camo Down Vest',
          imageUrl: "https://i.ibb.co/jL2myLq/camo-vest.png",
          price: 325
        },
        {
          id: 31,
          name: 'Floral T-shirt',
          imageUrl: "https://i.ibb.co/6FkyX90/floral-shirt.png",
          price: 20
        },
        {
          id: 32,
          name: 'Black & White Longsleeve',
          imageUrl: "https://i.ibb.co/yFV5jRq/long-sleeve.png",
          price: 25
        },
        {
          id: 33,
          name: 'Pink T-shirt',
          imageUrl: "https://i.ibb.co/JjPnM4Z/pink-shirt.png",
          price: 25
        },
        {
          id: 34,
          name: 'Jean Long Sleeve',
          imageUrl: "https://i.ibb.co/3Mjs98K/roll-up-jean-shirt.png",
          price: 40
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          imageUrl: "https://i.ibb.co/sRRKVYf/polka-dot-shirt.png",
          price: 25
        }
      ]
    }
  ];
  
  export default SHOP_DATA;
  