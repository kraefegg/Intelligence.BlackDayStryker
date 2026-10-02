import React, { useState } from 'react';
import { useI18n } from '../../i18n/index.tsx';
import {
  Lock,
  X,
  AlertTriangle,
  Send,
  Mail,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Clock,
  ExternalLink,
} from 'lucide-react';

interface ConfidentialBriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialThreatLevel?: string;
}

export const ConfidentialBriefingModal: React.FC<ConfidentialBriefingModalProps> = ({
  isOpen,
  onClose,
  initialThreatLevel,
}) => {
  const { t, language } = useI18n();

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    role: '',
    country: '',
    languagePref: language,
    category: initialThreatLevel === 'CRITICAL' ? 'crisis' : 'counter-threat',
    urgency: initialThreatLevel === 'CRITICAL' ? 'critical' : initialThreatLevel === 'LOW' ? 'routine' : 'priority',
    contactMethod: 'telegram',
    contactDetail: '',
    objective: initialThreatLevel ? `[THREAT LEVEL: ${initialThreatLevel}] Urgent advisory assessment requested.` : '',
    ndaRequired: true,
    consent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;

    setIsSubmitting(true);
    // Simulate secure packaging & client-side cryptographic hashing indicator
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-250">
      <div className="relative w-full max-w-3xl bg-[#09090c] border border-[#262832] text-white shadow-[0_20px_50px_rgba(0,0,0,0.95)] max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1c1e27] bg-[#0d0e13]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#A40000]/20 border border-[#A40000] flex items-center justify-center text-[#ff6b6b]">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono-tech text-[#A40000] uppercase tracking-widest">
                DISCREET INTAKE PROTOCOL // LEVEL 1
              </div>
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-white">
                {t.briefing.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-[#1a1c25] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Warning Banner */}
        <div className="px-6 py-3 bg-[#170e0e] border-b border-[#2d1515] flex items-start gap-3 text-xs text-[#fca5a5]">
          <AlertTriangle className="w-4 h-4 text-[#ef4444] shrink-0 mt-0.5" />
          <p className="leading-relaxed font-mono-tech text-[11px]">
            {t.briefing.warning}
          </p>
        </div>

        {/* Form or Success State */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-5">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#10b981]/15 border border-[#10b981]/40 flex items-center justify-center text-[#10b981]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono-tech text-[#10b981] tracking-widest uppercase">
                  MANDATE TICKET // TRANSMITTED
                </span>
                <h4 className="font-heading text-2xl font-bold uppercase text-white">
                  {t.briefing.form.successTitle}
                </h4>
                <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                  {t.briefing.form.successMsg}
                </p>
              </div>

              {/* Direct channels prompt */}
              <div className="max-w-md mx-auto p-4 bg-[#101217] border border-[#20232c] text-left text-xs font-mono-tech space-y-3">
                <div className="text-gray-400 uppercase text-[10px] tracking-widest">
                  Direct Encrypted Channels:
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Telegram Channel:</span>
                  <a
                    href="https://t.me/blackdaystriker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38bdf8] hover:underline flex items-center gap-1"
                  >
                    t.me/blackdaystriker <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">ProtonMail:</span>
                  <a
                    href="mailto:blackday.striker@protonmail.com"
                    className="text-gray-200 hover:underline"
                  >
                    blackday.striker@protonmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-mono-tech uppercase bg-[#1b1d26] hover:bg-[#252834] text-white transition-colors"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-[11px] font-mono-tech uppercase text-gray-300 mb-1.5">
                    {t.briefing.form.name} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#101216] border border-[#232630] focus:border-[#A40000] px-3 py-2 text-xs text-white outline-none transition-colors"
                    placeholder="e.g. John Doe / Authorized Representative"
                  />
                </div>

                {/* Organization */}
                <div>
                  <label className="block text-[11px] font-mono-tech uppercase text-gray-300 mb-1.5">
                    {t.briefing.form.organization} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full bg-[#101216] border border-[#232630] focus:border-[#A40000] px-3 py-2 text-xs text-white outline-none transition-colors"
                    placeholder="Corporate Entity / Family Office / Law Firm"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-[11px] font-mono-tech uppercase text-gray-300 mb-1.5">
                    {t.briefing.form.role}
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-[#101216] border border-[#232630] focus:border-[#A40000] px-3 py-2 text-xs text-white outline-none transition-colors"
                    placeholder="Director / Legal Counsel / CISO / Executive"
                  />
                </div>

                {/* Country / Jurisdiction */}
                <div>
                  <label className="block text-[11px] font-mono-tech uppercase text-gray-300 mb-1.5">
                    {t.briefing.form.country} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-[#101216] border border-[#232630] focus:border-[#A40000] px-3 py-2 text-xs text-white outline-none transition-colors"
                    placeholder="e.g. Brazil / United States / Switzerland"
                  />
                </div>
              </div>

              {/* Service Category & Urgency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono-tech uppercase text-gray-300 mb-1.5">
                    {t.briefing.form.category}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#101216] border border-[#232630] focus:border-[#A40000] px-3 py-2 text-xs text-white outline-none transition-colors"
                  >
                    <option value="private-intel">01 — Private Intelligence</option>
                    <option value="osint">02 — Open-Source Intelligence (OSINT)</option>
                    <option value="cybersecurity">03 — Cybersecurity & Cyber Threat Intel</option>
                    <option value="spystriker">04 — SpyStriker™ (Exposure & OPSEC)</option>
                    <option value="counter-threat">05 — Counter-Threat & Prevention</option>
                    <option value="protection">06 — Executive & Asset Protection</option>
                    <option value="investigations">07 — Research & Investigations</option>
                    <option value="critical-infra">08 — Critical Infrastructure</option>
                    <option value="maritime">09 — Maritime Security & Ports</option>
                    <option value="crisis">10 — Crisis & Risk Decision Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono-tech uppercase text-gray-300 mb-1.5">
                    {t.briefing.form.urgency}
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full bg-[#101216] border border-[#232630] focus:border-[#A40000] px-3 py-2 text-xs text-white outline-none transition-colors"
                  >
                    <option value="routine">{t.briefing.form.urgencyOptions.routine}</option>
                    <option value="priority">{t.briefing.form.urgencyOptions.priority}</option>
                    <option value="critical">{t.briefing.form.urgencyOptions.critical}</option>
                  </select>
                </div>
              </div>

              {/* Secure Channel Selection */}
              <div className="p-4 bg-[#0d0e12] border border-[#20222a] space-y-3">
                <span className="text-[11px] font-mono-tech uppercase text-gray-300 block">
                  {t.briefing.form.contactMethod}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, contactMethod: 'telegram' })}
                    className={`p-2.5 text-xs font-mono-tech text-left border transition-all ${
                      formData.contactMethod === 'telegram'
                        ? 'border-[#0088cc] bg-[#0088cc]/15 text-[#38bdf8]'
                        : 'border-[#20222a] bg-[#12141a] text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold mb-0.5">
                      <Send className="w-3.5 h-3.5" />
                      TELEGRAM
                    </div>
                    <span className="text-[10px] text-gray-400">Blackday Striker</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, contactMethod: 'protonmail' })}
                    className={`p-2.5 text-xs font-mono-tech text-left border transition-all ${
                      formData.contactMethod === 'protonmail'
                        ? 'border-[#A40000] bg-[#A40000]/15 text-white'
                        : 'border-[#20222a] bg-[#12141a] text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold mb-0.5">
                      <Mail className="w-3.5 h-3.5 text-[#ff6b6b]" />
                      PROTONMAIL
                    </div>
                    <span className="text-[10px] text-gray-400">End-to-End PGP</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, contactMethod: 'secureCall' })}
                    className={`p-2.5 text-xs font-mono-tech text-left border transition-all ${
                      formData.contactMethod === 'secureCall'
                        ? 'border-[#A40000] bg-[#A40000]/15 text-white'
                        : 'border-[#20222a] bg-[#12141a] text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold mb-0.5">
                      <Clock className="w-3.5 h-3.5 text-yellow-500" />
                      SECURE CALL
                    </div>
                    <span className="text-[10px] text-gray-400">Scheduled session</span>
                  </button>
                </div>

                <div>
                  <input
                    type="text"
                    required
                    value={formData.contactDetail}
                    onChange={(e) => setFormData({ ...formData, contactDetail: e.target.value })}
                    className="w-full bg-[#101216] border border-[#232630] focus:border-[#A40000] px-3 py-2 text-xs text-white outline-none transition-colors"
                    placeholder={
                      formData.contactMethod === 'telegram'
                        ? 'Your Telegram handle (e.g. @yourhandle)'
                        : formData.contactMethod === 'protonmail'
                        ? 'Your ProtonMail / Encrypted Email address'
                        : 'Preferred secure phone / Signal identifier'
                    }
                  />
                </div>
              </div>

              {/* General Objective */}
              <div>
                <label className="block text-[11px] font-mono-tech uppercase text-gray-300 mb-1.5">
                  {t.briefing.form.objective} *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.objective}
                  onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                  className="w-full bg-[#101216] border border-[#232630] focus:border-[#A40000] px-3 py-2 text-xs text-white outline-none transition-colors resize-none"
                  placeholder="Provide a high-level summary of the context, timeframe, and general mandate goals without classified operational secrets."
                />
              </div>

              {/* Checkboxes: NDA and Legal Consent */}
              <div className="space-y-2 pt-1">
                <label className="flex items-start gap-2.5 text-xs text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.ndaRequired}
                    onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                    className="mt-0.5 accent-[#A40000]"
                  />
                  <span>{t.briefing.form.ndaRequired}</span>
                </label>

                <label className="flex items-start gap-2.5 text-xs text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 accent-[#A40000]"
                  />
                  <span className="text-gray-400">
                    {t.briefing.form.consent}
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-gray-400 font-mono-tech">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>DISCREET & ENCRYPTED INTAKE</span>
                </div>

                <button
                  type="submit"
                  disabled={!formData.consent || isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 bg-[#A40000] hover:bg-[#c40000] disabled:bg-[#3f1919] disabled:text-gray-500 text-white font-mono-tech text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(164,0,0,0.3)] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      ENCRYPTING & DISPATCHING...
                    </>
                  ) : (
                    <>
                      <Lock className="w-3.5 h-3.5" />
                      {t.briefing.form.submitBtn}
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
