import { PartialType } from '@nestjs/swagger';
import { CreateComitteeFundDto } from './create-comittee_fund.dto';

export class UpdateComitteeFundDto extends PartialType(CreateComitteeFundDto) {}
