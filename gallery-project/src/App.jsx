import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
const App = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);

  const getdata = async () => {
    //get used to fetch data from the server and update the state with the response data.
    //post used to send data to the server and update the state with the response data.
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`,
    );
    setData(response.data);
  };

  useEffect(() => {
    getdata();
  }, [index]); //used to call the getdata function whenever the index state changes. fetch new data from the server whenever clicks the "Next" or "Prev" buttons

  let printUserdata = <h3 className="text-gray-400">No userdata available</h3>;

  if (data.length > 0) {
    // this function used to check if the data array has any elements. If it does, it maps over the data
    printUserdata = data.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
          {/* elem object as a prop and displays the image and author name in a card format. */}
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen text-white overflow-auto">
      <div className="flex flex-wrap gap-4 p-4">{printUserdata}</div>
      <div className="flex justify-center items-center gap-4 p-4">
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }} // used to set the opacity of the "Prev" button to 0.5 when the index is 1, indicating that it is disabled and cannot be clicked.
          className="bg-amber-400 text-sm cursor-pointer text-black px-4 py-2 rounded-2xl"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setData([]);
            }
          }}
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button
          className="bg-amber-400 text-sm cursor-pointer text-black px-4 py-2 rounded-2xl"
          onClick={() => {
            setIndex(index + 1);
            setData([]); // used to clear the data state before fetching new data from the server.
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
