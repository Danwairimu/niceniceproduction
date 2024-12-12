const API_BASE_URL = 'http://localhost:8000/api';

// helper function for handling API requests
const apiRequest = async (url, method= 'GET', body=null, token=null) =>{
    const headers={
        'Content-Type': 'application/json',
    }
    // i will add authorisation
    if(token){
        headers['Authorization'] = `Bearer ${token}`;
    }
    try{
        const options={
            method,
            url,
            headers,
            data: body,
        };
        const response = await axios(options);
        return response.data;//will return response directly
    }catch(error){
        console.error('API call failed:', error.response || error.message);
        throw error.response?.data || error.message;
    }
};
// get list of songs
export const getSongs = async(token) =>{
    const url = `${API_BASE_URL}/songs`;
    return await apiRequest(url, 'GET', null, token);
}
// upload a song
export const uploadSong = async(songData, token) =>{
    const url = `${API_BASE_URL}/songs/upload/`;
    return await apiRequest(url, 'POST', songData,token);
}
// download a song
export const downloadSong = async(songId,token) =>{
    const url = `${API_BASE_URL}/songs/${songId}/download/`;
    try{
        const response = await axios.get(url,{
            // will add auth header here
            headers:{
                Authorization: `Bearer ${token}`,
            },
            responseType: 'blob', //for file downloads,really important
        });
        // create url for file blob and trigger download
        const blob = response.data;
        const downloadUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = `song-${songId}.mp3`; //when we have mp4 we will just adjust
        document.body.appendChild(a);
        a.click();
        a.remove();
    }catch (error){
        console.error('Download failed:', error.response || error.message);
        throw error.response?.data || error.message;
    }
};
// fetch an auth token
export const getAuthToken = async(username,password) =>{
    const url = `${API_BASE_URL}/auth/token`;
    const body = {username,password};
    return await apiRequest(url, 'POST', body);
}
// refresh auth token
export const refreshAuthToken = async(refreshToken) => {
    const url = `${API_BASE_URL}/auth/token/refresh/`;
    const body = {refresh: refreshToken};
    return await apiRequest(url, 'POST', body);
}