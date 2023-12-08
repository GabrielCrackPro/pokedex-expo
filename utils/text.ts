import { Formats } from "../constants/formats";

const capitalize = (text: string): string => {
  const [firstChar, ...rest] = text.split("");
  return [firstChar.toUpperCase(), ...rest].join("");
};

const roundToOneDecimal = (value: number): number => {
  return Math.round(value * 10) / 10;
};

const convertUnit = (value: number, from: Formats, to: Formats) => {
  if (from === to) {
    return value;
  }
  const conversionFactors = {
    g: { kg: 0.001, m: 0.001, cm: 1000 },
    hg: { g: 10, kg: 0.1, m: 0.1, cm: 100 },
    kg: { g: 1000, m: 0.001, cm: 1000000 },
    m: { g: 1000, kg: 1000, cm: 100 },
    cm: { g: 0.001, kg: 0.001, m: 0.01 },
    dm: { g: 0.1, hg: 0.01, kg: 0.001, m: 0.1, cm: 10, hm: 0.01 },
  };

  if (from in conversionFactors && to in conversionFactors[from]) {
    const factor = conversionFactors[from][to];
    return roundToOneDecimal(value * factor);
  } else {
    throw new Error("Unsupported unit conversion");
  }
};

const format = (text: string, from: Formats, to: Formats): string => {
  if (from === to) {
    return text;
  }

  const numericValue = parseFloat(text);

  if (!isNaN(numericValue)) {
    const result = convertUnit(numericValue, from, to);
    return `${result} ${to}`;
  } else {
    return "Invalid input";
  }
};

const getPercent = (
  value: string | number | undefined = 0,
  points: number = 2,
): string => {
  if (!value) return "Invalid input";
  return typeof value === "number"
    ? `${((value / 100) * 100).toFixed(points)}%`
    : `${(Number(value) / 100).toFixed(points)}%`;
};

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

const getIdFromUrl = (url: string): string => {
  return url.split("/").filter((s) => s !== "")[5];
};

const formatFlavorText = (text: string): string => {
  return text
    .replace(/\f/g, "\n")
    .replace(/\u00ad\n/g, "")
    .replace(/\u00ad/g, "")
    .replace(/ -\n/g, " - ")
    .replace(/-\n/g, "-")
    .replace(/\n/g, " ");
};

export {
  capitalize,
  format,
  getPercent,
  shuffleArray,
  getIdFromUrl,
  formatFlavorText,
};
