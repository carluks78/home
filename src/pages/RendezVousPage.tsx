import { useState } from 'react';
import PageLayout from '../components/shared/PageLayout';
import Breadcrumb from '../components/shared/Breadcrumb';
import { COMPANY, SERVICES, buildWhatsApp } from '../data/company';

const initialForm = {
  nom: '', prenom: '', telephone: '', adresse: '', codePostal: '', ville: '',
  prestation: '', date: '', heure: '', description: '', message: '',
};

export default function RendezVousPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nom.trim()) e.nom = 'Requis';
    if (!form.prenom.trim()) e.prenom = 'Requis';
    if (!form.telephone.trim()) e.telephone = 'Requis';
    if (!form.ville.trim()) e.ville = 'Requis';
    if (!form.prestation) e.prestation = 'Requis';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `Bonjour Home Électricité Normandie,

Je souhaite prendre rendez-vous.

Nom : ${form.nom}
Prénom : ${form.prenom}
Téléphone : ${form.telephone}
Adresse : ${form.adresse}
Code postal : ${form.codePostal}
Ville : ${form.ville}
Prestation : ${form.prestation}
Date souhaitée : ${form.date || 'Non précisée'}
Heure souhaitée : ${form.heure || 'Non précisée'}

Description : ${form.description || 'Aucune'}

Message complémentaire : ${form.message || 'Aucun'}

Merci.`;

    window.open(buildWhatsApp(message), '_blank');
  };

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <PageLayout
      title="Prendre rendez-vous – Home Électricité Normandie – Électricien Eure (27)"
      description="Prenez rendez-vous avec Home Électricité Normandie, électricien dans l'Eure (27). Formulaire rapide → envoi WhatsApp automatique. 06 29 51 89 35"
      canonical={`${COMPANY.siteUrl}/rendez-vous`}
    >
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Prendre rendez-vous' }]} />

      <section className="bg-gray-900 py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mb-4">
            Prendre rendez-vous
          </h1>
          <p className="text-gray-500 text-lg mb-2">
            Remplissez ce formulaire. Votre demande sera envoyée directement sur WhatsApp.
          </p>
          <p className="text-gray-500 text-sm">
            Ou appelez directement au{' '}
            <a href={COMPANY.phoneUri} className="text-orange-400 font-semibold">{COMPANY.phone}</a>
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5" noValidate>
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField label="Nom *" error={errors.nom}>
              <input type="text" placeholder="Dupont" value={form.nom} onChange={set('nom')}
                className={fieldClass(errors.nom)} />
            </FormField>
            <FormField label="Prénom *" error={errors.prenom}>
              <input type="text" placeholder="Jean" value={form.prenom} onChange={set('prenom')}
                className={fieldClass(errors.prenom)} />
            </FormField>
          </div>
          <FormField label="Téléphone *" error={errors.telephone}>
            <input type="tel" placeholder="06 XX XX XX XX" value={form.telephone} onChange={set('telephone')}
              className={fieldClass(errors.telephone)} />
          </FormField>
          <FormField label="Adresse">
            <input type="text" placeholder="12 rue de la Mairie" value={form.adresse} onChange={set('adresse')}
              className={fieldClass()} />
          </FormField>
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField label="Code postal">
              <input type="text" placeholder="27XXX" value={form.codePostal} onChange={set('codePostal')}
                className={fieldClass()} />
            </FormField>
            <FormField label="Ville *" error={errors.ville}>
              <input type="text" placeholder="Évreux" value={form.ville} onChange={set('ville')}
                className={fieldClass(errors.ville)} />
            </FormField>
          </div>
          <FormField label="Type de prestation *" error={errors.prestation}>
            <select value={form.prestation} onChange={set('prestation')} className={fieldClass(errors.prestation)}>
              <option value="">Sélectionner une prestation</option>
              {SERVICES.map(s => (
                <option key={s.slug} value={s.title}>{s.icon} {s.title}</option>
              ))}
              <option value="Autre">Autre</option>
            </select>
          </FormField>
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField label="Date souhaitée">
              <input type="date" value={form.date} onChange={set('date')} className={fieldClass()} min={new Date().toISOString().split('T')[0]} />
            </FormField>
            <FormField label="Heure souhaitée">
              <select value={form.heure} onChange={set('heure')} className={fieldClass()}>
                <option value="">Indifférent</option>
                {['8h-10h', '10h-12h', '14h-16h', '16h-18h', '18h-19h'].map(h => <option key={h} value={h}>{h}</option>)}
              </select>
            </FormField>
          </div>
          <FormField label="Description de votre besoin">
            <textarea placeholder="Décrivez votre installation, la nature du problème ou des travaux souhaités..." value={form.description} onChange={set('description')} rows={4} className={`${fieldClass()} resize-none`} />
          </FormField>
          <FormField label="Message complémentaire">
            <textarea placeholder="Informations complémentaires, contraintes d'accès, etc." value={form.message} onChange={set('message')} rows={2} className={`${fieldClass()} resize-none`} />
          </FormField>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] hover:bg-[#20BA5C] text-white font-bold text-lg rounded-2xl transition-all shadow-lg"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Envoyer ma demande via WhatsApp
          </button>
          <p className="text-gray-500 text-xs text-center">
            En cliquant, vous serez redirigé vers WhatsApp avec votre demande préremplie.
          </p>
        </form>
      </section>
    </PageLayout>
  );
}

function fieldClass(error?: string) {
  return `w-full bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-200'} text-gray-800 placeholder-zinc-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors`;
}

function FormField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-gray-600 text-sm font-medium mb-1.5">{label}</label>
      {children}
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
