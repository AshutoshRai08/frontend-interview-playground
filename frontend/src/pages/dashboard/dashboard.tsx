import AppCard from "./app-card";
import appCardsData from "./app-cards-data";

const Dashboard = () => {
  return (
    <div style={{ padding: "24px" }}>
      <h1>Frontend Interview Playground</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        {appCardsData.map((app) => (
          <AppCard
            key={app.id}
            title={app.title}
            difficulty={app.difficulty}
            route={app.route}
            status={app.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
