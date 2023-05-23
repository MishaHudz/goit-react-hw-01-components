import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Container } from './Container/Container';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
export const App = () => {
  return (
    <>
      <Container>
        <Profile {...user} />
      </Container>

      <Container>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </Container>

      <Container>
        <FriendList friends={friends} />
      </Container>

      <Container>
        <TransactionHistory transactions={transactions} />
      </Container>
    </>
  );
};
