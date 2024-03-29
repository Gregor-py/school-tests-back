import { prop, Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { UserModel } from '../../user/model/user.model';
import { PassedTaskModel } from '../../passed-task/model/passed-task.model';
import { TestModel } from '../../test/model/test.model';

export interface PassingTestModel extends Base {}

@ApiTags('PassingTest')
export class PassingTestModel extends TimeStamps {
  @prop({ ref: () => UserModel })
  @ApiProperty()
  owner: Ref<UserModel>;

  @prop({ ref: () => TestModel })
  @ApiProperty()
  testParent: Ref<TestModel>;

  @prop({ ref: () => PassedTaskModel })
  @ApiProperty()
  passedTasks: Ref<PassedTaskModel>[];

  @prop()
  @ApiProperty({ default: false })
  isPassed: boolean;

  @prop()
  @ApiProperty()
  correctPercent?: number;
}
