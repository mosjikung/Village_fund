import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Comittee_funds } from 'src/comittee_funds/entities/comittee_fund.entity';
import { ApiProperty } from '@nestjs/swagger';
export class CreateSurveyDto {

  run_app_form_no: string

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  title_id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  last_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  citizen_id: string;
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  telephone_no: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string

  @IsNumber()
  @ApiProperty()
  status_relation: number;

  @IsString()
  @ApiProperty()
  relation_oth:string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  village_fund_name: string

  @IsString()
  @ApiProperty()
  date_survay: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  village_fund_no: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  location: string;

  @IsString()
  @ApiProperty()
  address_no: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  moo: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  subdistrict_id: number;

  @IsNumber()
  @ApiProperty()
  municipality_id: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  district_id: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  province_id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  postcode: string;

  @IsBoolean()
  @ApiProperty()
  is_legal_entity: boolean;

  @IsString()
  @ApiProperty()
  legal_register_no: string;

  @IsString()
  @ApiProperty()
  legal_register_date: string;

  @IsNumber()
  @ApiProperty()
  total_household: number;

  @IsNumber()
  @ApiProperty()
  total_household_member: number;

  @IsNumber()
  @ApiProperty()
  type_village_fund: number

  @IsNumber()
  @ApiProperty()
  population_male: number;

  @IsNumber()
  @ApiProperty()
  population_female: number;

  @IsNumber()
  @ApiProperty()
  member_male_age_less_20: number;
  
  @IsNumber()
  @ApiProperty()
  member_male_age_20_60:number;

  @IsNumber()
  @ApiProperty()
  member_male_age_more_60:number;
  
  @IsNumber()
  @ApiProperty()
  member_female_age_less_20: number;
  
  @IsNumber()
  @ApiProperty()
  member_female_age_20_60:number;

  @IsNumber()
  @ApiProperty()
  member_female_age_more_60:number;
  
  @IsNumber()
  @ApiProperty()
  committee_male: number;
  
  @IsNumber()
  @ApiProperty()
  committee_female: number;

  @IsNumber()
  @ApiProperty()
  status_village_fund: number

  @IsBoolean()
  @ApiProperty()
  is_continue_overdue:boolean;

  @IsBoolean()
  @ApiProperty()
  is_continue_lawsuit:boolean;

  @IsBoolean()
  @ApiProperty()
  is_continue_not_committee:boolean;

  @IsBoolean()
  @ApiProperty()
  is_continue_overdue_debt:boolean;

  @IsBoolean()
  @ApiProperty()
  is_continue_oth:boolean;

  @IsString()
  @ApiProperty()
  continue_oth:string;

  @IsBoolean()
  @ApiProperty()
  is_dis_continue_corruption:boolean;

  @IsBoolean()
  @ApiProperty()
  is_dis_continue_committee:boolean;

  @IsBoolean()
  @ApiProperty()
  is_dis_continue_disaster:boolean;

  @IsBoolean()
  @ApiProperty()
  is_dis_continue_lawsuit:boolean;

  @IsBoolean()
  @ApiProperty()
  is_dis_continue_oth:boolean;

  @IsBoolean()
  @ApiProperty()
  dis_continue_oth:string

  @IsBoolean()
  @ApiProperty()
  is_account_type_1: boolean;
  
  @IsNumber()
  @ApiProperty()
  bank_id_1: number;
  
  @IsString()
  @ApiProperty()
  bank_name_oth_1: string;
  
  @IsString()
  @ApiProperty()
  account_no_1: string;
  
  @IsString()
  @ApiProperty()
  branch_1: string;
  
  @IsBoolean()
  @ApiProperty()
  is_account_type_2: boolean;
  
  @IsNumber()
  @ApiProperty()
  bank_id_2: number;
  
  @IsString()
  @ApiProperty()
  bank_name_2_oth: string;
  
  @IsString()
  @ApiProperty()
  account_no_2: string;
  
  @IsString()
  @ApiProperty()
  branch_2: string;
  
  @IsNumber()
  @ApiProperty()
  amount_2: number;
  
  @IsBoolean()
  @ApiProperty()
  is_account_type_3: boolean;
  
  @IsNumber()
  @ApiProperty()
  bank_id_3: number;
  
  @IsString()
  @ApiProperty()
  bank_name_oth_3: string;
  
  @IsString()
  @ApiProperty()
  account_no_3: string;
  
  @IsString()
  @ApiProperty()
  branch_3: string;
  
  @IsNumber()
  @ApiProperty()
  amount_3: number;
  
  @IsBoolean()
  @ApiProperty()
  is_account_type_4: boolean;
  
  @IsString()
  @ApiProperty()
  bank_name_4: string;
  
  @IsNumber()
  @ApiProperty()
  bank_id_4: number;
  
  @IsString()
  @ApiProperty()
  account_no_4: string;
  
  @IsString()
  @ApiProperty()
  branch_4: string;

  @IsNumber()
  @ApiProperty()
  status_profit:number;

  @IsBoolean()
  @ApiProperty()
  is_year_2566:boolean;

  @IsBoolean()
  @ApiProperty()
  is_year_2565:boolean;

  @IsBoolean()
  @ApiProperty()
  is_year_2564:boolean;

  @IsBoolean()
  @ApiProperty()
  is_year_2563:boolean;

  @IsBoolean()
  @ApiProperty()
  is_year_2562:boolean;

  @IsNumber()
  @ApiProperty()
  is_sent_budget:number;

  @IsNumber()
  @ApiProperty()
  is_meeting: number;


  @IsNumber()
  @ApiProperty()
  status_manage_welfare: number;
  
  @IsBoolean()
  @ApiProperty()
  is_member_welfare: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_member_welfare_children: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_member_welfare_sick: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_member_welfare_old: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_member_welfare_cremation: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_family_welfare: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_family_welfare_children: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_family_welfare_sick: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_family_welfare_old: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_family_welfare_cremation: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_population_welfare: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_population_welfare_scholarship: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_population_welfare_sick: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_population_welfare_old: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_help_welfare: boolean;

  @IsBoolean()
  @ApiProperty()
  is_help_welfare_disabled: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_help_welfare_poor: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_help_welfare_no_chance: boolean;

  @IsNumber()
  @ApiProperty()
  tatus_benefit_activity: number;

  @IsBoolean()
  @ApiProperty()
  status_benefit_activity: number;
  
  @IsBoolean()
  @ApiProperty()
  is_activity_tradition: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_activity_property: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_activity_religion: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_activity_utilities: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_activity_government: boolean;
  
  @IsBoolean()
  @ApiProperty()
  is_activity_red_cross_fair: boolean;

  @IsBoolean()
  @ApiProperty()
  is_check_PDPA:boolean;

  @IsBoolean()
  @ApiProperty()
  is_deleted: boolean;

  @IsString()
  @ApiProperty()
  created: string;

  @IsNumber()
  @ApiProperty()
  created_by: number;

  @IsString()
  @ApiProperty()
  modified: string;

  @IsNumber()
  @ApiProperty()
  modified_by: number;

  
  @ApiProperty()
  comittee_funds: Comittee_funds[]
}
