import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/sections/Footer";
import ArchePage from "./pages/ArchePage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import ArticlePage from "./pages/ArticlePage";
import CareersPage from "./pages/CareersPage";
import IndustriesPage from "./pages/IndustriesPage";
import IndustryPage from "./pages/IndustryPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import PredictiveAIModelPage from "./pages/PredictiveAIModelPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <>
          <Footer />
        </>
      }
    >
      {/* Homepage */}
      <Route path="/" element={<LandingPage />} />

      {/* PRODUCTS */}
      <Route path="/products">
        <Route
          path="predictive-ai-models/:slug"
          element={<PredictiveAIModelPage />}
        />
      </Route>

      {/* Case Study */}
      <Route path="/case-studies/:title" element={<CaseStudyPage />} />

      <Route path="/arche" element={<ArchePage />} />
      <Route path="/industries" element={<IndustriesPage />} />
      <Route path="/industries/:id" element={<IndustryPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:id" element={<ArticlePage />} />
      <Route path="/careers" element={<CareersPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
