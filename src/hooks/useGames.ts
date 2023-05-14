import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platfrom {
  id : number,
  name : string,
  slug : string
}

export interface Game {
    id: number;
    name: string;
    background_image : string
    parent_platforms: {platform : Platfrom} [],
    metacritic : number
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
  
const useGames = () =>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading , setLoding] = useState(true);
  
    useEffect(() => {
        const controller = new AbortController();

      setLoding(true);
      apiClient
        .get<FetchGamesResponse>("/games" , {signal:controller.signal})
        .then((resp) => {
          setGames(resp.data.results)
          setLoding(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
          setLoding(false)
        });

        return ()=> controller.abort();
    } , []);

    return {games , error , isLoading}
}



  export default useGames;