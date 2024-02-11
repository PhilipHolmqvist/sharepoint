import { supabaseClient } from "$lib/supabase";

  export async function load() {
    const { data } = await supabaseClient.from("countries").select();
    return {
      countries: data ?? [],
    };
  }