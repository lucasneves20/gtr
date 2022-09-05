const { system, filesystem } = require('gluegun')

const src = filesystem.path(__dirname, '..')

const cli = async (cmd) =>
  system.run('node ' + filesystem.path(src, 'bin', 'gtr') + ` ${cmd}`)

test('outputs version', async () => {
  const output = await cli('--version')
  expect(output).toContain('0.0.1')
})

test('outputs help', async () => {
  const output = await cli('--help')
  expect(output).toContain('0.0.1')
})

test('generates file', async () => {
  const output = await cli('generate:component foo')

  expect(output).toContain('Generated file at component/foo/foo.tsx')
  const foomodel = filesystem.read('component/foo/foo.tsx')

  expect(foomodel).toContain(`import react from 'react'`)

  // cleanup artifact
  filesystem.remove('models')
})
