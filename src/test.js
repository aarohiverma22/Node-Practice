const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  //Req creation
  console.log(req.url, req.method, req.header);
  //Sending Response

  //Routing Request (if else)

  // res.setHeader("Content-type", "json");
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node Practice</title></head>");
  if (req.url === "/") {
    res.write("<h1>Home Page </h1>");
    res.write("<body><h1>Node Practice</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.write("<h1>Products</h1>");
  }
  //taking user input
  else if (req.url === "/submit-details") {
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write("<body>");
    res.write("<h1>Node Practice</h1>");
    res.write('<form action="/submit" method="POST">');
    // Name
    res.write('<label for="name">Name:</label>');
    res.write(
      '<input type="text" id="name" name="name" placeholder="Enter name">',
    );
    res.write("<br><br>");
    // Gender
    res.write("<label>Gender:</label><br>");
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label><br>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br>');
    res.write('<input type="radio" id="other" name="gender" value="other">');
    res.write('<label for="other">Other</label>');
    res.write("<br><br>");
    // Submit button
    res.write('<button type="submit">Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  res.write("<body><h1>Node Practice</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
  // process.exit();
});
