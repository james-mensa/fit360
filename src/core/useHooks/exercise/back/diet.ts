export const getDietRecommendations = (
  phase: number,
): {breakfast: string[]; lunch: string[]; dinner: string[]} => {
  switch (phase) {
    case 1:
      return {
        breakfast: [
          'Egg White Omelette with Spinach and Tomatoes 🍳🍅',
          'Greek yogurt with honey and berries 🍓🍯',
          'Oatmeal with nuts and seeds 🌰🥣',
        ],
        lunch: [
          'Grilled chicken salad with mixed greens 🥗🍗',
          'Quinoa and black bean bowl 🌾🌱',
        ],
        dinner: [
          'Baked salmon with steamed broccoli 🐟🥦',
          'Chicken stir-fry with vegetables 🍗🥕',
        ],
      };
    case 2:
      return {
        breakfast: [
          'Smoothie with spinach, banana, and protein powder 🍌🥬',
          'Avocado toast with poached eggs 🥑🍳',
        ],
        lunch: [
          'Turkey and avocado wrap 🦃🥑',
          'Chickpea and cucumber salad 🥒🌿',
        ],
        dinner: [
          'Lean beef steak with sweet potatoes 🥩🍠',
          'Stir-fried tofu with mixed vegetables 🍲🍛',
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
          'Lentil soup with side salad 🍲🥗',
        ],
        dinner: [
          'Grilled chicken with quinoa and roasted veggies 🍗🌾',
          'Salmon fillet with asparagus 🐟🌿',
        ],
      };
    case 4:
      return {
        breakfast: [
          'Chia seed pudding with fruit 🍇🍒',
          'Almond butter smoothie with greens 🥜🍹',
        ],
        lunch: ['Chicken Caesar salad 🥗🍗', 'Stuffed bell peppers 🌶️🍽️'],
        dinner: [
          'Baked cod with sautéed spinach 🐟🍃',
          'Turkey meatballs with zucchini noodles 🍝🍗',
        ],
      };
    case 5:
      return {
        breakfast: [
          'Berry smoothie with flax seeds 🍓🍇',
          'Egg and spinach breakfast burrito 🌯🥚',
        ],
        lunch: [
          'Beef and vegetable stew 🍲🥩',
          'Sweet potato and black bean salad 🥗🍠',
        ],
        dinner: [
          'Grilled chicken with cauliflower rice 🍗🌾',
          'Pork tenderloin with green beans 🍖🌱',
        ],
      };
    case 6:
      return {
        breakfast: [
          'Greek yogurt with granola 🥣🍦',
          'Protein smoothie with berries 🍓🥤',
        ],
        lunch: [
          'Grilled salmon with mixed vegetables 🐟🥦',
          'Quinoa salad with chickpeas 🌾🍋',
        ],
        dinner: [
          'Chicken fajitas with bell peppers 🌯🌶️',
          'Vegetable stir-fry with tofu 🍲🍜',
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
