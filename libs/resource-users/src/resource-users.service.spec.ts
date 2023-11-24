import { Test, TestingModule } from '@nestjs/testing';
import { ResourceUsersService } from './resource-users.service';

describe('ResourceUsersService', () => {
  let service: ResourceUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourceUsersService],
    }).compile();

    service = module.get<ResourceUsersService>(ResourceUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
