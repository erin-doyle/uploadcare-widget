import uploadcare from '../namespace'
import exports from './_widget'
import '../locales/ar'
import '../locales/az'
import '../locales/ca'
import '../locales/cs'
import '../locales/da'
import '../locales/de'
import '../locales/el'
import '../locales/es'
import '../locales/et'
import '../locales/fr'
import '../locales/he'
import '../locales/it'
import '../locales/ja'
import '../locales/ko'
import '../locales/lv'
import '../locales/nb'
import '../locales/nl'
import '../locales/pl'
import '../locales/pt'
import '../locales/ro'
import '../locales/ru'
import '../locales/sk'
import '../locales/sr'
import '../locales/sv'
import '../locales/tr'
import '../locales/uk'
import '../locales/vi'
import '../locales/zh-TW'
import '../locales/zh'

uploadcare.jQuery.noConflict(true)

uploadcare.expose('locales', Object.keys(uploadcare.locale.translations))

export default exports