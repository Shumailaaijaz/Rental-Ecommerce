import { type SchemaTypeDefinition } from 'sanity'
import car from './car'
import userOrder from './userOrder'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [car,userOrder],
}
