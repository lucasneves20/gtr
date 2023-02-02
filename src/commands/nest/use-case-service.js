module.exports = {
  name: 'use-case',
  alias: ['u'],
  run: async (toolbox) => {
    const {
      parameters,
      template: { generate },
      print: { success, error },
    } = toolbox

    const nameUseCase = parameters.first

    if (!nameUseCase) {
      error('Não foi posto um nome do caso de uso nest.js ou outro erro não reconhecido')
      return 
    }

	// service
    await generate({
      template: 'nest-use-case.ts.ejs',
      target: `src/useCase/${nameUseCase}/${nameUseCase}.service.ts`,
      props: { nameUseCase },
    })

	// contract
    await generate({
      template: 'nest-type.d.ts.ejs',
      target: `src/useCase/${nameUseCase}/contract/${nameUseCase}.d.ts`,
      props: { nameUseCase },
    })

	// mock
    await generate({
      template: 'nest-mock.ts.ejs',
      target: `src/useCase/${nameUseCase}/mock/${nameUseCase}-mock.ts`,
      props: { nameUseCase },
    })

    success(`
        create achive in path useCase ${nameUseCase}/${nameUseCase}.service.ts
        create contract in path useCase ${nameUseCase}/contract/${nameUseCase}.d.ts
        create mock in path useCase ${nameUseCase}/mock/${nameUseCase}-mock.ts
      `)
  },
}
