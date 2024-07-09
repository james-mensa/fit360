import {VectorIcons} from '@common/VectorIcons';
import {Palette} from '@styles/BaseColor';
import React, {useEffect, useState} from 'react';

import {Platform, StyleSheet, TextInput, View} from 'react-native';
import {Label, LabelVariant} from './label';

interface InputProps {
  label?: string;
  onChange?: (_value: number) => void;
  value?: number;
}
export const NumberInput: React.FC<InputProps> = ({
  label,
  onChange,
  value = 15,
}) => {
  const [state, setState] = useState<number>(value);

  const handleMinus = () => {
    if (state > 0) {
      setState(state - 1);
      onChange && onChange(state - 1);
    }
  };
  const handlePlus = () => {
    setState(state + 1);
    onChange && onChange(state + 1);
  };
  const handleState = (_value: string) => {
    if (_value.trim() === '') {
      setState(0);
      onChange && onChange(0);
    } else if (parseInt(_value, 10) < 90) {
      setState(parseInt(_value, 10));
      onChange && onChange(parseInt(_value, 10));
    }
  };
  useEffect(() => {
    if (value) {
      setState(value);
    }
  }, [value]);

  return (
    <View style={styles.container}>
      {label && (
        <View style={styles.label}>
          <Label variant={LabelVariant.Sub3.TInterface} title={label} />
        </View>
      )}

      <View style={styles.input_layout}>
        <View style={styles.leftContainer}>
          {VectorIcons.Minus({onPress: handleMinus})}
        </View>

        <TextInput
          value={state.toString()}
          style={styles.input}
          onChangeText={handleState}
          keyboardType="numeric"
        />
        <View style={styles.rightContainer}>
          {VectorIcons.Plus({onPress: handlePlus})}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    height: 40,
    backgroundColor: Palette.background.light[200],
    gap: 10,
  },

  input_layout: {
    width: 150,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderRadius: 40,
    height: 40,
  },

  label: {
    backgroundColor: Palette.background.light[300],
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,

    height: 40,
  },
  leftContainer: {},
  rightContainer: {},
  input: {
    backgroundColor: Palette.background.light[300],
    width: 50,
    height: 50,
    borderRadius: 30,
    position: 'absolute',
    left: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: Palette.background.dark[200],
    fontWeight: '700',
    fontSize: 16,
    ...Platform.select({
      ios: {
        shadowColor: Palette.background.light[500],
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 30,
        shadowColor: Palette.background.light[500],
      },
    }),
  },
});
