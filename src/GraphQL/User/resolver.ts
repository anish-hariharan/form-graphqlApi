import UserService from "../../Service/UserService"

const UserResolver = {
    Query:{
        greet() {
            return UserService.greet();
        }
    },

    Mutation: {
        createUser(parent:any, args:any, context:any){
            const arr = { name : args.name, email :  args.email, contact : args.contact, age : args.age}
            return UserService.createUser(arr)
        }
    }
}

export default UserResolver;