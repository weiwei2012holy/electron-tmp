module.exports = {
  packagerConfig: {
    asar: true,
    ignore: [
      '.cache', // 忽略 .cache 文件夹及其内容
      'node_modules/.cache', // 忽略 .cache 文件夹及其内容
      'node_modules/.bin', // 忽略 .cache 文件夹及其内容
    ],
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
