module.exports = {
  name: 'generate:page',
  alias: ['g'],
  run: async (toolbox) => {
    const {
      parameters,
      template: { generate },
      print: { success, error },
    } = toolbox

    const name = parameters.first

    if (!name) {
      error('Não foi posto um nome do page ou outro erro não reconhecido')
      return 
    }

    await generate({
      template: 'component-simple.tsx.ejs',
      target: `src/page/${name}/${name}.tsx`,
      props: { name },
    })

    await generate({
      template: 'stitches-component.ts.ejs',
      target: `src/page/${name}/${name}-stitches.ts`,
      props: { name },
    })

    await generate({
      template: 'type-component.ts.ejs',
      target: `src/page/${name}/${name}-type.ts`,
      props: { name },
    })

    success(`Generated file at page/${name}/${name}.tsx`)
  },
}
