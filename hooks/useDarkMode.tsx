import { useEffect, useState } from "react";
import { getValue, setValue } from "../utils/storage";

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleDark = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    setValue("theme", JSON.stringify(newIsDark));
  };

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const dark = await getValue("theme");
        setIsDark(JSON.parse(dark || ""));
      } catch (error) {
        console.log("Error loading theme", error);
      }
    };
    loadTheme();
  }, []);

  return { isDark, toggleDark };
};
