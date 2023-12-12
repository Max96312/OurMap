import ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import "./index.css";

// PAGE COMPONENTs
// import MainPage from "./page/MainPage.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
    // { path: "/", element: <MainPage /> },
    { path: "/", element: <App /> },
    // { path: "about", element: <div>ABOUT PAGE</div> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
