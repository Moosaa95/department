import {Layout} from "components";
import { Dashboard } from "pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
