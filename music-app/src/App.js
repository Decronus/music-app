import { AppRoutes } from "./routes";
import GlobalStyles from "./components/styled-components/global-styles";

export function App() {
  return (
    <>
      <AppRoutes />;
      <GlobalStyles />;
    </>
  );
}

export default App;
