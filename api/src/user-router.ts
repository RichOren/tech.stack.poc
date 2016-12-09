import {Router, Request, Response, NextFunction} from 'express';
import User = require('./models/user');

export class UserRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get('', this.getAll);
        this.router.post('/search',this.searchUsers);
        this.router.post('', this.createUser);
        this.router.get("/:id", this.findUser);
        this.router.put("/:id", this.updateUser);
        this.router.delete('/:id', this.deleteUser);
    }

    public getAll(request: Request, response: Response, next: NextFunction) {
        User.find((err, Users)=>{
            if(UserRouter.handleError(err,response)){return;}
            response.json(Users);
        });
    }

    public findUser(request: Request, response: Response, next: NextFunction){
        User.findOne({_id:request.params.id},(err, User)=>{
            if(UserRouter.handleError(err,response)){return;}
            if(User){
                response.json(User);
            }else{
                response.status(404).send();
            }
        });
    }

    public createUser(request:Request, response:Response, next:NextFunction){
        let newUser = new User(request.body);
        newUser.save((err)=>{
            if(UserRouter.handleError(err, response)){ return;}
            response.json(newUser);
        });
    }

    public updateUser(request:Request, response:Response, next:NextFunction){
        let update = request.body;
        User.findByIdAndUpdate(request.params.id,{$set:update},{new:true},(err,user)=>{
           if(UserRouter.handleError(err,response)){ return;}
           if(user == null){
               response.status(404).send();
               return;
           }
           response.json(user);
        });
    }

    public deleteUser(request:Request, response:Response, next:NextFunction){
        User.findByIdAndRemove(request.params.id,(err,user)=>{
            if(UserRouter.handleError(err,response)){return;}
            if(user == null){
                response.status(404).send();
                return;
            }
            response.status(204).send();
        });
    }

    public searchUsers(request:Request, response:Response, next:NextFunction){
        User.find(request.body,(err,Users)=>{
            if(UserRouter.handleError(err,response)){return;}
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

const userRoutes = new UserRouter();
userRoutes.init();

export const UserRoutes =  userRoutes.router;