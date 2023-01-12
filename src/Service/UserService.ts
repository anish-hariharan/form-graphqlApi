import { UserData } from "../DataSource/DataSource";
import { User } from "../Entity/User";

const user = UserData.getRepository(User);

class UserService {

    public static greet() {
        return "Hello There!"
    }

    public static createUser(data:any){
        user.save(data);
        return "created SucessFully!"
    }
}

export default UserService;