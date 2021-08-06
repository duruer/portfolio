<article class="mb-5">
  <h4 class="mb-4 text-light">
    <a href="/references#works">{$_("pages.work_details.work")}</a> ≫ {$json(
      "references.works." + work
    ).company_name}
  </h4>
  <img
    src="{$json('references.works.' + work).logo_image}"
    alt="{$json('references.works.' + work).company_name}"
    class="rounded img-fluid" />
  <h5 class="my-4">{$_("pages.work_details.description")}</h5>
  <p>
    {@html $json("references.works." + work).description}
  </p>
  <ul class="list-inline text-muted">
    <li class="mb-2">
      <span class="mr-2 text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-briefcase">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      </span>
      {$_("pages.work_details.position", {
        values: {
          position: $json("references.works." + work).position,
          start_date:
            $json("references.works." + work).end_date === ""
              ? $json("references.works." + work).start_date
              : $locale === "en"
              ? $_("pages.work_details.between") +
                $json("references.works." + work).start_date
              : $json("references.works." + work).start_date,
          end_date:
            $json("references.works." + work).end_date === ""
              ? $_("pages.work_details.still")
              : $json("references.works." + work).end_date,
        },
      })}
    </li>
    <li>
      <span class="mr-2 text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-map-pin">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      </span>
      {$json("references.works." + work).location.city}, {$json(
        "references.works." + work
      ).location.country}
    </li>
  </ul>

  <h5 class="my-4">{$_("pages.work_details.used_technologies")}</h5>
  <ul class="list-inline">
    {#each $json("references.works." + work).used_technologies as technology}
      <li>- {technology}</li>
    {/each}
  </ul>
</article>

<script context="module">
  import Config from "$lib/Config";

  const References = Config.references;

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page }) {
    let output = {
      props: {},
    };

    if (References["works"].indexOf(page.params.work) === -1) output = null;
    else output.props.work = page.params.work;

    return output;
  }
</script>

<script>
  import { _, json, locale } from "svelte-i18n";

  export let work;
</script>
