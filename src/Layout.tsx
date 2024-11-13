import { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import useWindowWidth from "./utils/custom-hooks/use-window-width";

function AppLayout() {
  const { isMediumDevice } = useWindowWidth();

  const flexDirection = isMediumDevice ? "flex-col" : "flex-row";
  const mainContentWidth = isMediumDevice ? "w-full" : "main-content-lg-width";

  return (
    <div className={`flex ${flexDirection} w-screen min-h-screen`}>
      <Header isMediumDevice={isMediumDevice} />
      <main className={`${mainContentWidth} p-3 lg:px-10 lg:py-5`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default AppLayout;
