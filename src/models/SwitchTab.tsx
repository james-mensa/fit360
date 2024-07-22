import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Label, LabelVariant} from './label';
import {Palette} from '@styles/BaseColor';
import {UIResponsive} from '@layout/ResponsiveUi';

type item = {
  label: string;
  icon: React.ReactNode;
  onPress: () => void;
  id: number;
  component: React.ReactNode;
};
interface TabProps {
  items: item[];
}
export const SwitchTab: React.FC<TabProps> = ({items}) => {
  const [active, setActive] = useState<item>(items[0]);
  const onPress = ({item, onClick}: {item: item; onClick: () => void}) => {
    setActive(item);
    onClick();
  };
  return (
    <View style={styles.layout}>
      <View style={styles.container}>
        {items.map((item, _idex) => {
          return (
            <TouchableOpacity
              key={_idex}
              onPress={() => onPress({item, onClick: item.onPress})}>
              <View
                style={{
                  ...styles.button,
                  backgroundColor:
                    active === item
                      ? Palette.background.dark[100]
                      : Palette.background.light[200],
                }}>
                {active === item && item.icon}
                <Label
                  color={
                    active === item
                      ? Palette.text.light[100]
                      : Palette.text.dark[100]
                  }
                  variant={LabelVariant.Sub4.TInterface}
                  title={item.label}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View>{active.component}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: UIResponsive.FullScreen.width / 1.1,
    backgroundColor: Palette.background.light[200],
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    height: 40,
    gap: 10,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  layout: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
