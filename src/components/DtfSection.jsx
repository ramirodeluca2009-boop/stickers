import { Zap, Layers, Ban, CheckCircle2 } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const features = [
  { icon: Zap, text: 'Transferencia directa sobre la superficie' },
  { icon: Layers, text: 'Aplicación por presión (calor o frío)' },
  { icon: Ban, text: 'Sin borde transparente antiestético' },
  { icon: CheckCircle2, text: 'Máxima resolución y detalle' },
]

export default function DtfSection() {
  return (
    <section id="dtf" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <ScrollReveal>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-green-mate/20 to-yellow-brand/20 flex items-center justify-center overflow-hidden border border-gray-100">
                <img
                  src="/images/dtf-uv.png"
                  alt="Stickers DTF UV"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -right-4 bg-yellow-brand text-dark font-bold text-xs px-4 py-2 rounded-full shadow-lg">
                NUEVA TECNOLOGÍA
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.15}>
            <div>
              <span className="text-sm font-semibold text-yellow-brand uppercase tracking-wider">Innovación</span>
              <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-dark mt-3 mb-6">
                ¿Qué es <span className="gradient-text">DTF UV</span>?
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
                La tecnología <strong className="text-dark">DTF UV</strong> (Direct to Film con curado ultravioleta)
                es el método más avanzado para crear stickers ultra resistentes. Se imprimen sobre una película
                especial y se transfieren directamente a la superficie, logrando un acabado impecable sin bordes
                visibles.
              </p>
              <div className="space-y-4">
                {features.map((f) => (
                  <div key={f.text} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-mate/10 rounded-lg flex items-center justify-center text-green-mate">
                      <f.icon size={20} />
                    </div>
                    <span className="text-dark font-medium text-sm md:text-base">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
