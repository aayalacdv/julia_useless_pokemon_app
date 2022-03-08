import { z } from 'zod'

// name: { type: String, required: true },
// imgUrl: { type: String, required: true },
// votes: { type: Number, required: true, min: 0 },


export const pokemonSchema = z.object({
    name : z.string({
      invalid_type_error: 'must be a string',
      required_error: 'name is required'
    }),
    imgUrl : z.string({
    invalid_type_error: 'imgUrl must be a string',
    required_error: 'imgUrl is required'
    }).url({message : 'msot be a valid url'}),
    votes: z.number({
    required_error : 'votes is required',
    invalid_type_error: 'votes most be an int'
    }).positive()

})