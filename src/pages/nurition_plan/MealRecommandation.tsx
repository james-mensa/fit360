import {getRandomNumbers} from '@common/utils';
import {MealCard} from '@models/cards/MealCard';
import {useFocusEffect} from '@react-navigation/native';

type MealTy = {
  breakfast: string[];
  lunch: string[];
  dinner: string[];
};
interface MealItem {
  type: string;
  meal: MealTy;
}
import {useProvider} from '@store/provider';
import {Palette} from '@styles/BaseColor';
import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
export const MealRecommandation = () => {
  const {plan} = useProvider();
  const [_, setRefresh] = React.useState(false);
  const [items, setItems] = React.useState<MealItem[]>([]);
  const [diet, setDiet] = React.useState<MealTy>({
    breakfast: [],
    lunch: [],
    dinner: [],
  });

  useFocusEffect(
    useCallback(() => {
      setRefresh(prev => !prev);

      plan.forEach(item => {
        const existingItem = items.find(
          savedItem => savedItem.type === item.playlist[0]?.type,
        );

        if (!existingItem) {
          const newItem: MealTy = JSON.parse(item.diet) as MealTy;

          // Updating diet state with unique meals
          setDiet(prevDiet => {
            // Check for duplicates before adding
            const newBreakfast = newItem.breakfast.filter(
              meal => !prevDiet.breakfast.includes(meal),
            );
            const newLunch = newItem.lunch.filter(
              meal => !prevDiet.lunch.includes(meal),
            );
            const newDinner = newItem.dinner.filter(
              meal => !prevDiet.dinner.includes(meal),
            );

            return {
              breakfast: [...(prevDiet?.breakfast ?? []), ...newBreakfast],
              lunch: [...(prevDiet?.lunch ?? []), ...newLunch],
              dinner: [...(prevDiet?.dinner ?? []), ...newDinner],
            };
          });

          setItems(prevItems => [
            ...prevItems,
            {type: item.playlist[0]?.type ?? '', meal: JSON.parse(item.diet)},
          ]);
        }
      });
    }, [plan, items]),
  );

  const cardColorsIndex: number[] = getRandomNumbers();
  return (
    <View style={styles.layout}>
      <MealCard
        title="Breakfast"
        items={diet.breakfast}
        index={cardColorsIndex[0]}
      />
      <MealCard title="Lunch" items={diet.lunch} index={cardColorsIndex[1]} />
      <MealCard title="Dinner" items={diet.dinner} index={cardColorsIndex[2]} />
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: Palette.ColorsFromImage.view1[150],
    borderRadius: 30,
    zIndex: 99,
    overflow: 'visible',
    width: '95%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 15,
    paddingTop: 30,
    padding: 20,
  },
  label: {
    backgroundColor: Palette.ColorsFromImage.view1[250],
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    width: '100%',
  },
  placeholder: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
    borderRadius: 50,
    position: 'absolute',
    right: 0,
    marginRight: -15,
    marginTop: -10,
    zIndex: 100,
  },

  meal: {
    backgroundColor: Palette.ColorsFromImage.view1[120],
    paddingHorizontal: 10,
    paddingRight: 20,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    width: '95%',
    gap: 8,
  },
  dot: {
    width: 7,
    height: 7,
    backgroundColor: Palette.ColorsFromImage.view1[100],
    borderRadius: 5,
    marginLeft: 5,
  },
  layout: {
    gap: 15,
    marginTop: 10,
  },
});
