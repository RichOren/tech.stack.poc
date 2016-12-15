import * as mongoose from "mongoose";
import {AnswerSchema, IAnswerModel} from "./answer";

interface IQuestion {
    question: string;
    notes: string;
    order: string;
    randomizeAnswerOrdering
    answers: Array<IAnswerModel>;
}

export interface IQuestionModel extends IQuestion, mongoose.Document {
}

export const QuestionSchema = new mongoose.Schema({
    question: {type: String, required: true},
    notes: String,
    order: Number,
    answers: {type: [AnswerSchema], required: true}
});