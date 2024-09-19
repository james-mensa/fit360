export const getDietRecommendations = (
  phase: number,
): {breakfast: string[]; lunch: string[]; dinner: string[]} => {
  switch (phase) {
    case 1:
      return {
        breakfast: [
          'Greek yogurt parfait with mixed berries, a scoop of protein powder, and a sprinkle of granola 🍦🍓🥜🌰',
          'Egg white omelette with spinach, mushrooms, and a side of whole grain toast 🍳🌿🍄🍞',
        ],
        lunch: [
          'Grilled chicken thigh with quinoa, steamed broccoli, and a side of mixed greens 🐔🍚🥦🌿',
          'Turkey and avocado wrap with a side of sweet potato fries 🌯🥑🍠',
        ],
        dinner: [
          'Baked salmon with a side of brown rice and roasted Brussels sprouts 🐟🍚🥦',
          'Stir-fried tofu with bell peppers, carrots, and a side of quinoa 🍚🍜🥕',
        ],
      };
    case 2:
      return {
        breakfast: [
          'Protein smoothie with spinach, banana, almond milk, and a tablespoon of peanut butter 🍌🍹🥜',
          'Overnight oats with chia seeds, fresh berries, and a drizzle of honey 🌰🍓🍯',
        ],
        lunch: [
          'Grilled chicken thigh with a side of roasted sweet potatoes and a kale salad 🐔🍠🥗',
          'Tuna steak with quinoa and roasted vegetables 🐟🌾🥦',
        ],
        dinner: [
          'Beef stir-fry with mixed vegetables and brown rice 🥩🍚🥦',
          'Baked cod with farro and a side of steamed green beans 🐟🍚🥗',
        ],
      };
    case 3:
      return {
        breakfast: [
          'Scrambled eggs with avocado, cherry tomatoes, and a slice of whole grain toast 🍳🥑🍅🍞',
          'Protein-packed chia pudding with almond milk, mixed berries, and a sprinkle of nuts 🍓🥥🥜',
        ],
        lunch: [
          'Quinoa and black bean bowl with grilled chicken, roasted sweet potatoes, and a side of spinach 🌾🌽🍗🥗',
          'Chicken and avocado wrap with a side of mixed greens and a light vinaigrette 🥗🥑🌯',
        ],
        dinner: [
          'Grilled shrimp with a side of roasted carrots and a small serving of brown rice 🍤🥕🍚',
          'Stuffed bell peppers with ground turkey, quinoa, and a sprinkle of cheese 🌶️🍗🧀',
        ],
      };
    case 4:
      return {
        breakfast: [
          'Chia seed pudding with coconut milk, topped with fresh mango and a scoop of protein powder 🥭🥥💪',
          'Spinach and mushroom breakfast burrito with a side of fresh fruit 🌯🍄🍎',
        ],
        lunch: [
          'Grilled chicken thigh with quinoa salad, mixed veggies, and a balsamic glaze 🐔🌾🥗🍋',
          'Roasted vegetable and hummus wrap with a side of chickpea salad 🌯🍠🥗',
        ],
        dinner: [
          'Herb-crusted salmon with quinoa and a side of steamed green beans 🐟🍚🥦',
          'Lean beef chili with a side of cornbread and a mixed greens salad 🍲🍞🥗',
        ],
      };
    case 5:
      return {
        breakfast: [
          'Green smoothie with kale, avocado, banana, and a scoop of protein powder 🍃🥑🍌💪',
          'Omelette with mushrooms, bell peppers, and a slice of whole grain toast 🍳🍄🌶️🍞',
        ],
        lunch: [
          'Chicken Caesar salad with whole grain croutons and a side of roasted sweet potato 🥗🍗🍠',
          'Buddha bowl with brown rice, chickpeas, avocado, and roasted vegetables 🍲🥑🌱',
        ],
        dinner: [
          'Baked cod with quinoa, steamed asparagus, and roasted carrots 🐟🍚🥕',
          'Stuffed bell peppers with ground turkey, quinoa, and a side of sautéed spinach 🌶️🍗🌿',
        ],
      };
    case 6:
      return {
        breakfast: [
          'Acai bowl with granola, mixed berries, chia seeds, and a scoop of protein powder 🍇🥣🌰💪',
          'Omelette with spinach, tomatoes, feta cheese, and a slice of whole grain toast 🍳🍅🧀🍞',
        ],
        lunch: [
          'Grilled salmon salad with avocado, cherry tomatoes, and a citrus vinaigrette 🥗🐟🍋',
          'Quinoa and black bean bowl with roasted vegetables and a side of guacamole 🍲🌱🥑',
        ],
        dinner: [
          'Chicken stir-fry with brown rice, mixed vegetables, and a side of steamed edamame 🍗🍚🥦🌱',
          'Vegetable curry with tofu served over cauliflower rice 🍛🥥🌾',
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
