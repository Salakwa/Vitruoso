import { Album } from "../Models/Album.js"

class Track {

    constructor(songName, songArtists, songID, songDuration, songsAlbum) {
        this.name = songName;
        this.artists = songArtists;
        this.trackID = songID;
        this.duration = songDuration;
        this.album = songsAlbum;
    }

    printTrackDetails() {
        const artistNames = this.artists.join(", "); // Join artist names with commas
        console.log(`Track: ${this.name}`);
        console.log(`Artists: ${artistNames}`);
        console.log(`Duration: ${this.duration}`);
        console.log(`Album: ${this.album.name}`); // Assumes Album has a 'name' property
    } 
    


}


export { Track }