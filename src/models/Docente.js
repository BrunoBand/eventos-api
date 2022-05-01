import mongoose from "mongoose";

const docenteSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'usuario', required: true } /**USUARIO**/,
});

const docente = mongoose.model("alunos", docenteSchema);

export default docente;
