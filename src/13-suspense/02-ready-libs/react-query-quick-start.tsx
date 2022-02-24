import { FC } from "react";
import { useQuery } from "react-query";

const getUser = async (userId: number | string) =>
  (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json();

const App: FC = () => {
  const { data } = useQuery([3, "user"], () => getUser(3));

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
