import PageLayout from '../components/shared/PageLayout';
import Breadcrumb from '../components/shared/Breadcrumb';
import { COMPANY } from '../data/company';

export default function PolitiqueConfidentialitePage() {
  return (
    <PageLayout
      title="Politique de confidentialité – Home Électricité Normandie"
      description="Politique de confidentialité et protection des données personnelles de Home Électricité Normandie."
      canonical={`${COMPANY.siteUrl}/politique-confidentialite`}
    >
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Politique de confidentialité' }]} />

      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
            Politique de confidentialité
          </h1>
          <div className="prose-legal">
            <h2>Responsable du traitement</h2>
            <p>{COMPANY.legalName}, {COMPANY.address.full}. Email : {COMPANY.email}</p>

            <h2>Données collectées</h2>
            <p>Nous collectons les données suivantes dans le cadre de nos formulaires de contact, devis et rendez-vous :</p>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse postale</li>
              <li>Numéro de téléphone</li>
              <li>Adresse email (facultatif)</li>
              <li>Description des travaux et informations techniques liées à la prestation demandée</li>
            </ul>

            <h2>Finalité du traitement</h2>
            <p>Ces données sont utilisées exclusivement pour :</p>
            <ul>
              <li>Traiter vos demandes de devis et de rendez-vous</li>
              <li>Vous contacter dans le cadre de la réalisation de nos prestations</li>
              <li>Établir des devis et factures</li>
            </ul>

            <h2>Base légale</h2>
            <p>Le traitement de vos données repose sur votre consentement (formulaires) et sur l'exécution d'un contrat ou de mesures précontractuelles (demandes de devis).</p>

            <h2>Durée de conservation</h2>
            <p>Vos données sont conservées pour la durée nécessaire à la réalisation des prestations et au respect des obligations légales (5 ans pour les données de facturation).</p>

            <h2>Destinataires des données</h2>
            <p>Vos données ne sont pas transmises à des tiers. Elles sont traitées uniquement par {COMPANY.legalName}.</p>

            <h2>Vos droits</h2>
            <p>Conformément au RGPD (Règlement Général sur la Protection des Données), vous disposez des droits suivants :</p>
            <ul>
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement ("droit à l'oubli")</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>
            <p>Pour exercer ces droits, contactez-nous à : {COMPANY.email}</p>

            <h2>Réclamations</h2>
            <p>Si vous estimez que le traitement de vos données ne respecte pas la réglementation, vous pouvez déposer une réclamation auprès de la CNIL (www.cnil.fr).</p>

            <h2>Transferts hors UE</h2>
            <p>Vos données ne sont pas transférées hors de l'Union Européenne.</p>

            <h2>Contact</h2>
            <p>Pour toute question relative à cette politique de confidentialité : {COMPANY.email}</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
