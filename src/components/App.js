import { Component } from 'react';

import user from './user.json';
import statistics from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export class App extends Component {
  state = {
    profileData: user,
    statisticData: statistics,
    friendsData: friends,
    transactionsData: transactions,
  };

  render() {
    return (
      <div>
        <Profile userData={this.state.profileData} />
        <Statistics stats={this.state.statisticData} />
        <FriendList friends={this.state.friendsData} />
        <TransactionHistory items={this.state.transactionsData} />
      </div>
    );
  }
}
