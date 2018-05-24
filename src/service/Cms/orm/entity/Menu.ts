import { Entity, Column, PrimaryColumn, Generated } from 'typeorm'
import { createConnection } from 'typeorm'

@Entity()
export default class Menu {
  @PrimaryColumn()
  @Generated()
  id: number
  @Column() name: string
  @Column() url: string
  @Column() priority: number
}
