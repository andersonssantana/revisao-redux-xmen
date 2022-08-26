import React from "react";
import UserInfo from '../components/UserInfo';
import PageContent from '../components/PageContent';

class XMenList extends React.Component {

  render() {
    return (
      <main className="charactersMain">
        <UserInfo />
        <PageContent />
      </main>
    );
  }
}

export default XMenList;
