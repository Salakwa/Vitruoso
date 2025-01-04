class Album {

    constructor (albumName, albumArtists, albumID, albumType, albumCover, albumReleaseDate, albumSongs) {
        this.name = albumName;
        this.artists = albumArtists;
        this.id = albumID;
        this.type = albumType;
        this.cover = albumCover;
        this.releaseDate = albumReleaseDate;
        this.tracks = albumSongs;
    }

    printDetails() {
        console.log('--- Album Details ---');
        console.log(`Name: ${this.name}`);
        console.log(`Artists: ${this.artists.join(', ')}`);
        console.log(`ID: ${this.id}`);
        console.log(`Type: ${this.type}`);
        console.log(`Cover URL: ${this.coverUrl}`);
        console.log(`Release Date: ${this.releaseDate}`);
        console.log(this.tracks);
    }

}

export { Album }