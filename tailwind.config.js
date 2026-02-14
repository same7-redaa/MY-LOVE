/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                stc: ['stc', 'sans-serif'],
                fantezy: ['fantezy', 'sans-serif'],
                cairo: ['Cairo', 'sans-serif'],
                amiri: ['Amiri', 'serif'],
                aref: ['Aref Ruqaa', 'serif'],
                tajawal: ['Tajawal', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
            textShadow: {
                sm: '0 1px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                lg: '0 8px 16px var(--tw-shadow-color)',
            },
        },
    },
    plugins: [],
}
