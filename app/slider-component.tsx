import { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import Slider from "@react-native-community/slider";
import styles from "./styles";
import { colors } from "./theme";

export default function Component(props: {
  newValue: Function;
  label: string;
  value: number;
  title: string;
}) {
  const [sliderValue, setSliderValue] = useState<number>(props.value);

  return (
    <View style={styles.componentView}>
      <Text style={styles.componentTitle}>{props.title}</Text>
      <Text style={styles.componentValue}>{sliderValue.toFixed(2)}</Text>
      <Text style={styles.componentLabel}>{props.label}</Text>
      <Slider
        value={props.value}
        minimumValue={0}
        maximumValue={250}
        step={1}
        onValueChange={(value) => {
          props.newValue(value);
          setSliderValue(value);
        }}
        thumbTintColor={colors.textSecondary}
        minimumTrackTintColor={colors.primary}
        style={[{ marginHorizontal: 10, marginTop: 5 }]}
      />
    </View>
  );
}
