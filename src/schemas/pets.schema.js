import { model, Schema } from "mongoose"

// defino el modelo con mongoose
const PetsSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    },
    type: {
      type: String,
      require: true
    },
    race: {
      type: String,
      require: true
    },
    age: {
      type: Number,
      require: true
    },
    description: {
      type: String
    },
    adopted: {
      type: Boolean
    }
  }, { timestamps: true } //seguimiento
)
const petsSchema = model("pets", PetsSchema)

export default petsSchema