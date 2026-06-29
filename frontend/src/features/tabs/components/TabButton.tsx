import type { TabData } from "../tabsTypes";

interface TabType {
  item: TabData;
}

const TabButton = ({ item }: TabType) => {
  return (
    <>
      <div>
        <button style={{ background: "transparent" }}>Tabs</button>
      </div>
    </>
  );
};
export default TabButton;
