const app = require("./src/app.js");
const config = require("./src/constants/index");

const PORT = config.PORT || 8080;

app.use(errorHandlerMiddleware = (err, req, res, next) => {
    !err ? res.status(409).json({ message: 'conflict' })
        : res.status(500).json({ error: -1, description: `${err.code} - Route ${err.route}, method ${err.method} not authorized` })
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
