import  express from "express";
const app = express();
import 'dotenv/config';
import ConnectionDB from './config/dbconfig.js'
import  portfolioRoute from "./routes/portfolioRoute.js";
ConnectionDB ()
app.use(express.json());

app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000;
import  path from "path";

if(process.env.NODE_ENV === "production") 
{
    app.use(express.static(path.join(__dirname, "client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client/build/index.html"));
    } );
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});