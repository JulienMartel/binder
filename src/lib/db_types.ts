export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      book: {
        Row: {
          author: string;
          created_at: string | null;
          id: number;
          title: string;
          updated_at: string | null;
        };
        Insert: {
          author?: string;
          created_at?: string | null;
          id?: number;
          title?: string;
          updated_at?: string | null;
        };
        Update: {
          author?: string;
          created_at?: string | null;
          id?: number;
          title?: string;
          updated_at?: string | null;
        };
      };
      bookmark: {
        Row: {
          book_id: number;
          created_at: string | null;
          id: number;
          owner_uuid: string;
          rating: number | null;
          updated_at: string | null;
          user_has_read: boolean | null;
        };
        Insert: {
          book_id: number;
          created_at?: string | null;
          id?: number;
          owner_uuid: string;
          rating?: number | null;
          updated_at?: string | null;
          user_has_read?: boolean | null;
        };
        Update: {
          book_id?: number;
          created_at?: string | null;
          id?: number;
          owner_uuid?: string;
          rating?: number | null;
          updated_at?: string | null;
          user_has_read?: boolean | null;
        };
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          full_name: string | null;
          id: string;
          updated_at: string | null;
          username: string | null;
          website: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          full_name?: string | null;
          id: string;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          full_name?: string | null;
          id?: string;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
