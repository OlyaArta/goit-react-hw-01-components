import user from '../user.json';
import statisticalData from '../statistical-data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendsList from './friends/FriendsList';
// import FriendItem from './friends/FriendItem';
import TransactionHistory from './transaction/TransactionHistory';
import Container from './container/container';

function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
}

export default App;
