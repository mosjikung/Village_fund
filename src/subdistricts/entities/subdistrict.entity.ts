import { MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({schema:'master'})

export class Subdistricts {
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

  @Column({ length: 255 })
  code: string;

  @Column({ length: 255 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ length: 5 })
  zip_code: string;

  @Column()
  country_id: number;

  @Column()
  province_id: number;

  @Column()
  district_id: number;

  @Column({default: false})
  is_deleted: boolean;

  @Column({default: true})
  is_active: boolean;
}
  
