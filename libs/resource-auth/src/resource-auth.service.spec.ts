import { Test, TestingModule } from '@nestjs/testing';
import { ResourceAuthService } from './resource-auth.service';

describe('ResourceAuthService', () => {
  let service: ResourceAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourceAuthService],
    }).compile();

    service = module.get<ResourceAuthService>(ResourceAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
