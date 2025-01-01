<svelte:head>
  <title>{$_("page_title")}</title>
</svelte:head>

<!--<article class="d-block mb-5">-->
<!--  <h4 class="mb-4 text-light">{$_("pages.about.title")}</h4>-->
<!--  <p class="mb-0 text-justify">{$_("pages.about.description")}</p>-->
<!--</article>-->

<article class="d-block mb-5">
  <h4 class="mb-4 text-light">{$_("pages.about.interests_title")}</h4>

  <div class="row">
    {#each Config.pages.about.interests as interest, index (interest)}
      <div class="col-6 d-flex align-items-center">
        <div class="row">
          <div
            class="col-auto text-primary d-flex align-items-center
          justify-content-center">
            {@html interest.svg_code}
          </div>
          <div class="col">
            {$_("pages.about.interests." + interest.language_name + ".name")}
          </div>
        </div>
      </div>
      {#if Config.pages.about.interests.length !== index + 1 && index % 2}
        <div class="w-100 py-3"></div>
      {/if}
    {/each}
  </div>
</article>

<article class="d-block mb-5">
  <h4 class="mb-4 text-light">{$_("pages.about.skills_title")}</h4>
  <div class="row flex-wrap">
    {#each Config.pages.about.skills as skill, index (skill)}
      <div class="col-auto">
        <div class="skill {skill.bg_class}">
          <span>
            {$_("pages.about.skills." + skill.language_name + ".name")}
            <br />
            <small class="text-muted">
              {#each skill.techs as tech, index (tech)}
                {$_(
                  "pages.about.skills." + skill.language_name + ".techs." + tech
                )}
                {#if skill.techs !== index + 1}
                  <br />
                {/if}
              {/each}
            </small>
          </span>
        </div>
      </div>
    {/each}
  </div>
</article>

<script>
  import { _ } from "svelte-i18n";

  import Config from "$lib/Config";
</script>
