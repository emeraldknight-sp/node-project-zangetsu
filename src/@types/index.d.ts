import { User } from "node-telegram-bot-api";

export interface ExtendedUser extends User {
  // id: number;
  // is_bot: boolean;
  // first_name: string;
  // last_name?: string | undefined;
  // username?: string | undefined;
  // language_code?: string | undefined;
  email?: string | undefined;
  phone_number?: string | undefined;
  timezone?: string | undefined;
  accounts?: any[];
}
