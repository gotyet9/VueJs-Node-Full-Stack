import { schema } from 'normalizr'

export const manufacturerSchema = new schema.Entity('manufacturer')

export const productSchema = new schema.Entity('products', {
  manufacturer: manufacturerSchema
})

export const productsSchema = new schema.Array(productSchema)
