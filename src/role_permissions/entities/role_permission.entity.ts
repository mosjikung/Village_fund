import { Function as FunctionModel } from "src/functions/entities/function.entity";
import { Role } from "src/roles/entities/role.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('role_permissions', { schema: 'system' })
export class RolePermission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role_id: number;

  @Column()
  function_id: number;

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

  @Column()
  menu_id: number;
  
  @ManyToOne(() => Role, (role) => role.role_permission)
  @JoinColumn({ name: "role_id" })
  role: Role

  @OneToMany(() => FunctionModel, (functionModel) => functionModel.role_permission)
  function: FunctionModel
}
