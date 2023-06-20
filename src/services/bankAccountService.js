import BankAccount from "../models/bankAccount";
import User from "../models/user";

const BankAccoutService = {

    checkIfAccountBalanceIsValid : (balance) => {
        if(balance < 0 || balance > 1000 ) 
        {
            throw new Error("Balance is not valid")
        }

    },

    checkIfUserHasLessThan5Accounts : async (userId) => {
        let userAccounts = [];
        try {
            userAccounts = await BankAccount.find({userId});
        } catch (error) {
            throw new Error("Couldn't find user accounts'")
        }

        if (userAccounts.length >= 4) {
            throw new Error("User has too many accounts")
        }
    },

    checkIfUserExist : async (userId) => {

        let userExists = false;
        try {
            userExists = await User.exists({ _id: userId });
        } catch (error) {
            throw new Error("Couldn't find user'")
        }

        if (!userExists) {
            throw new Error("User doesn't exist")
        }

    },

    create: async (data) => {
        const { balance, userId } = data;

        BankAccoutService.checkIfUserExist(userId)

      
        BankAccoutService.checkIfUserHasLessThan5Accounts(userId);

     
        BankAccoutService.checkIfAccountBalanceIsValid(balance);

        const newBankAccount = new BankAccount(data);
        await newBankAccount.save();
        return newBankAccount;
    }
    }

export default BankAccoutService;