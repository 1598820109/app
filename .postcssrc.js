// postcss.config.js
module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
<<<<<<< HEAD
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75;
      },
      propList: ['*'],
    },
  },
};
=======
      rootValue: 37.5, //vant-UI的官方根字体大小是37.5
      propList: ['*']
    }
  },
};
>>>>>>> 第三次更新
