const API_BASE_ADDRESS = `https://my-json-server.typicode.com/mazzzy/tech-events-app`;

export default class API {
    static getTechEvents() {
        const uri = API_BASE_ADDRESS + "/db";
        return fetch(uri, {
            method: "GET",
        });
    }
}
