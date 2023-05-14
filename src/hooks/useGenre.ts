import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";



export interface Genre {
    id: number;
    name: string;
    
  }
  
  interface FetchGenreResponse {
    count: number;
    results: Genre[];
  }
  
const useGenre = () =>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading , setLoding] = useState(true);
  
    useEffect(() => {
        const controller = new AbortController();

      setLoding(true);
      apiClient
        .get<FetchGenreResponse>("/genres" , {signal:controller.signal})
        .then((resp) => {
          setGenres(resp.data.results)
          setLoding(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setLoding(false)
        });

        return ()=> controller.abort();
    } , []);

    return {genres , error , isLoading}
}



  export default useGenre ;