import "./App.css";
import ImageAvatar from "../ImageAvatar/ImageAvatar";
import ProfileBackground from "../ProfileBackground/ProfileBackground";
import SignUpForm from "../SignUpForm/SignUpForm";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={ <><ProfileBackground/><ImageAvatar/></> } />
      <Route path="Sign Up Form" element={ <SignUpForm/>} />
    </Routes>
    </div>
  );
}

export default App;
