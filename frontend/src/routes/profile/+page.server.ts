
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


  export const actions = {
    default: async ({request, locals}) => {
      // TODO update user info.
      try{
      const formData = await request.formData();
      const fullName = formData.get('fullName') as string;
      const username = formData.get('username') as string;
      const website = formData.get('website') as string;
      const avatarUrl = formData.get('avatarUrl') as string;
      const biograph = formData.get('biograph') as string;
      const password = formData.get('password') as string; //ToDo fixa kryptering och hantera på rätt sätt. Går inte att uppdatera för tillfället.
      
      console.log("FormData: ", fullName, username, website, avatarUrl, biograph, password)

      const session = locals.sb.auth.session
      const id = locals.session?.user.id
      console.log("Session: ", id)

      const { error } = await locals.sb
      .from('profiles')
      .update({
        full_name: fullName,
        username,
        website,
        avatar_url: avatarUrl,
        biograph,
        updated_at: new Date(),
      })
      .eq('id', id);

    if (error) {
      console.log(error)
      return {
        status: 500,
        body: { error: 'Failed to update profile' },
      };
    }

    console.log("Profile updated successfully 200")
    return {
      status: 200,
      body: { message: 'Profile updated successfully' },
    };
  } catch (error) {
    console.log("Internal server error 500")
    return {
      status: 500,
      body: { error: 'Internal Server Error' },
    };
  }

    }
};