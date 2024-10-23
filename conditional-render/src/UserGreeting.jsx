// using if-else statement

const UserGreeting = ({isLoggedIn, userName}) => {
    if(isLoggedIn){
        return (
            <h1>Welcome {userName}</h1>
        )
    } else {
        return <h2> Please logged in</h2>
    }
    
}
export default UserGreeting;