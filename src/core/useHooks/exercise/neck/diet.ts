export const getDietRecommendationsForFemale = (
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
          'Grilled chicken breast with a side of quinoa and steamed broccoli 🍗🍚🥦',
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
          'Chicken and vegetable stir-fry with a side of brown rice 🍗🍚🥦',
        ],
        dinner: [
          'Grilled shrimp with a side of wild rice and roasted asparagus 🍤🍚🌿',
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
          'Chicken and avocado salad with a side of quinoa chips 🥗🥑',
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
          'Baked cod with a side of quinoa and steamed asparagus 🐟🍚🥕',
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
