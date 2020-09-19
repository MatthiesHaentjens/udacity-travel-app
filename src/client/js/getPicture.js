/* Global Variables */

// Personal API Key for Pixabay API
const baseUrlPixabay = 'https://pixabay.com/api/?key='
const apiKeyPixabay = '18368092-2f6753a5375f790506b119b7a'

const destination = 'Buenos Aires'


/* Function to GET Pixabay API Data*/
export async function getDestinationPicture() {
    const res = await fetch(baseUrlPixabay + apiKeyPixabay + '&q=' + destination + '&image_type=photo&category=travel&per_page=3');
    try {
      const data = await res.json();
      return data;
    }
    catch(error) {
      console.log("error", error);
    }
}
