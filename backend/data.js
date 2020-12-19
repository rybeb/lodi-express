import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Ryan Chris',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Ginevive',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: `Women's blouse Summer...`,
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 25,
      countInStock: 10,
      brand: 'All Great Apparel',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // name: `2020 Autumn Shirts Women Long Sleeve Blouses Shirt Runway Designer Tops For Women Top Brand Luxury Print Blouse Blusa Feminina`,
      name: `2020 Autumn Shirts...`,
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 22.48,
      countInStock: 20,
      brand: 'SPECALDFY',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // name: `Autumn Blouses Women Long Sleeve Print Shirts Blouse Designer Runway Tops 2021 Women High Quality Fashion Ladies Office Shirt`,
      name: `Autumn Blouses Women...`,
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 19.18,
      countInStock: 0,
      brand: 'SPECALDFY',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      // name: `2021 Spring Autumn Dotted Sexy V Neck Blouse Shirts Women Casual`,
      name: `2021 Spring Autumn...`,
      category: 'Shirts',
      image: '/images/p4.jpg',
      price: 21.66,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // name: `Women Autumn Casual Long Sleeve Cotton Linen Blouse Shirts Elegant Floral Print Female Tops Ladies Plus Size Streetwear Blouses`,
      name: `Women Autumn Casual...`,
      category: 'Shirts',
      image: '/images/p5.jpg',
      price: 12.77,
      countInStock: 5,
      brand: 'Lipswag',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // name: `Women Elegant O-Neck Solid Color Dress 2020 Autumn Casual Short Sleeve Button Party Dress Lady Loose Cotton Midi Dresses Vestidos`,
      name: `Women Elegant O-Neck...`,
      category: 'Shirts',
      image: '/images/p6.jpg',
      price: 15.94,
      countInStock: 12,
      brand: 'Lipswag',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};
export default data;
