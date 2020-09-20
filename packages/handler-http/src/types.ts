export type HttpRequestObject = {
    headers: { [key: string]: any };
    query: { [key: string]: any };
    body: { [key: string]: any };
    path: { [key: string]: any };
    cookies: { [key: string]: any };
};

export type HandlerHttpContext = {
    http: HttpRequestObject;
};