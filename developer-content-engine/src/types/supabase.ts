export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      problems: {
        Row: {
          code_content: string
          created_at: string | null
          id: string
          language: string
          slug: string
          theme_preference: string | null
          title: string
          user_id: string | null
          visibility: string | null
        }
        Insert: {
          code_content: string
          created_at?: string | null
          id?: string
          language: string
          slug: string
          theme_preference?: string | null
          title: string
          user_id?: string | null
          visibility?: string | null
        }
        Update: {
          code_content?: string
          created_at?: string | null
          id?: string
          language?: string
          slug?: string
          theme_preference?: string | null
          title?: string
          user_id?: string | null
          visibility?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "problems_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          linkedin_profile_url: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          linkedin_profile_url?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          linkedin_profile_url?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
