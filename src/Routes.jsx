import Index from "./Pages/Index/Index";
import Register from "./Pages/Register/Register";
import LogIn from "./Pages/LogIn/LogIn";
import Page404 from "./Pages/Page404/Page404";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/Register", element: <Register /> },
  { path: "/LogIn", element: <LogIn /> },
  { path: "*", element: <Page404 /> },
];

export default routes;
