import "$lib/supabase"
import { getSupabase } from "@supabase/auth-helpers-sveltekit"
import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
	const { session, supabaseClient } = await getSupabase(event)

	event.locals.sb = supabaseClient
	event.locals.session = session

	// event gets passed to +server.ts, +page.server.ts, +layout.server.ts and so on
	// the event can then be descruted.
	return resolve(event)
}
