import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  plugins: [ babel(), uglify() ],
  format: 'umd'
}
