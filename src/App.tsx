import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import HomePage from './pages/HomePage';
import DepannagePage from './pages/DepannagePage';
import InstallationPage from './pages/InstallationPage';
import RenovationPage from './pages/RenovationPage';
import MiseAuxNormesPage from './pages/MiseAuxNormesPage';
import ZonesPage from './pages/ZonesPage';
import CityPage from './pages/CityPage';
import ContactPage from './pages/ContactPage';
import DevisPage from './pages/DevisPage';
import RendezVousPage from './pages/RendezVousPage';
import AProposPage from './pages/AProposPage';
import ServicesPage from './pages/ServicesPage';
import RealisationsPage from './pages/RealisationsPage';
import BlogPage from './pages/BlogPage';
import MentionsLegalesPage from './pages/MentionsLegalesPage';
import PolitiqueConfidentialitePage from './pages/PolitiqueConfidentialitePage';
import CookiesPage from './pages/CookiesPage';
import NotFoundPage from './pages/NotFoundPage';

function SlugRouter() {
  const { slug } = useParams<{ slug: string }>();
  if (slug?.startsWith('electricien-')) return <CityPage key={slug} />;
  return <NotFoundPage />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/depannage-electricien" element={<DepannagePage />} />
        <Route path="/installation-electrique" element={<InstallationPage />} />
        <Route path="/renovation-electrique" element={<RenovationPage />} />
        <Route path="/mise-aux-normes-electriques" element={<MiseAuxNormesPage />} />
        <Route path="/nos-services" element={<ServicesPage />} />
        <Route path="/tableau-electrique" element={<InstallationPage />} />
        <Route path="/eclairage-led" element={<InstallationPage />} />
        <Route path="/prise-electrique" element={<InstallationPage />} />
        <Route path="/vmc" element={<InstallationPage />} />
        <Route path="/chauffage-electrique" element={<InstallationPage />} />
        <Route path="/domotique" element={<InstallationPage />} />
        <Route path="/bornes-recharge" element={<InstallationPage />} />
        <Route path="/electricite-professionnelle" element={<InstallationPage />} />
        <Route path="/zones-intervention" element={<ZonesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/devis-electricien" element={<DevisPage />} />
        <Route path="/rendez-vous" element={<RendezVousPage />} />
        <Route path="/a-propos" element={<AProposPage />} />
        <Route path="/realisations" element={<RealisationsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/:slug" element={<SlugRouter />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
