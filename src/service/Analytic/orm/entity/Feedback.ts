import { Entity, Column, PrimaryColumn, Generated } from 'typeorm'
import { createConnection } from 'typeorm'

@Entity()
export default class Feedback {
  @PrimaryColumn()
  @Generated()
  id: number
  @Column() content: string
}
