import { useState, useRef } from 'react'
import { BookOpen, Search, X } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const WHATSAPP_NUMBER = '5492974254894'
const PDF_URL = '/catalogo-stickersfans.pdf'

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function Catalog() {
  const [showPdf, setShowPdf] = useState(false)
  const [codigo, setCodigo] = useState('')
  const inputRef = useRef(null)

  const handlePedir = () => {
    const code = codigo.trim().toUpperCase()
    if (!code) {
      inputRef.current?.focus()
      return
    }
    const msg = `Hola! Quiero pedir el sticker con código: ${code}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handlePedir()
  }

  return (
    <section id="catalogo" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-dark mt-3">
              Nuestro Catálogo
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Mirá el catálogo completo, elegí el sticker que más te guste y pedilo por WhatsApp con el código.
            </p>
          </div>
        </ScrollReveal>

        {/* Botón ver catálogo */}
        {!showPdf && (
          <ScrollReveal delay={0.1}>
            <div className="flex justify-center mb-12">
              <button
                onClick={() => setShowPdf(true)}
                className="btn-primary flex items-center gap-3 bg-yellow-brand hover:bg-yellow-hover text-dark font-bold text-lg px-8 py-4 rounded-full shadow-lg"
              >
                <BookOpen size={22} />
                Ver Catálogo Completo
              </button>
            </div>
          </ScrollReveal>
        )}

        {/* Visor PDF */}
        {showPdf && (
          <div className="mb-10">
            <div className="flex justify-end mb-3">
              <button
                onClick={() => setShowPdf(false)}
                className="flex items-center gap-2 text-gray-500 hover:text-dark text-sm font-medium transition-colors"
              >
                <X size={16} />
                Cerrar catálogo
              </button>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
              <iframe
                src={`${PDF_URL}#toolbar=1&navpanes=0`}
                title="Catálogo Stickers Fans"
                className="w-full h-[70vh] md:h-[80vh]"
              />
            </div>
          </div>
        )}

        {/* Buscador y pedido por código */}
        <ScrollReveal delay={0.15}>
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <h3 className="font-heading font-bold text-lg text-dark mb-1 text-center">
                ¿Ya elegiste tu sticker?
              </h3>
              <p className="text-gray-400 text-sm text-center mb-6">
                Escribí el código del catálogo y pedilo al instante
              </p>

              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Ej: A001"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium uppercase placeholder:normal-case placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-mate/50 focus:border-green-mate transition-all"
                  />
                </div>
                <button
                  onClick={handlePedir}
                  className="flex items-center gap-2 bg-green-mate hover:bg-green-dark text-white font-bold px-5 py-3 rounded-xl transition-colors whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">Pedir este sticker</span>
                  <span className="sm:hidden">Pedir</span>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
