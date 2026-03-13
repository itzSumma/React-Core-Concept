import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import { Suspense } from "react";
import Friends from "./Friends";
import Posts from "./Posts";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

// const fetchFriends = async()=>{
//   const res = await fetch ("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// }

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function App() {
  const postsPromise = fetchPosts();
  // const friendsPromise = fetchFriends();

  function handleClick() {
    alert(" I am clicked");
  }
  const handleClick2 = () => {
    alert("You have press here");
  };

  const handleAdd = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Hello I Am React</h1>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      {/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise} ></Friends>
      </Suspense> */}

      <Suspense fallback={<h3>Posts are coming...</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>
      {/* Flex container with gap */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}>
        {/* {<button onclick="handleClick()">Click Me</button>} */}

        {/* function reference */}
        <button className="button-hover" onClick={handleClick}>
          Press Me
        </button>

        {/* <button onClick={ function handleClick(){ alert("You have clicked")}}>Press Here</button> */}

        {/* arrow/Inline function   */}
        <button className="button-hover" onClick={() => alert("Pressed here!")}>
          Press Here
        </button>
        {/* Arrow function variable */}
        <button className="button-hover" onClick={handleClick2}>
          Click me Too
        </button>
        <button className="button-hover" onClick={() => alert(" Click 3")}>
          Click Me 3
        </button>
        <button className="button-hover" onClick={() => handleAdd(5)}>
          Click Add
        </button>
      </div>
    </>
  );
}

export default App;
