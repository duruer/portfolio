<article class="d-block mb-5">
  <h4 class="mb-4 text-light">{$_("pages.references.title")}</h4>

  {#each References["works"] as work, index (work)}
    <div class="row mb-3">
      <div class="col-3">
        <span class="text-muted">
          {$json("references.works." + work).start_date} - {$json(
            "references.works." + work
          ).end_date}
        </span>
      </div>
      <div class="col-9">
        <a
          href="{$json('references.works.' + work).web_address}"
          target="_blank">
          {$json("references.works." + work).company_name} ({$json(
            "references.works." + work
          ).location.city})
        </a>
        /
        <i>
          {$json("references.works." + work).position}
          <a title="{$_('pages.references.go_details')}" href="/work/{work}">
            ≫
          </a>
        </i>
      </div>
    </div>
  {/each}
</article>

<article class="d-block mb-5">
  <h4 class="mb-4 text-light">{$_("pages.references.projects_title")}</h4>

  <div class="row">
    {#each References["projects"] as project, index (project)}
      <div class="col-lg-6">
        <div class="row mb-3">
          <div class="col-auto">
            <img
              src="{$json('references.projects.' + project).logo_image}"
              alt="{$json('references.projects.' + project).project_name}"
              width="64"
              height="64"
              class="rounded project-img" />
          </div>
          <div class="col">
            <a href="/project/{project}">
              <h5>{$json("references.projects." + project).project_name}</h5>
            </a>
            <p class="mb-0">
              {@html $json("references.projects." + project).description}
            </p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</article>

<script>
  import { _, json } from "svelte-i18n";

  import Config from "$lib/Config";

  const References = Config.references;
</script>
