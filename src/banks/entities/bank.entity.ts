import { MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({schema:'master'})

export class Banks {
  @PrimaryGeneratedColumn()
  id: number;

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

  @Column({ length: 250 })
  code: string;

  @Column({ length: 250 })
  name: string;

  @Column()
  sort: number;

  @Column({default: false })
  is_deleted: boolean;

  @Column({ length: 250 })
  full_name_th: string;

  @Column({ length: 250 })
  full_name_en: string;

  @Column({ length: 1024 })
  address_th: string;

  @Column({ length: 1024 })
  address_en: string;

  @Column({default: true})
  is_active: boolean;
}
