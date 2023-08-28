import { About } from ".././components/About/About";
import { Cases } from ".././components/Cases/Cases";
import { Coments } from ".././components/Coments/Coments";
import { DescriptionCarePlans } from ".././components/DescriptionCarePlans/DescriptionCarePlans";
import { Header } from ".././components/Header/Header";
import { SubHeader } from ".././components/SubHeader/SubHeader";

function Home() {
  return (
    <div>
      <Header />
      <SubHeader />
      <About />
      <DescriptionCarePlans />
      <Cases />
      <Coments />
    </div>
  );
}

export default Home;
