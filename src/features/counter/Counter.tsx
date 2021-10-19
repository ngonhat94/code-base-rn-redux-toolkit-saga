import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {
  increment,
  decrement,
  selectCount,
  incrementByAmount,
  incrementPending,
} from './counterSlice';

export default () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [amount, setAmount] = React.useState('2');
  const incrementValue = Number(amount);
  return (
    <>
      <Header />
      <View style={styles.countContainer}>
        <Text style={styles.countLabel}>{count.value}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => dispatch(increment())}>
            <Text style={styles.btnLabel}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => dispatch(decrement())}>
            <Text style={styles.btnLabel}>-</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          onChangeText={amount => setAmount(amount)}
          value={amount}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => dispatch(incrementByAmount(incrementValue))}>
          <Text style={{fontSize: 20}}>increment amount</Text>
        </TouchableOpacity>
        {count.status === 'loading' ? <ActivityIndicator /> : null}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => dispatch(incrementPending(incrementValue))}>
          <Text style={{fontSize: 20}}>increment amount async</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  countContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  countLabel: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: 'rgba(112, 76, 182, 0.15)',
    margin: 20,
    paddingHorizontal: 20,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btnLabel: {
    fontSize: 70,
  },
  input: {
    borderWidth: 1,
    width: 50,
    height: 30,
  },
});
