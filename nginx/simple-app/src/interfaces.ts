import { ObjectId } from "mongodb";

export interface Account {
  _id: ObjectId;
  owner_user?: ObjectId;
  owner_name?: string;
  owner_emails?: string[];
  locations?: ObjectId[];
  users?: User[];
}

export interface Location {
  _id: ObjectId;
  user?: ObjectId;
  name: string;
  google_pid?: string;
  alias?: string;
  weedmaps?: string;
  industry:
    | "Cannabis"
    | "Health and Beauty"
    | "Auto"
    | "Remote Service"
    | "Internet";
  address: {
    address_1: string;
    address_2: string | null;
    city: string;
    zip: string;
    country: "USA" | "Canada";
    region?: string;
    state: string;
  };
  account?: ObjectId;
  messaging_service_sid: string;
  rate?: number;
  stripe_customer_id?: string;
  contract?: {
    term_length: number;
    amount: number;
    onboarding_fee: number;
    total_value: number;
    payback: number;
    threshold: number;
    cap: number;
    processing_fee: number;
  };
  created_at: Date;
}

export interface Review {
  _id: ObjectId;
  reviewer: string;
  date: Date;
  rating: number;
  content: string;
  platform: "Yelp" | "Google" | "Weedmaps";
  location_name: string;
  location: ObjectId;
  created_at: Date;
}

export interface Customer {
  _id: ObjectId;
  visits: number;
  created_at: Date;
  user: ObjectId;
  phone: string | null;
  email: string | null;
  name: string;
}

export interface CustomerSurvey {
  _id: ObjectId;
  user: ObjectId;
  survey_name: string;
  visit: number;
  cc_emails: string[];
  check_in_text: string;
  delayed_text: string;
  hour_delay: number;
  is_check_in_message_on: boolean;
  is_tier_one_message_on: boolean;
  is_tier_two_message_on: boolean;
  tier_one_message: string;
  tier_two_message: string;
  happy_response: string;
  unhappy_response: string;
  check_in_links: {
    _id: ObjectId;
    link: string;
    text: string;
  }[];
  business_links: {
    _id: ObjectId;
    link: string;
    text: string;
  }[];
  immediate_email_text: string;
  delayed_email_text: string;
  created_at: Date;
  updated_at?: Date;
}

export interface CustomerResponse {
  _id: ObjectId;
  user: ObjectId;
  customer: ObjectId;
  customer_phone: string;
  customer_survey: ObjectId;
  response_content: { date: Date; text_received: string; rating: number }[];
  text_sent: string;
  rating: number;
  created_at: Date;
}

export interface Employee {
  _id: ObjectId;
  user: ObjectId;
  first_name: string;
  last_name: string;
  nick_names: string[];
  phone: string;
  email: string;
  texts_received: number;
}

export interface User {
  _id: ObjectId;
  type?: "owner" | "employee" | "manager";
  email_confirmed?: boolean;
  is_pin_on: boolean;
  cc_email: string[];
  business_name: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  created_at: Date;
  location: ObjectId;
  business?: ObjectId;
  password: string;
  photo_url?: string;
  pin_code?: number | string | null;
  address?: {
    address_1: string;
    address_2: string | null;
    city: string;
    zip: string;
    country: "USA" | "Canada";
    market: null;
    region?: "west" | "midwest" | "northeast" | "south";
    state:
      | "AL"
      | "AK"
      | "AZ"
      | "AR"
      | "CA"
      | "CO"
      | "CT"
      | "DE"
      | "FL"
      | "GA"
      | "HI"
      | "ID"
      | "IL"
      | "IN"
      | "IA"
      | "KS"
      | "KY"
      | "LA"
      | "ME"
      | "MD"
      | "MA"
      | "MI"
      | "MN"
      | "MS"
      | "MO"
      | "MT"
      | "NE"
      | "NV"
      | "NH"
      | "NJ"
      | "NM"
      | "NY"
      | "NC"
      | "ND"
      | "OH"
      | "OK"
      | "OR"
      | "PA"
      | "RI"
      | "SC"
      | "SD"
      | "TN"
      | "TX"
      | "UT"
      | "VT"
      | "VA"
      | "WA"
      | "WV"
      | "WI"
      | "WY"
      | "BC"; // British Columbia, Canada
  };
}
