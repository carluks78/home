import PageLayout from '../components/shared/PageLayout';
import Breadcrumb from '../components/shared/Breadcrumb';
import { COMPANY } from '../data/company';

export default function MentionsLegalesPage() {
  return (
    <PageLayout
      title="Mentions légales – Home Électricité Normandie"
      description="Mentions légales de Home Électricité Normandie, électricien dans l'Eure (27)."
      canonical={`${COMPANY.siteUrl}/mentions-legales`}
    >
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Mentions légales' }]} />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-black text-4xl text-gray-900 uppercase tracking-tight mb-8">
            Mentions légales
          </h1>
          <div className="prose-legal">
            <h2>Identification de l'entreprise</h2>
            <ul>
              <li><strong>Dénomination sociale :</strong> {COMPANY.legalName}</li>
              <li><strong>SIRET :</strong> {COMPANY.siret}</li>
              <li><strong>Adresse :</strong> {COMPANY.address.full}</li>
              <li><strong>Téléphone :</strong> {COMPANY.phone}</li>
              <li><strong>Email :</strong> {COMPANY.email}</li>
            </ul>

            <h2>Responsable de publication</h2>
            <p>[À compléter : nom du responsable de publication]</p>

            <h2>Hébergement du site</h2>
            <p>[À compléter : nom et coordonnées de l'hébergeur]</p>

            <h2>Propriété intellectuelle</h2>
            <p>L'ensemble du contenu de ce site (textes, images, logo) est la propriété exclusive de {COMPANY.legalName} ou de ses partenaires. Toute reproduction, distribution ou utilisation sans autorisation préalable est strictement interdite.</p>

            <h2>Données personnelles</h2>
            <p>Les données personnelles collectées via les formulaires de ce site sont utilisées uniquement pour traiter les demandes de devis et de rendez-vous. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à l'adresse email indiquée ci-dessus.</p>

            <h2>Cookies</h2>
            <p>Ce site peut utiliser des cookies à des fins techniques et analytiques. Pour plus d'informations, consultez notre <a href="/cookies">politique de cookies</a>.</p>

            <h2>Responsabilité</h2>
            <p>{COMPANY.legalName} s'efforce d'assurer l'exactitude des informations diffusées sur ce site mais ne peut garantir l'exhaustivité ou l'actualité de ces informations. La responsabilité de {COMPANY.legalName} ne peut être engagée pour les dommages directs ou indirects résultant de l'utilisation de ce site.</p>

            <h2>Assurance professionnelle</h2>
            <p>[À compléter : informations relatives à l'assurance responsabilité civile professionnelle]</p>

            <h2>Droit applicable</h2>
            <p>Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l'utilisation de ce site relève de la compétence des tribunaux français.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
