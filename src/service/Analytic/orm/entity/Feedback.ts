import { Entity, Column, PrimaryColumn, Generated, ManyToOne } from 'typeorm'
import { createConnection } from 'typeorm'
import User from 'service/Membership/orm/entity/User'
@Entity()
export default class Feedback {
  @PrimaryColumn()
  @Generated()
  id: number
  @Column() content: string

  @ManyToOne(type => User, user => user.feedbacks, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  user: User
}
