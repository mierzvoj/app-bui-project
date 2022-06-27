export interface UserData {
  name?: string;
  surname?: string;
  city?: string;
  role?: "driver" | "passenger";
  active?: boolean;
  email?: string;
  password?: string;
  passengers?: string[];
}
