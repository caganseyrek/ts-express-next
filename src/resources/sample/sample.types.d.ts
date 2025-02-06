import mongoose from "mongoose";

export namespace Sample {
  export interface SampleProps {
    _id: mongoose.Types.ObjectId;
    something: string;
  }
  export namespace Controller {}
  export namespace Service {}
  export namespace Repository {}
}
