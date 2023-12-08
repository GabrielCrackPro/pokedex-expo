import { useEffect, useState } from "react";
import { getValue, setValue } from "../utils/storage";
import { HomeCard, defaultHomeCards } from "../constants/homeCards";

export const useHomeCards = () => {
  const [homeCards, setHomeCards] = useState(defaultHomeCards);

  const toggleVisible = (homeCard: HomeCard) => {
    const updatedHomeCards = homeCards.map((card) =>
      card.name === homeCard.name ? { ...card, visible: !card.visible } : card,
    );
    setHomeCards(updatedHomeCards);
  };

  useEffect(() => {
    const loadHomeCards = async () => {
      try {
        const storedHomeCards = await getValue("homeCards");
        if (storedHomeCards) {
          setHomeCards(JSON.parse(storedHomeCards) || defaultHomeCards);
        }
      } catch (error) {
        console.log("Error loading home cards", error);
      }
    };
    loadHomeCards();
  }, []);

  useEffect(() => {
    setValue("homeCards", JSON.stringify(homeCards));
  }, [homeCards]);

  return { homeCards, toggleVisible };
};
