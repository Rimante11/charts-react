import axios from "axios";
import { useEffect, useState } from "react";
import TestPage from "./Testpage";
import JsonData from "./Jsondata";
import Json2 from "./Json2";

const Table = () => {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(count * 2);

  //delays setDoubleCount value
  const handleCount = () => {
    setCount(count + 1);
    //setDoubleCount(count * 2);
    //console.log("Value of setCout");
  };

  //useEffect uppdates direct value of count icke försenad
  useEffect(() => {
    setDoubleCount(count * 2);
    //console.log("Useeffect count");
  });

  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  }, []);

  const column = [
    { heading: "Name", value: "name" },
    { heading: "Email", value: "email" },
    { heading: "Phone", value: "phone" },
    { heading: "City", value: "address.city" },
    { heading: "Company", value: "company.name" },
  ];

  return (
    <div>
      <div className="json2DataContainer">
        <Json2 />
      </div>
      <div className="counter">
        <h4>Count with useState</h4>
        <p>useState does not updates latest count, using useEffect</p>
        <p>Count: {count}</p>
        <p>Count *2: {doubleCount}</p>
        <button onClick={handleCount}>Count++</button>
      </div>
      <div className="jsonDataContainer">
        <JsonData />
      </div>
      <h1 className="tableTitle">Dynamic Table</h1>
      <TestPage data={dataTable} column={column} />
    </div>
  );
};

export default Table;
