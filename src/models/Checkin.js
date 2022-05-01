import mongoose from "mongoose";
import evento from "./Evento";

const checkinSchema = new mongoose.Schema({
  aluno: { type: String, required: true }, /**ALUNO**/
  evento: { type: evento, required: true } /**EVENTO**/
});

const checkin = mongoose.model("checkins", checkinSchema);

export default checkin;
