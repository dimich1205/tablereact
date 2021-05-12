import {useState, useEffect} from "react";
import axios from "axios";


const useServerData  = ({url, isButtonClick}) => {

    const [concatData, setConcatData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [isLoaded,setIsLoaded] = useState(false);

    const getData = () => {

    }
    useEffect(() => {

        if (!isButtonClick) {
            return
        } else {

            axios.get(url).then(
                    (res) => {
                        setConcatData(res.data);
                        setIsLoading(false);
                        setIsLoaded(true);
                    }
                )
            }
    }, [url, isButtonClick]);

    return [{concatData, isLoading, isLoaded, setConcatData, setIsLoading}, getData]

}

export default  useServerData;