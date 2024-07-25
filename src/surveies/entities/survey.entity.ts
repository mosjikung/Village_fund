import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({database: 'village-fund', schema: 'public'})
export class Surveies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  run_app_form_no: string;

  @Column()
  title_id: number;

  @Column({ length: 100 })
  first_name: string;
  
  @Column({ length: 100 })
  last_name: string;

  @Column({length: 13})
  citizen_id:string;

  @Column({ length: 10 })
  telephone_no: string

  @Column({ length: 100 })
  email: string

  @Column()
  status_relation: number;

  @Column()
  relation_oth:string;

  @Column({ length: 250 })
  village_fund_name: string

  @Column()
  date_survay: string

  @Column({ length: 100 })
  village_fund_no: string;

  @Column({ length: 250 })
  location: string;

  @Column({ length: 250 })
  address_no: string;

  @Column({ length: 10 })
  moo: string;

  @Column()
  subdistrict_id: number

  @Column()
  municipality_id: number

  @Column()
  district_id: number

  @Column()
  province_id: number

  @Column()
  postcode: string

  @Column({default: false})
  is_legal_entity: boolean;

  @Column({length: 50})
  legal_register_no: string;

  @Column()
  legal_register_date: string;

  @Column()
  total_household: number;

  @Column()
  total_household_member: number;

  @Column()
  type_village_fund: number

  @Column()
  population_male: number;

  @Column()
  population_female: number;

  @Column()
  member_male_age_less_20: number;
  
  @Column()
  member_male_age_20_60:number;

  @Column()
  member_male_age_more_60:number;

  @Column()
  member_female_age_less_20: number;
  
  @Column()
  member_female_age_20_60:number;

  @Column()
  member_female_age_more_60:number;
  
  @Column()
  committee_male: number;
  
  @Column()
  committee_female: number;

  @Column()
  status_village_fund: number;

  @Column()
  is_continue_overdue:boolean;

  @Column()
  is_continue_lawsuit:boolean;

  @Column()
  is_continue_not_committee:boolean;

  @Column()
  is_continue_overdue_debt:boolean;

  @Column()
  is_continue_oth:boolean;

  @Column()
  continue_oth:string;

  @Column()
  is_dis_continue_corruption:boolean;

  @Column()
  is_dis_continue_committee:boolean;

  @Column()
  is_dis_continue_disaster:boolean;

  @Column()
  is_dis_continue_lawsuit:boolean;

  @Column()
  is_dis_continue_oth:boolean;

  @Column()
  dis_continue_oth:string


  
  @Column({default: false})
  is_account_type_1: boolean;
  
  @Column()
  bank_id_1: number;
  
  @Column({ length: 250 })
  bank_name_oth_1: string;
  
  @Column({ length: 50 })
  account_no_1: string;
  
  @Column({ length: 250 })
  branch_1: string;
  
  @Column({default: false})
  is_account_type_2: boolean;
  
  @Column()
  bank_id_2: number;
  
  @Column({ length: 250 })
  bank_name_2_oth: string;
  
  @Column({ length: 50 })
  account_no_2: string;
  
  @Column({ length: 250 })
  branch_2: string;
  
  @Column()
  amount_2: number;
  
  @Column({default: false})
  is_account_type_3: boolean;
  
  @Column()
  bank_id_3: number;
  
  @Column({ length: 250 })
  bank_name_oth_3: string;
  
  @Column({ length: 50 })
  account_no_3: string;
  
  @Column({ length: 250 })
  branch_3: string;
  
  @Column()
  amount_3: number;
  
  @Column({default: false})
  is_account_type_4: boolean;
  
  @Column()
  bank_name_4: string;
  
  @Column()
  bank_id_4: number;
  
  @Column()
  account_no_4: string;
  
  @Column()
  branch_4: string;

  @Column()
  status_profit:number;

  @Column()
  is_year_2566:boolean;

  @Column()
  is_year_2565:boolean;

  @Column()
  is_year_2564:boolean;

  @Column()
  is_year_2563:boolean;

  @Column()
  is_year_2562:boolean;

  @Column()
  is_sent_budget:number;

  @Column()
  is_meeting: number;

  @Column()
  status_manage_welfare: number;

  @Column({default: false})
  is_member_welfare: boolean;
  
  @Column({default: false})
  is_member_welfare_children: boolean;
  
  @Column({default: false})
  is_member_welfare_sick: boolean;
  
  @Column({default: false})
  is_member_welfare_old: boolean;
  
  @Column({default: false})
  is_member_welfare_cremation: boolean;
  
  @Column({default: false})
  is_family_welfare: boolean;
  
  @Column({default: false})
  is_family_welfare_children: boolean;
  
  @Column({default: false})
  is_family_welfare_sick: boolean;
  
  @Column({default: false})
  is_family_welfare_old: boolean;
  
  @Column({default: false})
  is_family_welfare_cremation: boolean;
  
  @Column({default: false})
  is_population_welfare: boolean;
  
  @Column({default: false})
  is_population_welfare_scholarship: boolean;
  
  @Column({default: false})
  is_population_welfare_sick: boolean;
  
  @Column({default: false})
  is_population_welfare_old: boolean;
  
  @Column({default: false})
  is_help_welfare: boolean;
  
  @Column({default: false})
  is_help_welfare_disabled: boolean;

  @Column({default: false})
  is_help_welfare_poor: boolean;

  @Column({default: false})
  is_help_welfare_no_chance: boolean;

  @Column({default: false})
  status_benefit_activity: number;
  
  @Column({default: false})
  is_activity_tradition: boolean;
  
  @Column({default: false})
  is_activity_property: boolean;
  
  @Column({default: false})
  is_activity_religion: boolean;
  
  @Column({default: false})
  is_activity_utilities: boolean;
  
  @Column({default: false})
  is_activity_government: boolean;
  
  @Column({default: false})
  is_activity_red_cross_fair: boolean;

  @Column()
  is_check_PDPA:boolean;

  @Column({default: false})
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
