import mongoose, { Model, Schema } from "mongoose";

import { Sample } from "./sample.types";

const sampleSchema: Schema = new Schema<Sample.SampleProps>({
  _id: mongoose.Schema.Types.ObjectId,
  something: { type: String },
});

export default mongoose.model<Sample.SampleProps>("sampleModel", sampleSchema) as Model<Sample.SampleProps>;
