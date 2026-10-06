const http = require("http");
const fs = require("fs");
const os = require("os");
const url = require("url");
const { log } = require("console");

const myServer = http.createServer((req, res) => {
  //Write file aync and async
  fs.writeFileSync("./demoSync.txt", "Welcome to sync file write");
  fs.writeFile("./demoAsync.txt", "Welcome to async file write", (err) => {
    if (err) throw err;
  });
  //Read file sync and async

  const syncFileText = fs.readFileSync("./demoSync.txt", "utf-8");
  const asyncFileText = fs.readFile(
    "./demoAsync.txt",
    "utf-8",
    (err, result) => {
      if (err) console.log(err);
      else {
        console.log(result);
      }
    },
  );
  console.log(syncFileText, asyncFileText);

  //Above method overrides previous data for multiple input data elements so appendFile is used

  fs.appendFileSync("./demoSync.txt", new Date().getDate().toLocaleString());
  fs.appendFile("./test.txt", "This is appended data", (err) => {
    if (err) console.log(err);
    else console.log("Data appended successfully");
  });

  //To unlink the files use unlinkFile sync and async

  fs.unlinkSync("./demoSync.txt");
  fs.unlink("./demoAsync.txt", (err) => {
    if (err) console.log(err);
    else console.log("Async file deleted successfully");
  });

  console.log(os.cpus().length);
  // switch (req.url) {
  //   case "/":
  //     res.end("HomePage");
  //     break;
  //   case "/contact-us":
  //     res.end("Contact Us");
  //     break;
  //   case "/about-us":
  //     res.end("About Us");
  //     break;
  //   default:
  //     res.end("404 Not Found");
  // }
  // res.end("Server started");

  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", "Heyyyyyyyyy", (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home");
        break;
      case "/about":
        const username = myUrl.query.myName;
        res.end(`username: ${username}`);
        break;
      default:
        res.end("404 Not Found");
    }
  });
});

myServer.listen(8000, () => {
  try {
    console.log("Server started on port 8000");
  } catch (error) {
    console.log(error);
  }
});
// Module Exports:
// function add(a,b){return a+b};
// module.exports = {add, sub}

// Export Objects:
// exports.add = (a,b) => a+b;

//File Handling:
// const fs = require("fs");

//Operating System:
// const os = require("os");

//Uniform Resourse Locator (URL):
// npm i url -> terminal
// const url = require("url");
