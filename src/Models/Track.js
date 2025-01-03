import { Album } from "../Models/Album"

class Track {

    constructor() {
        this.name = "";
        this.artists = [];
        this.duration = "";
        this.album = Album;
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