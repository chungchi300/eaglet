import { Entity, Column, PrimaryColumn, Generated, OneToMany } from 'typeorm'
import { createConnection } from 'typeorm'
import Feedback from 'service/Analytic/orm/entity/Feedback'
import Post from 'service/Cms/orm/entity/Post'

@Entity()
export default class User {
  @PrimaryColumn()
  @Generated()
  id: number
  @Column() token: string
  @Column({ nullable: true, unique: true })
  phone: string
  @Column({ default: false })
  phoneVerified: boolean

  @Column({ nullable: true, unique: true })
  email: string

  @Column({ default: false })
  emailVerified: boolean

  @Column() password: string
  @Column() name: string
  @Column({ default: false })
  banned: boolean

  @OneToMany(type => Feedback, feedback => feedback.user) // note: we will create author property in the Photo class below
  feedbacks: Feedback[]

  @OneToMany(type => Post, post => post.author) // note: we will create author property in the Photo class below
  posts: Post[]
}
