
class Publication {

    constructor(publicationTitle, publicationType, publicationAuthor) {
        this.publicationID = 0;
        this.title = publicationTitle;
        this.type = publicationType;
        this.author = publicationAuthor;
        this.posted = false;
        this.datePosted = ' ';
    }

}

export { Publication }