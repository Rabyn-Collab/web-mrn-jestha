import axios from "axios";
import { useEffect, useState } from "react";




export const useApiHooks = (url, params) => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(url, {
        params: params
      });
      setData(response.data);
      setLoad(false);
    } catch (err) {

      setErr(err.message);
      setLoad(false);

    }
  }
  useEffect(() => {
    getData();
  }, []);
  return [data, load, err];

}