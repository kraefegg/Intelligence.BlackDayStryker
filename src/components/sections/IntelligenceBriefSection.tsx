import React, { useState } from 'react';
import { useI18n } from '../../i18n/index.tsx';
import {
  FileText,
  Calendar,
  User,
  Shield,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  X,
  Search,
} from 'lucide-react';

interface BriefArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  confidence: 'HIGH' | 'MODERATE' | 'LOW';
  summary: string;
  fullAnalysis: string[];
  sources: string[];
  methodology: string;
}

export const IntelligenceBriefSection: React.FC = () => {
  const { t } = useI18n();
  const [selectedArticle, setSelectedArticle] = useState<BriefArticle | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const articles: BriefArticle[] = [
    {
      id: 'brief-01',
      title: 'Geopolitical Supply Chain Vulnerabilities in South American Critical Mineral Corridors',
      category: 'Critical Infrastructure',
      date: 'OCT 2026',
      author: 'Senior Strategic Analyst // Americas Desk',
      confidence: 'HIGH',
      summary:
        'Assessment of rail, road, and port transit nodes across lithium and niobium extraction basins, highlighting regulatory compliance friction and intermodal exposure.',
      fullAnalysis: [
        'Multi-source telemetry and public commercial manifests indicate expanding bottlenecks at Atlantic export terminals.',
        'Environmental licensing updates under Brazilian state frameworks introduce 60-day operational lag vectors for new transit licenses.',
        'Recommended mitigation includes alternative dry-port staging protocols and satellite-monitored ground corridor escort coordination.',
      ],
      sources: ['State Mining Agency Registries', 'Commercial Vessel AIS Feeds', 'Regional Transport Union Filings'],
      methodology: 'OSINT spatial correlation cross-referenced with satellite imagery and verified logistics manifests.',
    },
    {
      id: 'brief-02',
      title: 'Active Adversary Reconnaissance Against Corporate Executive Digital Footprints',
      category: 'Cyber Threats',
      date: 'SEP 2026',
      author: 'Cyber Intelligence Unit (CTI)',
      confidence: 'HIGH',
      summary:
        'Methodological review of targeted executive exposure through passive metadata scraping and social-engineering credential harvesting.',
      fullAnalysis: [
        'Analysis of scraped corporate registry changes and public board meeting minutes demonstrates automated targeting of newly appointed executives within 72 hours of filing.',
        'High prevalence of look-alike domain registrations simulating corporate law firms and executive search agencies.',
        'Implementation of SpyStriker™ passive exposure audits reduced executive footprint exposure by 82% across sample cohort.',
      ],
      sources: ['Passive DNS Registries', 'Certificate Transparency Logs', 'Sanitized Incident Response Telemetry'],
      methodology: 'Threat actor infrastructure clustering and DNS correlation under strict defensive scope.',
    },
    {
      id: 'brief-03',
      title: 'Maritime Chokepoint Security & Automated Route Risk Stratification',
      category: 'Maritime Security',
      date: 'AUG 2026',
      author: 'Maritime Security Group',
      confidence: 'MODERATE',
      summary:
        'Tactical review of emerging electronic navigation interference and localized piracy indicators impacting littoral transit routes.',
      fullAnalysis: [
        'Selective GPS spoofing and AIS manipulation reported across three regional straits, impacting commercial vessel ETA precision.',
        'Advisory for commercial masters: Maintain dual-redundant inertial navigation backup and verify shore-radar radar beacons.',
        'Compliance with IMO ISPS Code level 2 measures recommended for vessels loitering outside territorial anchorage zones.',
      ],
      sources: ['IMO Piracy Reporting Centre', 'Commercial Satellite AIS Transponders', 'Navigational Warning Navareas'],
      methodology: 'Vessel tracking telemetry anomaly detection cross-referenced with maritime risk reports.',
    },
    {
      id: 'brief-04',
      title: 'Corporate Due Diligence in Complex Offshore Multi-Tier Ownership Structures',
      category: 'OSINT',
      date: 'JUL 2026',
      author: 'Investigative Research Desk',
      confidence: 'HIGH',
      summary:
        'Case methodology examining beneficial ownership (UBO) resolution across multi-jurisdictional shell entity layers.',
      fullAnalysis: [
        'Factual inquiry tracing four layers of holding companies across three Caribbean and European jurisdictions.',
        'Cross-referencing gazette notices, trademark filings, and public court records revealed ultimate controlling stakeholder.',
        'All findings substantiated through authenticated registry filings without unlawful or covert intrusion.',
      ],
      sources: ['Official Corporate Gazettes', 'Public Beneficial Ownership Registries', 'Appellate Court Filings'],
      methodology: 'Systematic link analysis and public record entity resolution.',
    },
  ];

  const filtered = filterCategory === 'all'
    ? articles
    : articles.filter((a) => a.category.toLowerCase().includes(filterCategory.toLowerCase()));

  return (
    <section id="intelligence-brief" className="py-24 bg-[#060608] border-b border-[#181920]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-block text-xs font-mono-tech text-[#A40000] uppercase tracking-[0.25em]">
              ANALYTICAL RESEARCH & DISPATCHES
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t.intelligenceBrief.title}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {t.intelligenceBrief.subtitle}
            </p>
          </div>

          <div className="p-3 bg-[#0d0e14] border border-[#1e202a] text-xs font-mono-tech text-gray-400">
            <div className="flex items-center gap-2 text-white font-bold mb-0.5">
              <Shield className="w-3.5 h-3.5 text-[#A40000]" />
              STANDARD PRACTICE
            </div>
            <span>Every briefing item carries strict source provenance & confidence scoring.</span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[#181a22] pb-4">
          {['all', 'critical infrastructure', 'cyber threats', 'maritime security', 'osint'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 text-xs font-mono-tech uppercase transition-colors ${
                filterCategory === cat
                  ? 'bg-[#A40000] text-white font-bold'
                  : 'bg-[#0f1118] text-gray-400 hover:text-white border border-[#1f2230]'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedArticle(item)}
              className="group cursor-pointer p-6 bg-[#0a0b10] border border-[#1b1d28] hover:border-[#A40000]/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono-tech">
                  <span className="px-2 py-0.5 bg-[#141622] text-[#38bdf8] border border-[#232738] uppercase">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 uppercase font-bold text-[10px] ${
                        item.confidence === 'HIGH'
                          ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/40'
                          : 'bg-amber-950/80 text-amber-400 border border-amber-800/40'
                      }`}
                    >
                      {item.confidence} CONFIDENCE
                    </span>
                    <span className="text-gray-500">{item.date}</span>
                  </div>
                </div>

                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white group-hover:text-[#ff6b6b] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#181a24] flex items-center justify-between text-xs font-mono-tech text-gray-400 group-hover:text-white">
                <span className="flex items-center gap-1.5">
                  <User className="w-3 h-3 text-[#A40000]" />
                  {item.author.split('//')[0]}
                </span>
                <span className="text-[#A40000] flex items-center gap-1 font-bold">
                  {t.intelligenceBrief.readMore} →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 text-center text-[11px] font-mono-tech text-gray-500">
          {t.intelligenceBrief.disclaimer}
        </div>
      </div>

      {/* Expanded Dossier Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#090a0f] border border-[#262834] text-white p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-start justify-between border-b border-[#1b1d28] pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono-tech">
                  <span className="px-2 py-0.5 bg-[#171a26] text-[#38bdf8] uppercase">
                    {selectedArticle.category}
                  </span>
                  <span className="text-gray-400">{selectedArticle.date}</span>
                  <span className="text-emerald-400 font-bold uppercase text-[10px]">
                    [{selectedArticle.confidence} CONFIDENCE]
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white pt-1">
                  {selectedArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
              <div className="p-4 bg-[#0f1118] border-l-2 border-[#A40000] text-gray-200 italic">
                "{selectedArticle.summary}"
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
                  Detailed Findings & Analysis
                </h4>
                {selectedArticle.fullAnalysis.map((para, pIdx) => (
                  <p key={pIdx} className="text-gray-300">
                    {para}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#181a24]">
                <div>
                  <h5 className="font-mono-tech text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">
                    Source Attribution:
                  </h5>
                  <ul className="space-y-1 text-xs text-gray-300">
                    {selectedArticle.sources.map((src, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#A40000]" />
                        {src}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-mono-tech text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">
                    Research Methodology:
                  </h5>
                  <p className="text-xs text-gray-400">
                    {selectedArticle.methodology}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1b1d28] flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-[#171922] hover:bg-[#202330] text-white text-xs font-mono-tech uppercase"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
