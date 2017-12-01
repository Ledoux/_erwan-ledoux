const kebabCase = require('lodash.kebabcase')

const colorsByName = {
  lightBlue: '#1acfff',
  mediumBlue: '#33aece',
  lightGreen: '#bbe265',
  mediumGreen: '#70c946',
  lightGrey: '#f7f7f7',
  mediumGrey: '#dcdddc',
  middleGrey: '#777777',
  // strongGrey: 'rgba(39, 52, 68, 0.94)',
  darkGrey: '#4a4a4a',
  pastelGrey: 'rgba(132, 146, 166, 0.94)',
  red: '#DD2C00'
}

 const sass = Object.assign(colorsByName, {
  mini: '425px',
  sm: '768px',
  md: '1024px',
  lg: '1440px',
  xl: '2560px',
  backgroundColor: colorsByName.lightGrey,
  border: `1px solid ${colorsByName.lightGrey}`,
  borderRadius: '0.25rem',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  boxShadowHover: '0 0 10px rgba(0,0,0,0.4)',
  darkFontColor: colorsByName.darkGrey,
  fontFamily: '"Source Sans Pro", sans-serif',
  headerHeight: '5rem',
  identityColor: '$medium-blue',
  lightFontColor: colorsByName.pastelGrey,
  lightIdentityColor: '$light-green',
  middleFontColor: colorsByName.middleGrey,
  totalBackgroundImage: 'linear-gradient(to bottom, $light-grey, white)',
  opacityTransition: 'all 1s ease-out',
  resizeTransition: 'all 0.4s ease-out'
})

Object.keys(sass)
  .forEach(key => {
    const value =  sass[key]
    const kebabKey = kebabCase(key)
    if (kebabKey !== key) {
      sass[kebabKey] = value
      delete sass[key]
    }
  })

module.exports = sass
