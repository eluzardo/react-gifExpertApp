export const getGifs= async (category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Ig3NnA5NJVDsKk0trjTSejVk3lqfc2YM`
    const respo = await fetch (url);
    const {data} = await respo.json();

    const gifs = data.map (img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;
    
}