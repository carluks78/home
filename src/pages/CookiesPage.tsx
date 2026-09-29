import PageLayout from '../components/shared/PageLayout';
import Breadcrumb from '../components/shared/Breadcrumb';
import { COMPANY } from '../data/company';

export default function CookiesPage() {
  return (
    <PageLayout
      title="Gestion des cookies – Home Électricité Normandie"
      description="Politique de cookies du site Home Électricité Normandie, électricien dans l'Eure (27)."
      canonical={`${COMPANY.siteUrl}/cookies`}
    >
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Cookies' }]} />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-black text-4xl text-gray-900 uppercase tracking-tight mb-8">
            Gestion des cookies
          </h1>
          <div className="prose-legal">
            <h2>Qu'est-ce qu'un cookie ?</h2>
            <p>Un cookie est un petit fichier texte déposé sur votre appareil lors de votre visite sur un site web. Les cookies permettent au site de vous reconnaître, de mémoriser vos préférences et d'améliorer votre expérience de navigation.</p>

            <h2>Cookies utilisés sur ce site</h2>
            <h3>Cookies techniques (essentiels)</h3>
            <p>Ces cookies sont nécessaires au bon fonctionnement du site. Ils ne collectent pas de données personnelles et ne peuvent pas être désactivés.</p>

            <h3>Cookies analytiques</h3>
            <p>[À compléter selon les outils d'analyse utilisés, le cas échéant]</p>

            <h2>Gestion de vos préférences</h2>
            <p>Vous pouvez à tout moment gérer vos préférences en matière de cookies via les paramètres de votre navigateur :</p>
            <ul>
              <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
              <li><strong>Firefox :</strong> Options → Vie privée et sécurité → Cookies</li>
              <li><strong>Safari :</strong> Préférences → Confidentialité → Cookies</li>
              <li><strong>Edge :</strong> Paramètres → Cookies et autorisations de site</li>
            </ul>

            <h2>Contact</h2>
            <p>Pour toute question sur notre utilisation des cookies : {COMPANY.email}</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
