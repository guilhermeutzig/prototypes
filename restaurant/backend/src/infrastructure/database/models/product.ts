import {
  Model,
  Table,
  AutoIncrement,
  PrimaryKey,
  Column,
  AllowNull,
  NotEmpty,
  BeforeSave
} from 'sequelize-typescript'

export interface IProduct {
     id?: number
     name: string
     price: number
     rating: number
     description: string
     category: string
 }

 @Table({
   tableName: 'products'
 })
export default class Product extends Model<Product> implements IProduct {
    @PrimaryKey
    @AutoIncrement
    @NotEmpty
    @Column
    public id?: number

    @AllowNull(false)
    @NotEmpty
    @Column
    public name!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    public price!: number

    @AllowNull(false)
    @NotEmpty
    @Column
    public rating!: number

    @AllowNull(true)
    @Column
    public description!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    public category!: string
}
