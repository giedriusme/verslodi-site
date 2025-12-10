import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { readFileSync } from 'node:fs'

// Bazė ir preview vėliava
const base = process.env.BASE_PATH || '/'
const isPreview = !!process.env.IS_PREVIEW

// Saugiai nuskaitome SEO konfigą
function loadSEO() {
  try {
    const fileUrl = new URL('./content/seo.json', import.meta.url)
    const raw = readFileSync(fileUrl, 'utf-8')
    const json = JSON.parse(raw)
    return json || {}
  } catch (e) {
    // Atsarginės reikšmės, jei failo nėra ar JSON neteisingas
    return {
      title: 'VersloDI — Nepriklausomas DI konsultantas verslui',
      description:
        'Pirmiausia – procesai. Tada – DI. Pamatuojami rezultatai per 2–4 savaites • 6–12 mėn. veiksmų planas • investicijų grąžos skaičiavimas • sprendimai nepriklausomi nuo tiekėjų.',
      siteName: 'VersloDI',
      siteUrl: 'https://verslodi.lt/',
      favicon: '/favicon.png',
      ogImage: '/og-image.jpg'
    }
  }
}

const seo = loadSEO()

// Konvertuojame į absoliutų URL, jei paduotas santykinis
const abs = (p?: string) =>
  p && p.startsWith('http')
    ? p
    : `${(seo.siteUrl || '').replace(/\/$/, '')}${p || ''}`

export default defineConfig({
  define: {
    __BASE_PATH__: JSON.stringify(base),
    __IS_PREVIEW__: JSON.stringify(isPreview)
  },
  plugins: [
    react(),
    AutoImport({
      imports: [
        {
          react: [
            'React','useState','useEffect','useContext','useReducer','useCallback','useMemo','useRef','useImperativeHandle','useLayoutEffect','useDebugValue','useDeferredValue','useId','useInsertionEffect','useSyncExternalStore','useTransition','startTransition','lazy','memo','forwardRef','createContext','createElement','cloneElement','isValidElement'
          ]
        },
        { 'react-router-dom': ['useNavigate','useLocation','useParams','useSearchParams','Link','NavLink','Navigate','Outlet'] },
        { 'react-i18next': ['useTranslation','Trans'] }
      ],
      dts: true,
    }),
    createHtmlPlugin({
      inject: {
        data: {
          title: seo.title,
          description: seo.description,
          canonical: seo.siteUrl,
          ogImage: abs(seo.ogImage),
          siteName: seo.siteName,
          favicon: abs(seo.favicon), // jei favicon santykinis – taps pilnu URL
          lastModified: new Date().toISOString().slice(0, 10)
        }
      }
    })
  ],
  base,
  build: {
    sourcemap: false,
    outDir: 'out',
  },
  resolve: {
    alias: { '@': resolve(__dirname, './src') }
  },
  server: { port: 3000, host: '0.0.0.0' }
})
