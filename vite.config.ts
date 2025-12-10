import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { readFileSync } from 'node:fs'

// Bazinis kelias ir preview vėliava
const base = process.env.BASE_PATH || '/'
const isPreview = !!process.env.IS_PREVIEW

// Saugiai nuskaitome SEO konfigą
function loadSEO() {
  try {
    const fileUrl = new URL('./content/seo.json', import.meta.url)
    const raw = readFileSync(fileUrl, 'utf-8')
    const json = JSON.parse(raw)
    return json || {}
  } catch {
    // Atsarginės reikšmės, jei failo nėra ar JSON neteisingas
    return {
      title: 'VersloDI — Nepriklausomas DI konsultantas verslui',
      description:
        'Pirmiausia – procesai. Tada – DI. Pamatuojami rezultatai per 2–4 savaites • 6–12 mėn. veiksmų planas • investicijų grąžos skaičiavimas • sprendimai nepriklausomi nuo tiekėjų.',
      siteName: 'VersloDI',
      siteUrl: 'https://verslodi.lt/',
      favicon: '/favicon.png',
      ogImage: '/og-image.jpg',
      keywords: 'DI, automatizavimas, skaitmenizacija, ROI, konsultantas',
    }
  }
}

const seo = loadSEO()

// Patogūs helperiai
const safe = <T,>(v: T | undefined | null, d: T): T => (v ?? d)
const siteUrl = safe(seo.siteUrl, '').replace(/\/$/, '')

/** Paverčia į absoliutų URL, jei paduotas santykinis kelias */
const abs = (p?: string) => {
  if (!p) return ''
  if (/^https?:\/\//i.test(p)) return p
  if (!siteUrl) return p                           // paliekam kaip santykinį, jei siteUrl neapibrėžtas
  return `${siteUrl}${p.startsWith('/') ? p : `/${p}`}`
}

// Naudinga turėti „paskutinio atnaujinimo“ datą, kad EJS visuomet turėtų reikšmę
const lastModified = safe(seo.lastModified, new Date().toISOString().slice(0, 10))

export default defineConfig({
  define: {
    __BASE_PATH__: JSON.stringify(base),
    __IS_PREVIEW__: JSON.stringify(isPreview),
  },
  plugins: [
    react(),
    AutoImport({
      imports: [
        {
          react: [
            'React',
            'useState', 'useEffect', 'useContext', 'useReducer',
            'useCallback', 'useMemo', 'useRef', 'useImperativeHandle',
            'useLayoutEffect', 'useDebugValue', 'useDeferredValue',
            'useId', 'useInsertionEffect', 'useSyncExternalStore',
            'useTransition', 'startTransition', 'lazy', 'memo',
            'forwardRef', 'createContext', 'createElement',
            'cloneElement', 'isValidElement',
          ],
        },
        { 'react-router-dom': ['useNavigate','useLocation','useParams','useSearchParams','Link','NavLink','Navigate','Outlet'] },
        { 'react-i18next': ['useTranslation','Trans'] },
      ],
      dts: true,
    }),
    createHtmlPlugin({
      inject: {
        data: {
          // SEO laukų injekcija į index.html per EJS (<%= ... %>)
          title:       safe(seo.title, 'VersloDI'),
          description: safe(seo.description, ''),
          canonical:   safe(siteUrl, ''),          // jei neturi siteUrl – paliks tuščią
          ogImage:     abs(safe(seo.ogImage, '')),
          siteName:    safe(seo.siteName, 'VersloDI'),
          favicon:     abs(safe(seo.favicon, '/favicon.png')),
          keywords:    safe(seo.keywords, ''),
          lastModified,
        },
      },
    }),
  ],
  base,
  build: {
    sourcemap: false,
    outDir: 'out',
  },
  resolve: {
    alias: { '@': resolve(__dirname, './src') },
  },
  server: { port: 3000, host: '0.0.0.0' },
})
