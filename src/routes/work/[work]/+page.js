import Config from "$lib/Config";
import { error } from "@sveltejs/kit";

const References = Config.references;

/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load({ params }) {
  if (References["works"].indexOf(params.work) === -1) {
    throw error(400, "not found");
  }

  const work = params.work;

  return { work };
}
