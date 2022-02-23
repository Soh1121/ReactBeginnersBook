import React, { Suspense } from "react";
import "./styles.css";

let membersCache = null;

const membersResource = (orgCode) => {
  if (membersCache) return membersCache;

  const promise = fetch(`https://api.github.com/orgs/${orgCode}/members`)
    .then((response) => response.json())
    .then((members) => {
      membersCache = members;
    });

  throw promise;
};

const MemberList = ({ orgCode }) => {
  const members = membersResource(orgCode);

  return (
    <ul>
      {members.map((member) => (
        <li key={member.id}>{member.login}</li>
      ))}
    </ul>
  );
};

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <MemberList orgCode="facebook" />
  </Suspense>
);

export default App;
