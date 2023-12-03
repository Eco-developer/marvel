export type requestParameters = {
    method?: string,
    data?: {
        [key : string]: any
    },
    endpoint: string,
    params?: {
        [key : string]: string,
    },
    succesAlert?: boolean,
    subresource?: string,
    headers?: {
        [key : string]: string,
    },
}