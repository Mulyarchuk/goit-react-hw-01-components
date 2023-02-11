import { Profile } from "./Profile/Profile";
import user from "../json/user.json";

import { Statistics } from "./Statistics/Statistics";
import data from "../json/data.json";

import { FriendList } from "./Friends/FriendList";
import friends from "../json/friends.json";
 
import { TransactionHistory } from "./Transaction/Transaction";
import transactions from "../json/transactions.json"


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: `column`,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        key={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
