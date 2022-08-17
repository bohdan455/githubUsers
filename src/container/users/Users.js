import UserInformation from '../../component/userInformaiton/UserInformation';
import './users.css';
const Users = ({searchResult,setUserName}) => {
    return ( 
    <div className="users">
        {searchResult.map(user =>(
            <UserInformation key={user.id} user={user} setUserName= {setUserName}/>
        ))}
    </div> 
    );
}
 
export default Users;