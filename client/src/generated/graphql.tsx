import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Query = {
  __typename?: 'Query';
  capsule?: Maybe<Capsule>;
  capsules?: Maybe<Array<Maybe<Capsule>>>;
  core?: Maybe<Core>;
  cores?: Maybe<Array<Maybe<Core>>>;
  dragon?: Maybe<Dragon>;
  dragons?: Maybe<Array<Maybe<Dragon>>>;
  getAvatar: Scalars['String'];
  history?: Maybe<Array<Maybe<History>>>;
  info?: Maybe<Info>;
  landingpad?: Maybe<Landingpad>;
  landingpads?: Maybe<Array<Maybe<Landingpad>>>;
  launch?: Maybe<Launch>;
  launches?: Maybe<Array<Maybe<Launch>>>;
  launchpad?: Maybe<Launchpad>;
  launchpads?: Maybe<Array<Maybe<Launchpad>>>;
  me?: Maybe<User>;
  mission?: Maybe<Mission>;
  missions?: Maybe<Array<Maybe<Mission>>>;
  payload?: Maybe<Payload>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
  roadster?: Maybe<Roadster>;
  rocket?: Maybe<Rocket>;
  rockets?: Maybe<Array<Maybe<Rocket>>>;
  ship?: Maybe<Ship>;
  ships?: Maybe<Array<Maybe<Ship>>>;
  user: User;
  users: Array<User>;
};


export type QueryCapsuleArgs = {
  capsule_serial: Scalars['String'];
};


export type QueryCapsulesArgs = {
  range?: Maybe<CapsuleRange>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryCoreArgs = {
  core_serial: Scalars['String'];
};


export type QueryCoresArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryDragonArgs = {
  id: Scalars['String'];
};


export type QueryDragonsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryHistoryArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  sort?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};


