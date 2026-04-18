import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark pt-20">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Capa oscura semitransparente */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Glow orbs */}
      <div className="absolute z-[1] top-1/4 left-1/4 w-64 h-64 bg-yellow-brand/10 rounded-full blur-[100px]" />
      <div className="absolute z-[1] bottom-1/4 right-1/4 w-80 h-80 bg-green-mate/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block bg-yellow-brand/15 text-yellow-brand text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            Vinilo Premium & DTF UV
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          Tus ideas,{' '}
          <span className="gradient-text">pegadas</span>
          <br />
          donde quieras
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Stickers de vinilo premium y tecnología <strong className="text-white">DTF UV</strong>.
          Ultra resistentes al agua, sol y roce diario.
          Diseños 100% personalizados para termos, notebooks, autos y más.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#catalogo"
            className="btn-primary bg-yellow-brand text-dark font-bold px-8 py-4 rounded-full text-base flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Ver Catálogo
            <ArrowRight size={18} />
          </a>
          <a
            href="https://ig.me/m/stickersfans1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-full text-base flex items-center gap-2 hover:border-white/40 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={18} />
            Contactar por DM
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto"
        >
          {[
            { value: '500+', label: 'Clientes' },
            { value: '100%', label: 'Personalizados' },
            { value: 'ARG', label: 'Envíos a todo el país' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-bold text-white">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
