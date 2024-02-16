
import { supabaseClient } from "$lib/supabase";
import type { Session } from "@supabase/supabase-js";

  export async function load(session) {

    
    const { data: profile } = await supabaseClient
      .from('profiles')
      .select(`username, full_name, website, avatar_url`)
      .eq('id', session.user.id)
      .single()

    console.log("session: ", session.user)  
    console.log("Profile: ", profile)  
    const { data } = await supabaseClient.from("countries").select();
    return {
      countries: data ?? [],
      profile,
    };
  }