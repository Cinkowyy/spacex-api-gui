export default class DataHandler{

    static async fetchData(target) {
        let jsonData = ["test"];
        try {
            //let response = await fetch(`https://api.spacexdata.com/v4/${target}`);
            //jsonData = await response.json();
        } catch(e) {
            console.log("Fetching data failed");
        }

        return jsonData;
    }
}