import Index from "./Pages/Index/Index";
import Register from "./Pages/Register/Register";
import LogIn from "./Pages/LogIn/LogIn";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/Register", element: <Register /> },
  { path: "/LogIn", element: <LogIn /> },
];

export default routes;
