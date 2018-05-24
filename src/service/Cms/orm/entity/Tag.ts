import {
  Entity,
  Column,
  PrimaryColumn,
  Generated,
  ManyToMany,
  JoinTable
} from 'typeorm'
import { createConnection } from 'typeorm'
import Post from 'service/Cms/orm/entity/Post'

@Entity()
export default class Tag {
  @PrimaryColumn()
  @Generated()
  id: number
  @Column() name: string
  @ManyToMany(type => Post)
  @JoinTable()
  posts: Post[]
}
