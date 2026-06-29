import type { AccordionItem as AccordionItemType } from "../types";

interface AccordionItemProps {
  item: AccordionItemType;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = ({ item, isOpen, onToggle }: AccordionItemProps) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginBottom: "12px",
        padding: "16px",
      }}
    >
      {/* <h3 onClick={}>
        {item.title}
        {isOpen}
      </h3>

      <p style={{ display: isOpen ? "block" : "none" }}>{item.content}</p> */}
      <div>
        <button
          onClick={onToggle}
          style={{
            width: "100%",
            textAlign: "left",
            cursor: "pointer",
            padding: "12px",
            border: "none",
            background: "transparent",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {isOpen ? "▼" : "▶"} {item.title}
        </button>

        {isOpen && <p>{item.content}</p>}
      </div>
    </div>
  );
};

export default AccordionItem;
