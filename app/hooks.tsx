import { useState } from "react";
import { getMessageValue } from "./utils";

export const useImc = () => {
  const [genderValue, setGenderValue] = useState<string>("male");
  const [imcValue, setImcValue] = useState<number>(0);
  const [messageValue, setMessageValue] = useState<string>("Message result");
  const [heightValue, setHeightValue] = useState<number>(160);
  const [weightValue, setWeightValue] = useState<number>(50);

  const calculate = () => {
    if (heightValue == 0 || weightValue == 0) {
      setImcValue(0);
      setMessageValue("-error-");
    } else {
      var heightValueMts = heightValue / 100;
      var result = weightValue / (heightValueMts * heightValueMts);

      setImcValue(result);
      setMessageValue(getMessageValue(result, genderValue));
    }
  };

  const newHeightValue = (value: number) => {
    setHeightValue(value);
  };

  const newWeightValue = (value: number) => {
    setWeightValue(value);
  };

  return {
    genderValue,
    setGenderValue,

    imcValue,
    setImcValue,

    messageValue,
    setMessageValue,

    heightValue,
    setHeightValue,

    weightValue,
    setWeightValue,

    calculate,
    newHeightValue,
    newWeightValue,
  };
};
