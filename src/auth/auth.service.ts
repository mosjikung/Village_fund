import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Member } from 'src/members/entities/member.entity';
import { MembersService } from 'src/members/members.service';

@Injectable()
export class AuthService {
  constructor(
    private membersService: MembersService,
  //   private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: Member) {
    // validate user ที่ login เข้ามา
    const userLogin = await this.membersService.validateMember(user.email, user.password)
    
    // กำหนด payload สำหรับสร้าง jwt
    const payload = { id: userLogin.id, username: userLogin.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
