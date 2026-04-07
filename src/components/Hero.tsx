import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=1920&auto=format&fit=crop" 
          alt="Mountain adventure" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          L'Aventure sans <span className="text-orange-500">Limites</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-slate-200 mb-10 font-light"
        >
          The Rolling Adventurers : promouvoir la mobilité et la découverte pour tous.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#mission" className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-orange-500/30">
            Découvrir notre mission
          </a>
          <a href="#soutenir" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold transition-all">
            Nous soutenir
          </a>
        </motion.div>
      </div>
    </section>
  );
}
