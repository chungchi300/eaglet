var path = require('path')
import 'reflect-metadata'

import { Entity, Column, PrimaryColumn } from 'typeorm'
import { createConnection } from 'typeorm'
import Feedback from '~/service/Analytic/orm/entity/Feedback'
@Entity()
export class Photo {
  @PrimaryColumn() id: number
  @Column() name: string
}

async function reloadDatabase() {
  let connection = await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: 'Mysql!276745',
    database: 'test',
    entities: [Photo, Feedback],
    synchronize: true,
    logging: false
  })
  let feedback = new Feedback()
  feedback.content = 'eaglet is very efficient'
  await connection.manager.save(feedback)
  return connection
}

reloadDatabase()
  .then(res => {
    console.log('reload done')

    process.exit(0)
  })
  .catch(err => {
    throw err
  })
