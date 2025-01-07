export default {
  webpack: config => {
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        default: {
          name: 'ihaveaname',
        },
      },
    };

    return config;
  },
};
