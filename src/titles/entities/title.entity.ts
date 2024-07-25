import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn,OneToMany,OneToOne} from 'typeorm';

@Entity({schema:'master'})
export class Titles {
              @PrimaryGeneratedColumn()
              id: number;

              @Column()
              code: string;

              @Column()
              name: string;

              @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
              created: Date;

              @Column()
              created_by:number;

              @Column({default: false })
              is_deleted:boolean;

              @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
              modified: Date;

              @Column()
              modified_by:number;

              @Column()
              sort:number;

              @Column()
              name_en:string;

              @Column()
              is_active:boolean;

              @Column()
              deleted_by:number;

              @Column()
              deleted:string;
              
              //cascade บันทึก 

}



