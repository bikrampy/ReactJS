import User1 from './User1'
import User2 from './User2'
import UserFavFood from './UserFavFood'
let loggedInUser = 2;
export default function App() {
  return (
    <>
      <UserFavFood />
      {loggedInUser === 1 ? <User1 /> : <User2 />}
    </>
  )
}

