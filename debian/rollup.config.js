import { nodeResolve } from '@rollup/plugin-node-resolve';

const config = {
	input: "index.js",
	output: [{
		format: 'cjs',
		file: 'findUp.cjs',
		preferConst: true,
		interop: false,
		freeze: false,
		strict: false
	}],
	plugins: [
        nodeResolve(),
	]
}

export default config;
