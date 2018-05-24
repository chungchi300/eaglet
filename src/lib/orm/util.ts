var path = require('path')
import 'reflect-metadata'

import { Entity, Column, PrimaryColumn, Connection } from 'typeorm'
import { createConnection, getConnection } from 'typeorm'

import Feedback from 'service/Analytic/orm/entity/Feedback'
import Otp from 'service/Membership/orm/entity/Otp'
import User from 'service/Membership/orm/entity/User'
import Tag from 'service/Cms/orm/entity/Tag'
import Menu from 'service/Cms/orm/entity/Menu'

import Post from 'service/Cms/orm/entity/Post'

export async function reloadDatabase() {
  console.log('reload database start')
  const connection = await DB()
  await connection.dropDatabase()
  await connection.synchronize()
  console.log('reload database end')

  return connection
}
export async function DB() {
  try {
    let connection = getConnection()

    return connection
  } catch (connectionError) {
    console.log('connection not found create ')
  }
  return await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: 'Mysql!276745',
    database: 'test',
    entities: [Otp, Feedback, User, Tag, Menu, Post],
    synchronize: false,
    logging: false
  })
}
