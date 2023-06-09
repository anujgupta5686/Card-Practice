import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        // console.log(output.data);
        setCourses(output.data);
      } catch (error) {
        toast.error("Something went wrong.");
      }
      setloading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div>{loading ? <Spinner /> : <Cards courses={courses} />}</div>
    </div>
  );
};

export default App;
