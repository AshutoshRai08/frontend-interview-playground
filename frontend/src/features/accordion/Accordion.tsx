import { useState } from "react";
import AccordionItem from "./components/AccordionItems";
import { accordionData } from "./data/accordionData";

const AccordionPage = () => {
  // const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);
  // // Multiple open

  // const handleToggle = (id: string) => {
  //   setOpenAccordionId((prev) => (prev === id ? null : id));
  // };
  const [openAccordionIds, setOpenAccordionIds] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setOpenAccordionIds((prev) => {
      if (prev.includes(id)) {
        // Already open → remove it
        return prev.filter((openId) => openId !== id);
      }

      // Not open → add it
      return [...prev, id];
    });
  };
  return (
    <div style={{ padding: "24px" }}>
      <h1>Accordion</h1>

      {accordionData.map((item) => (
        // <AccordionItem key={item.id} item={item} isOpen={openAccordionId===item.id?true:false} />
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openAccordionIds.includes(item.id)}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};

export default AccordionPage;
