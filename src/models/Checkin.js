import mongoose from "mongoose";

const checkinSchema = new mongoose.Schema({
  aluno: { type: String, required: true }, /**ALUNO**/
  evento: { type: mongoose.Schema.Types.ObjectId, ref: 'aluno', required: true } /**EVENTO**/
});

const checkin = mongoose.model("checkins", checkinSchema);

export default checkin;
