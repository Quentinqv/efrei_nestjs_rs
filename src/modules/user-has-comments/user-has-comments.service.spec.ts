import { Test, TestingModule } from '@nestjs/testing';
import { UserHasCommentsService } from './user-has-comments.service';

describe('UserHasCommentsService', () => {
  let service: UserHasCommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserHasCommentsService],
    }).compile();

    service = module.get<UserHasCommentsService>(UserHasCommentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
