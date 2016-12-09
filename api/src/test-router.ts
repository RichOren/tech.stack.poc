import {Router, Request, Response, NextFunction} from 'express';
import Test = require('./models/test');

export class TestRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get('', this.getAll);
        this.router.post('/search',this.searchTests);
        this.router.post('', this.createTest);
        this.router.get("/:id", this.findTest);
        this.router.put("/:id", this.updateTest);
        this.router.delete('/:id', this.deleteTest);
    }

    public getAll(request: Request, response: Response, next: NextFunction) {
        Test.find((err, Tests)=>{
            if(TestRouter.handleError(err,response)){return;}
            response.json(Tests);
        });
    }

    public findTest(request: Request, response: Response, next: NextFunction){
        Test.findOne({_id:request.params.id},(err, Test)=>{
            if(TestRouter.handleError(err,response)){return;}
            if(Test){
                response.json(Test);
            }else{
                response.status(404).send();
            }
        });
    }

    public createTest(request:Request, response:Response, next:NextFunction){
        let newTest = new Test(request.body);
        newTest.save((err)=>{
            if(TestRouter.handleError(err, response)){ return;}
            response.json(newTest);
        });
    }

    public updateTest(request:Request, response:Response, next:NextFunction){
        let update = request.body;
        Test.findByIdAndUpdate(request.params.id,{$set:update},{new:true},(err,test)=>{
            if(TestRouter.handleError(err,response)){ return;}
            if(test == null){
                response.status(404).send();
                return;
            }
            response.json(test);
        });
    }

    public deleteTest(request:Request, response:Response, next:NextFunction){
        Test.findByIdAndRemove(request.params.id,(err,test)=>{
            if(TestRouter.handleError(err,response)){return;}
            if(test == null){
                response.status(404).send();
                return;
            }
            response.status(204).send();
        });
    }
    public searchTests(request:Request, response:Response, next:NextFunction){
        Test.find(request.body,(err,Users)=>{
            if(TestRouter.handleError(err,response)){return;}
            response.json(Users);
        });
    }
    private static handleError(err, response):boolean{
        if(err){
            response.send(err);
            return true;
        }
        return false;
    }

}

const testRoutes = new TestRouter();
testRoutes.init();

export const TestRoutes =  testRoutes.router;