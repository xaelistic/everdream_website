import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { FeaturesPage } from '@/pages/FeaturesPage';
import { HowItWorksPage } from '@/pages/HowItWorksPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { GalleryDetailPage } from '@/pages/GalleryDetailPage';
import { LeaderboardsPage } from '@/pages/LeaderboardsPage';
import { PricingPage } from '@/pages/PricingPage';
import { DownloadPage } from '@/pages/DownloadPage';
import { RoadmapPage } from '@/pages/RoadmapPage';
import { AboutPage } from '@/pages/AboutPage';
import { LearnPage } from '@/pages/LearnPage';
import { LearnArticlePage } from '@/pages/LearnArticlePage';
import { ReferralPage } from '@/pages/ReferralPage';
import { DiscordPage } from '@/pages/DiscordPage';
import { PrivacyPage, TermsPage } from '@/pages/LegalPages';
import { NotFoundPage } from '@/pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="gallery/:id" element={<GalleryDetailPage />} />
          <Route path="leaderboards" element={<LeaderboardsPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="download" element={<DownloadPage />} />
          <Route path="roadmap" element={<RoadmapPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="learn" element={<LearnPage />} />
          <Route path="learn/:slug" element={<LearnArticlePage />} />
          <Route path="blog" element={<Navigate to="/learn" replace />} />
          <Route path="blog/*" element={<Navigate to="/learn" replace />} />
          <Route path="discord" element={<DiscordPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="r/:code" element={<ReferralPage />} />
          <Route path="app" element={<AppRedirect />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function AppRedirect() {
  // Optional authenticated web surface: bounce to PWA
  window.location.replace(import.meta.env.VITE_APP_URL || 'https://app.everdream.n1g3.com');
  return (
    <div className="page-wrap py-20 text-center text-body">
      Opening the app…
    </div>
  );
}
