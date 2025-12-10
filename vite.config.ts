import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import fs from 'fs'

const base = process.env.BASE_PATH || '/'
const isPreview = process.env.IS_PREVIEW ? true : false

// Nuskaitome SEO nustatymus iš failo
const seo = JSON.parse(fs.readFileSync('./content/seo.json', 'utf-8'))
const abs = (p: string) => (p?.startsWith('http') ? p : (seo.siteUrl?.replace(/\/$/, '') + p))

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
          'react': [
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
          favicon: seo.favicon
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
