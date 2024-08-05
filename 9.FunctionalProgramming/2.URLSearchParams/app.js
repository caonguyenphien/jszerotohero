function partical(func,...fixarg){
    return function(...remainingarg){
        return func(...fixarg,...remainingarg);
    };
}

function FetchData(url,apikey,params){
    const queryString = new URLSearchParams(params).toString();
    const fullUrl = `${url}?${queryString}`;
    console.log(`sending request to ${fullUrl}`);
    console.log(`With API key of ${apikey}`);
}

const myApiKey = "My secret API key";
const myApiUrl = "https://myAPI.com/data";
const myGoogleKey = "Google secret API key";
const myGoogleUrl = "https://yourAPI.com/data";

const fetchMyApi = partical(FetchData,myApiUrl,myApiKey);
const fetchGoogle = partical(FetchData,myGoogleUrl,myGoogleKey);

fetchMyApi({Id:1,name:"tung"});
fetchGoogle({search:"LearnToCode"});
