import { createBrowserRouter } from "react-router-dom";
import AccordionPage from "../features/accordion/Accordion";
import CounterPage from "../features/counter";
import TabsComponent from "../features/tabs/Tabs";
import TodoPage from "../features/todo";
import RootLayout from "../layouts/root-layout";
import Dashboard from "../pages/dashboard/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },

      {
        path: "todo",
        element: <TodoPage />,
      },

      {
        path: "counter",
        element: <CounterPage />,
      },

      {
        path: "accordion",
        element: <AccordionPage />,
      },
      {
        path: "tabs",
        element: <TabsComponent />,
      },
    ],
  },
]);

export default router;
