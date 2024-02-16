
import { supabaseClient } from "$lib/supabase";
import type { Session } from "@supabase/supabase-js";
import type { PageServerLoad } from "./$types";



  export const load: PageServerLoad = async ({ locals }) => {

    //Get user profile information.
    const{ data } = await supabaseClient
	    .from('profiles')
      .select(`username, full_name, website, avatar_url`)
      .eq('id', locals.session?.user.id)
      .single()
    
    //Get countries list, used in album creation.
    //const {  } = await supabaseClient.from("countries").select();
    // countries: countries ?? [],
    return {
      profile: data,
    }
  }

