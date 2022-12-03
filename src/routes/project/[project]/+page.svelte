<svelte:head>
  <title
    >{$json("references.projects." + project).project_name} | {$_(
      "page_title"
    )}</title>
</svelte:head>

<article class="mb-5">
  <h4 class="mb-4 text-light">
    <a href="/references#projects">{$_("pages.project_details.title")}</a>
    ≫ {$json("references.projects." + project).project_name}
  </h4>
  <p class="text-justify">
    {@html $json("references.projects." + project).details_description}
  </p>
  <h6 class="text-muted">
    {$_("pages.project_details.date", {
      values: {
        start_date: $json("references.projects." + project).start_date,
        end_date:
          $json("references.projects." + project).end_date === ""
            ? $_("pages.project_details.still")
            : $json("references.projects." + project).end_date,
      },
    })}
  </h6>

  <h5 class="my-4">{$_("pages.project_details.links_title")}</h5>
  <ul class="list-group list-group-horizontal list-unstyled mb-3">
    {#each $json("references.projects." + project).links as link, index (link)}
      <li class="list-group-item bg-transparent">
        <a href="{link.address}" target="_blank">{link.name}</a>
      </li>
    {/each}
  </ul>

  <h5 class="my-4">{$_("pages.project_details.images")}</h5>
  {#each $json("references.projects." + project).images as image, index (image)}
    <img
      src="{image.address}"
      class="border rounded img-fluid mb-3"
      alt="{image.title}" />
  {/each}
</article>

<script>
  import { _, json } from "svelte-i18n";

  export let data;

  let { project } = data;

  $: ({ project } = data);
</script>
