import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [inputGoalText, setInputGoalText] = useState('');
  const [goalsList, setGoalsList] = useState([]);

  const goalInputHandler = (str) => {
    setInputGoalText(str);
  }

  const onPressGoalButton = () => {
    //add goal here in the state list..
    setGoalsList((prevGoals) => [...prevGoals, { text: inputGoalText, id: Math.random().toString() }]);
    setInputGoalText('');
  }


  return (
    <View style={styles.bodyContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputStyle} placeholder='Enter your goal here...' value={inputGoalText} onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={onPressGoalButton} />
      </View>
      <View style={styles.goalListContainer}>
        <Text style={styles.headingStyle}>List of goals...</Text>
        <FlatList
          keyExtractor={(item, index) => {
            return item.id;
          }}

          data={goalsList} renderItem={(items) => {
            return <Text style={styles.goalTextStyle} >{items.item.text}</Text>
          }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    paddingTop: 50,
    backgroundColor: 'black',
    paddingHorizontal: 30,
    flex: 1,
    flexDirection: 'column',
  },
  inputContainer: {
    // borderBottomWidth: 1,
    // borderColor: 'grey',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  inputStyle: {
    width: '70%',
    borderColor: 'pink',
    borderWidth: 3,
    backgroundColor: 'pink',
    padding: 4,
    alignItems: 'center',
    alignContent: 'center',
    marginRight: 10,
  },
  headingStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: 'grey'
  },
  goalListContainer: {
    flex: 5,
    alignItems: "stretch"
  },
  goalTextStyle: {
    backgroundColor: 'purple',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 8,
    borderRadius: 6,
    textAlign: 'center'
  }
}
);