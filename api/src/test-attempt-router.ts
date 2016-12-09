import {Router, Request, Response, NextFunction} from 'express';
import TestAttempt = require('./models/test-attempt');

export class TestAttemptRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get('', this.getAll);
        this.router.post('/search',this.searchTestAttempts);
        this.router.post('', this.createTestAttempt);
        this.router.get("/:id", this.findTestAttempt);
        this.router.put("/:id", this.updateTestAttempt);
        this.router.delete('/:id', this.deleteTestAttempt);
    }

    public getAll(request: Request, response: Response, next: NextFunction) {
        TestAttempt.find((err, TestAttempts)=>{
            if(TestAttemptRouter.handleError(err,response)){return;}
            response.json(TestAttempts);
        });
    }

    public findTestAttempt(request: Request, response: Response, next: NextFunction){
        TestAttempt.findOne({_id:request.params.id},(err, TestAttempt)=>{
            if(TestAttemptRouter.handleError(err,response)){return;}
            if(TestAttempt){
                response.json(TestAttempt);
            }else{
                response.status(404).send();
            }
        });
    }

    public createTestAttempt(request:Request, response:Response, next:NextFunction){
        let newTestAttempt = new TestAttempt(request.body);
        newTestAttempt.save((err)=>{
            if(TestAttemptRouter.handleError(err, response)){ return;}
            response.json(newTestAttempt);
        });
    }

    public updateTestAttempt(request:Request, response:Response, next:NextFunction){
        let update = request.body;
        TestAttempt.findByIdAndUpdate(request.params.id,{$set:update},{new:true},(err,test)=>{
            if(TestAttemptRouter.handleError(err,response)){ return;}
            if(test == null){
                response.status(404).send();
                return;
            }
            response.json(test);
        });
    }

    public deleteTestAttempt(request:Request, response:Response, next:NextFunction){
        TestAttempt.findByIdAndRemove(request.params.id,(err,test)=>{
            if(TestAttemptRouter.handleError(err,response)){return;}
            if(test == null){
                response.status(404).send();
                return;
            }
            response.status(204).send();
        });
    }
    public searchTestAttempts(request:Request, response:Response, next:NextFunction){
        TestAttempt.find(request.body,(err,Users)=>{
            if(TestAttemptRouter.handleError(err,response)){return;}
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

const testAttemptRoutes = new TestAttemptRouter();
testAttemptRoutes.init();

export const TestAtteptRoutes =  testAttemptRoutes.router;