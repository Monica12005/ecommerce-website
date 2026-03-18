
import women9 from './women9.jpg'
import women8 from './women8.jpg'
import women7 from './women7.jpg'
import women6 from './women6.jpg'
import women5 from './women5.jpg'
import women4 from './women4.jpg'
import women3 from './women3.jpg'
import women2 from './women2.jpg'
import women1 from './women1.jpg'
import men9 from './men9.jpg'
import men8 from './men8.jpg'
import  men6 from './men6.jpg'
import men4 from './men4.jpg'
import men11 from './men11.jpg'
import men12 from './men12.jpg'
import men13 from './men13.jpg'
import men14 from './men14.jpg'
import men15 from './men15.jpg'
import men16 from './men16.jpg'
import men17 from './men17.jpg'
import  men18 from './men18.jpg'
import men19 from './men19.jpg'
import kidmen1 from './kidmen1.jpg'
import kidmen2 from './kidmen2.jpg'
import kidmen3 from './kidmen3.jpg'
import kidmen4 from './kidmen4.jpg'
import kidmen5 from './kidmen5.jpg'
import hoddies1 from './hoddies1.jpg'
import hoddies2 from './hoddies2.jpg'
import hoddies4 from './hoddies4.jpg'
import hoddies5 from './hoddies5.jpg'
import hoddiesG1 from './hoddiesG1.jpg'
import hoddiesG2 from './hoddiesG2.jpg'
import Jacket1 from './Jacket1.jpg'
import Jacket1W from './Jacket1W.jpg'
import Jacket2 from './Jacket2.jpg'
import jacket2W from './jacket2W.jpg'
import jacket3 from './jacket3.jpg'
import Jacket3W from './Jacket3W.jpg'
import jacket4 from './jacket4.jpg'
import jacket4W from './jacket4W.jpg'
import jacket5 from './jacket5.jpg'
import TshirtM1 from './TshirtM1.jpg'
import TshirtM2 from './TshirtM2.jpg'
import TshirtM3 from './TshirtM3.jpg'
import TshirtM4 from './TshirtM4.jpg'
import TshirtM5 from './TshirtM5.jpg'
import TshirtW1 from './TshirtW1.jpg'
import TshirtW2 from './TshirtW2.jpg'
import TshirtW3 from './TshirtW3.jpg'
import TshirtW4 from './TshirtW4.jpg'
import TshirtW5 from './TshirtW5.jpg'
import jeans1 from './jeans1.jpg'
import jeans2 from './jeans2.jpg'
import jeans3 from './jeans3.jpg'
import jeans4 from './jeans4.jpg'
import jeans5 from './jeans5.jpg'
import logo from './logo.jpg'
import heroimage from './heroimage.jpg'


import Cart from './cart.png'
import dropdown from './dropdown.png'
import bin from './bin.png'
import remove from './remove.png'
import transfer from './transfer.png'
import user from './user.png'
import search from './search.png'
import quality from './quality.png'
import stripelogo from './stripelogo.jpg'
import razorpaylogo from './razorpaylogo.jpg'
import menu from './menu.png'
import icondullstar from './icondullstar.png'
import iconsstar from './iconsstar.png'


export const assets = {
  women9,
  women8,
  women7,
  women6,
  women5,
  women4,
  women3,
  women2,
  women1,
  men9,
  men8,
  men6,
  men4,
  men11,
  men12,
  men13,
  men14,
  men15,
  men16,
  men17,
  men18,
  men19,
  kidmen1,
  kidmen2,
  kidmen3,
  kidmen4,
  kidmen5,  
  logo,
  Cart,
  dropdown,
  bin,
  remove,
  transfer,
  user,
  search,
  quality,
  stripelogo,
  razorpaylogo, 
  menu,
  icondullstar,
  iconsstar,
  heroimage,
  hoddies1,
  hoddies2,
  hoddies4,
  hoddies5,
  hoddiesG1,
  hoddiesG2,
  jeans1,
  jeans2,
  jeans3,
  jeans4,
  jeans5,
  Jacket1,
  Jacket2,
  jacket2W,
  jacket3,
  jacket4,
  jacket4W,
  jacket5,
  Jacket3W,
  TshirtM1,
  TshirtM2,
  TshirtM3,
  TshirtM4,
  TshirtM5,
  TshirtW1,
  TshirtW2,
  TshirtW3,
  TshirtW4,
  TshirtW5,

  
}

