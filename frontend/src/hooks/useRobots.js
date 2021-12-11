import { useEffect, useState } from "react";

const useRobots = () => {
    //declaring state to store robots 
    const [robots, setRobots] = useState([]);

    //useEffect hook fecthes api data
    useEffect(() => {
        fetch('http://localhost:8000/api/robots')
            .then(res => res.json())
            .then(data => setRobots(data?.data))
    }, [])

    return { robots };
}

export default useRobots;