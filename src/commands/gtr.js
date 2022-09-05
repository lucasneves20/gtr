const command = {
  name: 'gtr',
  run: async (toolbox) => {
    const { print } = toolbox

    print.info(`
      gtr generate:component [name-component]
      gtr generate:page [name-page]
      gtr generate:inpath [name-archive]
    `)
  },
}

module.exports = command
