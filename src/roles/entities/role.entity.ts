import { Member } from "src/members/entities/member.entity";
import { RolePermission } from "src/role_permissions/entities/role_permission.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles', { schema: 'system' })
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name_th: string;

  @Column()
  name_en: string;

  @Column()
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column()
  created_by: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  modified: Date;

  @Column()
  modified_by: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  deleted: Date;

  @Column()
  deleted_by: number;

  @Column({default: false})
  is_deleted: boolean;

  @Column({ default: true })
  is_inside: boolean;

  @Column({ default: true })
  is_active: boolean;

  @ManyToOne(() => Member, (member) => member.role)
  member: Member

  @OneToMany(() => RolePermission, (rolePermission) => rolePermission.role)
  role_permission: RolePermission[]
}
