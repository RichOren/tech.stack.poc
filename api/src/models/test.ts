import * as mongoose from "mongoose";
import {IQuestionModel, QuestionSchema} from "./question";

interface ITest {
    title: string;
    summary: string;
    description: string;
    startDate: string;
    endDate: string;
    allowedAttempts: number;
    randomizeQuestions: boolean;
    passingScore: number;
    active: boolean;
    questions: Array<IQuestionModel>

}

interface ITestModel extends ITest, mongoose.Document {
}

let testSchema = new mongoose.Schema({
    title: {type: String, required: true},
    summary: String,
    description: String,
    startDate: String,
    endDate: {type: String, required:true},
    allowedAttempts: {type: Number, required:true},
    randomizedQuestions: Boolean,
    passingScore: {type:Number, required: true},
    active: Boolean,
    questions: {type: [QuestionSchema], required: true}
});

const Test = mongoose.model<ITestModel>("Test", testSchema);
export = Test;
