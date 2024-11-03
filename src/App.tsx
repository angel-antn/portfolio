import { useEffect } from "react";
import { ExperienceTimeLine } from "./components/ExperienceTimeLine";
import { Header } from "./components/Header";
import { HeroParallaxBanner } from "./components/HeroParallaxBanner";
import { Resume } from "./components/Resume";
import { usePortfolio } from "./hooks/usePortfolio";
import { usePortfolioStore } from "./store/portfolioStore";
import { LoadingPage } from "./components/LoadingPage";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Skills } from "./components/Skills";
import { RecentProjects } from "./components/RecentProjects";
import { Contact } from "./components/Contact";

function App() {
  const { initStore } = usePortfolio();
  const { isLoading, loadLocaleFromStorage, locale } = usePortfolioStore();

  useEffect(() => {
    initStore();
    loadLocaleFromStorage();
  }, []);

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingPage />}</AnimatePresence>
      {!isLoading && (
        <>
          <Header />
          <HeroParallaxBanner />
          <div className="mx-auto max-w-[90%] md:max-w-[70%] flex flex-col justify-center items-center">
            <Resume />
            <Skills />
            <ExperienceTimeLine />
            <RecentProjects />
            <Contact />
          </div>
        </>
      )}
    </>
  );
}

export default App;
