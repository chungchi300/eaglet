import {
  Entity,
  Column,
  PrimaryColumn,
  Generated,
  ManyToOne,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'
import { createConnection } from 'typeorm'
import User from 'service/Membership/orm/entity/User'
import Tag from 'service/Cms/orm/entity/Tag'

@Entity()
export default class Post {
  @PrimaryColumn()
  @Generated()
  id: number
  @Column('text') content: string

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date
  @ManyToMany(type => Tag, tag => tag.posts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  tags: Tag[]
  @ManyToOne(type => User, user => user.posts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  author: User
}
