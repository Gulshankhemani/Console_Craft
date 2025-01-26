import { RouterProvider } from "react-router-dom";
import router from "./Routes/Root.jsx";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
