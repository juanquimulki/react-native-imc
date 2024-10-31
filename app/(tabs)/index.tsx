import { Text, View, Pressable } from "react-native";
import Component from "../slider-component";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "../styles";
import { colors } from "../theme";
import { useImc } from "../hooks";

export default function Index() {
  const {
    genderValue,
    setGenderValue,

    imcValue,
    messageValue,
    heightValue,
    weightValue,

    calculate,
    newHeightValue,
    newWeightValue,
  } = useImc();

  return (
    <View style={styles.container}>
      <View style={styles.messageView}>
        <Text style={styles.imcLabel}>IMC {imcValue.toFixed(2)}</Text>
        <Text style={styles.imcText}>{messageValue}</Text>
      </View>

      <View style={styles.componentsView}>
        <Component
          value={heightValue}
          title="HEIGHT"
          label={"cm"}
          newValue={newHeightValue}
        ></Component>
        <Component
          value={weightValue}
          title="WEIGHT"
          label={"kg"}
          newValue={newWeightValue}
        ></Component>
      </View>

      <View style={styles.genderContainer}>
        <View style={styles.genderView}>
          <Text style={styles.genderLabel}>Male</Text>
          <View style={styles.genderValue}>
            <FontAwesome
              name="male"
              color="white"
              size={genderValue == "male" ? 100 : 50}
              onPress={() => setGenderValue("male")}
              style={[{ marginTop: -30 }]}
            />
          </View>
        </View>
        <View style={styles.genderView}>
          <Text style={styles.genderLabel}>Female</Text>
          <View style={styles.genderValue}>
            <FontAwesome
              name="female"
              color="white"
              size={genderValue == "female" ? 100 : 50}
              onPress={() => setGenderValue("female")}
              style={[{ marginTop: -30 }]}
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonView}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? colors.secondary : colors.primary },
            styles.buttonStyle,
          ]}
          onPress={() => {
            calculate();
          }}
        >
          <Text style={styles.buttonText}>CALCULATE</Text>
        </Pressable>
      </View>
    </View>
  );
}
