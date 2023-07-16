import Groups from "./Groups";
import Modules from "./Modules";
import { useState } from "react";

function Home({ isModules }) {
  // Initialisation --------------------------------------
  const [isModulesView, setIsModulesView] = useState(true);
  console.log(isModulesView);

  // View --------------------------------------

  return (
    <>
      {isModulesView ? (
        <Modules setIsModulesView={setIsModulesView}></Modules>
      ) : (
        <Groups></Groups>
      )}
    </>
  );
}

export default Home;
