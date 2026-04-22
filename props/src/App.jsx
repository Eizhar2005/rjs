import React from "react";
import Card from "./components/card";
const App = () => {
  const users = [
    {
      user: "Emaan",
    },
    {
      user: "Saad",
    },
  ];
  return (
    <div className="parent">
      {users.map(function (name, idx) {
        return <Card key={idx} user={name.user} />;
      })}
    </div>
  );
};

export default App;
