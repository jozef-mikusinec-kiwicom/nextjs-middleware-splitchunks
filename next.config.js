module.exports = {
  webpack: config => {
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          // test: 'foofe',
          test: /\/node_modules\//,
          name() {
            return 'asdf';
          },
        },
        // default: {},
      },
    };

    return config;
  },
};
