import Groups from "./Groups";
import GroupInfo from "./GroupInfo";
import Modules from "./Modules";
import { useState } from "react";

function Home({ isModules }) {
  // Initialisation --------------------------------------
  const [isModulesView, setIsModulesView] = useState(true);
  const [selectedModuleID, setSelectedModuleID] = useState(1);

  const [isGroupView, setIsGroupView] = useState(true);
  const [selectedGroupID, setSelectedGroupID] = useState(1);

  // View --------------------------------------

  return (
    <>
      {isModulesView ? (
        <Modules
          setIsModulesView={setIsModulesView}
          setSelectedModuleID={setSelectedModuleID}
        ></Modules>
      ) : isGroupView ? (
        <Groups
          setIsGroupView={setIsGroupView}
          setSelectedGroupID={setSelectedGroupID}
          setIsModulesView={setIsModulesView}
        ></Groups>
      ) : (
        <GroupInfo selectedGroupID={selectedGroupID}></GroupInfo>
      )}
    </>
  );
}

export default Home;
