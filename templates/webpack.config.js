const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
	Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
	/*
	|--------------------------------------------------------------------------
	| Define your entries
	|--------------------------------------------------------------------------
	*/
	.addEntry('app', [
		'./resources/js/app.js',
		// './resources/css/app.css'
	])

	/*
	|--------------------------------------------------------------------------
	| Configure your output path
	|--------------------------------------------------------------------------
	*/
	.setOutputPath('public/build/')
	.setPublicPath('/build')

	/*
	|--------------------------------------------------------------------------
	| Loaders
	|--------------------------------------------------------------------------
	| These option require their respective loaders.
	| Uncommenting a line and running Encore will display the command
	| to run for installing its loader.
	*/
	// .enableVueLoader(() => {}, { runtimeCompilerBuild: false })
	// .enablePostCssLoader()
	// .enableTypeScriptLoader()

	/*
	|--------------------------------------------------------------------------
	| Optimizations
	|--------------------------------------------------------------------------
	*/
	.splitEntryChunks()
	.enableSingleRuntimeChunk()
	.cleanupOutputBeforeBuild()
	.enableSourceMaps(!Encore.isProduction())
	.enableVersioning(Encore.isProduction());

module.exports = Encore.getWebpackConfig();
