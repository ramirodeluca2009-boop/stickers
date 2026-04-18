export default function Marquee() {
  const items = [
    'STICKERS PREMIUM',
    'ENVÍOS A TODO EL PAÍS',
    'DISEÑOS A MEDIDA',
    'VINILO DE ALTA CALIDAD',
    'TECNOLOGÍA DTF UV',
    'ULTRA RESISTENTES',
  ]

  const repeated = [...items, ...items]

  return (
    <div className="bg-yellow-brand py-3 md:py-4 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mx-6 md:mx-10 text-sm md:text-base font-bold text-dark uppercase tracking-wider shrink-0 flex items-center gap-6 md:gap-10"
          >
            <span className="text-dark/30">///</span> {item}
          </span>
        ))}
      </div>
    </div>
  )
}
