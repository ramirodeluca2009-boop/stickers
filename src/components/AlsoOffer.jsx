import { Printer, BookOpen, Trophy } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const services = [
  {
    icon: Printer,
    emoji: '🖨️',
    num: '01',
    title: 'Impresiones',
    desc: 'Impresiones de alta calidad para todo tipo de documentos, flyers, folletos y más. Colores vibrantes y acabado profesional.',
    waText: 'Hola! Quiero consultar sobre Impresiones',
  },
  {
    icon: BookOpen,
    emoji: '📚',
    num: '02',
    title: 'Anillados',
    desc: 'Encuadernación con anillo para tus trabajos, carpetas, manuales y presentaciones. Rápido y prolijo.',
    waText: 'Hola! Quiero consultar sobre Anillados',
  },
  {
    icon: Trophy,
    emoji: '🏆⚽',
    num: '03',
    title: 'Fixtures Mundial 2026 🌍',
    desc: '¡Ya disponibles! Imprimí el fixture oficial del Mundial 2026 y seguí cada partido. Ideales para regalar, pegar en la heladera o decorar tu negocio.',
    waText: 'Hola! Quiero consultar sobre Fixtures del Mundial 2026',
  },
]

export default function AlsoOffer() {
  return (
    <section className="relative py-20 md:py-28 bg-dark overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]">
          <pattern id="dots-offer" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots-offer)" />
        </svg>
      </div>

      <div className="absolute top-0 left-1/4 w-80 h-80 bg-yellow-brand/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-yellow-brand/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-yellow-brand uppercase tracking-[0.2em]">
              Más servicios
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white mt-3">
              También ofrecemos
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="group relative bg-white/[0.04] backdrop-blur-md rounded-2xl p-7 md:p-9 border border-white/[0.08] h-full transition-all duration-500 hover:bg-white/[0.08] hover:border-yellow-brand/60 hover:shadow-[0_0_30px_rgba(255,214,0,0.1)] overflow-hidden">
                <div className="absolute left-0 top-4 bottom-4 w-1 bg-yellow-brand rounded-full transition-all duration-500 group-hover:top-0 group-hover:bottom-0 group-hover:rounded-none group-hover:rounded-l-2xl" />

                <span className="absolute top-5 right-6 text-5xl md:text-6xl font-heading font-extrabold text-yellow-brand/10 transition-all duration-500 group-hover:text-yellow-brand/20 select-none">
                  {s.num}
                </span>

                <div className="relative z-10 text-center flex flex-col h-full">
                  <span className="text-5xl mb-5 block">{s.emoji}</span>
                  <h3 className="font-heading font-bold text-xl text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{s.desc}</p>
                  <a
                    href={`https://wa.me/5492974254894?text=${encodeURIComponent(s.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-yellow-brand hover:bg-yellow-hover text-dark font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105"
                  >
                    Consultá por esto
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
