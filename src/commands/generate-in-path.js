module.exports = {
  name: 'generate:inpath',
  alias: ['g'],
  run: async (toolbox) => {
    const {
      parameters,
      template: { generate },
      print: { success, error },
    } = toolbox

    const path = parameters.first
    const name = parameters.second

    if (!name) {
      error('Não foi posto um nome do page ou outro erro não reconhecido')
      return 
    }

    await generate({
      template: 'component-simple.tsx.ejs',
      target: `${path}/${name}/${name}.tsx`,
      props: { name },
    })

    await generate({
      template: 'stitches-component.ts.ejs',
      target: `${path}/${name}/${name}-stitches.ts`,
      props: { name },
    })

    await generate({
      template: 'type-component.ts.ejs',
      target: `${path}/${name}/${name}-type.ts`,
      props: { name },
    })

    success(`Generated file at page/${name}/${name}.tsx`)
  },
}
