import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getDataApi = async () => {
    setLoading(true);
    try {
      const ress = await axios.get(import.meta.env.VITE_REACT_APP);
      setData(ress.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getDataApi();
    console.log(data);
  }, []);
  return (
    <>
      <div className="bg-gray-500 w-[80%] m-auto my-10 p-4 rounded-md text-white">
        <h1 className="text-2xl text-center">LIST PRODUCT</h1>
        <ul className="flex flex-wrap gap-4 justify-center">
          {loading ? (
            <>
              <p>loading....</p>
            </>
          ) : (
            data.map((item, index) => (
              <li key={index}>
                <div className="lg:w-56 bg-white shadow-md h-full text-black p-2 rounded-md">
                  <p>{item.title}</p>
                  <img className="bg-cover rounded-sm mt-2" src={item.image} alt={item.title} />
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
