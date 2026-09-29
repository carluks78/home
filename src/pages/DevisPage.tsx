import { useState } from 'react';
import PageLayout from '../components/shared/PageLayout';
import Breadcrumb from '../components/shared/Breadcrumb';
import { COMPANY, SERVICES, buildWhatsApp } from '../data/company';

const initialForm = {
  nom: '', prenom: '', telephone: '', email: '', adresse: '', codePostal: '', ville: '',
  prestation: '', description: '', disponibilites: '', rgpd: false,
};

export default function DevisPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nom.trim()) e.nom = 'Requis';
    if (!form.prenom.trim()) e.prenom = 'Requis';
    if (!form.telephone.trim()) e.telephone = 'Requis';
    if (!form.ville.trim()) e.ville = 'Requis';
    if (!form.prestation) e.prestation = 'Requis';
    if (!form.description.trim()) e.description = 'Décrivez vos travaux';
    if (!form.rgpd) e.rgpd = 'Consentement requis';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `Bonjour Home Électricité Normandie,

Je souhaite obtenir un devis.

Nom : ${form.nom}
Prénom : ${form.prenom}
Téléphone : ${form.telephone}
Email : ${form.email || 'Non renseigné'}
Adresse : ${form.adresse}
Code postal : ${form.codePostal}
Ville : ${form.ville}
Type de prestation : ${form.prestation}

Description des travaux :
${form.description}

Disponibilités : ${form.disponibilites || 'Non précisées'}

Merci de me contacter pour établir un devis.`;

    window.open(buildWhatsApp(message), '_blank');
  };

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const setCheck = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [k]: e.target.checked }));

  return (
    <PageLayout
      title="Devis électricien gratuit – Eure (27) – Home Électricité Normandie"
      description="Demandez votre devis électricien gratuit dans l'Eure (27). Formulaire simple → réponse rapide via WhatsApp. Home Électricité Normandie. 06 29 51 89 35"
      canonical={`${COMPANY.siteUrl}/devis-electricien`}
    >
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Devis électricien' }]} />

      <section className="bg-gray-900 py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
             Devis gratuit — Sans engagement
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mb-4">
            Devis électricien<br />
            <span className="text-orange-400">gratuit</span>
          </h1>
          <p className="text-gray-500 text-lg mb-3">
            Remplissez ce formulaire. Votre demande de devis sera envoyée directement sur WhatsApp pour une réponse rapide.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5" noValidate>
          <div className="grid sm:grid-cols-2 gap-4">
            <FF label="Nom *" error={errors.nom}>
              <input type="text" placeholder="Dupont" value={form.nom} onChange={set('nom')} className={fc(errors.nom)} />
            </FF>
            <FF label="Prénom *" error={errors.prenom}>
              <input type="text" placeholder="Jean" value={form.prenom} onChange={set('prenom')} className={fc(errors.prenom)} />
            </FF>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FF label="Téléphone *" error={errors.telephone}>
              <input type="tel" placeholder="06 XX XX XX XX" value={form.telephone} onChange={set('telephone')} className={fc(errors.telephone)} />
            </FF>
            <FF label="Email">
              <input type="email" placeholder="vous@email.fr" value={form.email} onChange={set('email')} className={fc()} />
            </FF>
          </div>
          <FF label="Adresse">
            <input type="text" placeholder="12 rue de la Mairie" value={form.adresse} onChange={set('adresse')} className={fc()} />
          </FF>
          <div className="grid sm:grid-cols-2 gap-4">
            <FF label="Code postal">
              <input type="text" placeholder="27XXX" value={form.codePostal} onChange={set('codePostal')} className={fc()} />
            </FF>
            <FF label="Ville *" error={errors.ville}>
              <input type="text" placeholder="Évreux" value={form.ville} onChange={set('ville')} className={fc(errors.ville)} />
            </FF>
          </div>
          <FF label="Type de prestation *" error={errors.prestation}>
            <select value={form.prestation} onChange={set('prestation')} className={fc(errors.prestation)}>
              <option value="">Sélectionner une prestation</option>
              {SERVICES.map(s => (
                <option key={s.slug} value={s.title}>{s.icon} {s.title}</option>
              ))}
              <option value="Autre">Autre</option>
            </select>
          </FF>
          <FF label="Description des travaux *" error={errors.description}>
            <textarea
              placeholder="Décrivez vos travaux électriques, l'état de votre installation, vos besoins, la superficie, le type de logement..."
              value={form.description}
              onChange={set('description')}
              rows={5}
              className={`${fc(errors.description)} resize-none`}
            />
          </FF>
          <FF label="Vos disponibilités">
            <input type="text" placeholder="Ex : semaine après 18h, samedi matin..." value={form.disponibilites} onChange={set('disponibilites')} className={fc()} />
          </FF>

          {/* RGPD */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={form.rgpd}
                onChange={setCheck('rgpd')}
                className="mt-1 w-4 h-4 accent-orange-500 flex-shrink-0"
              />
              <span className="text-gray-500 text-xs leading-relaxed">
                J'accepte que Home Électricité Normandie collecte et traite mes données personnelles dans le cadre de ma demande de devis, conformément à la{' '}
                <a href="/politique-confidentialite" className="text-orange-400 underline">politique de confidentialité</a>.
              </span>
            </label>
            {errors.rgpd && <p className="text-red-400 text-xs mt-1">{errors.rgpd}</p>}
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] hover:bg-[#20BA5C] text-white font-bold text-lg rounded-2xl transition-all shadow-lg"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Envoyer ma demande de devis via WhatsApp
          </button>
          <p className="text-gray-500 text-xs text-center">
            En cliquant, vous serez redirigé vers WhatsApp avec votre demande préremplie. Réponse rapide garantie.
          </p>
        </form>
      </section>
    </PageLayout>
  );
}

function fc(error?: string) {
  return `w-full bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-200'} text-gray-800 placeholder-zinc-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors`;
}

function FF({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-gray-600 text-sm font-medium mb-1.5">{label}</label>
      {children}
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
