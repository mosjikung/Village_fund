import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity(
  'run_app_form_nos',
  {
    database: 'village-fund', 
    schema: 'public'
  }
)
export class RunAppFromNo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  form_no: string;

  @Column()
  survey_id: number;

  @Column({ default: false })
  is_deleted: boolean;

  @Column()
  created: string;

  @Column()
  created_by: number;

  @Column()
  modified: string;

  @Column()
  modified_by: number;
}
