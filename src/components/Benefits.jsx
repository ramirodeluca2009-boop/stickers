import { Droplets, Sun, Palette, Truck } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const benefits = [
  {
    icon: Palette,
    num: '01',
    title: 'Vinilo Premium',
    desc: 'Material de la más alta calidad con acabado profesional. Colores vibrantes que no se destiñen.',
    img: '/images/utv.jpeg',
  },
  {
    icon: Droplets,
    num: '02',
    title: 'Resistentes al Agua y Sol',
    desc: 'Soportan lluvia, humedad, rayos UV y uso diario sin desgastarse. Hechos para durar.',
    img: '/images/resistentes-agua-sol.jpeg',
  },
  {
    icon: Sun,
    num: '03',
    title: 'Diseños 100% Personalizados',
    desc: 'Mandanos tu idea y la convertimos en stickers únicos. Logos, ilustraciones, fotos, lo que quieras.',
    img: '/images/disenos-personalizados.jpeg',
  },
  {
    icon: Truck,
    num: '04',
    title: 'Envíos a Todo el País',
    desc: 'Desde Comodoro Rivadavia hasta tu puerta. Empaque seguro para que lleguen perfectos.',
  },
]

function DotPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]">
        <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="white" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  )
}

export default function Benefits() {
  return (
    <section className="relative py-20 md:py-28 bg-dark overflow-hidden">
      <DotPattern />

      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-brand/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-brand/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-yellow-brand uppercase tracking-[0.2em]">
              Lo que nos hace diferentes
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white mt-3">
              Calidad que se nota
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.1}>
              <div className="group relative bg-white/[0.04] backdrop-blur-md rounded-2xl border border-white/[0.08] h-full transition-all duration-500 hover:bg-white/[0.08] hover:border-yellow-brand/60 hover:shadow-[0_0_30px_rgba(255,214,0,0.1)] overflow-hidden">
                {/* Borde izquierdo amarillo */}
                <div className="absolute left-0 top-4 bottom-4 w-1 bg-yellow-brand rounded-full transition-all duration-500 group-hover:top-0 group-hover:bottom-0 group-hover:rounded-none group-hover:rounded-l-2xl z-20" />

                {/* Imagen superior */}
                {b.img && (
                  <div className="relative h-[180px] overflow-hidden">
                    <img
                      src={b.img}
                      alt={b.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/80" />
                    <span className="absolute bottom-3 right-4 text-5xl md:text-6xl font-heading font-extrabold text-yellow-brand/20 select-none">
                      {b.num}
                    </span>
                  </div>
                )}

                <div className="relative p-7 md:p-9">
                  {/* Número decorativo solo si no hay imagen */}
                  {!b.img && (
                    <span className="absolute top-5 right-6 text-5xl md:text-6xl font-heading font-extrabold text-yellow-brand/10 transition-all duration-500 group-hover:text-yellow-brand/20 select-none">
                      {b.num}
                    </span>
                  )}

                  <div className="relative z-10 flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 bg-yellow-brand/10 rounded-xl flex items-center justify-center text-yellow-brand transition-all duration-500 group-hover:bg-yellow-brand/20 group-hover:scale-110">
                      <b.icon size={28} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-white mb-2">{b.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
