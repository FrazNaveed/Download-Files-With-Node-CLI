const Downloader = require("nodejs-file-downloader");
const screenshots = require("./screenshots.json");


for(let i=0; i< screenshots.companies.length; i++)
{

    (async () => {
        //Wrapping the code with an async function, just for the sake of example.
      
        const downloader = new Downloader({
          url: screenshots.companies[i].screenshotUrl, //If the file name already exists, a new file with the name 200MB1.zip is created.
          directory: "./downloads", //This folder will be created, if it doesn't exist.
        });
        try {
          await downloader.download(); //Downloader.download() returns a promise.
      
          console.log("All done");
        } catch (error) {
          //IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
          //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
          console.log("Download failed", error);
        }
      })();







    // axios.get(screenshots.companies[i].screenshotUrl)
    // .then(function (response) {
    //   // handle success
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // .then(function () {
    //   // always executed
    // });
}
