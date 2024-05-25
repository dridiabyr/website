import steak from "../assets/steak.jpeg";
import sushiImage from "../assets/sushi.jpeg";
import soupImage from "../assets/soup.jpeg";
import sandwichesImage from "../assets/menu4.jpg";
import tacosImage from "../assets/tacos.jpeg";
import seafoodImage from "../assets/menu6.jpg";
import pastaImage from "../assets/carbonara.jpeg";
import ramenImage from "../assets/ramen.jpeg";
import curryImage from "../assets/Curry.jpeg";
import fajitasImage from "../assets/menu10.jpg";
import fishAndChipsImage from "../assets/fishAndChipsImage.jpeg";
import hamburgerImage from "../assets/hamburgerImage.jpeg";
import vegetarianImage from "../assets/vegetarianImage.jpeg";
import pizza from "../assets/Margherita Pizza.jpeg";
import bbqRibsImage from "../assets/BBQ_Ribs.jpeg";
import star_rating from "../assets/star_rating.png";
import cesarsalad from "../assets/Chicken-Caesar-Salad.jpeg";
import cheeseburger from "../assets/cheeseburger.jpeg";
import veg from "../assets/vegetable_stir_fry.jpeg";
import salmon from "../assets/Grilled-Salmon.jpeg";
import mushroom from "../assets/Mushroom_Risotto.jpeg";
import pad from "../assets/pad-thai.jpeg";
import thai_spice from "../assets/thai_spice.jpeg";
import bollywood_bites from "../assets/bollywood_bites.jpeg";
import la_taqueria from "../assets/la_taqueria.jpeg";
import sushi_palace from "../assets/sushi_palace.jpeg";
import mama_mias from "../assets/mama_mias.jpeg";
import rustic_spoon from "../assets/rustic_spoon.jpeg";
import le_bistro_francais from "../assets/le_bistro_francais.jpeg";
export default star_rating;

export const food_list = [
  {
    _id: 1,
    name: "Margherita Pizza",
    price: 9.99,
    description:
      "Classic pizza topped with tomato sauce, mozzarella cheese, and basil leaves.",
    image: pizza,
  },
  {
    _id: 2,
    name: "Chicken Caesar Salad",
    price: 7.49,
    description:
      "Fresh romaine lettuce, grilled chicken breast, croutons, and Caesar dressing.",
    image: cesarsalad,
  },
  {
    _id: 3,
    name: "Cheeseburger",
    price: 6.99,
    description:
      "Juicy beef patty, cheddar cheese, lettuce, tomato, onion, and special sauce.",
    image: cheeseburger,
  },
  {
    _id: 4,
    name: "Spaghetti Carbonara",
    price: 11.99,
    description:
      "Spaghetti pasta with creamy carbonara sauce, bacon, and Parmesan cheese.",
    image: pastaImage,
  },
  {
    _id: 5,
    name: "Vegetable Stir-Fry",
    price: 8.99,
    description:
      "Assorted vegetables stir-fried in a savory sauce, served with rice.",
    image: veg,
  },
  {
    _id: 6,
    name: "Grilled Salmon",
    price: 14.99,
    description:
      "Fresh salmon fillet grilled to perfection, served with steamed vegetables.",
    image: salmon,
  },
  {
    _id: 7,
    name: "Mushroom Risotto",
    price: 10.99,
    description:
      "Creamy risotto cooked with mushrooms, garlic, and Parmesan cheese.",
    image: mushroom,
  },
  {
    _id: 8,
    name: "Tacos",
    price: 8.49,
    description:
      "Soft tortillas filled with seasoned ground beef, lettuce, cheese, and salsa.",
    image: tacosImage,
  },
  {
    _id: 9,
    name: "Pad Thai",
    price: 9.99,
    description:
      "Stir-fried rice noodles with tofu, bean sprouts, peanuts, and a tangy sauce.",
    image: pad,
  },
  {
    _id: 10,
    name: "BBQ Ribs",
    price: 12.99,
    description:
      "Tender pork ribs glazed with barbecue sauce, served with coleslaw and fries.",
    image: bbqRibsImage,
  },
];

export const menulist = [
  { menu_name: "Steak", menu_image: steak },
  { menu_name: "Sushi", menu_image: sushiImage },
  { menu_name: "Soup", menu_image: soupImage },
  { menu_name: "Sandwiches", menu_image: sandwichesImage },
  { menu_name: "Tacos", menu_image: tacosImage },
  { menu_name: "Seafood", menu_image: seafoodImage },
  { menu_name: "Pasta", menu_image: pastaImage },
  { menu_name: "Curry", menu_image: curryImage },
  { menu_name: "Ramen", menu_image: ramenImage },
  { menu_name: "Fajitas", menu_image: fajitasImage },
  { menu_name: "Fish and Chips", menu_image: fishAndChipsImage },
  { menu_name: "BBQ Ribs", menu_image: bbqRibsImage },
  { menu_name: "Hamburger", menu_image: hamburgerImage },
  { menu_name: "Vegetarian", menu_image: vegetarianImage },
];
export const restaurantList = [
  {
    id: 1,
    name: "The Rustic Spoon",
    cuisine: "American",
    rating: 4.5,
    location: "123 Main Street, Cityville",
    image: rustic_spoon,
  },
  {
    id: 2,
    name: "Mama Mia's Pizzeria",
    cuisine: "Italian",
    rating: 4.2,
    location: "456 Elm Street, Townsville",
    image: mama_mias,
  },
  {
    id: 3,
    name: "Sushi Palace",
    cuisine: "Japanese",
    rating: 4.8,
    location: "789 Oak Street, Villagetown",
    image: sushi_palace,
  },
  {
    id: 4,
    name: "La Taqueria",
    cuisine: "Mexican",
    rating: 4.0,
    location: "101 Pine Street, Metropolis",
    image: la_taqueria,
  },
  {
    id: 5,
    name: "Bollywood Bites",
    cuisine: "Indian",
    rating: 4.3,
    location: "567 Maple Avenue, Suburbia",
    image: bollywood_bites,
  },
  {
    id: 6,
    name: "Le Bistro Français",
    cuisine: "French",
    rating: 4.7,
    location: "246 Walnut Lane, Downtown",
    image: le_bistro_francais,
  },
  {
    id: 7,
    name: "Thai Spice",
    cuisine: "Thai",
    rating: 4.4,
    location: "891 Cherry Road, Riverside",
    image: thai_spice,
  },
];
