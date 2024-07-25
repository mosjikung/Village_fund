import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn,OneToMany,OneToOne} from 'typeorm';

@Entity({schema:'master'})
export class Municipalities {
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

              @Column({ type: 'text' })
              description:string;

              @Column()
              zip_code:string;

              @Column()
              country_id:number;

              @Column()
              province_id:number;

              @Column()
              district_id:number;

              @Column()
              is_active:boolean;

              @Column()
              subdistrict_id:number;

              //cascade บันทึก 

}




