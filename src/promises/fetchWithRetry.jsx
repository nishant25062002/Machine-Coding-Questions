const fetchWithRetry = async (api = "", retries) => {
  let attempt = 0;
  while (attempt < retries) {
    console.log("RUNS", attempt + 1);
    try {
      const response = await fetch(api);

      console.log("before",response);

      if (!response.ok) {
        throw new Error(`HTTP error! status:${response.status}`);
      }

      const data = await response.json();

      console.log("after converted in json",data);
      return data; // Return the parsed JSON data
    } catch (error) {
      console.error(error);
      attempt++;
      if (attempt >= retries) {
        throw new Error(`Failed after ${retries} retries: ${error}`);
      }
    }
  }
};

export default fetchWithRetry;
