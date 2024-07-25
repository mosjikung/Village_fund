import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn,OneToMany,OneToOne} from 'typeorm';

@Entity({schema:'public'})
export class Comittee_funds {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  citizen_id: string;

  @Column()
  position:string;

  @Column()
  date:string;

  @Column()
  ages:number;

  @Column()
  address:string;

  @Column()
  telephone_no:string;

  @Column()
  created: string;

  @Column()
  created_by:number;

  @Column({default: false })
  is_deleted:boolean;

  @Column()
  modified: string;

  @Column()
  modified_by:number;

  @Column()
  survey_id: number
  //cascade บันทึก 

}


