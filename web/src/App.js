import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./layouts/Navigation";
import { Routes, Route } from "react-router-dom";
import Today from "./components/Today";
import Calendar from "./components/Calendar";
import Profile from "./components/Profile";
import Notes from "./components/Notes";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/today" element={<Today />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;
