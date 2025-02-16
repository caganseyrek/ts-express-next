import { Sample } from "./sample.types";

class SampleRepository {
  public async findById(params: Sample.FindByIdProps): Promise<Sample.SampleProps | null> {}
  public async findByUserId(params: Sample.FindByUserIdProps): Promise<Sample.SampleProps[]> {}

  public async createResource(params: Sample.Repository.CreateProps): Promise<void> {}
  public async updateSample(params: Sample.Repository.UpdateProps): Promise<void> {}
  public async deleteSample(params: Sample.Repository.DeleteProps): Promise<void> {}
}

export default SampleRepository;
