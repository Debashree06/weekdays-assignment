// import React from "react";
// import { Provider } from "react-redux";
// import ReactDOM from "react-dom";
// import store from "./store"; // Import your Redux store
// import JobList from "./components/JobList";
// import JobFilters from "./components/JobFilters";
// import LoadMoreButton from "./components/LoadMoreButton";

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Candidate Application Platform</h1>
//       <JobFilters />
//       <JobList />
//       <LoadMoreButton />
//     </div>
//   );
// };

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// export default App;

import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JobFilters from "./components/JobFilters";
import JobList from "./components/JobList";
import LoadMoreButton from "./components/LoadMoreButton";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <div className="main-content">
          <JobFilters />
          <JobList />
          <LoadMoreButton />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
