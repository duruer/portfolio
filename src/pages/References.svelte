<style>
  li {
    list-style: none;
  }
</style>

<script>
  import { _, locale } from "svelte-i18n";

  import References from "../references.config";
</script>

<artice class="d-block mb-5">
  <h4 class="mb-4 text-light">{$_('pages.references.title')}</h4>

  {#each Object.values(References['works']) as work, index (work)}
    <div class="row mb-3">
      <div class="col-3">
        <li class="text-muted">
          {work[$locale].startDate} - {work[$locale].endDate}
        </li>
      </div>
      <div class="col-9">
        <a href="{work[$locale].webAddress}" target="_blank">
          {work[$locale].companyName} ({work[$locale].location.city})
        </a>
        /
        <i>
          {work[$locale].position}
          <a
            title="{$_('pages.references.go_details')}"
            href="/work/{Object.keys(References['works']).find((key) => References['works'][key] === work)}"
          >
            ≫
          </a>
        </i>
      </div>
    </div>
  {/each}

</artice>

<article class="d-block mb-5">
  <h4 class="mb-4 text-light">{$_('pages.references.projects_title')}</h4>

  <div class="row">
    {#each Object.values(References['projects']) as project, index (project)}
      <div class="col-lg-6">
        <div class="row mb-3">
          <div class="col-auto">
            <img
              src="{project[$locale].logoImage}"
              alt="{project[$locale].projectName}"
              width="64"
              height="64"
              class="rounded project-img"
            />
          </div>
          <div class="col">
            <a href="/project/{Object.keys(References['projects']).find((key) => References['projects'][key] === project)}">
              <h5>{project[$locale].projectName}</h5>
            </a>
            <p class="mb-0">
              {project[$locale].description}
            </p>
          </div>
        </div>
      </div>
    {/each}
  </div>

</article>
