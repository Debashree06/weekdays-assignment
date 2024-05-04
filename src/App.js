import Job from "./pages/Job";
import { Provider } from "react-redux";
import store from "./feature/store";

function App() {
  return (
    <Provider store={store}>
      <Job />
    </Provider>
  );
}

export default App;
