import Config from "$lib/Config";
import { error } from "@sveltejs/kit";

const References = Config.references;

/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load({ params }) {
  if (References["projects"].indexOf(params.project) === -1) {
    throw error(400, "not found");
  }

  const project = params.project;

  return { project };
}
