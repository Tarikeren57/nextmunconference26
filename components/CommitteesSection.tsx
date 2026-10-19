"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronRight } from "lucide-react";

interface Committee {
  id: number;
  name: string;
  image: string;
  agenda: string;
  description: string;
}

const committees: Committee[] = [
  {
    id: 1,
    name: "The Council of Al-Andalus",
    image: "/NextMun - 23.jpg",
    agenda: "The Future of Al-Andalus: Sovereignty, Unity, and Survival after the Fall of the Caliphate",
    description: "For centuries, the Iberian Peninsula was home to Al-Andalus, a major center of Islamic civilization known for its cities, scholarship, trade, and cultural diversity. At its height, much of Al-Andalus was governed by the Umayyad Caliphate of Córdoba, with Córdoba becoming one of the medieval Mediterranean's most influential political and cultural centers.\n\nHowever, years of internal conflict and struggles for power weakened the Caliphate. By 1031 AD, it had collapsed, leaving Al-Andalus divided into numerous independent Taifa kingdoms, each ruled by its own dynasty and pursuing its own interests.\n\nThough united by a shared cultural and religious heritage, the Taifa kingdoms were divided by political rivalries, territorial ambitions, economic competition, and questions of legitimacy. Meanwhile, the Christian kingdoms in the north were becoming increasingly influential, shifting the balance of power across the peninsula.\n\nThe rulers of these kingdoms must now navigate shifting alliances, territorial disputes, economic pressures, and military threats. With the old order gone, the future of Al-Andalus is uncertain. Whether its kingdoms remain divided, form new alliances, rise to dominance, or pursue an entirely different path will be determined by those who now hold its fate in their hands."
  },
  {
    id: 2,
    name: "Türkiye Büyük Millet Meclisi (TBMM)",
    image: "/NextMun - 22.jpg",
    agenda: "1. Kadın Haklarının Korunması ve Şiddetle Mücadelede Etkin Politikaların Geliştirilmesi\n2. Bireysel Silahlanmanın Kamu Güvenliğine Etkileri ve Ruhsatlandırma Sisteminin Revizyonu\n3. İnfaz Hukukunun Adalet, Caydırıcılık ve Toplumsal Güvenlik Çerçevesinde Yeniden Değerlendirilmesi",
    description: "TBMM Komisyonu, klasik meclis simülasyonları ile Model Birleşmiş Milletler usullerini harmanlayan özgün yapısıyla karşınızda.\n\nBütüncül çalışma esasını benimseyen komisyonumuzda milletvekillerimiz; milli irade ve yasama etiği çerçevesinde doğrudan karar alma özerkliğine sahiptir. Temsilcilerimiz bu simülasyonda \"Karar Metni\" formatını esas alarak ülkemizin iç krizlerine somut çözümler getirecektir.\n\nKomisyonumuzda; kadın haklarının korunması ve kadına yönelik şiddetle mücadelede mevcut hukuki mekanizmaların yeterliliği, bireysel silahlanmanın kamu düzeni ve vatandaşların güvenliği üzerindeki etkileri ve infaz hukukunun adalet, caydırıcılık ve toplumsal güvenlik arasındaki dengesi ele alınacaktır. Milletvekillerimiz, bu alanlarda mevcut sistemin karşılaştığı sorunları farklı yönleriyle değerlendirerek hem hukuki hem de toplumsal açıdan uygulanabilir çözüm yolları üzerinde çalışacaktır.\n\nBunun yanı sıra, milletvekillerinin ele alınan konuların eğitim, ekonomi ve sosyal yaşam üzerindeki etkilerini de göz önünde bulundurmaları beklenmektedir. Farklı görüşleri uzlaştırarak toplumun çeşitli kesimlerinin ihtiyaçlarını dikkate alan, uzun vadeli ve sürdürülebilir politikalar geliştirmeleri komisyon çalışmalarının temel amaçlarından biridir."
  },
  {
    id: 3,
    name: "Historical Crisis Committee (HCC)",
    image: "/NextMun - 20.jpg",
    agenda: "Chinese Civil War - Enemy of My Enemy: Resistance, Sabotage, and Chaotic War",
    description: "Trapped between the relentless advance of the invading Japanese Empire and decades of bloody internal fragmentation, all of China's regional regimes, warlord cliques, and ideological factions are forced into a seemingly desperate and temporary United Front to prevent total national destruction. However, this mandatory military cooperation serves merely as an extremely fragile cover disguising deep seated historical animosities, fundamental ideological divides, and an insatiable ambition for power.\n\nWhile military coordination and patriotic rhetoric against imperialist occupation forces remain an urgent necessity at the front lines, every clique is simultaneously waging a ruthless, covert war against their supposed allies behind closed doors. As artillery shells detonate along borderlands, intelligence warfare, political assassinations, economic sabotage, strategies of terrorizing local populations, and illegal land grabs continue unabated in the background.\n\nThe myth of national unity forged against a foreign threat will inevitably give way to a brutal war of ideological extermination the moment any faction gains sufficient strength. Communists, Nationalists, regional feudal rulers, and independent actors will deploy betrayal, terror, political manipulation, and raw military force to its absolute limits all to impose their own doctrines, liquidate their rivals, and establish supreme, sole legitimacy upon the ruins of this ancient, fractured empire."
  },
  {
    id: 4,
    name: "مجلس أزمات شرق الأوسط",
    image: "/NextMun - 24.jpg",
    agenda: "بند جدول الأعمال: مكافحة الجماعات المسلحة والتنظيمات الارهابية في الشرق الاوسط",
    description: "شهد الشرق الأوسط خلال العقود الأخيرة ظهور العديد من الجماعات المسلحة والتنظيمات المصنفة إرهابية، مثل داعش والقاعدة وغيرها، نتيجة الحروب والصراعات السياسية والطائفية وضعف مؤسسات الدول والتدخلات الخارجية وغياب الحلول السياسية. وقد تركت هذه الجماعات تأثيرا كبيرا على أمن الدول وحياة المدنيين والاستقرار الإقليمي والدولي.\n\nستناقش اللجنة سبل مكافحة الإرهاب وحماية المدنيين واحترام سيادة الدول، إلى جانب دراسة الأسباب السياسية والاقتصادية والاجتماعية التي تؤدي إلى ظهور الجماعات المسلحة واستمرار النزاعات، مع بحث إمكانية الجمع بين الحلول الأمنية والحوار السياسي.\n\nوستتميز المحاكاة بمشاركة مندوبين يمثلون الدول، إلى جانب مندوبين يمثلون بعض الجماعات المسلحة والتنظيمات غير الحكومية، مما يتيح للمشاركين التعامل مع مواقف ومصالح مختلفة ومناقشة القضايا من عدة جوانب.\n\nكما ستتناول اللجنة نماذج وأزمات مختلفة، مثل هجمات 11 سبتمبر، والقاعدة وداعش، والحرب في السودان، والأوضاع في اليمن ولبنان، والصراعات المرتبطة بإيران ونفوذ الجماعات المسلحة في المنطقة. ومع تطور الأحداث وظهور أزمات ومواقف جديدة، سيواجه المشاركون قرارات متغيرة تتطلب سرعة في التفكير والتفاوض واتخاذ المواقف المناسبة."
  },
  {
    id: 5,
    name: "CSTD",
    image: "/NextMun(1).jpg",
    agenda: "Addressing Digital Colonialism and Strengthening Data Sovereignty in Developing States",
    description: "The United Nations Commission on Science and Technology for Development (CSTD) is a subsidiary body of the Economic and Social Council (ECOSOC). It holds an annual intergovernmental forum for discussion on timely and pertinent issues affecting science, technology and development.\n\nIn this committee delegates will evaluate the issues arising from digital colonialism and its results. In the 21st century \"Data\" has become the new \"raw material\" of the current system, however, who collects it, who processes it, and who profits from it? Data collected from the citizens of developing states is being processed and commercialized with the technology of major countries. Consequently, the countries of origin see neither fair compensation nor meaningful control over their own data.\n\nDelegates are expected to propose comprehensive and legitimate international frameworks and mechanisms in order to prevent the effects of digital colonialism. The committee aims to regulate and develop mechanisms that ensure the sovereignty of developing states' data and simultaneously foster technological innovation and advancement."
  },
  {
    id: 6,
    name: "H-UNSC",
    image: "/NextMun.jpg",
    agenda: "The Berlin Ultimatum: Addressing the Future of Berlin During Cold War Tensions and Preventing World War III",
    description: "Berlin, 1958. A city divided between two worlds has become the centre of a confrontation that neither the United States nor the Soviet Union can afford to lose. When Nikita Khrushchev demands that the Western powers withdraw from West Berlin, the Security Council is faced with an ultimatum: negotiate, stand your ground, or risk turning Berlin into the battlefield of a new war.\n\nAs tensions rise, delegates will confront the questions that have kept Berlin on the edge of conflict: Who has the right to remain in the city? How far can each power push without provoking war? And what happens when diplomacy begins to fail? With German sovereignty, Western access, and the future of Berlin at stake, every decision will carry consequences far beyond the city itself."
  },
  {
    id: 7,
    name: "This Time Jane is Late! (CBI)",
    image: "/NextMun - 27.jpg",
    agenda: "California Bureau of Investigation: Unmasking the Truth Under Pressures of Homicide, Deception, and Federal Oversight",
    description: "The California Bureau of Investigation (CBI) operates as a premier state-level law enforcement agency dedicated to solving complex, high-profile crimes, conducting advanced forensic analysis, and coordinating critical investigative operations across the state.\n\nStep into the high-pressure world of law enforcement, where the pursuit of truth is a relentless fight against time, deception, and public scrutiny. The California Bureau of Investigation (CBI) committee places delegates directly at the center of a complex criminal web where every forensic finding, intercepted lead, and suspect interrogation can dramatically alter the direction of the case. In an environment shaped by breaking media reports, political interference, and active disinformation, delegates will not merely react to a crisis —they will actively drive a living, evolving investigation.\n\nIn this committee, the challenge goes far beyond identifying a culprit. Delegations will navigate a tense dynamic between field tactics and procedural integrity, balancing the drive for immediate investigative breakthroughs against the long-term preservation of public trust and legal authority. As state-level investigators and federal oversight agents clash over strategy, ethics, and authority, every directive issued will carry immediate consequences. Prepare to test your analytical instincts, strategic diplomacy, and decision-making skills in a simulation where a single misstep can compromise the entire investigation."
  }
];

