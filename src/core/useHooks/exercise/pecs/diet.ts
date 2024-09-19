export const getDietRecommendationsForMale = (
  phase: number,
): {breakfast: string[]; lunch: string[]; dinner: string[]} => {
  switch (phase) {
    case 1:
      return {
        breakfast: [
          'Scrambled eggs with spinach and tomatoes 🍳🍅',
          'Whole grain toast with avocado and a side of mixed berries 🍞🥑🍇',
        ],
        lunch: [
          'Grilled chicken breast with quinoa and steamed broccoli 🍗🍚🥦',
          'Tuna salad with mixed greens, chickpeas, and a light vinaigrette 🥗🐟',
        ],
        dinner: [
          'Baked salmon with sweet potato wedges and sautéed green beans 🐟🍠🥗',
          'Stir-fried tofu with brown rice and mixed vegetables 🍚🍜',
        ],
      };
    case 2:
      return {
        breakfast: [
          'Greek yogurt parfait with granola and fresh fruit 🍦🍓',
          'Oatmeal with almond butter, banana slices, and a sprinkle of chia seeds 🌰🍌',
        ],
        lunch: [
          'Turkey and avocado wrap with a side of carrot sticks 🌯🥑🥕',
          'Chicken and vegetable stir-fry with brown rice 🍗🍚🥦',
        ],
        dinner: [
          'Grilled shrimp with wild rice and roasted asparagus 🍤🍚🌿',
          'Beef and vegetable kebabs with a side of couscous 🍢🍲',
        ],
      };
    case 3:
      return {
        breakfast: [
          'Smoothie with spinach, protein powder, and mixed berries 🍹🍓',
          'Egg white omelette with mushrooms and bell peppers 🍳🍄🌶️',
        ],
        lunch: [
          'Quinoa and black bean salad with corn and a lime dressing 🌾🌽',
          'Grilled chicken Caesar salad with a yogurt-based dressing 🥗🍗',
        ],
        dinner: [
          'Baked cod with roasted Brussels sprouts and mashed sweet potatoes 🐟🥔',
          'Stuffed bell peppers with ground turkey and a side of steamed green beans 🌶️🍗🥗',
        ],
      };
    case 4:
      return {
        breakfast: [
          'Chia pudding with almond milk, topped with fresh fruit and nuts 🍓🥥',
          'Protein pancakes with a side of fresh fruit 🍌🥞',
        ],
        lunch: [
          'Chicken and avocado salad with quinoa chips 🥗🥑',
          'Roasted vegetable and hummus wrap 🌯🍠',
        ],
        dinner: [
          'Herb-crusted salmon with roasted vegetables and a side of mixed greens 🐟🥗',
          'Beef chili with a side of cornbread 🍲🍞',
        ],
      };
    case 5:
      return {
        breakfast: [
          'Green smoothie with kale, avocado, and a scoop of protein powder 🌱🥑',
          'Egg and vegetable scramble with a side of whole grain toast 🍳🌶️',
        ],
        lunch: [
          'Grilled chicken Caesar salad with whole grain croutons 🥗🍗',
          'Buddha bowl with brown rice, chickpeas, and roasted veggies 🍲🌱',
        ],
        dinner: [
          'Baked cod with quinoa, steamed asparagus, and roasted carrots 🐟🍚🥕',
          'Stuffed bell peppers with ground turkey and quinoa 🌶️🍗',
        ],
      };
    case 6:
      return {
        breakfast: [
          'Acai bowl with granola, mixed berries, and chia seeds 🍇🥣',
          'Omelette with spinach, tomatoes, and feta cheese, served with whole grain toast 🍳🍅',
        ],
        lunch: [
          'Grilled salmon salad with avocado and a citrus dressing 🥗🐟',
          'Quinoa and black bean bowl with roasted sweet potatoes and kale 🍲🌱',
        ],
        dinner: [
          'Chicken stir-fry with brown rice and mixed vegetables 🍗🍚🥦',
          'Vegetable curry with tofu served over cauliflower rice 🍛🥥',
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
