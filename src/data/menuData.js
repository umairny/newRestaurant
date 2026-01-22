// Import images
import mediterraneanPlatter from '../assets/images/appetizer_platter_1768588200466.png';
import capreseSalad from '../assets/images/Caprese_Salad.png';
import lobsterBisque from '../assets/images/Lobster_Bisque.png';
import primeRibeye from '../assets/images/steak_main_dish_1768588159526.png';
import grilledChicken from '../assets/images/grilled_chicken_1768588186487.png';
import panSearedSalmon from '../assets/images/Pan-Seared_Salmon.png';
import lambChops from '../assets/images/Lamb_Chops.png';
import burrataPasta from '../assets/images/pasta_dish_1768588173101.png';
import truffleCarbonara from '../assets/images/Truffle_Carbonara.png';
import seafoodLinguine from '../assets/images/Seafood_Linguine.png';
import moltenCake from '../assets/images/dessert_chocolate_1768588214490.png';
import tiramisu from '../assets/images/Tiramisu.png';
import cremeBrulee from '../assets/images/creme_brulee.png';
import houseWine from '../assets/images/house_wine.png';
import craftCocktails from '../assets/images/craft_cocktails.png';
import freshJuices from '../assets/images/fresh_juices.png';

export const menuData = {
  starters: [
    {
      id: 'st1',
      name: 'Mediterranean Platter',
      description: 'Artisan bruschetta, imported cheeses, cured meats, and marinated olives with fresh herbs',
      price: 18.99,
      image: mediterraneanPlatter,
      category: 'Starters'
    },
    {
      id: 'st2',
      name: 'Caprese Salad',
      description: 'Fresh mozzarella, heirloom tomatoes, basil, balsamic reduction',
      price: 12.99,
      image: capreseSalad,
      category: 'Starters'
    },
    {
      id: 'st3',
      name: 'Lobster Bisque',
      description: 'Creamy lobster soup with cognac, finished with crème fraîche',
      price: 14.99,
      image: lobsterBisque,
      category: 'Starters'
    }
  ],
  mains: [
    {
      id: 'm1',
      name: 'Prime Ribeye Steak',
      description: 'Premium 12oz ribeye, herb-roasted mushrooms, asparagus, truffle mashed potatoes',
      price: 42.99,
      image: primeRibeye,
      category: 'Mains'
    },
    {
      id: 'm2',
      name: 'Herb-Grilled Chicken',
      description: 'Succulent chicken breast with seasonal vegetables, balsamic glaze',
      price: 26.99,
      image: grilledChicken,
      category: 'Mains'
    },
    {
      id: 'm3',
      name: 'Pan-Seared Salmon',
      description: 'Atlantic salmon, lemon butter sauce, quinoa, roasted vegetables',
      price: 32.99,
      image: panSearedSalmon,
      category: 'Mains'
    },
    {
      id: 'm4',
      name: 'Lamb Chops',
      description: 'Herb-crusted lamb chops, mint jus, garlic potatoes, grilled vegetables',
      price: 38.99,
      image: lambChops,
      category: 'Mains'
    }
  ],
  pasta: [
    {
      id: 'p1',
      name: 'Burrata Pasta',
      description: 'House-made pasta with fresh burrata, cherry tomatoes, basil, olive oil',
      price: 22.99,
      image: burrataPasta,
      category: 'Pasta'
    },
    {
      id: 'p2',
      name: 'Truffle Carbonara',
      description: 'Creamy carbonara with crispy pancetta, parmesan, black truffle',
      price: 24.99,
      image: truffleCarbonara,
      category: 'Pasta'
    },
    {
      id: 'p3',
      name: 'Seafood Linguine',
      description: 'Fresh shrimp, mussels, clams in white wine garlic sauce',
      price: 28.99,
      image: seafoodLinguine,
      category: 'Pasta'
    }
  ],
  desserts: [
    {
      id: 'd1',
      name: 'Molten Chocolate Lava Cake',
      description: 'Warm chocolate cake with liquid center, vanilla ice cream, fresh berries',
      price: 10.99,
      image: moltenCake,
      category: 'Desserts'
    },
    {
      id: 'd2',
      name: 'Tiramisu',
      description: 'Classic Italian dessert with espresso-soaked ladyfingers, mascarpone',
      price: 9.99,
      image: tiramisu,
      category: 'Desserts'
    },
    {
      id: 'd3',
      name: 'Crème Brûlée',
      description: 'Vanilla bean custard with caramelized sugar crust',
      price: 8.99,
      image: cremeBrulee,
      category: 'Desserts'
    }
  ],
  beverages: [
    {
      id: 'b1',
      name: 'House Wine Selection',
      description: 'Red, White, or Rosé - Ask server for today\'s featured wines',
      price: 12.00,
      image: houseWine,
      category: 'Beverages'
    },
    {
      id: 'b2',
      name: 'Craft Cocktails',
      description: 'Mixologist special creations - Old Fashioned, Martini, Mojito',
      price: 14.00,
      image: craftCocktails,
      category: 'Beverages'
    },
    {
      id: 'b3',
      name: 'Fresh Juices',
      description: 'Orange, Apple, Cranberry, or Fresh Lemonade',
      price: 5.00,
      image: freshJuices,
      category: 'Beverages'
    }
  ]
};

export const getAllMenuItems = () => {
  return [
    ...menuData.starters,
    ...menuData.mains,
    ...menuData.pasta,
    ...menuData.desserts,
    ...menuData.beverages
  ];
};

export const getMenuByCategory = (category) => {
  return menuData[category.toLowerCase()] || [];
};

export const getFeaturedItems = () => {
  return [
    menuData.mains[0], // Prime Ribeye
    menuData.pasta[0], // Burrata Pasta
    menuData.mains[1], // Grilled Chicken
    menuData.desserts[0] // Molten Lava Cake
  ];
};
