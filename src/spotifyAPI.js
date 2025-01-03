import axios from 'axios';

clientID = 'f9d253e2c3764448a37bd73bfa988c6e';
clientSecret = 'adfddbe9d24e4945b53b999587a0fa35';

/*
 * getAccessToken()
 *  Used to retrieve an access token from Spotify's Web API.
 *  Required for making authorized requests to Spotify endpoints.
*/
async function getAccessToken() {
    const tokenUrl = 'https://accounts.spotify.com/api/token';
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');

    try {
        const response = await axios.post(tokenUrl, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
            },
        });
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error);
        throw error;
    }
} 

/*
 * getTrack()
 * Given a Spotify TrackID, get the track and create a Track Object to be Used
 */ 
async function getTrack(trackID) {
    const token = await getAccessToken();
    const endpoint = `https://api.spotify.com/v1/tracks/${trackID}`;
    
    try {
        const response = await axios.get(endpoint, {
            headers: {
                Authorization: `Bearer ${token}`, // Set the access token
            },
        });
        return response.data; // The track details
    } catch (error) {
        console.error('Error fetching track:', error.response?.data || error.message);
        throw error;
    }
}

/*
 * getAlbum()
 * Given an 
 * 
 */
 async function getAlbum(albumID) {
    const token = await getAccessToken(); // Assume you have a function to get a valid access token
    const endpoint = `https://api.spotify.com/v1/albums/${albumID}`;
    
    try {
        const response = await axios.get(endpoint, {
            headers: {
                Authorization: `Bearer ${token}`, // Set the access token
            },
        });
        return response.data; // The track details
    } catch (error) {
        console.error('Error fetching Album:', error.response?.data || error.message);
        throw error;
    }
}

