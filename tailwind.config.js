/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Specify the paths to all template files
  theme: {
    extend: {
      fontFamily: {
        kumbh: ['"Kumbh Sans"', 'sans-serif'], // Set as default serif
        lato: ['"Lato"', 'sans-serif'], // Add Lato font
      },
      colors: {
        'nav-gray': '#282828',
        'nova-blue': '#1DA1F2',
        'nova-orange' : '#FD8600',
        'nova-orange-light': '#FFB34D',
        'orange-light': '#FFEDD9',
        'orange-circle': '#FFE5C4',
        'orange-circle-2': '#FFC374',
        'orange-circle-3': '#FFA939',
        'btn-yellow':'#FF9300',
        'btn-green': '#21BA8C',
        'card-green': '#07A570',
        'card-dark-green': '#00885E',
        'card-text-green': '#00885C',
        'industry-green' : '#00A773',
        'form-light-Green' : '#B3FFE0',
        'form-light-black': '#040404'
      },
      screens: {
        'vvvs': '375px',
        'vvs': '340px', // Custom breakpoint
        'ssm': '921px', // Custom breakpoint
        'mdx': '700px',
        'csm': '765px', // Custom breakpoint
        "3xl": "1800px", // Custom 3xl breakpoint
        "4xl": "2200px", // Custom 4xl breakpoint
      },
    },
  },
  plugins: [],
};
