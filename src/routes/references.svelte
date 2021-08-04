<style>
    li {
        list-style: none;
    }
</style>

<script>
  // import { _, locale } from "svelte-i18n";

  // import References from "../references.config";

  const References = {}
</script>

<article class="d-block mb-5">
  <!--{$_("pages.references.title")}-->
  <h4 class="mb-4 text-light"></h4>

  {#each Object.values(References["works"]) as work, index (work)}
    <div class="row mb-3">
      <div class="col-3">
        <span class="text-muted">
          <!--{work[$locale].startDate} - {work[$locale].endDate}-->
        </span>
      </div>
      <div class="col-9">
<!--        href="{work[$locale].webAddress}"-->
        <a target="_blank">
          <!--{work[$locale].companyName} ({work[$locale].location.city})-->
        </a>
        /
        <i>
          <!--{work[$locale].position}-->

<!--          title="{$_('pages.references.go_details')}"-->
<!--          href="/work/{Object.keys(References['works']).find(-->
<!--          (key) => References['works'][key] === work-->
<!--        )}"-->
          <a>
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
    {#each Object.values(References["projects"]) as project, index (project)}
      <div class="col-lg-6">
        <div class="row mb-3">
          <div class="col-auto">
            <!--              src="{project[$locale].logoImage}"-->
            <!--              alt="{project[$locale].projectName}"-->
            <img
              width="64"
              height="64"
              class="rounded project-img" />
          </div>
          <div class="col">
<!--            href="/project/{Object.keys(References['projects']).find(-->
<!--            (key) => References['projects'][key] === project-->
<!--          )}"-->
            <a>
<!--              <h5>{project[$locale].projectName}</h5>-->
            </a>
            <p class="mb-0">
              <!--{@html project[$locale].description}-->
            </p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</article>
