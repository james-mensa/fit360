export const getDietRecommendations = (
  phase: number,
): {breakfast: string[]; lunch: string[]; dinner: string[]} => {
  switch (phase) {
    case 1:
      return {
        breakfast: [
          'Protein smoothie with spinach, banana, almond milk, and a tablespoon of chia seeds 🍌🍹🌿🌰',
          'Scrambled eggs with avocado, cherry tomatoes, and a slice of whole grain toast 🍳🥑🍅🍞',
        ],
        lunch: [
          'Grilled chicken breast with a side of quinoa, steamed green beans, and a mixed greens salad 🐔🍚🥗🌱',
          'Turkey and hummus wrap with a side of roasted sweet potatoes 🌯🥙🍠',
        ],
        dinner: [
          'Baked salmon with a side of brown rice and steamed broccoli 🐟🍚🥦',
          'Stir-fried tofu with mixed vegetables and a small serving of quinoa 🍚🍜🥦',
        ],
      };
    case 2:
      return {
        breakfast: [
          'Overnight oats with chia seeds, fresh berries, a scoop of protein powder, and a drizzle of almond butter 🌰🍓🥜',
          'Egg white omelette with spinach, mushrooms, and a slice of whole grain toast 🍳🌿🍄🍞',
        ],
        lunch: [
          'Grilled chicken breast with a side of roasted vegetables and quinoa 🐔🥦🌾',
          'Tuna salad with mixed greens, avocado, and a lemon vinaigrette 🐟🥗🥑🍋',
        ],
        dinner: [
          'Lean beef stir-fry with mixed vegetables and a side of brown rice 🥩🥦🍚',
          'Baked cod with a side of farro and a small serving of steamed asparagus 🐟🍚🥦',
        ],
      };
    case 3:
      return {
        breakfast: [
          'Greek yogurt with fresh berries, a handful of walnuts, and a sprinkle of granola 🍦🍓🥜🌰',
          'Protein-packed chia pudding with almond milk and a side of fruit 🍓🥥🍇',
        ],
        lunch: [
          'Quinoa bowl with black beans, grilled chicken, roasted sweet potatoes, and kale 🌾🌽🍗🥗',
          'Chicken and avocado wrap with a side of mixed greens and a light vinaigrette 🥗🥑🌯',
        ],
        dinner: [
          'Grilled shrimp with a side of roasted carrots and a small portion of brown rice 🍤🥕🍚',
          'Stuffed bell peppers with ground turkey, quinoa, and a sprinkle of cheese 🌶️🍗🧀',
        ],
      };
    case 4:
      return {
        breakfast: [
          'Chia seed pudding with coconut milk, topped with fresh mango and a scoop of protein powder 🥭🥥💪',
          'Spinach and feta omelette with a slice of whole grain toast 🍳🌿🧀🍞',
        ],
        lunch: [
          'Grilled chicken breast with a side of quinoa salad, mixed veggies, and a balsamic glaze 🐔🌾🥗🍋',
          'Roasted vegetable and hummus wrap with a side of chickpea salad 🌯🍠🥗',
        ],
        dinner: [
          'Herb-crusted salmon with a side of quinoa and roasted Brussels sprouts 🐟🍚🥦',
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
          'Buddha bowl with brown rice, chickpeas, avocado, and a variety of roasted vegetables 🍲🥑🌱',
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
