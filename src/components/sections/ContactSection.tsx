import React, { useState } from 'react';
import { useI18n } from '../../i18n/index.tsx';
import { Mail, Send, Lock, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  onOpenBriefing: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBriefing }) => {
  const { t } = useI18n();
  const [quickMsgSent, setQuickMsgSent] = useState(false);
  const [quickEmail, setQuickEmail] = useState('');
  const [quickMessage, setQuickMessage] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail) return;
    setQuickMsgSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] border-b border-[#181920]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 48: Homepage Final Statement */}
        <div className="mb-20 p-8 sm:p-12 bg-gradient-to-r from-[#0a0c12] via-[#10121a] to-[#0a0c12] border border-[#202330] text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-block text-xs font-mono-tech text-[#A40000] uppercase tracking-[0.25em]">
            EXECUTIVE CONCLUSION
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            WHEN INFORMATION MATTERS, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A40000] via-[#c40000] to-red-400">
              CONTEXT MATTERS MORE.
            </span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            BLACKDAY STRYKER transforms fragmented information into structured intelligence, helping organizations understand threats, evaluate uncertainty and make informed decisions in complex environments.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenBriefing}
              className="px-7 py-3.5 bg-[#A40000] hover:bg-[#c40000] text-white font-mono-tech text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(164,0,0,0.4)] flex items-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>REQUEST A CONFIDENTIAL BRIEFING</span>
            </button>

            <a
              href="https://t.me/blackdaystriker"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#0088cc]/15 hover:bg-[#0088cc]/25 border border-[#0088cc]/40 text-[#38bdf8] font-mono-tech text-xs tracking-wider uppercase transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>CONTACT VIA TELEGRAM</span>
            </a>
          </div>
        </div>

        {/* Official Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Channel 1: Confidential Briefing Form */}
          <div className="p-8 bg-[#090a0f] border border-[#1d1f2a] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#161822] flex items-center justify-center text-[#ff6b6b]">
                <Lock className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest">
                PRIMARY CHANNEL
              </div>
              <h3 className="font-heading text-lg font-bold uppercase text-white tracking-wide">
                CONFIDENTIAL BRIEFING
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Structured intake protocol for sensitive corporate mandates with NDA requirement and defined urgency.
              </p>
            </div>

            <button
              onClick={onOpenBriefing}
              className="w-full py-3 bg-[#A40000] hover:bg-[#c40000] text-white font-mono-tech text-xs uppercase tracking-wider transition-colors text-center"
            >
              OPEN BRIEFING INTAKE
            </button>
          </div>

          {/* Channel 2: Official Telegram */}
          <div className="p-8 bg-[#090a0f] border border-[#1d1f2a] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#0088cc]/15 flex items-center justify-center text-[#38bdf8]">
                <Send className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest">
                DIRECT SECURE MESSAGING
              </div>
              <h3 className="font-heading text-lg font-bold uppercase text-white tracking-wide">
                TELEGRAM CHANNEL
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Direct official Telegram contact for expedited communication and mandate coordination.
              </p>
              <div className="text-xs font-mono-tech text-gray-300">
                Handle: <strong className="text-white">Blackday Striker</strong>
              </div>
            </div>

            <a
              href="https://t.me/blackdaystriker"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#0088cc]/20 hover:bg-[#0088cc]/30 border border-[#0088cc]/40 text-[#38bdf8] font-mono-tech text-xs uppercase tracking-wider transition-colors text-center flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>CONTACT VIA TELEGRAM</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Channel 3: Encrypted Email */}
          <div className="p-8 bg-[#090a0f] border border-[#1d1f2a] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#161822] flex items-center justify-center text-gray-300">
                <Mail className="w-5 h-5 text-[#A40000]" />
              </div>
              <div className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest">
                ENCRYPTED CORRESPONDENCE
              </div>
              <h3 className="font-heading text-lg font-bold uppercase text-white tracking-wide">
                PROTONMAIL DISPATCH
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Direct end-to-end encrypted email for documentary transfer, RFPs, and formal correspondence.
              </p>
              <div className="text-xs font-mono-tech text-gray-300 break-all">
                blackday.striker@protonmail.com
              </div>
            </div>

            <a
              href="mailto:blackday.striker@protonmail.com"
              className="w-full py-3 bg-[#161824] hover:bg-[#202332] text-gray-200 border border-[#2b3040] font-mono-tech text-xs uppercase tracking-wider transition-colors text-center flex items-center justify-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-[#A40000]" />
              <span>SEND AN EMAIL</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
