// 1. Importando Mongoose
import mongoose from 'mongoose';
// 2. Desestructurando la fn Schema
const { Schema } = mongoose;
// 3. Creando el esquema
const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastname: { type: String, required: true },
});
// 4. Compilando el modelo y exportandolo
export default mongoose.model('user', UserSchema);
