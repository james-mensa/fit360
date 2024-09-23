export const getDietRecommendations = (
  phase: number,
): {breakfast: string[]; lunch: string[]; dinner: string[]} => {
  switch (phase) {
    case 1:
      return {
        breakfast: [
          'Oats or Tom Brown (roasted corn, millet and groundnut porridge) with wheat bread and boiled egg',
          'Koko (Millet Porridge) with Koose (fried bean cakes) ',
          'Fruit Salad',
        ],
        lunch: [
          'Jollof Rice with Grilled chicken and Salad',
          'Yam with Kontomire stew and fish',
        ],
        dinner: [
          'Rice balls with Groundnut soup',
          'Kenkey with Grilled Fish and Pepper Sauce',
        ],
      };
    case 2:
      return {
        breakfast: [
          'Smoothie with spinach, banana, and protein powder 🍌🥬',
          'Avocado toast with poached eggs 🥑🍳',
        ],
        lunch: [
          'Banku with Okro stew and fish',
          'Gari fortor with fried fish',
        ],
        dinner: [
          'Lean beef steak with sweet potatoes 🥩🍠',
          'Vegetable Stir-fry with Grilled Chicken and rice 🍲🍛',
        ],
      };
    case 3:
      return {
        breakfast: [
          'Egg white omelette with vegetables 🍳🥦',
          'Protein pancakes with fruit 🥞🍇',
        ],
        lunch: [
          'Grilled shrimp and vegetable skewers 🍤🍡',
          'Fufu with Goat Light Soup',
        ],
        dinner: [
          'Grilled chicken with yam chips and roasted veggies 🍗🌾',
          'Salmon fillet with asparagus 🐟🌿',
        ],
      };
    case 4:
      return {
        breakfast: [
          'Rice porridge with bread and boiled eggs',
          'Tea and banana bread',
        ],
        lunch: ['Chicken salad 🥗🍗', 'Stuffed bell peppers 🌶️🍽️'],
        dinner: [
          'Boiled yam with Garden egg stew and Mackerel',
          'Turkey meatballs with noodles 🍝🍗',
        ],
      };
    case 5:
      return {
        breakfast: [
          'Banana smoothie with Peanut butter toast',
          'Wheat Porridge with Toasted bread',
        ],
        lunch: [
          'Beef and vegetable stew 🍲🥩',
          'Sweet potato and black bean salad 🥗🍠',
        ],
        dinner: [
          'Grilled chicken with cauliflower rice 🍗🌾',
          'Pork with green beans 🍖🌱',
        ],
      };
    case 6:
      return {
        breakfast: [
          'Fried plantain with avocado and sardines',
          'Protein smoothie with berries 🍓🥤',
        ],
        lunch: [
          'Grilled salmon with mixed vegetables 🐟🥦',
          'Ampesi with Kontomire',
        ],
        dinner: [
          'Tilapia Soup with Rice',
          'Etor (Mashed Yam) with groundnuts, boiled egg and avocado',
        ],
      };
    default:
      return {
        breakfast: [],
        lunch: [],
        dinner: [],
      };
  }
};
