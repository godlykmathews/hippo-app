import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, SegmentedButtons, TextInput } from "react-native-paper";

const FREQUENCIES = ["daily", "weekly", "monthly"];

export default function AddHabitPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("daily");

  const handleAddHabit = () => {
    if (!title.trim()) {
      // Add validation
      return;
    }
    // Add habit logic here
    console.log({ title, description, frequency });
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Title"
        mode="outlined"
        style={styles.inputs}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        label="Description"
        mode="outlined"
        style={styles.inputsdes}
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <View style={styles.freqcon}>
        <SegmentedButtons
          buttons={FREQUENCIES.map((freq) => ({
            value: freq,
            label: freq.charAt(0).toUpperCase() + freq.slice(1),
          }))}
          value={frequency}
          onValueChange={setFrequency}
        />
      </View>
      <Button mode="contained" onPress={handleAddHabit}>
        Add Habit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
    gap: 16,
  },
  inputs: {
    marginBottom: 12,
    backgroundColor: "#f5f5f6",
  },
  inputsdes: {
    height: 100,
    marginBottom: 12,
    backgroundColor: "#f5f5f6",
  },
  freqcon: {
    marginVertical: 8,
  },
});
