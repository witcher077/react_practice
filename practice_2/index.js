
const getData=(url,options,retries=5,delay=100)=>{

    
        fetch(url).then((res)=>{
            if(!res.ok){
                throw new Error("Failed to fetch")
            }
            return res.json()
        }).then((data)=>{
            console.log(data)
        }).catch((error)=>{
            if(retries>0){
                if(retries===1) url="https://dummyjson.com/products/1"  
                console.warn(`Retrying... attempts left: ${retries}`);              
                setTimeout(()=>{
                    getData(url,options,retries-1,delay*2)
                },delay)
            }else{
                console.log("All retries failed",error)
            }
        })

}

getData("https://dummyjson.com/products/fghjk")



// variation -2 

async function fetchWithRetry(url, options = {}, retries = 5, delay = 1000) {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        if (retries === 0) {
            throw error;
        }
        if (retries === 1) {
            url = "https://dummyjson.com/products/1"
        }

        console.warn(`Retrying... attempts left: ${retries}`);

        await new Promise(resolve => setTimeout(resolve, delay));

        return fetchWithRetry(url, options, retries - 1, delay);
    }
}

fetchWithRetry("https://dummyjson.com/products/haja")
    .then(data => console.log(data))
    .catch(err => console.error("Request failed after retries:", err));
