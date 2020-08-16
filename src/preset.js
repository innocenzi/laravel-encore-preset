const { Preset } = require('use-preset');

// prettier-ignore
module.exports = Preset.make('Laravel Webpack Encore')
	.editJson('composer.json')
		.title('Add innocenzi/laravel-encore')
		.merge({
			require: {
				'innocenzi/laravel-encore': '^0.3'
			}
		})
		.chain()

	.editJson('package.json')
		.title('Update dependencies')
		.merge({
			devDependencies: {
				'@symfony/webpack-encore': '^0.30',
			},
			scripts: {
				'dev-server': 'encore dev-server',
				dev: 'encore dev',
				watch: 'encore dev --watch',
				build: 'encore production --progress',
			},
		})
		.delete(['devDependencies.cross-env', 'devDependencies.laravel-mix'])
		.chain()

	.delete('webpack.mix.js')
		.title('Remove webpack.mix.js')
		.chain()

	.edit('.gitignore')
		.title('Update .gitignore')
		.search(/\/node_modules/)
		.addAfter(['/public/build'])
		.end()
		.chain()

	.copyTemplates('ask')

	.installDependencies()
		.title('Update Node dependencies')
		.for('node')
		.chain()

	.updateDependencies()
		.title('Update PHP dependencies')
		.for('php')
		.chain();
