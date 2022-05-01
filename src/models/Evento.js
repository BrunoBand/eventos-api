import mongoose from "mongoose";
import docente from "./Docente.js";

const eventoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  data: { type: Date, required: true },
  descriacao: { type: String, required: true },
  palavraChave: { type: String, required: true },
  categoria: { type: String, required: true } /**CATEGORIA**/,
  statusEvento: { type: Boolean, default: true },
  local: { type: String, required: true } /**LOCAL**/,
  docente: { type: mongoose.Schema.Types.ObjectId, ref: 'docente', required: true } /**DOCENTE**/,
});

const evento = mongoose.model("eventos", eventoSchema);

export default evento;
