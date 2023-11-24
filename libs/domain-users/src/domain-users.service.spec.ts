import { Test, TestingModule } from '@nestjs/testing';
import { DomainUsersService } from './domain-users.service';

describe('DomainUsersService', () => {
  let service: DomainUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DomainUsersService],
    }).compile();

    service = module.get<DomainUsersService>(DomainUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
