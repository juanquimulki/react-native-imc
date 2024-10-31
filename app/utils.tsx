export const getMessageValue = (value: number, genderValue: string): string => {
  if (genderValue === "female") {
    if (value < 16.0) return "Severe thinness";
    if (value <= 16.9) return "Moderate thinness";
    if (value <= 18.4) return "Mild thinness";
    if (value <= 24.9) return "Normal weight";
    if (value <= 26.9) return "Upper normal weight";
    if (value <= 29.9) return "Preobesity";
    if (value <= 34.9) return "Mild obesity";
    if (value <= 39.9) return "Medium obesity";
    return "Morbid obesity";
  }

  if (genderValue === "male") {
    if (value < 16.5) return "Severe thinness";
    if (value <= 17.4) return "Moderate thinness";
    if (value <= 18.4) return "Mild thinness";
    if (value <= 24.4) return "Normal weight";
    if (value <= 26.4) return "Upper normal weight";
    if (value <= 29.9) return "Preobesity";
    if (value <= 34.9) return "Mild obesity";
    if (value <= 39.9) return "Medium obesity";
    return "Morbid obesity";
  }

  return "-error-";
};
