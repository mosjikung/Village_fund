import { HttpException, Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './entities/member.entity';
import * as bcrypt from 'bcrypt';
import * as dayjs from 'dayjs';
import { JwtService } from '@nestjs/jwt';
import { MemberResponseDTO } from './dto/response-profile-member.dto';
import { extractTokenFromHeader } from 'src/utility/utility';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
    private jwtService: JwtService,
  ) {}

  async create(createMemberDto: CreateMemberDto) {
    try {
      const dateNow = dayjs().utcOffset(7).format('YYYY-MM-DD HH:mm:ss');
      const hash = await bcrypt.hash(createMemberDto.password, 10);
      createMemberDto.username = createMemberDto.email
      createMemberDto.password = hash;
      createMemberDto.created = dateNow;
      createMemberDto.modified = dateNow;
      const dataInsert = this.memberRepository.create(createMemberDto)
      const responseData = await this.memberRepository.save(dataInsert);
      return responseData;
    } catch (error) {
      throw new HttpException({
        error_code: 5000,
        message_code: 'interServerError',
        error: error
      }, 500);
    }
  }

  findAll( QueryParams) { 
    this.memberRepository.find()
  }

  async getMemberProfile(id: number) {
    try {
      const profiles: unknown = await this.memberRepository.findOne({
        relations: {
          role: {
            role_permission: {
              function: {
                menu: true
              },
            }
          },
        },
        select: {
          id: true,
          first_name: true,
          last_name: true,
          username: true,
          email: true,
          phone_number: true,
          role: {
            name_th: true,
            name_en: true,
            role_permission: {
              id: true,
              role_id: true,
              function: {
                id: true,
                name: true,
                menu: {
                  id: true,
                  link: true,
                  menu_type: true,
                  group: true,
                  parent_id: true,
                  level: true,
                  is_label: true,
                  regex: true,
                  name_th: true,
                  name_en: true
                }
              }
            }
          },
        },
        where: {
          id: id
        }
      });
      return profiles as MemberResponseDTO
    } catch (error) {
      console.log(error)
      throw new HttpException({
        error: error
      }, 500);
    }
  }

  async findOne(id: number) {
    
  }
  
  async findOneByToken(jwtToken: string) {
    try {
      const token = extractTokenFromHeader(jwtToken)
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: process.env.JWT_SECRET
        }
      );
      
      const profiles = await this.getMemberProfile(payload?.id)
      return profiles
    } catch (error) {
      throw new HttpException({
        error_code: 5000,
        message_code: 'interServerError',
        error: error
      }, 500);
    }
  }

  /*
    ฟังก์ชั่น สำหรับเทียบ password ที่ส่งเข้ามาโดยเทียบด้วย  bcrypt
    - ถ้าถูกต้อง return ข้อมูล user
    - ถ้าไม่ถูกต้อง throw UnauthorizedException error
  */
  async validateMember(email: string, password: string) {
    const member = await this.memberRepository.findOneBy(
      { 
        email: email
      }
    );
    const passwordIsValid = await bcrypt.compare(password, member.password);
    if (!passwordIsValid) {
      throw new HttpException({
        error_code: 4001,
        message_code: 'invalidPassword'
      }, 404)
    }
    return member;
  }

  
}
