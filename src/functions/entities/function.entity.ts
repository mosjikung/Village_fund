import { Menu } from "src/menus/entities/menu.entity";
import { RolePermission } from "src/role_permissions/entities/role_permission.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('functions', { schema: 'system' })
export class Function {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  menu_id: number;

  @Column()
  name: string;

  @ManyToOne(() => RolePermission, (rolePermission) => rolePermission.function)
  @JoinColumn({ name: "id" })
  role_permission: RolePermission

  @ManyToOne(() => Menu, (menu) => menu.function)
  @JoinColumn({ name: "menu_id" })
  menu: Menu
}
