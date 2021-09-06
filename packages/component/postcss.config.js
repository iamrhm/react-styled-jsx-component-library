/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    require('postcss-custom-media')({
      importFrom: {
        customMedia: {
          '--screen-xs': '(max-width: 575px)',
          '--screen-mob': '(max-width: 991px)',
          '--screen-sm': '(min-width: 576px)',
          '--screen-md': '(min-width: 768px)',
          '--screen-lg': '(min-width: 992px)',
          '--screen-xlg': '(min-width: 1200px)',
          '--screen-smaller': '(max-width: 360px)',
          '--screen-shorter': '(max-height: 570px)',
          '--landscape': '(orientation: landscape)',
        },
      },
    }),
  ],
};
