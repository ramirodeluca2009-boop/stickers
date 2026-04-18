import { Camera, MessageCircle } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function CtaFinal() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-dark relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-yellow-brand/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-mate/8 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <span className="inline-block bg-yellow-brand/15 text-yellow-brand text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            ¿Listo para pegar?
          </span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Tu diseño, en sticker.
            <br />
            <span className="gradient-text">Hacelo realidad hoy.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Mandanos tu idea por DM o WhatsApp y te enviamos presupuesto en el día.
            Diseño, impresión y envío a todo el país.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://ig.me/m/stickersfans1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-8 py-4 rounded-full text-base flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Camera size={20} />
              Escribinos por Instagram
            </a>
            <a
              href="https://wa.me/5492974000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-green-mate hover:bg-green-dark text-white font-bold px-8 py-4 rounded-full text-base flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
