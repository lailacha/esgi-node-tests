import mongoose from "mongoose";

const bankAccountSchema = new mongoose.Schema({
    name: { type: String, required: true },
    balance: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const BankAccount = mongoose.model('BankAccount', bankAccountSchema);

export default BankAccount;