function CommitteeCard({
  committee,
  onClick,
}: {
  committee: Committee;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="dossier-card cursor-pointer group flex flex-col h-full"
      onClick={onClick}
    >
      <div className="relative w-full h-48 sm:h-56 overflow-hidden border-b border-charcoal-800">
        <Image
          src={committee.image}
          alt={committee.name}
          fill
          className="object-cover object-center grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-in-out"
        />
        <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 border border-charcoal-700 backdrop-blur-sm">
          <span className="text-[10px] font-bold tracking-widest uppercase text-brand">
            CMT-{String(committee.id).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg sm:text-xl text-white leading-tight mb-3 group-hover:text-brand transition-colors">
            {committee.name}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
            <span className="font-semibold text-gray-300">Agenda:</span> {committee.agenda.split("\n")[0]}
          </p>
        </div>
        <div className="mt-6 flex items-center gap-2">
          <span className="text-gray-500 text-[10px] font-semibold tracking-[0.15em] uppercase group-hover:text-white transition-colors">
            Read Dossier
          </span>
          <ChevronRight size={12} className="text-gray-600 group-hover:text-brand transition-colors" />
        </div>
      </div>
    </motion.div>
  );
}

function CommitteeModal({
  committee,
  onClose,
}: {
  committee: Committee;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-charcoal-950 border border-charcoal-800 shadow-2xl flex flex-col md:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full md:w-2/5 h-48 md:h-auto border-b md:border-b-0 md:border-r border-charcoal-800 shrink-0">
          <Image
            src={committee.image}
            alt={committee.name}
            fill
            className="object-cover object-center opacity-90"
          />
        </div>

        <div className="p-6 md:p-10 w-full md:w-3/5 flex flex-col overflow-hidden">
          <div className="mb-6 flex justify-between items-start shrink-0">
            <div>
              <span className="inline-block px-3 py-1 bg-charcoal-900 border border-charcoal-700 text-[10px] font-bold tracking-widest uppercase text-brand mb-4">
                Committee Dossier {String(committee.id).padStart(2, "0")}
              </span>
              <h2 className="font-bold text-2xl text-white leading-tight" dir={committee.id === 4 ? "rtl" : "ltr"}>
                {committee.name}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-6 flex-1 overflow-y-auto pr-4 custom-scrollbar pb-4" dir={committee.id === 4 ? "rtl" : "ltr"}>
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-3 sticky top-0 bg-charcoal-950/90 backdrop-blur py-2 z-10" dir="ltr">
                Official Agenda
              </p>
              <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-brand pl-4 whitespace-pre-line">
                {committee.agenda}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-3 sticky top-0 bg-charcoal-950/90 backdrop-blur py-2 z-10" dir="ltr">
                Executive Briefing
              </p>
              <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line text-justify">
                {committee.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CommitteesSection() {
  const [selected, setSelected] = useState<Committee | null>(null);

  return (
    <section id="committees" className="relative py-24 sm:py-32 bg-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col items-start border-l-2 border-brand pl-6 sm:pl-8"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-gray-500 mb-2">
            2026 Program
          </span>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl uppercase text-white tracking-tight">
            Committees
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {committees.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <CommitteeCard committee={c} onClick={() => setSelected(c)} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <CommitteeModal committee={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
