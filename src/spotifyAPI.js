import axios from 'axios';
import { Album } from '../src/Models/Album.js';
import { Track } from '../src/Models/Track.js';

const clientID = 'f9d253e2c3764448a37bd73bfa988c6e';
const clientSecret = 'adfddbe9d24e4945b53b999587a0fa35';

/*
 * getAccessToken()
 *  Used to retrieve an access token from Spotify's Web API.
 *  Required for making authorized requests to Spotify endpoints.
*/
export async function getAccessToken() {
    const tokenUrl = 'https://accounts.spotify.com/api/token';
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');

    try {
        const response = await axios.post(tokenUrl, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${btoa(`${clientID}:${clientSecret}`)}`,
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
export async function getTrack(trackID) {
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
 * Given a Spotify AlbumID, get the Album and create a Album Object to be Used
 */
export async function getAlbum(albumID) {
    const token = await getAccessToken(); // Assume you have a function to get a valid access token
    const endpoint = `https://api.spotify.com/v1/albums/${albumID}`;
    
    try {
        const response = await axios.get(endpoint, {
            headers: {
                Authorization: `Bearer ${token}`, // Set the access token
            },
        });
        
        const rawAlbum = response.data; 
        const albumName = rawAlbum.name;
        const albumType = rawAlbum.album_type;
        const albumReleaseDate = rawAlbum.release_date;
        const artistNames = rawAlbum.artists.map(artist => artist.name);
        const albumCover = rawAlbum.images[0];

        //Method to Get the Track 
        const tempTrackList = rawAlbum.tracks.items;
        const albumTracks = [];
        for (const currTrack of tempTrackList) {
            const artistNamesList = currTrack.artists.map(artist => artist.name);
            const track = new Track(currTrack.name, artistNamesList, currTrack.id, currTrack.duration_ms, albumName);
            albumTracks.push(track);
        }

        const returnedAlbum = new Album(
            albumName, 
            artistNames, 
            albumID, 
            albumType, 
            albumCover, 
            albumReleaseDate, 
            albumTracks
        );
        return returnedAlbum; 
    } catch (error) {
        console.error('Error fetching Album:', error.response?.data || error.message);
        throw error;
    }
}

