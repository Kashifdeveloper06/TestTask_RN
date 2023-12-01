import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

const Counter = ({initialValue, onIncrement, onDecrement}) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount(count + 1);
    if (onIncrement) {
      onIncrement(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      if (onDecrement) {
        onDecrement(count - 1);
      }
    }
  };

  return (
    <View>
      <View style={styles.totalProduct}>
        <TouchableOpacity style={styles.increment} onPress={handleDecrement}>
          <Text style={{fontSize: 30}}>{`-`}</Text>
        </TouchableOpacity>
        <Text style={{paddingHorizontal: 10}}>{`${count}`}</Text>
        <TouchableOpacity style={styles.increment} onPress={handleIncrement}>
          <Text style={{fontSize: 30}}>{'+'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  totalProduct: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  increment: {
    backgroundColor: '#F8F9FB',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
  },
});
