import SampleRepository from "./sample.repository";
import { Sample } from "./sample.types";

class SampleService {
  private sampleRepository: SampleRepository;

  constructor() {
    this.sampleRepository = new SampleRepository();
  }

  public async getSamples(): Promise<Sample.SampleProps[]> {}

  public async createSample(): Promise<void> {}
  public async updateSample(): Promise<void> {}
  public async deleteSample(): Promise<void> {}
}

export default SampleService;
