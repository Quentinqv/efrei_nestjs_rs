import { Test, TestingModule } from '@nestjs/testing';
import { UserHasCommentsController } from './user-has-comments.controller';
import { UserHasCommentsService } from './user-has-comments.service';

describe('UserHasCommentsController', () => {
  let controller: UserHasCommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserHasCommentsController],
      providers: [UserHasCommentsService],
    }).compile();

    controller = module.get<UserHasCommentsController>(UserHasCommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
