import { FC } from "react";
import useSWR from "swr";

const getUser = async (userId: number | string) =>
  (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json();

const App: FC = () => {
  const { data } = useSWR([3, "user"], getUser);

  return (
    <div className="App">
      {data ? (
        <>
          <h2>{data.name}</h2>
          <p>User ID:{data.id}</p>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
      ;
    </div>
  );
};

export default App;
