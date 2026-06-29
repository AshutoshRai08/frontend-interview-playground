import { useState } from "react";
import TabButton from "./components/TabButton";
import type { TabData } from "./tabsTypes";

const TabsComponent = () => {
  const [tabDataId, setTabDataId] = useState<TabData[]>([]);
  return (
    <>
      <div>tabs Component</div>
      <div>
        <TabButton item={tabDataId[0]} />
      </div>
    </>
  );
};
export default TabsComponent;
