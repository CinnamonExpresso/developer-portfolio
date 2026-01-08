import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import ProjectPage from "./pages/projectPage";
import ContactPage from "./pages/contactPage";
import ScrollButton from "./components/misc/scrollBtn";
import Navbar from "./components/main/navbar";
import Footer from "./components/main/footer";
import BlogPage from "./pages/blog/blogPage";
import Post from "./pages/blog/post";
import { DiagonalBackdrop } from "./components/deco/mathBackdrop";

const App = () => {
  return (
    <div className={`default-page-outer-container`}>
      <Navbar />
      <div className="default-page-content-container">
        <DiagonalBackdrop/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:post" element={<Post />} />
        </Routes>
        <ScrollButton />
      </div>
      <Footer />
    </div>
  );
};

export default App;
