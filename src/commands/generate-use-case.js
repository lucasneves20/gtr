module.exports = {
  name: 'generate:usecase',
  alias: ['g uc'],
  run: async (toolbox) => {
    const {
      parameters,
      template: { generate },
      print: { success, error },
    } = toolbox

    const name = parameters.first

    if (!name) {
      error('Não foi posto um nome do component ou outro erro não reconhecido')
      return 
    }

    await generate({
      template: 'component-simple.tsx.ejs',
      target: `src/useCases/${name}/${name}.tsx`,
      props: { name },
    })

    await generate({
      template: 'stitches-component.ts.ejs',
      target: `src/useCases/${name}/${name}-stitches.ts`,
      props: { name },
    })

    await generate({
      template: 'type-component.ts.ejs',
      target: `src/useCases/${name}/${name}-type.ts`,
      props: { name },
    })

    success(`
        Arquivo gerado useCases/${name}/${name}.tsx
        Arquivo gerado useCases/${name}/${name}-stitches.ts
        Arquivo gerado useCases/${name}/${name}-type.ts
      `)
  },
}
