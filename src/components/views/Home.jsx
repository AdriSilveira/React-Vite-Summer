import Groups from "./Groups";
import GroupInfo from "./GroupInfo";
import Modules from "./Modules";
import { useState } from "react";

function Home({ isModules }) {
  // Initialisation --------------------------------------
  const [isModulesView, setIsModulesView] = useState(true);
  console.log(isModulesView);
  const [isGroupView, setIsGroupView] = useState(true);
  console.log(isGroupView);

  // View --------------------------------------

  return (
    <>
      {isModulesView ? (
        <Modules setIsModulesView={setIsModulesView}></Modules>
      ) : isGroupView ? (
        <Groups setIsGroupView={setIsGroupView}></Groups>
      ) : (
        <GroupInfo></GroupInfo>
      )}
    </>
  );
}

export default Home;
