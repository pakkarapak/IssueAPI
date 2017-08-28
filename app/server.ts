import * as express from 'express';//สีฟ้าคือชื่อที่เราตั้งอะไรก็ได้ สีส้ม คือชื่อจริงๆ
import * as bodyParser from 'body-parser'; //เป็นตัวช่วย convert ข้อมูลต่างๆ เป็น JSON
import * as cors from 'cors'; 
import { CompanyController} from './controllers/company';
import { UserController} from './controllers/user';
import { CustomerController } from './controllers/customer';
import { IssueController} from './controllers/issue';

const app: express.Application = express();

const port: string = process.env.PORT || '3000';  // ถ้า process.env.port  มีค่าใช้ process.env.port ถ้าไม่มีใช้ port 3000


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/company',CompanyController);
app.use('/user',UserController);
app.use('/customer',CustomerController);
app.use('/issue',IssueController);

app.listen(port,() => {
    console.log(`Listening at http://localhost:${port}/`);
});




