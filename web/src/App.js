import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./layouts/Navigation";
import { Routes, Route } from "react-router-dom";
import Today from "./views/Today";
import Calendar from "./views/Calendar";
import Profile from "./views/Profile";
import Notes from "./views/Notes";

// 

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="mt-[100px]">
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
