import { Link } from "react-router-dom"
function Users({users}) {
    console.log(users)
    return (
        <center>
            <div className="row">
             {users.map((user,i)=>{
                return(
                    <div className="side">
                        <img src={user.avatar_url} height="200px" alt="Profile Image" />
                        <h2>{user.login}</h2>
                        <Link to={`/user/${user.login}`}>Click Profile</Link>
                    </div>
                )
             })}
            </div>
        </center>
    )
}
export default Users