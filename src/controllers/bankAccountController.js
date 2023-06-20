import BankAccountService from "../services/bankAccountService";


class BankAccountController {

    async create(req, res) {
        try {
            const bankAccount = await BankAccountService.create(req.body);
           
            res.status(201).json(bankAccount);
        } catch (error) {
            console.log(error, "erreur");
           
            res.status(404).json(error)
        }
    }
}

export default new BankAccountController();
