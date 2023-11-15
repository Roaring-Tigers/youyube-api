const searchForm = document.querySelector('.searchForm');
const searchFormInput = searchForm.querySelector('input');

searchForm.addEventListener('submit', fetchYtVideos)

async function fetchYtVideos(event) {
    event.preventDefault();
    const searchQuery = searchFormInput.value;

    try{
        const response = await fetch("https://www.googleapis.com/youtube/v3/search", {
        method: "GET",
       
        params: {
            key : "",
            q : searchQuery,
            part : "snippet",
            maxResults : 5,
            type : "video",
        },
    })

    const data = await response.json()
    console.log(data)
    }

    catch (error) {
        console.log(error)
    }
    
}

