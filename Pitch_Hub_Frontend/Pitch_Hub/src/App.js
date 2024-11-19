import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Import Components
import Login from "./components/Web/Login";
import Register from "./components/Web/Register";
import Admin from "./components/Admin/Admin";
import Home from "./components/Web/Home";
import ErrorPage from "./components/Web/ErrorPage";
import About from "./components/Web/About";
import Navbar1 from "./components/Web/Navbar";
import History from "./components/Web/History";
import Prerequities from "./components/Web/Prerequities";
import Contactus from "./components/Web/Contactus";
import Gallery from "./components/Admin/Gallery";
import Department from "./components/Admin/Department";
import Faculty from "./components/Admin/Faculty";
import ViewGallery from "./components/Web/ViewGallery";
import ViewDepartment from "./components/Web/ViewDepartment";
import Acheviments from "./components/Admin/Acheviments";
import ViewTeaching from "./components/Web/ViewTeaching";
import ViewNonTeaching from "./components/Web/ViewNonTeaching";
import AchievementStudy from "./components/Web/AchievementStudy";
import AchievementExtra from "./components/Web/AchievementExtra";
import Lab from "./components/Admin/Lab";
import ViewLab from "./components/Web/ViewLab";
import ReplyQuery from "./components/Admin/ReplyQuery";
import Panorama from "./components/Admin/Panorama";
import Scholarship from "./components/Admin/Scholarship";
import ViewScholarship from "./components/Web/ViewScholarship";
import ViewPanorama from "./components/Web/ViewPanorama";
import Placement from "./components/Admin/Placement";
import ViewPlacement from "./components/Web/ViewPlacement";
import ExtraCurricular from "./components/Admin/ExtraCurricular";
import ViewExtraCurricular from "./components/Web/ViewExtraCurricular";
import Alumni from "./components/Admin/Alumini";
import ViewAlumini from "./components/Web/ViewAlumini";
import ViewStartupStories from "./components/Web/ViewStartupStories";
import ViewEmergingStartups from "./components/Web/ViewEmergingStartups";
import AddSchemeForm from "./components/Web/AddScheme";
import Chatbot from "./components/Web/AI";
import ViewPitchedIdeas from "./components/Web/PitchedIdeas";
import PitchYourIdeaForm from "./components/Web/PitchYourIdeaForm";

export const baseurl = "http://127.0.0.1:8000/api";

function App() {
  // Admin authentication check (can be replaced with actual auth logic)
  const isAdmin = localStorage.getItem("userRole") === "admin"; // Check admin role from localStorage or session

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar1 isAdmin={isAdmin} />} /> {/* Pass isAdmin prop to Navbar */}
          <Route path="/ViewStartupStories" element={<ViewStartupStories />} />
          <Route path="/ViewEmergingStartups" element={<ViewEmergingStartups />} />
          <Route path="about" element={<About />} />
          <Route path="history" element={<History />} />
          <Route path="pre" element={<Prerequities />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* Add Register route */}
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/viewgallery" element={<ViewGallery />} />
          <Route path="/viewdepartment" element={<ViewDepartment />} />
          <Route path="/viewteaching" element={<ViewTeaching />} />
          <Route path="/viewnonteaching" element={<ViewNonTeaching />} />
          <Route path="/achievementstudy" element={<AchievementStudy />} />
          <Route path="/achievementextra" element={<AchievementExtra />} />
          <Route path="/viewlab" element={<ViewLab />} />
          <Route path="/viewscholarship" element={<ViewScholarship />} />
          <Route path="/viewpanorama" element={<ViewPanorama />} />
          <Route path="/viewplacement" element={<ViewPlacement />} />
          <Route path="/viewextracurricular" element={<ViewExtraCurricular />} />
          <Route path="/viewalumini" element={<ViewAlumini />} />
          <Route path="/AI" element={<Chatbot />}/>
          <Route path="/pitchedIdeas" element={<ViewPitchedIdeas />} />
          <Route path="/pitch-your-idea" element={<PitchYourIdeaForm />} />

          {/* Admin Routes */}
          {isAdmin && (
            <Route path="/admin" element={<Admin />}>
              <Route path="acheviments" element={<Acheviments />} />
              <Route path="replyquery" element={<ReplyQuery />} />
              <Route path="lab" element={<Lab />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="department" element={<Department />} />
              <Route path="faculty" element={<Faculty />} />
              <Route path="panorama" element={<Panorama />} />
              <Route path="scholarship" element={<Scholarship />} />
              <Route path="placement" element={<Placement />} />
              <Route path="extracurricular" element={<ExtraCurricular />} />
              <Route path="alumni" element={<Alumni />} />
              
              {/* Add Route for "Add Scheme" Form */}
              <Route path="add-scheme" element={<AddSchemeForm />} />
            </Route>
          )}

          {/* Redirect or fallback for non-matching routes */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
