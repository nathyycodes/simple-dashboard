import UserCard from "./UserCard";



export default function UserList({user}){

    return(
        <section>
            {

                user.map(
                user => <UserCard key ={user.id} name ={user.name} email ={user.email} />
                )

            } 
            
            
        </section>
    )
}