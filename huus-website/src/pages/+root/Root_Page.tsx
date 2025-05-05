import { Header } from "./-header/Header_Structural";
import { Main } from "./-main/Main_Structural";
import { Footer } from "./-footer/Footer_Structural";

function Root() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Root;

//GUTTER PADDING CLASSES TO USE FOR CONSISTENCY
//px-6 sm:px-10 lg:px-14 xl:px-20
