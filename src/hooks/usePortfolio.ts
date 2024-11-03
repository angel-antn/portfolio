import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { firestore, storage } from "../firebase/firebase";
import { usePortfolioStore } from "../store/portfolioStore";
import { toast } from "react-toastify";
import { Experience } from "../interfaces/Experience";
import { getDownloadURL, ref } from "firebase/storage";

export const usePortfolio = () => {
  const { setPortfolioData } = usePortfolioStore();

  const getImageFromStorage = async (location: string) => {
    const imageUrl = await getDownloadURL(ref(storage, location));
    return await imageUrl;
  };

  const initStore = async () => {
    const profile: { [id: string]: unknown } = {};
    const experience: { [id: string]: Experience } = {};

    //profile
    const profileQuerySnapshot = await getDocs(
      collection(firestore, "Profile")
    );
    if (profileQuerySnapshot.size == 0) {
      toast.error("An unexpected error has occurred", {
        theme: "dark",
        position: "top-right",
        draggable: true,
        closeButton: true,
      });
      throw new Error();
    }
    profileQuerySnapshot.forEach((doc) => (profile[doc.id] = doc.data()));

    //experience
    const experienceQuery = query(
      collection(firestore, "Experience"),
      where("isVisible", "==", true),
      orderBy("startDate", "asc")
    );
    const experienceQuerySnapshot = await getDocs(experienceQuery);
    if (experienceQuerySnapshot.size == 0) {
      toast.error("An unexpected error has occurred", {
        theme: "dark",
        position: "top-right",
        draggable: true,
        closeButton: true,
      });
      throw new Error();
    }
    experienceQuerySnapshot.forEach(
      (doc) => (experience[doc.id] = doc.data() as Experience)
    );

    setPortfolioData(profile, experience);
  };

  return { initStore, getImageFromStorage };
};
