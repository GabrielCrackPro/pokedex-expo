import { useEffect, useState } from "react";
import { getValue, setValue } from "../utils/storage";
import { showSuccessAlert } from "../utils/alerts";

export const useSettings = () => {
  const [listLimit, setListLimit] = useState(10);

  const updateListLimit = (limit: number) => {
    setListLimit(limit)
    setValue("list-limit", JSON.stringify(limit));
    showSuccessAlert(`List limit updated to ${listLimit}`)
  };

  useEffect(() => {
    const loadListLimit = async () => {
      try {
        const listLimit = await getValue("list-limit");
        setListLimit(Number(listLimit))
      } catch (error) {
        console.log("Error loading list-limit", error);
      }
    };
    loadListLimit();
  }, []);

  return { listLimit,  updateListLimit };
};
