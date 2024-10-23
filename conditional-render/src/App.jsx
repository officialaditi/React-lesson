import List from "./List";
import PackageList from "./PackageList";
import UserGreet from "./UserGreet";
import UserGreeting from "./UserGreeting";


const App = () => {
return( 
    <>
        <UserGreeting isLoggedIn={false} userName='Aditi' />
        <UserGreet isLoggedIn={true} userName='Kirtish' />
       <h1>Travel Package List</h1>
       <ul>
       <PackageList name='Bag' isPacked={false} />
       <PackageList name='Brush' isPacked={true} />
       <PackageList name='Camera' isPacked={true} />
       <PackageList name='Power Bag'isPacked={true}  />
       <PackageList name='Passport' isPacked={false} />
       </ul>

       <h1>Language Learned</h1>
       <ol>
        <List name='Html' isLearned = {true} />
        <List name='Css' isLearned = {true} />
        <List name='Javascript' isLearned = {true} />
        <List name='React' isLearned = {true} />
        <List name='Node.js' isLearned = {false} />
        <List name='Express.js' isLearned = {false} />
        <List name='MongoDB' isLearned = {false} />
       </ol>
    </>
)
}
export default App;