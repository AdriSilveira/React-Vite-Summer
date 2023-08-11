import Groups from "./Groups";
import GroupInfo from "./GroupInfo";
import Modules from "./Modules";
import { useState } from "react";

function Home({ isModules, loggedInUserId }) {
  // Initialisation --------------------------------------
  const [isModulesView, setIsModulesView] = useState(true);
  const [selectedModuleID, setSelectedModuleID] = useState(""); //change to module id not code

  const [isGroupView, setIsGroupView] = useState(true);
  const [selectedGroupID, setSelectedGroupID] = useState(1);

  // View --------------------------------------

  return (
    <>
      {isModulesView ? (
        <Modules
          setIsModulesView={setIsModulesView}
          setSelectedModuleID={setSelectedModuleID}
          loggedInUserId={loggedInUserId}
        ></Modules>
      ) : isGroupView ? (
        <Groups
          setIsGroupView={setIsGroupView}
          setSelectedGroupID={setSelectedGroupID}
          setIsModulesView={setIsModulesView}
          selectedModuleID={selectedModuleID}
        ></Groups>
      ) : (
        <GroupInfo selectedGroupID={selectedGroupID}></GroupInfo>
      )}
    </>
  );
}

export default Home;
