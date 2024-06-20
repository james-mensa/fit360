import {GapHorizontal} from '@models/gap';
import {Label, LabelVarient} from '@models/label';
import {ScrollViewHorizontal} from '@models/ScrollView';
import {Pallete} from '@styles/BaseColor';
import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

type PageView = {
  active?: boolean;
  label: string;
  component: React.JSX.Element;
};

export interface TabProps {
  items: PageView[];
}

export const TabNav: React.FC<TabProps> = ({items}) => {
  const initialActiveIndex = items.findIndex(item => item.active);
  const [activePage, setActivePage] = useState<number>(
    initialActiveIndex !== -1 ? initialActiveIndex : 0,
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabcontainer}>
        <ScrollViewHorizontal>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                onPress={() => setActivePage(index)}
                style={[
                  styles.item,
                  activePage === index && styles.activeItem,
                ]}>
                <Label
                  varient={LabelVarient.Sub2.TInterface}
                  color={
                    activePage === index
                      ? Pallete.text.light[300]
                      : Pallete.text.dark[400]
                  }
                  title={item.label}
                />
              </TouchableOpacity>
              {index !== items.length - 1 && <GapHorizontal w={10} />}
            </React.Fragment>
          ))}
        </ScrollViewHorizontal>
      </View>
      <View style={styles.pageContainer}>{items[activePage]?.component}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabcontainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  item: {
    borderWidth: 1,
    borderColor: Pallete.background.light[300],
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  activeItem: {
    backgroundColor: Pallete.background.dark[400],
  },
  pageContainer: {
    flex: 1,
    padding: 10,
  },
});
