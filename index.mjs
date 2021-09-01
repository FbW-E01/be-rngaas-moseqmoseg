import http from 'http'


const server = http.createServer((req, res) => {
    console.log("Request received!");
    let value3 = Math.floor(Math.random() * 100);
    res.end(String(value3));
});

server.listen(8081);