import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
  entry: 'src/app.js',
  dest: 'dist/app.js',
  format: 'umd',
  moduleName: 'app',
  sourceMap: true,
  plugins: [
    nodeResolve( { jsnext: true, main: true } ),
    replace( {
      // 'process.env.NODE_ENV': JSON.stringify('production')
      'process.env.NODE_ENV': JSON.stringify( 'dev' )
    } ),
    commonjs( {
      include: 'node_modules/**',
      exclude: [ 'node_modules/moment/**', 'node_modules/lodash-es/**' ]
    } ),
    babel()
  ]
};
