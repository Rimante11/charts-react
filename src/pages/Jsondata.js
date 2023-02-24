import axios from "axios";
import { useEffect, useState } from "react";

const JsonData = () => {
  const [posts, setPosts] = useState([]);
  const [showData, setShowData] = useState(false); //pga vill inte se data när sidan laddas första gång

  const showHandler = () => {
    setShowData(!showData);
  };

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  //console.log("All post from fetchad data", posts);

  //mapar igenom Json posts data och tar ur bara post title
  const chechPostTitle = posts.map((post) => (
    <li key={post.id}>Title: {post.title}</li>
  ));

  //const findUsersWithId = posts.map((userID) => (userID = userID.userId));
  //console.log("Post ID's", findUsersWithId);

  //console.log("Kas cia", findUsersWithId);

  // const usersOne = posts.map((user) => {
  //   if (user.userId === 1) {
  //     console.log("All users with id 1: ", user.id);
  //   }
  //   if (user.userId === 3) {
  //     console.log("Users with id 3: ", user.id);
  //   }
  // });

  return (
    <div>
      <p>Jason data fetch comes here</p>
      <button onClick={showHandler}>Show fetch data</button>
      {showData && <li>{chechPostTitle}</li>}
    </div>
  );
};

export default JsonData;
