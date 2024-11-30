import React, { useEffect } from "react";
import { fetchWithRetry } from "../../promises";

const PromiseExample = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchWithRetry(
        "https://api.github.com/users/nishant25062002",
        3
      );
      console.log(res);
    };

    fetchData();
  }, []);

  const customPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error fetch!");
    }, 2000);
  });

  console.log(customPromise);

  customPromise
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div>
      <h1>Promise</h1>
    </div>
  );
};

export default PromiseExample;
