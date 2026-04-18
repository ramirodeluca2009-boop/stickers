import { Droplets, Sun, Palette, Truck } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const benefits = [
  {
    icon: Palette,
    title: 'Vinilo Premium',
    desc: 'Material de la más alta calidad con acabado profesional. Colores vibrantes que no se destiñen.',
    color: 'bg-yellow-brand/10 text-yellow-brand',
  },
  {
    icon: Droplets,
    title: 'Resistentes al Agua y Sol',
    desc: 'Soportan lluvia, humedad, rayos UV y uso diario sin desgastarse. Hechos para durar.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Sun,
    title: 'Diseños 100% Personalizados',
    desc: 'Mandanos tu idea y la convertimos en stickers únicos. Logos, ilustraciones, fotos, lo que quieras.',
    color: 'bg-green-100 text-green-mate',
  },
  {
    icon: Truck,
    title: 'Envíos a Todo el País',
    desc: 'Desde Comodoro Rivadavia hasta tu puerta. Empaque seguro para que lleguen perfectos.',
    color: 'bg-purple-100 text-purple-600',
  },
]

export default function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-green-mate uppercase tracking-wider">¿Por qué elegirnos?</span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-dark mt-3">
              Calidad que se nota
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.1}>
              <div className="card-hover bg-white rounded-2xl p-6 md:p-8 text-center border border-gray-100 h-full">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${b.color} mb-5`}>
                  <b.icon size={28} />
                </div>
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
