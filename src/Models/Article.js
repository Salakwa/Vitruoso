import { Publication } from '../Models/Publication'

class Article extends Publication {

    constructor(publicationName, publicationAuthor) {
        super(publicationName, "Article", publicationAuthor); 
        this.datePosted = " ";
        this.text = " "
        this.media = [];
        this.posted = false;
    }

}

export { Article }; // Export the Admin class for use in other files