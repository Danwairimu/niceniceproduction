const API_BASE_URL = 'http://localhost:8000/api';

// handle API requests
const apiRequest = async(url, method = 'GET',body=null,token=null) =>{
    const headers = {
        'Content-Type': 'application/json',
    }
    if (token){
        headers['Authorization'] = `Bearer ${token}`;
    }
    const options ={
        method,
        headers
    }
    if (body){
        options.body = JSON.stringify(body)
    }
    try{
        const response = await fetch(url, options);
        if (!response.ok){
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    }catch (error){
        console.error('API Request failed:', error)
        throw error
    }
};
// function to get list of songs
export const getSongs = async(token)=>{
    const url = `${API_BASE_URL}/songs`;
    return await apiRequest(url, 'GET', null, token)
}
// upload songs
export const uploadSong = async (songData, token) => {
    const url = `${API_BASE_URL}/songs/upload/`;
    return await apiRequest(url, 'POST', songData, token);
};
// download a song
export const downloadSong = async(songId, token) =>{
    const url = `${API_BASE_URL}/songs/${songId}/download/`;
    try{
        const response = await fetch(url, {
            headers:{
                'Authorization': `Bearer ${token}`,
            },
        });
        if (response.ok){
            const blob = await response.blob();
            const downloadUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download =`song-${songId}.mp3`;//we will adjust for mp4 if we need it one day
            document.body.appendChild(a);
            a.click();
            a.remove();
        }else{
            throw new Error(`Error downloading song: ${response.status}`);
        }
    }catch (error){
        console.error('Download failed:', error);
        throw error
    }
}
// fetch an authorization token
export const getAuthToken = async (username, password) =>{
    const url = `${API_BASE_URL}/auth/token`;
    const body = {username, password};
    return await apiRequest(url, 'POST', body);
}
// Function to refresh the authentication token
export const refreshAuthToken = async (refreshToken) => {
    const url = `${API_BASE_URL}/auth/token/refresh/`;
    const body = { refresh: refreshToken };
    return await apiRequest(url, 'POST', body);
};
