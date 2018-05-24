import { reloadDatabase } from 'lib/orm/util'

reloadDatabase()
  .then(res => {
    console.log('reload done')

    process.exit(0)
  })
  .catch(err => {
    throw err
  })
