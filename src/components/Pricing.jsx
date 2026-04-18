import { Check, Clock, Star, Sparkles, Flame } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const plans = [
  {
    name: 'Vinilo Individual',
    icon: Sparkles,
    popular: false,
    accent: 'border-white/[0.08]',
    accentHover: 'hover:border-white/30',
    iconBg: 'bg-white/10 text-white',
    prices: [
      { size: '6 cm', price: '1.000' },
      { size: '9 cm', price: '1.300' },
      { size: '12 cm', price: '1.600' },
    ],
  },
  {
    name: 'Vinilo Holográfico',
    icon: Star,
    popular: true,
    accent: 'border-yellow-brand/60',
    accentHover: 'hover:border-yellow-brand',
    iconBg: 'bg-yellow-brand/15 text-yellow-brand',
    prices: [
      { size: '6 cm', price: '1.200' },
      { size: '9 cm', price: '1.500' },
      { size: '12 cm', price: '2.000' },
    ],
  },
  {
    name: 'DTF Premium',
    icon: Flame,
    popular: false,
    accent: 'border-green-mate/40',
    accentHover: 'hover:border-green-mate',
    iconBg: 'bg-green-mate/15 text-green-mate',
    prices: [
      { size: '6 cm', price: '2.000' },
      { size: '9 cm', price: '3.000' },
      { size: '12 cm', price: '4.500' },
    ],
  },
]

export default function Pricing() {
  return (
    <section className="relative py-20 md:py-28 bg-dark overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]">
          <pattern id="dots-pricing" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots-pricing)" />
        </svg>
      </div>

      <div className="absolute top-0 left-1/3 w-96 h-96 bg-yellow-brand/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-mate/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-yellow-brand uppercase tracking-[0.2em]">
              Precios
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white mt-3">
              Stickers de calidad a tu medida
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <div className={`group relative bg-white/[0.04] backdrop-blur-md rounded-2xl border ${plan.accent} ${plan.accentHover} h-full transition-all duration-500 hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(255,214,0,0.08)] overflow-hidden flex flex-col`}>
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-yellow-brand text-dark text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}

                <div className="p-7 md:p-8 flex-1 flex flex-col">
                  <div className={`w-12 h-12 rounded-xl ${plan.iconBg} flex items-center justify-center mb-5`}>
                    <plan.icon size={24} />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white mb-6">{plan.name}</h3>

                  <div className="space-y-4 mb-8 flex-1">
                    {plan.prices.map((p) => (
                      <div key={p.size} className="flex items-center justify-between py-3 border-b border-white/[0.06]">
                        <div className="flex items-center gap-2">
                          <Check size={16} className="text-green-mate" />
                          <span className="text-gray-300 text-sm font-medium">{p.size}</span>
                        </div>
                        <span className="font-heading font-extrabold text-lg text-white">${p.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-5">
                    <Clock size={14} />
                    <span>Tiempo de entrega: 5 a 7 dias</span>
                  </div>

                  <a
                    href="https://wa.me/5492974254894?text=Hola!%20Quiero%20consultar%20precios%20mayoristas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 font-bold text-sm py-3 px-5 rounded-full transition-all hover:scale-105 ${
                      plan.popular
                        ? 'bg-yellow-brand hover:bg-yellow-hover text-dark'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    Consultar precio mayorista
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-gray-500 text-sm mt-10">
            Necesitas una medida especial? Consultanos y te cotizamos.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