export const products = [
  {
    id:"aaaaa",
    name:"Women's T-Shirt",
    price: 19.99,
    image: [TshirtW2],
    category:"women",
    description: "A comfortable and stylish t-shirt for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    date :1716621345442,
    bestseller: true,
    subcategory: "t-shirt",
    reviews: [
  { name: "ajay", rating: 5, comment: "Great product!" }
]

    },      
    {       

    id:"aaab",
    name:"men's T-Shirt",
    price: 24.99,
    image:[TshirtM3],
    category:"men",
    description: "A comfortable and stylish t-shirt for men.",
    sizes: ["S", "M", "L", "XL"],
    date :1716621345443,
    bestseller: false,
    subcategory: "t-shirt",
    reviews: [
  { name: "prem", rating: 5, comment: "Great product!" },
  { name: "Rahul", rating: 5, comment: "Great product!" }
]

    },
    {
    id:"aaac",
    name:"Kid's T-Shirt",
    price: 14.99,
    image:[kidmen4],
    category:"kid",
    description: "A comfortable and stylish t-shirt for kids.",
    sizes: ["S", "M", "L", "XL"],
    date :1716621345444,
    bestseller: false,
    subcategory: "t-shirt",
      reviews: [
  { name: "james", rating: 5, comment: "Great product!" },
  { name: "anita", rating: 4, comment: "good product!" }
]

    },
{
     id:"aaad",
     name:"Women's Jeans",
     price : 49.99,
     image: [jeans5],
     category:"women",
      description: "A pair of trendy and comfortable jeans for women.", 
      sizes: ["S", "M", "L", "XL"],
      date :1716621345445,
      bestseller: true,
      subcategory: "jeans",
        reviews: [
  { name: "raj", rating: 4, comment: "Great product!" },
  { name: "Rahul", rating: 5, comment: "Great product!" }
]
    },
{
    id:"aaae",
    name:"Men's Jeans",
    price : 59.99,
    image: [jeans1],
    category:"men",
    description: "A pair of stylish and durable jeans for men.",
    sizes: ["S", "M", "L", "XL"],
    date :1716621345446,
    bestseller: true,
    subcategory: "jeans",
      reviews: [
  { name: "prem", rating: 5, comment: "Great product!" },
  { name: "karan", rating: 4, comment: "Great product!" }
]
},
{
    id:"aaaf",
    name:"Kid's Jeans",
    price : 39.99, 
    image: [kidmen3],
    category:"kid",
    description: "A pair of comfortable and durable jeans for kids.",   
    sizes: ["S", "M", "L", "XL"],
    date :1716621345447,
    bestseller: false,  
    subcategory: "jeans", 
      reviews: [
  { name: "ram", rating: 4, comment: "Great product!" },
  { name: "Rahul", rating: 5, comment: "Great product!" }
]
    
},
{
    id:"aaag",
    name:"women's Jacket",
    price : 69.99,
    image: [Jacket1W],
    category:"women",
    description: "A stylish and warm jacket for women.",
    sizes: ["S", "M", "L", "XL"],
    date :1716621345448,
    bestseller: true, 
    subcategory: "jacket",
      reviews: [
  { name: "prem", rating: 5, comment: "Great product!" },
  { name: "shagul", rating: 5, comment: "Great product!" }
]
},
{
    id:"aaah",
    name:"  Men's Jacket",
    price : 89.99,
    image: [Jacket1],
    category:"men",
    description: "A durable and fashionable jacket for men.",
    sizes: ["S", "M", "L", "XL"],
    date :1716621345449,
    bestseller: true,
    subcategory: "jacket",
      reviews: [
  { name: "lean", rating: 5, comment: "Great product!" },
  { name: "Rahul", rating: 5, comment: "Great product!" }
]
},
{
    id:"aaai",
    name:" Kid's Jacket",
    price : 59.99,    
    image: [jacket4],
    category:"kid",
    description: "A warm and comfortable jacket for kids.",
    sizes: ["S", "M", "L", "XL"],
    date :1716621345450,
    bestseller: true,
    subcategory: "jacket",
      reviews: [
  { name: "prem", rating: 5, comment: "Great product!" },
  { name: "Rahul", rating: 5, comment: "Great product!" }
]
},
{
    id:"aaaj",
    name:"Men's Hoodie",
    price : 39.99,
    image: [hoddies2],
    category:"men",
    description: "A cozy and stylish hoodie for men.",
    sizes: ["S", "M", "L", "XL"],
    date :1716621345451,
    bestseller: false,
     subcategory: "hoodie",
       reviews: [
  { name: "prem", rating: 5, comment: "Great product!" },
  { name: "Rahul", rating: 5, comment: "Great product!" }
]
},
{
    id:"aaak",
    name:"Women's Hoodie",
    price : 34.99,
    image: [hoddiesG2],
    category:"women",
    description: "A comfortable and trendy hoodie for women.",
    sizes: ["S", "M", "L", "XL"],
    date :1716621345452,
    bestseller: false,
     subcategory: "hoodie",
       reviews: [
  { name: "prem", rating: 5, comment: "Great product!" },
  { name: "Rahul", rating: 5, comment: "Great product!" }
]
},
{
    id:"aaal",
    name:"Kid's Hoodie",
    price : 29.99,
    image: [hoddies4],
    category:"kid",
    description: "A warm and stylish hoodie for kids.",
    sizes: ["S", "M", "L", "XL"],
    date :1716621345453,
    bestseller: true,
    subcategory: "hoodie",
      reviews: [
  { name: "prem", rating: 5, comment: "Great product!" },
  { name: "Rahul", rating: 5, comment: "Great product!" }
]
},
 {
      id:"aaam",      
      name:"Women's T-Shirt",
      price: 19.99,
      image: [TshirtW2],
      category:"women",
      description: "A comfortable and stylish t-shirt for everyday wear.",
      sizes: ["S", "M", "L", "XL"],
      date :1716621345454,
      bestseller: true,
        subcategory: "t-shirt",
          reviews: [
  { name: "prem", rating: 5, comment: "Great product!" },
  { name: "Rahul", rating: 5, comment: "Great product!" },
  { name: "shagul", rating: 4, comment: "Great product!" }
]
 },
  {
      id:"aaan",      
      name:"Women's T-Shirt",
      price: 34.99,
      image: [TshirtW3],
      category:"women",
      description: "A comfortable and stylish t-shirt for everyday wear.",
      sizes: ["S", "M", "L", "XL"],
      date :1716621345454,
      bestseller: true,
        subcategory: "t-shirt",
          reviews: [
  { name: "prem", rating: 5, comment: "Great product!" },
  { name: "Rahul", rating: 5, comment: "Great product!" },
  { name: "shagul", rating: 4, comment: "Great product!" }
]
 },
 {
    id:"aaao",
    name:"Men's Hoodie",
    price : 39.99,
    image: [hoddies5],
    category:"men",
    description: "A cozy and stylish hoodie for men.",
    sizes: ["S", "M", "L", "XL"],
    date :1716621345451,
    bestseller: false,
     subcategory: "hoodie",
       reviews: [
  { name: "prem", rating: 5, comment: "Great product!" },
  { name: "Rahul", rating: 5, comment: "Great product!" }
]
},
{
    id:"aaap",
    name:"women's Jacket",
    price : 69.99,
    image: [Jacket3W],
    category:"women",
    description: "A stylish and warm jacket for women.",
    sizes: ["S", "M", "L", "XL"],
    date :1716621345448,
    bestseller: true, 
    subcategory: "jacket",
      reviews: [
  { name: "prem", rating: 5, comment: "Great product!" },
  { name: "shagul", rating: 5, comment: "Great product!" }
]
},
{
    id:"aaaq",
    name:"Men's Jeans",
    price : 59.99,
    image: [jeans4],
    category:"men",
    description: "A pair of stylish and durable jeans for men.",
    sizes: ["S", "M", "L", "XL"],
    date :1716621345446,
    bestseller: true,
    subcategory: "jeans",
      reviews: [
  { name: "prem", rating: 5, comment: "Great product!" },
  { name: "karan", rating: 4, comment: "Great product!" }
]
},
{
      id:"aaar",      
      name:"Women's T-Shirt",
      price: 19.99,
      image: [TshirtW4],
      category:"women",
      description: "A comfortable and stylish t-shirt for everyday wear.",
      sizes: ["S", "M", "L", "XL"],
      date :1716621345454,
      bestseller: true,
        subcategory: "t-shirt",
          reviews: [
  { name: "prem", rating: 5, comment: "Great product!" },
  { name: "Rahul", rating: 5, comment: "Great product!" },
  { name: "shagul", rating: 4, comment: "Great product!" }
]
 },
 {
      id:"aaas",      
      name:"Women's T-Shirt",
      price: 19.99,
      image: [TshirtW5],
      category:"women",
      description: "A comfortable and stylish t-shirt for everyday wear.",
      sizes: ["S", "M", "L", "XL"],
      date :1716621345454,
      bestseller: true,
        subcategory: "t-shirt",
          reviews: [
  { name: "prem", rating: 5, comment: "Great product!" },
  { name: "Rahul", rating: 5, comment: "Great product!" },
  { name: "shagul", rating: 4, comment: "Great product!" }
]
 },



]