export type QueryLandingpadArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryLandingpadsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryLaunchArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryLaunchesArgs = {
  range?: Maybe<LaunchRange>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  sort?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryLaunchpadArgs = {
  id: Scalars['String'];
};


export type QueryLaunchpadsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryMissionArgs = {
  id: Scalars['String'];
};


export type QueryMissionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryPayloadArgs = {
  id: Scalars['String'];
};


export type QueryPayloadsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryRocketArgs = {
  id: Scalars['String'];
};


export type QueryRocketsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryShipArgs = {
  id: Scalars['String'];
};


export type QueryShipsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  email: Scalars['String'];
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteUser: Scalars['Boolean'];
  logout: Scalars['Boolean'];
  registerUser: UserResponse;
  loginUser: UserResponse;
  addAvatar: Scalars['Boolean'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};


export type MutationRegisterUserArgs = {
  input: UserInput;
};


export type MutationLoginUserArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationAddAvatarArgs = {
  file: Scalars['Upload'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldErrors>>;
  callback?: Maybe<User>;
};

export type FieldErrors = {
  __typename?: 'FieldErrors';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export enum CapsuleRange {
  Past = 'past',
  Upcoming = 'upcoming'
}

export enum LaunchRange {
  Latest = 'latest',
  Next = 'next',
  Past = 'past',
  Upcoming = 'upcoming'
}

export enum Order {
  Asc = 'asc',
  Desc = 'desc'
}

export type BasicMission = {
  __typename?: 'BasicMission';
  name?: Maybe<Scalars['String']>;
  flight?: Maybe<Scalars['Int']>;
};

export type Capsule = {
  __typename?: 'Capsule';
  capsule_serial?: Maybe<Scalars['String']>;
  capsule_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  original_launch?: Maybe<Scalars['String']>;
  original_launch_unix?: Maybe<Scalars['Float']>;
  missions?: Maybe<Array<Maybe<BasicMission>>>;
  landings?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  reuse_count?: Maybe<Scalars['Int']>;
};

export type Core = {
  __typename?: 'Core';
  core_serial?: Maybe<Scalars['String']>;
  block?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  original_launch?: Maybe<Scalars['String']>;
  original_launch_unix?: Maybe<Scalars['Float']>;
  missions?: Maybe<Array<Maybe<BasicMission>>>;
  reuse_count?: Maybe<Scalars['Int']>;
  rtls_attempts?: Maybe<Scalars['Int']>;
  rtls_landings?: Maybe<Scalars['Int']>;
  asds_attempts?: Maybe<Scalars['Int']>;
  asds_landings?: Maybe<Scalars['Int']>;
  water_landing?: Maybe<Scalars['Boolean']>;
  details?: Maybe<Scalars['String']>;
};

export type Dimension = {
  __typename?: 'Dimension';
  meters?: Maybe<Scalars['Float']>;
  feet?: Maybe<Scalars['Float']>;
};

export type Dragon = {
  __typename?: 'Dragon';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  crew_capacity?: Maybe<Scalars['Int']>;
  sidewall_angle_deg?: Maybe<Scalars['Int']>;
  orbit_duration_yr?: Maybe<Scalars['Int']>;
  dry_mass_kg?: Maybe<Scalars['Int']>;
  dry_mass_lb?: Maybe<Scalars['Int']>;
  first_flight?: Maybe<Scalars['String']>;
  heat_shield?: Maybe<HeatShield>;
  thrusters?: Maybe<Array<Maybe<Thruster>>>;
  launch_payload_mass?: Maybe<Mass>;
  launch_payload_vol?: Maybe<PayloadVolume>;
  return_payload_mass?: Maybe<Mass>;
  return_payload_vol?: Maybe<PayloadVolume>;
  pressurized_capsule?: Maybe<PressurizedCapsule>;
  trunk?: Maybe<Trunk>;
  height_w_trunk?: Maybe<Dimension>;
  diameter?: Maybe<Dimension>;
  wikipedia?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type Engines = {
  __typename?: 'Engines';
  number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  engine_loss_max?: Maybe<Scalars['Int']>;
  propellant_1?: Maybe<Scalars['String']>;
  propellant_2?: Maybe<Scalars['String']>;
  thrust_sea_level?: Maybe<Thrust>;
  thrust_vacuum?: Maybe<Thrust>;
  thrust_to_weight?: Maybe<Scalars['Float']>;
};

export type Fairing = {
  __typename?: 'Fairing';
  height?: Maybe<Dimension>;
  diameter?: Maybe<Dimension>;
};

export type Headquarters = {
  __typename?: 'Headquarters';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type HeatShield = {
  __typename?: 'HeatShield';
  material?: Maybe<Scalars['String']>;
  size_meters?: Maybe<Scalars['Float']>;
  temp_degrees?: Maybe<Scalars['Int']>;
  dev_partner?: Maybe<Scalars['String']>;
};

export type History = {
  __typename?: 'History';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  event_date_utc?: Maybe<Scalars['String']>;
  event_date_unix?: Maybe<Scalars['Float']>;
  flight_number?: Maybe<Scalars['Int']>;
  details?: Maybe<Scalars['String']>;
  links?: Maybe<HistoryLinks>;
};

export type HistoryLinks = {
  __typename?: 'HistoryLinks';
  article?: Maybe<Scalars['String']>;
  reddit?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Info = {
  __typename?: 'Info';
  name?: Maybe<Scalars['String']>;
  founder?: Maybe<Scalars['String']>;
  founded?: Maybe<Scalars['Int']>;
  employees?: Maybe<Scalars['Int']>;
  vehicles?: Maybe<Scalars['Int']>;
  launch_sites?: Maybe<Scalars['Int']>;
  test_sites?: Maybe<Scalars['Int']>;
  ceo?: Maybe<Scalars['String']>;
  cto?: Maybe<Scalars['String']>;
  coo?: Maybe<Scalars['String']>;
  cto_propulsion?: Maybe<Scalars['String']>;
  valuation?: Maybe<Scalars['Float']>;
  headquarters?: Maybe<Headquarters>;
  summary?: Maybe<Scalars['String']>;
};

export type LandingLegs = {
  __typename?: 'LandingLegs';
  number?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
};

export type Landingpad = {
  __typename?: 'Landingpad';
  id?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  landing_type?: Maybe<Scalars['String']>;
  attempted_landings?: Maybe<Scalars['Int']>;
  successful_landings?: Maybe<Scalars['Int']>;
  wikipedia?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
};

export type Launch = {
  __typename?: 'Launch';
  flight_number?: Maybe<Scalars['Int']>;
  mission_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  mission_name?: Maybe<Scalars['String']>;
  launch_year?: Maybe<Scalars['Int']>;
  launch_date_unix?: Maybe<Scalars['Float']>;
  launch_date_utc?: Maybe<Scalars['String']>;
  launch_date_local?: Maybe<Scalars['String']>;
  is_tentative?: Maybe<Scalars['Boolean']>;
  tentative_max_precision?: Maybe<Scalars['String']>;
  tbd?: Maybe<Scalars['Boolean']>;
  launch_window?: Maybe<Scalars['Int']>;
  rocket?: Maybe<LaunchRocket>;
  ships?: Maybe<Array<Maybe<Scalars['String']>>>;
  telemetry?: Maybe<LaunchTelemetry>;
  launch_site?: Maybe<LaunchSite>;
  launch_success?: Maybe<Scalars['Boolean']>;
  links?: Maybe<LaunchLinks>;
  details?: Maybe<Scalars['String']>;
  upcoming?: Maybe<Scalars['Boolean']>;
  static_fire_date_utc?: Maybe<Scalars['String']>;
  static_fire_date_unix?: Maybe<Scalars['Float']>;
  timeline?: Maybe<LaunchTimeline>;
};

export type LaunchLinks = {
  __typename?: 'LaunchLinks';
  mission_patch?: Maybe<Scalars['String']>;
  mission_patch_small?: Maybe<Scalars['String']>;
  reddit_campaign?: Maybe<Scalars['String']>;
  reddit_launch?: Maybe<Scalars['String']>;
  reddit_recovery?: Maybe<Scalars['String']>;
  reddit_media?: Maybe<Scalars['String']>;
  presskit?: Maybe<Scalars['String']>;
  article_link?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
  video_link?: Maybe<Scalars['String']>;
  youtube_id?: Maybe<Scalars['String']>;
  flickr_images?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Launchpad = {
  __typename?: 'Launchpad';
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  vehicles_launched?: Maybe<Array<Maybe<Scalars['String']>>>;
  attempted_launches?: Maybe<Scalars['Int']>;
  successful_launches?: Maybe<Scalars['Int']>;
  wikipedia?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  site_id?: Maybe<Scalars['String']>;
  site_name_long?: Maybe<Scalars['String']>;
};

export type LaunchRocket = {
  __typename?: 'LaunchRocket';
  rocket_id?: Maybe<Scalars['String']>;
  rocket_name?: Maybe<Scalars['String']>;
  rocket_type?: Maybe<Scalars['String']>;
  first_stage?: Maybe<LaunchRocketFirstStage>;
  second_stage?: Maybe<LaunchRocketSecondStage>;
  fairings?: Maybe<LaunchRocketFairings>;
};

export type LaunchRocketFairings = {
  __typename?: 'LaunchRocketFairings';
  reused?: Maybe<Scalars['Boolean']>;
  recovery_attempt?: Maybe<Scalars['Boolean']>;
  recovered?: Maybe<Scalars['Boolean']>;
  ship?: Maybe<Scalars['String']>;
};

export type LaunchRocketFirstStage = {
  __typename?: 'LaunchRocketFirstStage';
  cores?: Maybe<Array<Maybe<LaunchRocketFirstStageCore>>>;
};

export type LaunchRocketFirstStageCore = {
  __typename?: 'LaunchRocketFirstStageCore';
  core_serial?: Maybe<Scalars['String']>;
  flight?: Maybe<Scalars['Int']>;
  block?: Maybe<Scalars['Int']>;
  gridfins?: Maybe<Scalars['Boolean']>;
  legs?: Maybe<Scalars['Boolean']>;
  reused?: Maybe<Scalars['Boolean']>;
  land_success?: Maybe<Scalars['Boolean']>;
  landing_intent?: Maybe<Scalars['Boolean']>;
  landing_type?: Maybe<Scalars['String']>;
  landing_vehicle?: Maybe<Scalars['String']>;
};

export type LaunchRocketSecondStage = {
  __typename?: 'LaunchRocketSecondStage';
  block?: Maybe<Scalars['Int']>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
};

export type LaunchSite = {
  __typename?: 'LaunchSite';
  site_id?: Maybe<Scalars['String']>;
  site_name?: Maybe<Scalars['String']>;
  site_name_long?: Maybe<Scalars['String']>;
};

export type LaunchTelemetry = {
  __typename?: 'LaunchTelemetry';
  flight_club?: Maybe<Scalars['String']>;
};

export type LaunchTimeline = {
  __typename?: 'LaunchTimeline';
  webcast_liftoff?: Maybe<Scalars['Int']>;
  go_for_prop_loading?: Maybe<Scalars['Int']>;
  rp1_loading?: Maybe<Scalars['Int']>;
  stage1_rp1_loading?: Maybe<Scalars['Int']>;
  stage1_lox_loading?: Maybe<Scalars['Int']>;
  stage2_rp1_loading?: Maybe<Scalars['Int']>;
  stage2_lox_loading?: Maybe<Scalars['Int']>;
  engine_chill?: Maybe<Scalars['Int']>;
  prelaunch_checks?: Maybe<Scalars['Int']>;
  propellant_pressurization?: Maybe<Scalars['Int']>;
  go_for_launch?: Maybe<Scalars['Int']>;
  ignition?: Maybe<Scalars['Int']>;
  liftoff?: Maybe<Scalars['Int']>;
  maxq?: Maybe<Scalars['Int']>;
  beco?: Maybe<Scalars['Int']>;
  side_core_sep?: Maybe<Scalars['Int']>;
  side_core_boostback?: Maybe<Scalars['Int']>;
  meco?: Maybe<Scalars['Int']>;
  stage_sep?: Maybe<Scalars['Int']>;
  center_stage_sep?: Maybe<Scalars['Int']>;
  second_stage_ignition?: Maybe<Scalars['Int']>;
  center_core_boostback?: Maybe<Scalars['Int']>;
  fairing_deploy?: Maybe<Scalars['Int']>;
  first_stage_entry_burn?: Maybe<Scalars['Int']>;
  side_core_entry_burn?: Maybe<Scalars['Int']>;
  center_core_entry_burn?: Maybe<Scalars['Int']>;
  seco_1?: Maybe<Scalars['Int']>;
  first_stage_landing_burn?: Maybe<Scalars['Int']>;
  first_stage_landing?: Maybe<Scalars['Int']>;
  side_core_landing?: Maybe<Scalars['Int']>;
  center_core_landing?: Maybe<Scalars['Int']>;
  second_stage_restart?: Maybe<Scalars['Int']>;
  seco_2?: Maybe<Scalars['Int']>;
  payload_deploy?: Maybe<Scalars['Int']>;
  payload_deploy_1?: Maybe<Scalars['Int']>;
  payload_deploy_2?: Maybe<Scalars['Int']>;
  dragon_separation?: Maybe<Scalars['Int']>;
  dragon_solar_deploy?: Maybe<Scalars['Int']>;
  dragon_bay_door_deploy?: Maybe<Scalars['Int']>;
};

export type Location = {
  __typename?: 'Location';
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type Mass = {
  __typename?: 'Mass';
  kg?: Maybe<Scalars['Int']>;
  lb?: Maybe<Scalars['Int']>;
};

export type Mission = {
  __typename?: 'Mission';
  mission_name?: Maybe<Scalars['String']>;
  mission_id?: Maybe<Scalars['String']>;
  manufacturers?: Maybe<Array<Maybe<Scalars['String']>>>;
  payload_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  wikipedia?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type Payload = {
  __typename?: 'Payload';
  payload_id?: Maybe<Scalars['String']>;
  norad_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  cap_serial?: Maybe<Scalars['String']>;
  reused?: Maybe<Scalars['Boolean']>;
  customers?: Maybe<Array<Maybe<Scalars['String']>>>;
  nationality?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  payload_type?: Maybe<Scalars['String']>;
  payload_mass_kg?: Maybe<Scalars['Float']>;
  payload_mass_lbs?: Maybe<Scalars['Float']>;
  orbit?: Maybe<Scalars['String']>;
  orbit_params?: Maybe<PayloadOrbitParams>;
  mass_returned_kg?: Maybe<Scalars['Float']>;
  mass_returned_lbs?: Maybe<Scalars['Float']>;
  flight_time_sec?: Maybe<Scalars['Int']>;
  cargo_manifest?: Maybe<Scalars['String']>;
};

export type PayloadOrbitParams = {
  __typename?: 'PayloadOrbitParams';
  reference_system?: Maybe<Scalars['String']>;
  regime?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  semi_major_axis_km?: Maybe<Scalars['Float']>;
  eccentricity?: Maybe<Scalars['Float']>;
  periapsis_km?: Maybe<Scalars['Float']>;
  apoapsis_km?: Maybe<Scalars['Float']>;
  inclination_deg?: Maybe<Scalars['Float']>;
  period_min?: Maybe<Scalars['Float']>;
  lifespan_years?: Maybe<Scalars['Float']>;
  epoch?: Maybe<Scalars['String']>;
  mean_motion?: Maybe<Scalars['Float']>;
  raan?: Maybe<Scalars['Float']>;
  arg_of_pericenter?: Maybe<Scalars['Float']>;
  mean_anomaly?: Maybe<Scalars['Float']>;
};

export type PayloadVolume = {
  __typename?: 'PayloadVolume';
  cubic_meters?: Maybe<Scalars['Int']>;
  cubic_feet?: Maybe<Scalars['Int']>;
};

export type Position = {
  __typename?: 'Position';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type PressurizedCapsule = {
  __typename?: 'PressurizedCapsule';
  payload_volume?: Maybe<PayloadVolume>;
};

export type Roadster = {
  __typename?: 'Roadster';
  name: Scalars['String'];
  launch_date_utc?: Maybe<Scalars['String']>;
  launch_date_unix?: Maybe<Scalars['Float']>;
  launch_mass_kg?: Maybe<Scalars['Int']>;
  launch_mass_lbs?: Maybe<Scalars['Int']>;
  norad_id?: Maybe<Scalars['Int']>;
  epoch_jd?: Maybe<Scalars['Float']>;
  orbit_type?: Maybe<Scalars['String']>;
  apoapsis_au?: Maybe<Scalars['Float']>;
  semi_major_axis_au?: Maybe<Scalars['Float']>;
  eccentricity?: Maybe<Scalars['Float']>;
  inclination?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  periapsis_arg?: Maybe<Scalars['Float']>;
  period_days?: Maybe<Scalars['Float']>;
  speed_kph?: Maybe<Scalars['Float']>;
  speed_mph?: Maybe<Scalars['Float']>;
  earth_distance_km?: Maybe<Scalars['Float']>;
  earth_distance_mi?: Maybe<Scalars['Float']>;
  mars_distance_km?: Maybe<Scalars['Float']>;
  mars_distance_mi?: Maybe<Scalars['Float']>;
  wikipedia?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
};

export type Rocket = {
  __typename?: 'Rocket';
  id?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  stages?: Maybe<Scalars['Int']>;
  boosters?: Maybe<Scalars['Int']>;
  cost_per_launch?: Maybe<Scalars['Int']>;
  success_rate_pct?: Maybe<Scalars['Float']>;
  first_flight?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  height?: Maybe<Dimension>;
  diameter?: Maybe<Dimension>;
  mass?: Maybe<Mass>;
  payload_weights?: Maybe<Array<Maybe<RocketPayloadWeight>>>;
  first_stage?: Maybe<RocketFirstStage>;
  second_stage?: Maybe<RocketSecondStage>;
  engines?: Maybe<Engines>;
  landing_legs?: Maybe<LandingLegs>;
  flickr_images?: Maybe<Array<Maybe<Scalars['String']>>>;
  wikipedia?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  rocket_id?: Maybe<Scalars['String']>;
  rocket_name?: Maybe<Scalars['String']>;
  rocket_type?: Maybe<Scalars['String']>;
};

export type RocketFirstStage = {
  __typename?: 'RocketFirstStage';
  reusable?: Maybe<Scalars['Boolean']>;
  engines?: Maybe<Scalars['Int']>;
  fuel_amount_tons?: Maybe<Scalars['Float']>;
  burn_time_sec?: Maybe<Scalars['Int']>;
  thrust_sea_level?: Maybe<Thrust>;
  thrust_vacuum?: Maybe<Thrust>;
};

export type RocketPayload = {
  __typename?: 'RocketPayload';
  option_1?: Maybe<Scalars['String']>;
  option_2?: Maybe<Scalars['String']>;
  composite_fairing?: Maybe<Fairing>;
};

export type RocketPayloadWeight = {
  __typename?: 'RocketPayloadWeight';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  kg?: Maybe<Scalars['Float']>;
  lb?: Maybe<Scalars['Float']>;
};

export type RocketSecondStage = {
  __typename?: 'RocketSecondStage';
  engines?: Maybe<Scalars['Int']>;
  fuel_amount_tons?: Maybe<Scalars['Float']>;
  burn_time_sec?: Maybe<Scalars['Int']>;
  thrust?: Maybe<Thrust>;
  payloads?: Maybe<RocketPayload>;
};

export type Ship = {
  __typename?: 'Ship';
  ship_id?: Maybe<Scalars['String']>;
  ship_name?: Maybe<Scalars['String']>;
  ship_model?: Maybe<Scalars['String']>;
  ship_type?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  active?: Maybe<Scalars['Boolean']>;
  imo?: Maybe<Scalars['Int']>;
  mmsi?: Maybe<Scalars['Int']>;
  abs?: Maybe<Scalars['Int']>;
  class?: Maybe<Scalars['Int']>;
  weight_lbs?: Maybe<Scalars['Float']>;
  weight_kg?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Int']>;
  home_port?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  speed_kn?: Maybe<Scalars['Float']>;
  course_deg?: Maybe<Scalars['Float']>;
  position?: Maybe<Position>;
  successful_landings?: Maybe<Scalars['Int']>;
  attempted_landings?: Maybe<Scalars['Int']>;
  missions?: Maybe<Array<Maybe<BasicMission>>>;
  url?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type Thrust = {
  __typename?: 'Thrust';
  kN?: Maybe<Scalars['Float']>;
  lbf?: Maybe<Scalars['Float']>;
};

export type Thruster = {
  __typename?: 'Thruster';
  type?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  pods?: Maybe<Scalars['Int']>;
  fuel_1?: Maybe<Scalars['String']>;
  fuel_2?: Maybe<Scalars['String']>;
  thrust?: Maybe<Thrust>;
};

export type Trunk = {
  __typename?: 'Trunk';
  trunk_volume?: Maybe<PayloadVolume>;
  cargo?: Maybe<TrunkCargo>;
};

export type TrunkCargo = {
  __typename?: 'TrunkCargo';
  solar_array?: Maybe<Scalars['Int']>;
  unpressurized_cargo?: Maybe<Scalars['Boolean']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type LaunchFragmentFragment = (
  { __typename?: 'Launch' }
  & Pick<Launch, 'details' | 'is_tentative' | 'flight_number' | 'mission_name' | 'launch_success' | 'launch_date_utc' | 'upcoming'>
  & { links?: Maybe<(
    { __typename?: 'LaunchLinks' }
    & Pick<LaunchLinks, 'mission_patch_small'>
  )> }
);

export type UserFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email' | 'first_name' | 'last_name' | 'created_at' | 'updated_at'>
);

export type AddAvatarMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type AddAvatarMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addAvatar'>
);

export type LoginUserMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginUserMutation = (
  { __typename?: 'Mutation' }
  & { loginUser: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldErrors' }
      & Pick<FieldErrors, 'field' | 'message'>
    )>>, callback?: Maybe<(
      { __typename?: 'User' }
      & UserFragmentFragment
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterUserMutationVariables = Exact<{
  input: UserInput;
}>;


export type RegisterUserMutation = (
  { __typename?: 'Mutation' }
  & { registerUser: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldErrors' }
      & Pick<FieldErrors, 'field' | 'message'>
    )>>, callback?: Maybe<(
      { __typename?: 'User' }
      & UserFragmentFragment
    )> }
  ) }
);

export type GetAvatarQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAvatarQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getAvatar'>
);

export type HistoricalEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type HistoricalEventsQuery = (
  { __typename?: 'Query' }
  & { history?: Maybe<Array<Maybe<(
    { __typename?: 'History' }
    & Pick<History, 'id' | 'title' | 'details' | 'event_date_unix' | 'event_date_utc'>
    & { links?: Maybe<(
      { __typename?: 'HistoryLinks' }
      & Pick<HistoryLinks, 'article'>
    )> }
  )>>> }
);

export type LaunchesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type LaunchesQuery = (
  { __typename?: 'Query' }
  & { launches?: Maybe<Array<Maybe<(
    { __typename?: 'Launch' }
    & LaunchFragmentFragment
  )>>> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & UserFragmentFragment
  )> }
);

export type MissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type MissionsQuery = (
  { __typename?: 'Query' }
  & { missions?: Maybe<Array<Maybe<(
    { __typename?: 'Mission' }
    & Pick<Mission, 'mission_id' | 'mission_name' | 'manufacturers' | 'description' | 'website'>
  )>>> }
);

export type NextLaunchQueryVariables = Exact<{ [key: string]: never; }>;


export type NextLaunchQuery = (
  { __typename?: 'Query' }
  & { nextLaunch?: Maybe<Array<Maybe<(
    { __typename?: 'Launch' }
    & LaunchFragmentFragment
  )>>> }
);

export type RocketsQueryVariables = Exact<{ [key: string]: never; }>;


export type RocketsQuery = (
  { __typename?: 'Query' }
  & { rockets?: Maybe<Array<Maybe<(
    { __typename?: 'Rocket' }
    & Pick<Rocket, 'id' | 'rocket_name' | 'rocket_type' | 'first_flight' | 'wikipedia' | 'description' | 'active' | 'company' | 'country' | 'cost_per_launch' | 'success_rate_pct' | 'flickr_images'>
  )>>> }
);

export const LaunchFragmentFragmentDoc = gql`
    fragment LaunchFragment on Launch {
  details
  is_tentative
  links {
    mission_patch_small
  }
  flight_number
  mission_name
  launch_success
  launch_date_utc
  upcoming
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  username
  email
  first_name
  last_name
  created_at
  updated_at
}
    `;
export const AddAvatarDocument = gql`
    mutation AddAvatar($file: Upload!) {
  addAvatar(file: $file)
}
    `;
export type AddAvatarMutationFn = Apollo.MutationFunction<AddAvatarMutation, AddAvatarMutationVariables>;

/**
 * __useAddAvatarMutation__
 *
 * To run a mutation, you first call `useAddAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAvatarMutation, { data, loading, error }] = useAddAvatarMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useAddAvatarMutation(baseOptions?: Apollo.MutationHookOptions<AddAvatarMutation, AddAvatarMutationVariables>) {
        return Apollo.useMutation<AddAvatarMutation, AddAvatarMutationVariables>(AddAvatarDocument, baseOptions);
      }
export type AddAvatarMutationHookResult = ReturnType<typeof useAddAvatarMutation>;
export type AddAvatarMutationResult = Apollo.MutationResult<AddAvatarMutation>;
export type AddAvatarMutationOptions = Apollo.BaseMutationOptions<AddAvatarMutation, AddAvatarMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($usernameOrEmail: String!, $password: String!) {
  loginUser(usernameOrEmail: $usernameOrEmail, password: $password) {
    errors {
      field
      message
    }
    callback {
      ...UserFragment
    }
  }
}
    ${UserFragmentFragmentDoc}`;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, baseOptions);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($input: UserInput!) {
  registerUser(input: $input) {
    errors {
      field
      message
    }
    callback {
      ...UserFragment
    }
  }
}
    ${UserFragmentFragmentDoc}`;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, baseOptions);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const GetAvatarDocument = gql`
    query GetAvatar {
  getAvatar
}
    `;

/**
 * __useGetAvatarQuery__
 *
 * To run a query within a React component, call `useGetAvatarQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAvatarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAvatarQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAvatarQuery(baseOptions?: Apollo.QueryHookOptions<GetAvatarQuery, GetAvatarQueryVariables>) {
        return Apollo.useQuery<GetAvatarQuery, GetAvatarQueryVariables>(GetAvatarDocument, baseOptions);
      }
export function useGetAvatarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAvatarQuery, GetAvatarQueryVariables>) {
          return Apollo.useLazyQuery<GetAvatarQuery, GetAvatarQueryVariables>(GetAvatarDocument, baseOptions);
        }
export type GetAvatarQueryHookResult = ReturnType<typeof useGetAvatarQuery>;
export type GetAvatarLazyQueryHookResult = ReturnType<typeof useGetAvatarLazyQuery>;
export type GetAvatarQueryResult = Apollo.QueryResult<GetAvatarQuery, GetAvatarQueryVariables>;
export const HistoricalEventsDocument = gql`
    query HistoricalEvents {
  history(order: desc) {
    id
    title
    details
    event_date_unix
    event_date_utc
    links {
      article
    }
  }
}
    `;

/**
 * __useHistoricalEventsQuery__
 *
 * To run a query within a React component, call `useHistoricalEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useHistoricalEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHistoricalEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useHistoricalEventsQuery(baseOptions?: Apollo.QueryHookOptions<HistoricalEventsQuery, HistoricalEventsQueryVariables>) {
        return Apollo.useQuery<HistoricalEventsQuery, HistoricalEventsQueryVariables>(HistoricalEventsDocument, baseOptions);
      }
export function useHistoricalEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HistoricalEventsQuery, HistoricalEventsQueryVariables>) {
          return Apollo.useLazyQuery<HistoricalEventsQuery, HistoricalEventsQueryVariables>(HistoricalEventsDocument, baseOptions);
        }
export type HistoricalEventsQueryHookResult = ReturnType<typeof useHistoricalEventsQuery>;
export type HistoricalEventsLazyQueryHookResult = ReturnType<typeof useHistoricalEventsLazyQuery>;
export type HistoricalEventsQueryResult = Apollo.QueryResult<HistoricalEventsQuery, HistoricalEventsQueryVariables>;
export const LaunchesDocument = gql`
    query Launches($limit: Int!, $offset: Int!) {
  launches(order: desc, limit: $limit, offset: $offset) {
    ...LaunchFragment
  }
}
    ${LaunchFragmentFragmentDoc}`;

/**
 * __useLaunchesQuery__
 *
 * To run a query within a React component, call `useLaunchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLaunchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLaunchesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useLaunchesQuery(baseOptions: Apollo.QueryHookOptions<LaunchesQuery, LaunchesQueryVariables>) {
        return Apollo.useQuery<LaunchesQuery, LaunchesQueryVariables>(LaunchesDocument, baseOptions);
      }
export function useLaunchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LaunchesQuery, LaunchesQueryVariables>) {
          return Apollo.useLazyQuery<LaunchesQuery, LaunchesQueryVariables>(LaunchesDocument, baseOptions);
        }
export type LaunchesQueryHookResult = ReturnType<typeof useLaunchesQuery>;
export type LaunchesLazyQueryHookResult = ReturnType<typeof useLaunchesLazyQuery>;
export type LaunchesQueryResult = Apollo.QueryResult<LaunchesQuery, LaunchesQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MissionsDocument = gql`
    query Missions {
  missions {
    mission_id
    mission_name
    manufacturers
    description
    website
  }
}
    `;

/**
 * __useMissionsQuery__
 *
 * To run a query within a React component, call `useMissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMissionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMissionsQuery(baseOptions?: Apollo.QueryHookOptions<MissionsQuery, MissionsQueryVariables>) {
        return Apollo.useQuery<MissionsQuery, MissionsQueryVariables>(MissionsDocument, baseOptions);
      }
export function useMissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MissionsQuery, MissionsQueryVariables>) {
          return Apollo.useLazyQuery<MissionsQuery, MissionsQueryVariables>(MissionsDocument, baseOptions);
        }
export type MissionsQueryHookResult = ReturnType<typeof useMissionsQuery>;
export type MissionsLazyQueryHookResult = ReturnType<typeof useMissionsLazyQuery>;
export type MissionsQueryResult = Apollo.QueryResult<MissionsQuery, MissionsQueryVariables>;
export const NextLaunchDocument = gql`
    query NextLaunch {
  nextLaunch: launches(range: next) {
    ...LaunchFragment
  }
}
    ${LaunchFragmentFragmentDoc}`;

/**
 * __useNextLaunchQuery__
 *
 * To run a query within a React component, call `useNextLaunchQuery` and pass it any options that fit your needs.
 * When your component renders, `useNextLaunchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNextLaunchQuery({
 *   variables: {
 *   },
 * });
 */
export function useNextLaunchQuery(baseOptions?: Apollo.QueryHookOptions<NextLaunchQuery, NextLaunchQueryVariables>) {
        return Apollo.useQuery<NextLaunchQuery, NextLaunchQueryVariables>(NextLaunchDocument, baseOptions);
      }
export function useNextLaunchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NextLaunchQuery, NextLaunchQueryVariables>) {
          return Apollo.useLazyQuery<NextLaunchQuery, NextLaunchQueryVariables>(NextLaunchDocument, baseOptions);
        }
export type NextLaunchQueryHookResult = ReturnType<typeof useNextLaunchQuery>;
export type NextLaunchLazyQueryHookResult = ReturnType<typeof useNextLaunchLazyQuery>;
export type NextLaunchQueryResult = Apollo.QueryResult<NextLaunchQuery, NextLaunchQueryVariables>;
export const RocketsDocument = gql`
    query Rockets {
  rockets {
    id
    rocket_name
    rocket_type
    first_flight
    wikipedia
    description
    active
    company
    country
    cost_per_launch
    success_rate_pct
    flickr_images
  }
}
    `;

/**
 * __useRocketsQuery__
 *
 * To run a query within a React component, call `useRocketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRocketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRocketsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRocketsQuery(baseOptions?: Apollo.QueryHookOptions<RocketsQuery, RocketsQueryVariables>) {
        return Apollo.useQuery<RocketsQuery, RocketsQueryVariables>(RocketsDocument, baseOptions);
      }
export function useRocketsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RocketsQuery, RocketsQueryVariables>) {
          return Apollo.useLazyQuery<RocketsQuery, RocketsQueryVariables>(RocketsDocument, baseOptions);
        }
export type RocketsQueryHookResult = ReturnType<typeof useRocketsQuery>;
export type RocketsLazyQueryHookResult = ReturnType<typeof useRocketsLazyQuery>;
export type RocketsQueryResult = Apollo.QueryResult<RocketsQuery, RocketsQueryVariables>;