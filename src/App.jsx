import { RouterProvider } from "react-router-dom";
import { route } from "./router/Router";

function App() {
  const router = route;
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
