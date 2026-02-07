/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // أزرق الشركات الرصين (Microsoft Style)
        primary: {
          DEFAULT: '#0067b8', 
          dark: '#005da6',
          light: '#edebe9', // لون خلفية فاتح جداً للأسطح
        },
        // رمادي احترافي للعناصر الثانوية
        accent: {
          DEFAULT: '#605e5c',
          dark: '#323130',
        },
        // أخضر هادئ للنجاح والاتصال
        success: '#107c10', 
        // ألوان الأسطح الفاتحة (بدل الداكنة)
        surface: {
          DEFAULT: '#ffffff',
          base: '#f2f2f2',   // لون خلفية الصفحة الأساسي
          border: '#d2d2d2',
        }
      },
      backgroundImage: {
        // تدرج ناعم جداً يكاد يكون غير ملحوظ لإعطاء عمق بسيط
        'brand-gradient': 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)',
      }
    },
  },
  plugins: [],
}