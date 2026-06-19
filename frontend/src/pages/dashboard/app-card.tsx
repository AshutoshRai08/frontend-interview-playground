import { Link } from "react-router-dom";
import type { AppCardData } from "../../types/app-data";

type Props = Omit<AppCardData, "id">;

const AppCard = ({ title, difficulty, route, status }: Props) => {
  return (
    <Link
      to={route}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
          cursor: "pointer",
        }}
      >
        <h3>{title}</h3>
        <p>{difficulty}</p>
        <p>{status}</p>
      </div>
    </Link>
  );
};

export default AppCard;
