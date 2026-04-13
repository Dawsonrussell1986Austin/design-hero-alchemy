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
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      asana_integrations: {
        Row: {
          access_token: string
          created_at: string | null
          enabled: boolean | null
          id: string
          refresh_token: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          access_token: string
          created_at?: string | null
          enabled?: boolean | null
          id?: string
          refresh_token?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          access_token?: string
          created_at?: string | null
          enabled?: boolean | null
          id?: string
          refresh_token?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      badges: {
        Row: {
          created_at: string
          description: string
          id: string
          image_url: string | null
          name: string
          points_required: number | null
          type: Database["public"]["Enums"]["badge_type"]
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          image_url?: string | null
          name: string
          points_required?: number | null
          type: Database["public"]["Enums"]["badge_type"]
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          image_url?: string | null
          name?: string
          points_required?: number | null
          type?: Database["public"]["Enums"]["badge_type"]
        }
        Relationships: []
      }
      brownie_task_image_approvals: {
        Row: {
          created_at: string
          id: string
          image_url: string
          reviewed_at: string | null
          reviewed_by: string | null
          status: string
          task_id: number
        }
        Insert: {
          created_at?: string
          id?: string
          image_url: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          task_id: number
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          task_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "brownie_task_image_approvals_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "brownie_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      brownie_task_notes: {
        Row: {
          author: string
          content: string
          created_at: string
          id: string
          task_id: number
        }
        Insert: {
          author?: string
          content: string
          created_at?: string
          id?: string
          task_id: number
        }
        Update: {
          author?: string
          content?: string
          created_at?: string
          id?: string
          task_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "brownie_task_notes_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "brownie_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      brownie_tasks: {
        Row: {
          assigned: string
          category: string
          due_date: string | null
          id: number
          image_urls: string[] | null
          link_url: string | null
          platform: string
          priority: string
          status: string
          task: string
        }
        Insert: {
          assigned?: string
          category: string
          due_date?: string | null
          id: number
          image_urls?: string[] | null
          link_url?: string | null
          platform: string
          priority: string
          status?: string
          task: string
        }
        Update: {
          assigned?: string
          category?: string
          due_date?: string | null
          id?: number
          image_urls?: string[] | null
          link_url?: string | null
          platform?: string
          priority?: string
          status?: string
          task?: string
        }
        Relationships: []
      }
      calendar_integrations: {
        Row: {
          created_at: string
          google_calendar_enabled: boolean | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          google_calendar_enabled?: boolean | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          google_calendar_enabled?: boolean | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          company: string | null
          created_at: string
          email: string
          first_name: string
          id: string
          last_name: string
          message: string
          phone: string | null
          status: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          first_name: string
          id?: string
          last_name: string
          message: string
          phone?: string | null
          status?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          message?: string
          phone?: string | null
          status?: string
        }
        Relationships: []
      }
      investor_access_submissions: {
        Row: {
          created_at: string
          email: string
          first_name: string
          id: string
          last_name: string
          phone: string
          state: string
        }
        Insert: {
          created_at?: string
          email: string
          first_name: string
          id?: string
          last_name: string
          phone: string
          state: string
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          phone?: string
          state?: string
        }
        Relationships: []
      }
      investor_leads: {
        Row: {
          company: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          investment_range: string | null
          message: string | null
          status: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          full_name: string
          id?: string
          investment_range?: string | null
          message?: string | null
          status?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          investment_range?: string | null
          message?: string | null
          status?: string
        }
        Relationships: []
      }
      invites: {
        Row: {
          accepted_at: string | null
          created_at: string | null
          expires_at: string | null
          id: string
          invite_code: string
          invitee_email: string
          inviter_id: string
          status: Database["public"]["Enums"]["invite_status"] | null
        }
        Insert: {
          accepted_at?: string | null
          created_at?: string | null
          expires_at?: string | null
          id?: string
          invite_code: string
          invitee_email: string
          inviter_id: string
          status?: Database["public"]["Enums"]["invite_status"] | null
        }
        Update: {
          accepted_at?: string | null
          created_at?: string | null
          expires_at?: string | null
          id?: string
          invite_code?: string
          invitee_email?: string
          inviter_id?: string
          status?: Database["public"]["Enums"]["invite_status"] | null
        }
        Relationships: []
      }
      journal_entries: {
        Row: {
          created_at: string
          date: string
          full_prayer: string | null
          id: string
          psalm_number: number
          reflections: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          date: string
          full_prayer?: string | null
          id?: string
          psalm_number: number
          reflections: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          date?: string
          full_prayer?: string | null
          id?: string
          psalm_number?: number
          reflections?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "journal_entries_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          has_completed_onboarding: boolean | null
          id: string
          is_premium: boolean | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          has_completed_onboarding?: boolean | null
          id: string
          is_premium?: boolean | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          has_completed_onboarding?: boolean | null
          id?: string
          is_premium?: boolean | null
          updated_at?: string
        }
        Relationships: []
      }
      routines: {
        Row: {
          created_at: string
          days: string[]
          duration: number
          hour: number
          id: string
          minute: number
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          days: string[]
          duration: number
          hour: number
          id?: string
          minute?: number
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          days?: string[]
          duration?: number
          hour?: number
          id?: string
          minute?: number
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string
          id: string
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          status: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          actual_duration: number | null
          completed: boolean | null
          created_at: string
          date: string
          duration: number
          hour: number
          id: string
          priority: string | null
          timer_completed: boolean | null
          timer_running: boolean | null
          timer_started: string | null
          title: string
          total_elapsed_time: number | null
          user_id: string
        }
        Insert: {
          actual_duration?: number | null
          completed?: boolean | null
          created_at?: string
          date?: string
          duration: number
          hour: number
          id?: string
          priority?: string | null
          timer_completed?: boolean | null
          timer_running?: boolean | null
          timer_started?: string | null
          title: string
          total_elapsed_time?: number | null
          user_id: string
        }
        Update: {
          actual_duration?: number | null
          completed?: boolean | null
          created_at?: string
          date?: string
          duration?: number
          hour?: number
          id?: string
          priority?: string | null
          timer_completed?: boolean | null
          timer_running?: boolean | null
          timer_started?: string | null
          title?: string
          total_elapsed_time?: number | null
          user_id?: string
        }
        Relationships: []
      }
      team_members: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      user_badges: {
        Row: {
          badge_id: string
          earned_at: string
          user_id: string
        }
        Insert: {
          badge_id: string
          earned_at?: string
          user_id: string
        }
        Update: {
          badge_id?: string
          earned_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_badges_badge_id_fkey"
            columns: ["badge_id"]
            isOneToOne: false
            referencedRelation: "badges"
            referencedColumns: ["id"]
          },
        ]
      }
      user_stats: {
        Row: {
          created_at: string
          current_rank: Database["public"]["Enums"]["user_rank"] | null
          current_streak: number | null
          longest_streak: number | null
          points: number | null
          tasks_completed: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_rank?: Database["public"]["Enums"]["user_rank"] | null
          current_streak?: number | null
          longest_streak?: number | null
          points?: number | null
          tasks_completed?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_rank?: Database["public"]["Enums"]["user_rank"] | null
          current_streak?: number | null
          longest_streak?: number | null
          points?: number | null
          tasks_completed?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_active_subscription: { Args: { user_id: string }; Returns: boolean }
    }
    Enums: {
      badge_type: "SPEED" | "STREAK" | "FOCUS" | "CHALLENGE"
      invite_status: "pending" | "accepted" | "expired"
      user_rank:
        | "SAND_STARTER"
        | "FLOW_MASTER"
        | "HOURGLASS_HERO"
        | "TIME_TITAN"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      badge_type: ["SPEED", "STREAK", "FOCUS", "CHALLENGE"],
      invite_status: ["pending", "accepted", "expired"],
      user_rank: [
        "SAND_STARTER",
        "FLOW_MASTER",
        "HOURGLASS_HERO",
        "TIME_TITAN",
      ],
    },
  },
} as const
