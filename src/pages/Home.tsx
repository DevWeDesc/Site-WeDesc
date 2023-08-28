import { About } from ".././components/About/About";
import { Cases } from ".././components/Cases/Cases";
import { Coments } from ".././components/Coments/Coments";
import { DescriptionCarePlans } from ".././components/DescriptionCarePlans/DescriptionCarePlans";
import { Header } from ".././components/Header/Header";
import { SubHeader } from ".././components/SubHeader/SubHeader";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { Partners } from "../components/Partners/Partners";

function Home() {
  return (
    <div>
      <Header />
      <SubHeader />
      <About />
      <DescriptionCarePlans />
      <Cases />
      <Coments />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
