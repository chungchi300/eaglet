import { Entity, Column, PrimaryColumn, Generated } from 'typeorm'
import { createConnection } from 'typeorm'

@Entity()
export default class Otp {
  @PrimaryColumn()
  @Generated()
  id: number
  @Column() username: string
  @Column() code: string
}
