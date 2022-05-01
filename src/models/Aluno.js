import mongoose from "mongoose";

const alunoSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'usuario', required: true } /**USUARIO**/,
});

const aluno = mongoose.model("alunos", alunoSchema);

export default aluno;
