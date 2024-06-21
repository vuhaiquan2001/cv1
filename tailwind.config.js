/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            borderWidth: {
                custom: '2px',
            },
            borderColor: {
                'custom-black': '#000000',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.border-b-custom': {
                    borderBottom: '2px solid #000000',
                },
            }
            addUtilities(newUtilities, ['responsive', 'hover'])
        },
        function ({ addUtilities }) {
            const newUtilities = {
                '.center': {
                    // display: 'flex',
                    'justify-content': 'center',
                    'align-items': 'center',
                },
            }
            addUtilities(newUtilities, ['responsive', 'hover'])
        },
        function ({ addUtilities }) {
            const newUtilities = {
                '.shadow-offsetLeft': {
                    'box-shadow': '-10px 10px 0px #000000',
                },
            }
            addUtilities(newUtilities, ['responsive', 'hover'])
        },
    ],
}
