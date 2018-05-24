var path = require('path')
import 'reflect-metadata'

import { Entity, Column, PrimaryColumn } from 'typeorm'
import { createConnection } from 'typeorm'
import Feedback from 'service/Analytic/orm/entity/Feedback'
import Otp from 'service/Membership/orm/entity/Otp'
import User from 'service/Membership/orm/entity/User'
async function reloadDatabase() {
  let connection = await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: 'Mysql!276745',
    database: 'test',
    entities: [Otp, Feedback, User],
    synchronize: false,
    logging: false
  })
  await connection.dropDatabase()
  await connection.synchronize()
  let user = new User()
  user.name = 'jeff'
  user.token = '123'
  user.phone = '67348649'
  user.password = 'qweqwe'
  await connection.manager.save(user)
  let feedback = new Feedback()
  feedback.content = 'eaglet is very efficient'
  feedback.user = user
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
