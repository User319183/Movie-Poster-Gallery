/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({ // Create a new Vue 3 application instance
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () { // Lifecycle hook that runs when Vue instance is created
            fetch('movies.json').then(response => response.json()).then(json => { // Fetch movies data from JSON file using async HTTP request
                  this.movies = json // Assign the parsed JSON data to the movies array
            }) // Close promise chain
      }, // Close created lifecycle hook
      data() { // Define the reactive data properties for the Vue app
        return { // Return object containing all reactive data
            // This holds your movies.json data.
            movies: [], // Initialize empty array to store movie objects from JSON file
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
            title: "IS219 Gallery (Project 3)", // Set the page title text
            owner: "User319183", // Set GitHub username for footer link
            github: "https://github.com/User319183/Movie-Poster-Gallery" // Set GitHub repository URL
         
      } // Close return object
    }, // Close data function
      methods: { // Define methods that can be called from the Vue template
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            makeTextDate(dateArray) { // Convert date array to string format
                  return dateArray.join('-') // Join array elements with hyphen separator
            }, // Close makeTextDate method
            like(index) { // Handle like button click event
                  this.movies[index].likes++ // Increment the likes count for the movie at given index
            }, // Close like method
            dislike(index) { // Handle dislike button click event
                  this.movies[index].dislikes++ // Increment the dislikes count for the movie at given index
            }, // Close dislike method
            posterClick(index) { // Handle poster image click to cycle through posters
                  this.movies[index].posterindex++ // Increment poster index to show next poster
                  if (this.movies[index].posterindex >= this.movies[index].posters.length) { // Check if we've reached the end of posters array
                        this.movies[index].posterindex = 0 // Reset to first poster if at the end
                  } // Close if statement
            }, // Close posterClick method
            timeText(minutes) { // Convert minutes to hours and minutes text format
                  let hours = Math.floor(minutes / 60) // Calculate hours by dividing minutes by 60 and rounding down
                  let mins = minutes % 60 // Calculate remaining minutes using modulo operator
                  return hours + 'h ' + mins + 'm' // Return formatted string with hours and minutes
            } // Close timeText method
      } // Close methods object
}) // Close Vue.createApp

vue_app.mount("#vue_app") // Mount the Vue app to the DOM element with id "vue_app"
