
import { supabaseClient } from "$lib/supabase";
import type { Session } from "@supabase/supabase-js";
import type { PageServerLoad } from "./$types";
import { fail, redirect } from '@sveltejs/kit'



  export const load: PageServerLoad = async ({ locals }) => {

    //Get user profile information.
    const{ data } = 
      await supabaseClient
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
/*
  export async function update(request: Request, { locals }) {
    try {
      const formData = await request.formData();
      const fullName = formData.get('fullName') as string;
      const username = formData.get('username') as string;
      const website = formData.get('website') as string;
      const avatarUrl = formData.get('avatarUrl') as string;

      const session = locals.sb.auth.session

      const { error } = await locals.sb
        .from('profiles')
        .upsert({
          id: session?.user.id,
          full_name: fullName,
          username,
          website,
          avatar_url: avatarUrl,
          updated_at: new Date(),
        });

      if (error) {
        return {
          status: 500,
          body: { error: 'Failed to update profile' },
        };
      }

      return {
        status: 200,
        body: { message: 'Profile updated successfully' },
      };
    } catch (error) {
      return {
        status: 500,
        body: { error: 'Internal Server Error' },
      };
    }
  }
  */