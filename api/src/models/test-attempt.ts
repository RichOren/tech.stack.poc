import * as mongoose from "mongoose";
import {IQuestionModel, QuestionSchema} from "./question";

interface ITestAnswer {
    question: string;
    answer: string;
    correct: boolean;
}

interface ITestAnswerModel extends ITestAnswer, mongoose.Document {

}

const TestAnswerSchema = new mongoose.Schema({
    question: {type: String, required: true},
    answer: {type: String, required: true},
    correct: {type: Boolean, required: true}
});

interface ITest {
    testId: string;
    userId: string;
    score: number;
    pass: boolean;
    completedAt: string,
    answers: Array<ITestAnswerModel>
}

interface ITestModel extends ITest, mongoose.Document {
}

let testAttemptSchema = new mongoose.Schema({
    testId: {type: String, required: true},
    userId: {type: String, required: true},
    score: {type: Number, required: true},
    pass: {type: Boolean, required: true},
    completedAt: {type: String, required: true},
    answers: {type: [TestAnswerSchema], required: true}
});

const TestAttempt = mongoose.model<ITestModel>("TestAttempt", testAttemptSchema);
export = TestAttempt;
