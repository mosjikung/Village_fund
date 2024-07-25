import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn,OneToMany,OneToOne} from 'typeorm';

@Entity({schema:'system'})
export class Configs {
              @PrimaryGeneratedColumn()
              id: number;

              @Column()
              value: string;

              @Column()
              name: string;

              @Column()
              remark: string;

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
              deleted: string

              @Column()
              deleted_by : number;

              @Column()
              is_active:boolean;

              
              
              //cascade บันทึก 

}



