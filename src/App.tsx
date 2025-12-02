import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/sections/Footer";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import ArticlePage from "./pages/ArticlePage";
import CareersPage from "./pages/CareersPage";
import IndustryPage from "./pages/IndustryPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import PredictiveAIModelPage from "./pages/PredictiveAIModelPage";
import AgenticAIPage from "./pages/AgenticAIPage";
import AIForRetailersPage from "./pages/AIForRetailersPage";
import GenerativeAIPage from "./pages/GenerativeAIPage";
import HorionForSalesPage from "./pages/HorionForSalesPage";
import PublicSectorPage from "./pages/PublicSectorPage";
import PartnersPage from "./pages/PartnersPage";

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
        <Route
          path="generative-ai/horion-for-sales"
          element={<HorionForSalesPage />}
        />
        <Route path="generative-ai/:slug" element={<GenerativeAIPage />} />
        <Route path="agentic-ai/:slug" element={<AgenticAIPage />} />
        <Route path="ai-for-retailers/:slug" element={<AIForRetailersPage />} />
      </Route>

      {/* Solutions */}
      <Route path="/solutions/:industryName" element={<IndustryPage />} />

      {/* Resources */}
      <Route path="/case-studies/:title" element={<CaseStudyPage />} />

      {/* Company */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:id" element={<ArticlePage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/partners" element={<PartnersPage />} />

      {/* Initiatives */}

      {/* Governement */}
      <Route path="/government/public-sector" element={<PublicSectorPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
