
import autoBind from "auto-bind"

class UserService {

    constructor(model) {
        this.model = model;
        autoBind(this);
    }

    async create(data) {
        const newUser = new this.model(data);
        await newUser.save();
        return newUser;
    }


}