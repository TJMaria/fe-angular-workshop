export interface Todo {
  name: string;
  id: string;

  inserted_at?: string;
  is_complete?: boolean;
  user_id?: string;
}
