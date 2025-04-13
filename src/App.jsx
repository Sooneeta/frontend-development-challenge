import MainLayout from "./layout/MainLayout";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout>
          <HomePage />
        </MainLayout>
      </Suspense>
    </>
  );
}

export default App;
