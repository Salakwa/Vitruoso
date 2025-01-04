/* 
 * Functions Below Being Tested are in
 * File: spotifyAPI
 * Functions:
 * - getAccessToken
 * - getTrack
 * - getAlbum
 * - Test Album Should Return Hot Pink (Doja Cat)
 * - Test Track Should Return Too Fast (Sonder)
*/
import { getAccessToken, getTrack, getAlbum } from '../src/spotifyAPI.js';
const testAlbumID = '4MB6xXwCYtFbBW4ReqUWJn';
const testTrackID = '0QyJXG36Q3Kta662XS8GhY?si=b20aa2e55218495e';
(async () => {
    try {
        //console.log('Testing getAccessToken...');
        //const token = await getAccessToken();
        //console.log('Access Token:', token);

        //console.log('\nTesting getTrack...');
        //const track = await getTrack(testTrackID);
        //console.log('Track Details:', track);

        console.log('\nTesting getAlbum...');
        const album = await getAlbum(testAlbumID);
        album.printDetails();
    } catch (error) {
        console.error('Error during testing:', error);
    }
})();
