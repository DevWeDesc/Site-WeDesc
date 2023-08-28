import { About } from "./components/About/About";
import { Cases } from "./components/Cases/Cases";
import { DescriptionCarePlans } from "./components/DescriptionCarePlans/DescriptionCarePlans";
import { Header } from "./components/Header/Header";
import { SubHeader } from "./components/SubHeader/SubHeader";

function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <About />
      <DescriptionCarePlans />
      <Cases />
    </div>
  );
}

export default App;
