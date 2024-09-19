import {UIResponsive} from '@layout/ResponsiveUi';
import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Palette} from '@styles/BaseColor';
import {AppStyles} from '@common/common-ui';
import {Icons} from '@assets/register';

import Animated from 'react-native-reanimated';
import {Label, LabelVariant} from '@models/label';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {VectorIcons} from '@common/VectorIcons';
interface PlanProps {
  title: string;
  items: string[];
  index: number;
}

const usePrevNext = (items: string[], currentItem: string) => {
  const currentIndex = items.indexOf(currentItem);
  const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;

  return {
    prev: items[prevIndex],
    next: items[nextIndex],
  };
};

export const MealCard: React.FC<PlanProps> = ({title, items, index}) => {
  const card_color = Palette.cardColors[index];

  const [currentItem, setCurrentItem] = useState(items[0]);
  useEffect(() => {
    setCurrentItem(items[0]);
  }, [items]);
  const {prev, next} = usePrevNext(items, currentItem);

  const handlePrevClick = () => {
    setCurrentItem(prev);
  };

  const handleNextClick = () => {
    setCurrentItem(next);
  };

  const styles = cardStyles(index);
  const card_styles = {
    ...styles.container,
    backgroundColor: card_color,
  };

  return (
    <Animated.View style={styles.card}>
      <ImageBackground
        source={Icons.card_background}
        resizeMode="cover"
        style={styles.container_image}>
        <View style={styles.container_image_cover}>
          <View style={card_styles}>
            <View style={styles.meal}>
              <Label
                variant={LabelVariant.Sub1.TInterface}
                title={currentItem}
              />
              <View style={styles.actionContainer}>
                <ActionButton onPress={handlePrevClick} index={index}>
                  {VectorIcons.secondaryPrevButton('#eadcfc')}
                </ActionButton>
                <ActionButton onPress={handleNextClick} index={index}>
                  {VectorIcons.secondaryNextButton('#eadcfc')}
                </ActionButton>
              </View>
            </View>
          </View>
          <View style={styles.placeHolderContainer}>
            <View style={styles.placeholder}>
              <Label
                title={title}
                variant={LabelVariant.Sub4.Bold}
                color="white"
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

const ActionButton = ({
  onPress,
  children,
  index,
}: {
  onPress: () => void;
  children: React.ReactElement;
  index: number;
}) => {
  const styles = cardStyles(index);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>{children}</View>
      </View>
    </TouchableOpacity>
  );
};

const cardStyles = (colorIndex: number) => {
  return StyleSheet.create({
    card: {
      width: UIResponsive.Card.medium.width,
    },
    container_image: {
      display: 'flex',
      height: UIResponsive.Card.medium.height,
      width: UIResponsive.Card.medium.width - 6,
    },
    container_image_cover: {
      backgroundColor: Palette.background.light[130],
    },

    meal: {
      paddingHorizontal: 10,
      paddingRight: 20,
      paddingVertical: 3,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      borderRadius: 10,
      borderTopRightRadius: 1,
      borderBottomLeftRadius: 1,
      width: '88%',
      height: 120,
      gap: 8,
    },
    buttonContainer: {
      backgroundColor: '#9698b5',
      borderRadius: 50,
    },
    button: {
      padding: 4,
      backgroundColor: Palette.cardColors[colorIndex],
      borderRadius: 50,
    },
    container: {
      display: 'flex',
      height: UIResponsive.Card.medium.height,
      width: UIResponsive.Card.medium.width - 6,
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      overflow: 'hidden',
    },
    content: {
      padding: 10,
      width: UIResponsive.Card.medium.width - 130,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    },

    detailContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',

      gap: 5,
    },
    dropHover: {
      ...AppStyles.shadow,
    },
    tool: {
      height: 27,
      width: 27,
      borderRadius: 10,
      backgroundColor: Palette.background.light[120],
      justifyContent: 'center',
      alignItems: 'center',
    },
    toolImg: {
      resizeMode: 'center',
      width: 25,
    },
    calenderImg: {
      resizeMode: 'contain',
      width: 25,
    },
    image: {
      height: UIResponsive.Card.medium.height,
      width: 130,
      resizeMode: 'center',
    },
    label_container: {
      display: 'flex',
      flexDirection: 'row',
      gap: 5,
    },
    placeHolderContainer: {
      backgroundColor: '#d2f5fc',
      position: 'absolute',
      right: 0,
      marginRight: -15,
      marginTop: -10,
      zIndex: 100,
      borderRadius: 50,
      width: 70,
      height: 70,
      borderColor: '#FFFFFF',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    placeholder: {
      width: 70,
      height: 70,
      backgroundColor: Palette.cardColors[colorIndex],
      borderRadius: 50,

      borderColor: '#FFFFFF',
      borderWidth: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  });
};
