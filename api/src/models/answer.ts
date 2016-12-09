import * as mongoose from "mongoose";

interface IAnswer {
    answer: string;
    correct: boolean;
    order: number;

}

export interface IAnswerModel extends IAnswer, mongoose.Document {
}


export const AnswerSchema = new mongoose.Schema({
    answer: {type: String, required: true},
    correct: {type: Boolean, required: true},
    order: {type: Number, required: true}
});
