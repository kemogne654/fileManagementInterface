import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/MainPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
const App = () => {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage/>} />
          </Routes>
        </Router>
      </div>
    );
}
export default App;