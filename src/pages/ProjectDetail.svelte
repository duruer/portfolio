<script>
  import { route } from "routve";
  import { _, locale } from "svelte-i18n";

  import References from "../references.config";

  export let projectID;

  if (
    typeof projectID === "undefined" ||
    projectID === null ||
    typeof References["projects"][projectID] === "undefined"
  ) {
    route("/error-404");
  }

  $: project =
    typeof projectID === "undefined" ||
    projectID === null ||
    typeof References["projects"][projectID] === "undefined"
      ? null
      : References["projects"][projectID][$locale];
</script>

<artice class="mb-5">
  <h4 class="mb-4 text-light">
    <a href="/references#projects">{$_("pages.project_details.title")}</a>
    ≫ {project ? project.projectName : ""}
  </h4>
  <p>
    {@html project ? project.detailsDescription : ""}
  </p>
  <h6 class="text-muted">
    {$_("pages.project_details.date", {
      values: {
        startDate: project ? project.startDate : "",
        endDate: project
          ? project.endDate === ""
            ? $_("pages.project_details.still")
            : project.endDate
          : "",
      },
    })}
  </h6>

  <h5 class="my-4">{$_("pages.project_details.links_title")}</h5>
  <ul class="list-group list-group-horizontal list-unstyled mb-3">
    {#each project ? project.links : [] as link, index (link)}
      <li class="list-group-item bg-transparent">
        <a href="{link.address}" target="_blank">{link.name}</a>
      </li>
    {/each}
  </ul>

  <h5 class="my-4">{$_("pages.project_details.images")}</h5>
  {#each project ? project.images : [] as image, index (image)}
    <img
      src="{image.address}"
      class="border rounded img-fluid mb-3"
      alt="{image.title}" />
  {/each}
</artice>
