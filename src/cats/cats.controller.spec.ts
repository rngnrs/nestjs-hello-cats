import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { ListAllEntities } from "./dto";

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all cats', () => {
    let query = new ListAllEntities();
    query.limit = 9001;
    expect(controller.findAll(query)).toBe(`This action returns all cats (limit: ${query.limit} items)`);
  });
});
