export const getDietRecommendationsForFemaleLegs = (
  phase: number,
): {breakfast: string[]; lunch: string[]; dinner: string[]} => {
  switch (phase) {
    case 1:
      return {
        breakfast: [
          'Steel-cut oats with flaxseeds, chia seeds, and fresh berries 🌾🍓',
          'Greek yogurt with mixed nuts, seeds, and a drizzle of honey 🥜🍯',
        ],
        lunch: [
          'Grilled chicken quinoa bowl with spinach, avocado, and sunflower seeds 🍗🥑🌱',
          'Lentil and vegetable stew with a side of kale salad 🍲🥗',
        ],
        dinner: [
          'Baked salmon with quinoa, roasted Brussels sprouts, and a side of sautéed spinach 🐟🌱',
          'Grilled tofu with brown rice, steamed broccoli, and a side of mixed greens 🍚🥦',
        ],
      };
    case 2:
      return {
        breakfast: [
          'Smoothie bowl with spinach, banana, almond butter, and a sprinkle of hemp seeds 🍌🌱',
          'Egg white omelette with mushrooms, bell peppers, and a side of whole grain toast 🍳🍄',
        ],
        lunch: [
          'Turkey and avocado salad with mixed greens, cherry tomatoes, and pumpkin seeds 🥗🥑',
          'Black bean and quinoa stuffed peppers with a side of steamed asparagus 🥗🌾',
        ],
        dinner: [
          'Grilled chicken with sweet potato mash, sautéed kale, and a side of roasted beets 🍗🍠',
          'Pan-seared cod with brown rice, sautéed green beans, and a side of spinach 🥦🍚',
        ],
      };
    case 3:
      return {
        breakfast: [
          'Overnight oats with almond milk, chia seeds, and a topping of fresh strawberries 🌰🍓',
          'Avocado toast on sprouted grain bread with poached eggs and cherry tomatoes 🥑🍳🍅',
        ],
        lunch: [
          'Grilled shrimp with mixed greens, quinoa, and a citrus vinaigrette 🍤🥗',
          'Baked falafel with a cucumber and tomato salad, served with hummus 🥙🥒🍅',
        ],
        dinner: [
          'Roasted chicken breast with wild rice, sautéed spinach, and roasted carrots 🍗🌾',
          'Stuffed portobello mushrooms with quinoa, black beans, and a side of steamed broccoli 🍄🌱',
        ],
      };
    case 4:
      return {
        breakfast: [
          'Chia pudding with coconut milk, topped with mixed berries and almonds 🥥🍓',
          'Protein pancakes made with oats, banana, and egg whites, served with fresh fruit 🍌🥞',
        ],
        lunch: [
          'Grilled chicken and avocado wrap with a side of kale chips 🌯🥑',
          'Quinoa salad with chickpeas, roasted vegetables, and a tahini dressing 🥗🌾',
        ],
        dinner: [
          'Herb-crusted salmon with roasted sweet potatoes, Brussels sprouts, and a side of mixed greens 🐟🥗',
          'Turkey chili with black beans, served with a side of roasted butternut squash 🍲🍗',
        ],
      };
    case 5:
      return {
        breakfast: [
          'Green smoothie with spinach, kale, avocado, and a scoop of protein powder 🌱🥑',
          'Egg and veggie scramble with bell peppers, onions, and a side of whole grain toast 🍳🌶️',
        ],
        lunch: [
          'Grilled chicken Caesar salad with a light yogurt-based dressing and whole grain croutons 🥗🍗',
          'Buddha bowl with brown rice, chickpeas, roasted veggies, and a tahini drizzle 🍲🌱',
        ],
        dinner: [
          'Baked cod with quinoa, steamed asparagus, and a side of roasted carrots 🐟🍚🥕',
          'Stuffed bell peppers with ground turkey, quinoa, and a side of steamed green beans 🌶️🥗',
        ],
      };
    case 6:
      return {
        breakfast: [
          'Acai bowl with mixed berries, granola, and a sprinkle of chia seeds 🍇🥣',
          'Omelette with spinach, tomatoes, and feta cheese, served with a side of whole grain toast 🍳🍅',
        ],
        lunch: [
          'Grilled salmon salad with mixed greens, avocado, and a citrus dressing 🥗🐟',
          'Quinoa and black bean bowl with roasted sweet potatoes, kale, and a lime-cilantro dressing 🍲🌱',
        ],
        dinner: [
          'Chicken stir-fry with brown rice, broccoli, and bell peppers 🍗🍚🥦',
          'Vegetable curry with tofu, served over cauliflower rice 🍛🥥',
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

export const getDietRecommendationsForMaleLegs = (
  phase: number,
): {breakfast: string[]; lunch: string[]; dinner: string[]} => {
  switch (phase) {
    case 1:
      return {
        breakfast: [
          'Oatmeal with protein powder, chia seeds, and blueberries 🍇💪',
          'Greek yogurt with walnuts, almonds, and a drizzle of honey 🥜🍯',
        ],
        lunch: [
          'Grilled chicken breast with brown rice, broccoli, and avocado 🍗🥑',
          'Beef and quinoa bowl with spinach, sunflower seeds, and roasted vegetables 🥗🌾',
        ],
        dinner: [
          'Baked salmon with sweet potatoes, steamed green beans, and a side of kale 🥗🐟',
          'Grilled steak with roasted Brussels sprouts, quinoa, and a side of sautéed spinach 🥩🌱',
        ],
      };
    case 2:
      return {
        breakfast: [
          'Scrambled eggs with spinach, tomatoes, and a side of whole grain toast 🍳🍅',
          'Smoothie with whey protein, banana, spinach, and almond butter 🍌🌱',
        ],
        lunch: [
          'Turkey wrap with avocado, mixed greens, and a side of sweet potato fries 🌯🥑',
          'Grilled chicken Caesar salad with whole grain croutons and a light dressing 🥗🍗',
        ],
        dinner: [
          'Grilled shrimp with brown rice, asparagus, and a side of roasted carrots 🍤🥕',
          'Baked cod with quinoa, steamed broccoli, and a side of mixed greens 🥗🐟',
        ],
      };
    case 3:
      return {
        breakfast: [
          'Protein pancakes with oats, banana, and a scoop of protein powder 🍌🥞',
          'Omelette with bell peppers, onions, and a side of whole grain toast 🍳🌶️',
        ],
        lunch: [
          'Grilled chicken with wild rice, spinach, and a citrus vinaigrette 🍗🌾',
          'Turkey and avocado salad with a side of quinoa and roasted vegetables 🥗🥑',
        ],
        dinner: [
          'Roasted chicken breast with sweet potato mash and sautéed kale 🍗🍠',
          'Stuffed peppers with ground beef, quinoa, and a side of green beans 🌶️🥦',
        ],
      };
    case 4:
      return {
        breakfast: [
          'Chia pudding with almond milk, topped with mixed berries and walnuts 🥥🍓',
          'Smoothie bowl with spinach, banana, peanut butter, and a sprinkle of granola 🍌🌱',
        ],
        lunch: [
          'Grilled steak with quinoa, roasted Brussels sprouts, and a side of kale 🥩🌾',
          'Buddha bowl with brown rice, grilled chicken, roasted vegetables, and a tahini drizzle 🍗🥗',
        ],
        dinner: [
          'Herb-crusted salmon with sweet potatoes, steamed broccoli, and a side of spinach 🥗🐟',
          'Beef stir-fry with brown rice, bell peppers, and a side of mixed greens 🍛🥦',
        ],
      };
    case 5:
      return {
        breakfast: [
          'Green smoothie with spinach, kale, avocado, and a scoop of protein powder 🥑💪',
          'Egg and veggie scramble with whole grain toast and a side of mixed fruit 🍳🍇',
        ],
        lunch: [
          'Grilled chicken wrap with avocado, spinach, and a side of quinoa salad 🌯🥑',
          'Buddha bowl with brown rice, roasted vegetables, and a grilled steak topper 🍲🥩',
        ],
        dinner: [
          'Baked cod with sweet potatoes, roasted carrots, and a side of sautéed kale 🥗🐟',
          'Stuffed peppers with ground turkey, quinoa, and a side of steamed asparagus 🌶️🥦',
        ],
      };
    case 6:
      return {
        breakfast: [
          'Protein shake with whey protein, spinach, banana, and almond butter 🍌💪',
          'Omelette with spinach, feta cheese, and a side of whole grain toast 🍳🌱',
        ],
        lunch: [
          'Grilled salmon salad with mixed greens, avocado, and a lemon dressing 🥗🐟',
          'Quinoa and black bean bowl with roasted sweet potatoes and a side of kale 🥗🌾',
        ],
        dinner: [
          'Chicken stir-fry with brown rice, broccoli, and bell peppers 🍛🍗',
          'Grilled steak with quinoa, roasted Brussels sprouts, and a side of spinach 🥩🌾',
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
