import { Role } from "src/roles/entities/role.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('members', { schema: "system" })
export class Member {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @Column({ default: false })
  is_deleted:boolean

  @Column()
  created: string;
  
  @Column()
  created_by: number;

  @Column()
  modified: string;

  @Column()
  modified_by: number;

  @OneToOne(() => Role, (role) => role.member)
  @JoinColumn({ name: "role_id" })
  role: Role
}
