import express, {Application, Request, Response} from 'express';
import bodyParser from 'body-parser';
import helmet from "helmet";

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());

// Enabled Access-Control-Allow-Origin", "*" in the header to by-pass the CORS error.
app.use((req: Request, res: Response, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  //Needed for PUT requests
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-User-Name");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});


app.get('/hello', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(8080, "0.0.0.0", () => {
  console.log(`server is running on PORT 0.0.0.0:8080`);
});