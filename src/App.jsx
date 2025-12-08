import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import Reviews from "./pages/Reviews/Reviews";
import Blog from "./pages/Blog/Blog";
import Post from "./pages/Post/Post";
import FAQ from "./pages/FAQ/FAQ";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/testimonials" element={<Reviews />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
