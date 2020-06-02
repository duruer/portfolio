<style>
  li {
    list-style: none;
  }
</style>

<script>
  import { _, locale } from "svelte-i18n";
  import { lang } from "../store";

  import References from "../references.config";
</script>

<artice class="d-block mb-5">
  <h4 class="mb-4 text-light">{$_('pages.references.title')}</h4>

  {#each Object.values(References['works']) as work, index (work)}
    <div class="row mb-3">
      <div class="col-3">
        <li class="text-muted">
          {work[$lang].startDate} - {work[$lang].endDate}
        </li>
      </div>
      <div class="col-9">
        <a href="{work[$lang].webAddress}" target="_blank">
          {work[$lang].companyName} ({work[$lang].location.city})
        </a>
        /
        <i>
          {work[$lang].position}
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
              src="{project[$lang].logoImage}"
              alt="{project[$lang].projectName}"
              width="64"
              height="64"
              class="rounded project-img"
            />
          </div>
          <div class="col">
            <a href="/project/{Object.keys(References['projects']).find((key) => References['projects'][key] === project)}">
              <h5>{project[$lang].projectName}</h5>
            </a>
            <p class="mb-0">
              {project[$lang].description}
            </p>
          </div>
        </div>
      </div>
    {/each}
  </div>

</article>
