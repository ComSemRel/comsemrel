import typescript from 'rollup-plugin-typescript';

const packageInfo = require( './package.json' );

export default {
	entry: 'src/comsemrel.ts',
	format: 'cjs',
	sourceMap: true,
	dest: `dist/${packageInfo.name}.js`,

	plugins: [
		typescript( {
			typescript: require( 'typescript' )
		} )
	]
}
