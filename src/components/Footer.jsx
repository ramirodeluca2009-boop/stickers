import { Camera, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Logo centrado */}
        <div className="flex justify-center mb-10">
          <img src="/images/logo.png" alt="StickersFans" className="h-[80px] w-auto rounded-xl" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="text-2xl font-heading font-extrabold text-white">
              Stickers<span className="text-yellow-brand">Fans</span>
            </span>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Stickers de vinilo premium y tecnología DTF UV.
              Calidad, diseño y resistencia en cada sticker.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navegación</h4>
            <div className="flex flex-col gap-3">
              <a href="#catalogo" className="text-gray-500 hover:text-white text-sm transition-colors">Catálogo</a>
              <a href="#dtf" className="text-gray-500 hover:text-white text-sm transition-colors">Tecnología DTF</a>
              <a href="#contacto" className="text-gray-500 hover:text-white text-sm transition-colors">Contacto</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/stickersfans1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white text-sm transition-colors flex items-center gap-2"
              >
                <Camera size={16} />
                @stickersfans1
              </a>
              <span className="text-gray-500 text-sm flex items-center gap-2">
                <MapPin size={16} />
                Comodoro Rivadavia, Chubut
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Stickers Fans. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Hecho con <Heart size={12} className="text-red-500" /> en Comodoro Rivadavia
          </p>
        </div>
      </div>
    </footer>
  )
}
