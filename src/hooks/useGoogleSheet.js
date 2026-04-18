import { useState, useEffect } from 'react'

const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID || 'TU_SHEET_ID_ACA'
const SHEET_NAME = import.meta.env.VITE_GOOGLE_SHEET_NAME || 'Hoja 1'

const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME)}`

function parseSheetData(text) {
  const json = JSON.parse(text.substring(47).slice(0, -2))
  const rows = json.table.rows
  const cols = json.table.cols

  return rows
    .map((row) => {
      const cells = row.c || []
      return {
        codigo: cells[0]?.v?.toString() || '',
        nombre: cells[1]?.v?.toString() || '',
        categoria: cells[2]?.v?.toString() || '',
        imagen: cells[3]?.v?.toString() || '',
        precio: cells[4]?.v ?? 0,
        disponible: (cells[5]?.v?.toString() || '').toLowerCase() === 'si',
      }
    })
    .filter((s) => s.codigo && s.nombre)
}

export default function useGoogleSheet() {
  const [stickers, setStickers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (SHEET_ID === 'TU_SHEET_ID_ACA') {
      setLoading(false)
      setError('Configurá el VITE_GOOGLE_SHEET_ID en el archivo .env')
      return
    }

    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((text) => {
        setStickers(parseSheetData(text))
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { stickers, loading, error }
}
