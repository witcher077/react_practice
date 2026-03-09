export interface UserType {
  id: string;
  name: string;
  email: string;
  password?: string; // optional if not always returned
}