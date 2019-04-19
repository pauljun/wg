const path = require('path');
const { generateTheme } = require('antd-theme-generator');

const options = {
  antDir: path.join(__dirname, '../node_modules/antd'),
  stylesDir: path.join(__dirname, '../src/assets/styles'),
  varFile: path.join(__dirname, '../src/assets/styles/color.less'),
  mainLessFile: path.join(__dirname, '../src/assets/styles/main.less'),
  outputFilePath: path.join(__dirname, '../public/color.less'),
  themeVariables: [
    '@primary-color',
    '@secondary-color',
    '@text-color',
    '@text-color-secondary',
    '@heading-color',
    '@layout-body-background',
    '@btn-primary-bg',
    '@layout-header-background'
  ],
}

generateTheme(options).then(less => {
  console.log('Theme generated successfully');
})
  .catch(error => {
    console.log('Error', error);
  });