const url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config={headers: {Accept:"application/json"}};
        let res = await axios.get(url,config);
        console.log(res.data.joke);
    }
    catch (err) {
        console.log("errors : ",err);
        return "no joke found"
    }   
}