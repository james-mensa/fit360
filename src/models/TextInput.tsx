import {UIResponsive} from '@layout/ResponsiveUi';
import {Palette} from '@styles/BaseColor';
import React from 'react';
import {StyleSheet, View, TextInput, KeyboardAvoidingView} from 'react-native';
import {Label, LabelVariant} from './label';

interface InputProps {
  placeholder?: string;
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}
const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      {label && (
        <View style={styles.label}>
          <Label variant={LabelVariant.Sub3.TInterface} title={label} />
        </View>
      )}
      <KeyboardAvoidingView style={styles.textInput}>
        <TextInput
          editable
          numberOfLines={4}
          maxLength={40}
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
        />
      </KeyboardAvoidingView>
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  container: {
    width: UIResponsive.Body.width - 50,
    gap: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Palette.background.light[300],
    overflow: 'hidden',
    borderRadius: 15,
  },
  label: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: Palette.background.light[300],
    height: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textInput: {
    height: 40,
    width: 200,
  },
});
