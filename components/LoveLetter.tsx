import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowLeft, Stars, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../constants';

interface LoveLetterProps {
  onNext: () => void;
}

const LoveLetter: React.FC<LoveLetterProps> = ({ onNext }) => {
  useEffect(() => {
    // Preload gallery images for smoother transition
    GALLERY_ITEMS.forEach((item) => {
      const img = new Image();
      img.src = item.url;
    });
  }, []);

  const lines = [
    "في عيد الحب مش جاي أكتبلك كلمتين وخلاص..",
    "أنا جاي أقولك إن وجودك في حياتي هو أعظم صدفة حصلتلي، وأجمل اختيار أخدته، وأدفى إحساس عرفه قلبي.",
    "كل يوم بيعدي وأنا معاكي، بحس إن قلبي بيحبك من جديد، وكأن أول مرة شفتك لسه بتحصل.",
    "وجودك جنبي مش بس بيطمني… ده بيخليني أقوى، أهدى، وأصدق مع نفسي.",
    "إنتِ مش بس حبيبتي، إنتِ راحتي، ملجأي، والبيت اللي قلبي بيرجعله مهما الدنيا لفت بيا.",
    "اشتياقي ليكي مش مرتبط بغيابك، ده إحساس ثابت حتى وإنتِ قدامي.",
    "بشتاق لكلامك، لنظرتك، لضحكتك اللي بتسرقني من أي تعب، ولمسة إيدك اللي بتطمني أكتر من أي كلمة.",
    "بحب تفاصيلك الصغيرة قبل الكبيرة. بحب غيرتك، ضحكتك، عنادك، وحتى لحظات زعلك.",
    "بحب إنك حقيقية، صادقة، وعندك قلب نادر. قلب بيعرف يحتوي، ويصبر، ويحب بعمق.",
    "أنا مش بس بحبك… أنا متعلق بيكي، مفتون بيكي، ومختارك كل يوم من غير تردد.",
    "ولو رجع بيا الزمن ألف مرة، هختارك كل مرة، بنفس الشغف، بنفس اللهفة، وبنفس القرار.",
    "في عيد الحب، أنا بوعدك أفضل ثابت، سند، وحضن آمن ليكي.",
    "أوعدك إني أفضّل أشوف فيكي أجمل ست في الدنيا، حتى وإحنا بنكبر سوا، لأن حبي ليكي مرتبط بروحك.",
    "بحبك حب فيه حرارة، شوق، رغبة، احتياج، وأمان.",
    "وبقولها بوضوح: إنتِ نعمة أحمد ربنا عليها كل يوم.",
    "عيد حب سعيد يا أغلى حاجة في حياتي.. وجودك هو العيد الحقيقي.",
    "بحبك دايمًا وأبدًا.. ♥"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.5
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 15, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-4 relative z-20 pb-24 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Decorative Orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="max-w-3xl w-full relative">

        {/* Glassmorphism Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative bg-white/40 backdrop-blur-xl p-6 md:p-14 shadow-2xl rounded-[2rem] md:rounded-[3rem] border border-white/60 overflow-hidden"
        >
          {/* Inner Border */}
          <div className="absolute inset-4 border border-pink-200/50 rounded-[1.5rem] md:rounded-[2.5rem] pointer-events-none" />

          {/* Header Area */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6 md:mb-10 text-center relative pt-4"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-400/20 blur-2xl rounded-full" />
            <h2 className="font-tajawal font-bold text-3xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 drop-shadow-sm relative z-10 pb-4">
              إلى معشوقتي
            </h2>
            <div className="flex justify-center gap-2 mt-2 opacity-60 text-pink-500">
              <Stars size={16} />
              <Stars size={16} />
              <Stars size={16} />
            </div>
          </motion.div>

          {/* Content Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center w-full space-y-6"
          >
            {lines.map((line, index) => (
              <motion.p
                key={index}
                variants={lineVariants}
                className={`font-tajawal leading-relaxed ${index === 0
                  ? "font-bold text-pink-700 text-2xl md:text-4xl mb-6 drop-shadow-sm"
                  : index === lines.length - 1
                    ? "font-aref text-3xl md:text-5xl text-rose-600 mt-10 pt-4"
                    : "text-lg md:text-2xl text-slate-800 font-medium"
                  }`}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>

          {/* Corner Decorations */}
          <Sparkles className="absolute top-8 left-8 text-pink-400 opacity-60 w-6 h-6 animate-spin-slow" />
          <Sparkles className="absolute bottom-8 right-8 text-pink-400 opacity-60 w-6 h-6 animate-spin-slow" />

        </motion.div>
      </div>

      {/* Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: lines.length * 0.8 + 0.5 }}
        className="mt-12 z-30"
      >
        <button
          onClick={onNext}
          className="group relative px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-bold font-tajawal text-xl shadow-xl shadow-pink-500/30 overflow-hidden transition-transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative flex items-center gap-3">
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span>ذكرياتنا الحلوة</span>
            <Heart className="w-5 h-5 fill-white animate-pulse" />
          </span>
        </button>
      </motion.div>

    </motion.div>
  );
};

export default LoveLetter;