module.exports = {
	root: true,
	env: { browser: true, es2020: true, node: true, jest: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:react/jsx-runtime',
		'eslint-config-prettier',
	],
	settings: {
		react: {
			// Tells eslint-plugin-react to automatically detect the version of React to use.
			version: 'detect',
		},
		// Tells eslint how to resolve imports
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json', './tsconfig.node.json', 'postcss.config.js'],
		tsconfigRootDir: __dirname,
	},
	plugins: ['react-refresh'],
	rules: {
		'at-rule-no-unknown': 'off',
		'scss/at-rule-no-unknown': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'import/no-unresolved': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	},
};
