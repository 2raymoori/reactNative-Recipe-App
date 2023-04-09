import axios from "axios";

export const getRecipesList = async (inputTags = null, size = null) => {
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {from: '0', size: size || '20', tags: inputTags},
        headers: {
            'X-RapidAPI-Key': '5bb62266femsh3015d0d207c3fe6p125406jsn991486cb035c',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };
    return await axios.request(options);
}


