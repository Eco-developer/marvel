import axios from "axios";
import { useCallback, useState } from "react";
import { requestParameters } from "../interfaces";

export const useRequest = () => {
    const [processing, setProcessing] = useState<boolean>(false);

    const handleRequest = useCallback(async ({
        method="GET",
        data={},
        endpoint,
        params={},
        succesAlert=false,
        subresource="",
        headers={},
    }: requestParameters) => {
        setProcessing(true);
        try {
            const options = {
                method,
                url: `${subresource}${endpoint}`,
                data,
                params,
                headers,
            };
            const response = await axios(options);
            setProcessing(false);
            return response.data.data;
        } catch (err:any) {
            setProcessing(false);
            return null;
        }
    }, [setProcessing])

    return {
        processing, 
        handleRequest,
    }
}