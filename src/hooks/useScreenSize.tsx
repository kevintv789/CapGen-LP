import { useMediaQuery } from "react-responsive";

const useScreenSize = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1225px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1224 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return { isDesktopOrLaptop, isBigScreen, isTablet, isMobile, isPortrait };
};

export default useScreenSize;
