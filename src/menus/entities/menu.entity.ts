import { Function } from "src/functions/entities/function.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Function as FunctionModel } from "src/functions/entities/function.entity";

@Entity('menus', { schema: 'system' })
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 520 })
  link: string;

  @Column({ length: 50 })
  menu_type: string;

  @Column({ length: 520 })
  group: string;

  @Column()
  parent_id: number;

  @Column({ length: 50 })
  level: string

  @Column({ default: false })
  is_label: boolean;

  @Column({ length: 520 })
  regex: string

  @Column({ length: 520 })
  name_th: string;

  @Column({ length: 520 })
  name_en: string;

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

  @Column()
  system_id: number;

  @ManyToMany(() => FunctionModel, (functionModel) => functionModel.menu)
  function: FunctionModel;
}
