import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { nerds } from "../nerds/nerds";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Slider } from "@miblanchard/react-native-slider";

export function ProfilePage() {
  const [selectedGender, setSelectedGender] = React.useState();
  const [selectedAge, setSelectedAge] = React.useState();
  const [date, setDate] = React.useState(new Date());
  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShowDatePicker(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image style={styles.backgroundHeader} />

      <View style={styles.avatarContainer}>
        <View style={styles.imageIconContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: nerds[0]?.imageUrl }}
            resizeMode="cover"
          />

          <TouchableOpacity style={styles.editIconContainer}>
            <View style={styles.editIconBackground}>
              <AntDesign name="edit" size={24} color="#4B164C" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={[styles.row, styles.birthdayContainer]}>
          <Text style={styles.label}>My birthday</Text>
          <View style={styles.rightContainer}>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <FontAwesome name="calendar" size={24} color="black" />
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode={"date"}
                display="default"
                onChange={onChange}
              />
            )}
            <Text>{date.toLocaleDateString()}</Text>
          </View>
        </View>

        <View style={[styles.row, styles.genderContainer]}>
          <Text style={styles.label}>My gender</Text>
          <View style={styles.genderPickerContainer}>
            <Picker
              selectedValue={selectedGender}
              onValueChange={(itemValue) => setSelectedGender(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Homem" value="Homem" />
              <Picker.Item label="Mulher" value="Mulher" />
              <Picker.Item label="Outro" value="Outro" />
            </Picker>
          </View>
        </View>

        <Text style={styles.label}>I am interested in</Text>

        <Slider
          animateTransitions
          maximumTrackTintColor="#d3d3d3"
          maximumValue={20}
          minimumTrackTintColor="#1fb28a"
          minimumValue={4}
          step={2}
          thumbTintColor="#1a9274"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B164C",
  },
  backgroundHeader: {
    width: "100%",
    height: 50,
  },
  card: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 55,
    paddingHorizontal: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -35,
  },
  label: {
    fontSize: 16,
    color: "#000",
    marginBottom: 10,
  },
  avatarContainer: {
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  },
  imageIconContainer: {
    position: "relative",
  },
  avatar: {
    width: 177,
    height: 215,
    borderRadius: 10,
    marginBottom: -50,
  },
  editIconContainer: {
    position: "absolute",
    bottom: -40,
    right: 10,
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
  editIconBackground: {
    backgroundColor: "#FFF",
    width: 32,
    height: 32,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
  },
  birthdayContainer: {
    alignItems: "center",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 154,
    height: 56,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  genderContainer: {
    alignItems: "center",
  },
  genderPickerContainer: {
    width: 154,
    height: 56,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
