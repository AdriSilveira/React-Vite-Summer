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
  const [selectedGroupID, setSelectedGroupID] = useState(1);
  console.log(selectedGroupID);

  // View --------------------------------------

  return (
    <>
      {isModulesView ? (
        <Modules setIsModulesView={setIsModulesView}></Modules>
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
