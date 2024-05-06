// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // 标准屏的宽度，设计图 750-2倍图，标准屏 375
      viewportWidth: 375
    }
  }
}
