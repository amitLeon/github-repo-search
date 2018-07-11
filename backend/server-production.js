require('babel-register')({
  presets: ['es2015-node', 'stage-0'],
  plugins: [
    ['transform-runtime', {
      polyfill: false,
      regenerator: true
    }]
  ]
});
require('./index.js').default(false);
