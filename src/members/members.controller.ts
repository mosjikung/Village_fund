import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Public } from 'src/decorators/public.decorator';
import { MemberResponseDTO } from './dto/response-profile-member.dto';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Public()
  @Post('sign_up')
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.membersService.create(createMemberDto);
  }

  // @Get()
  // findAll() {
  //   return this.membersService.findAll();
  // }

  // @Get()
  // findOne() {
  //   return this.membersService.findOne({
  //     where: {
  //       id: 1
  //     }
  //   });
  // }

  @Get('get_user_profile')
  async findOneByToken(@Headers('authorization') authorization: string): Promise<MemberResponseDTO> {
    return await this.membersService.findOneByToken(authorization);
  }


  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
  //   return this.membersService.update(+id, updateMemberDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.membersService.remove(+id);
  // }
}
