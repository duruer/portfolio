<style lang="scss" global>
  @import "../styles/style";
  @import "../styles/placeholder";
</style>

<svelte:head>
  <title>{$_("page_title")}</title>
</svelte:head>

<div class="container">
  <header class="row justify-content-center py-4">
    <div class="col-4">
      <div class="pb-4">
        <img
          src="{Config.bio.profile_photo_url}"
          class="rounded-circle d-block m-auto pp"
          width="120"
          height="120"
          alt="{$_('bio.name')}" />
      </div>
    </div>
    <div class="col d-lg-none">
      <h4 class="font-weight-normal text-white">{@html $_("bio.name")}</h4>
      <p class="mb-2">
        {@html $_("bio.status")}
      </p>
      <ul class="list-unstyled py-2">
        {#each Config.bio.social_links as link, index (link)}
          <a
            href="{link.url}"
            title="{link.name}"
            target="_blank"
            class:mr-3="{index !== Config.bio.social_links.length - 1}">
            {@html link.svg_code}
          </a>
        {/each}
      </ul>
      <div>
        <a
          href="mailto:{Config.bio.email_address}"
          class="btn btn-outline-lightglass text-primary">
          {$_("bio.contact_button")}
        </a>
        <a
          href="/assets/cv/{$_('language.CV_file')}"
          class="btn btn-outline-lightglass text-light"
          download>
          {$_("bio.download_cv_button")}
        </a>
      </div>
    </div>
    <div class="col-lg-6">
      <nav class="nav pt-lg-0 pt-4">
        <a
          class="nav-link pl-0"
          class:active="{checkNavLink($page.path, '/')}"
          href="/">
          {$_("nav_links.about")}
        </a>
        <a
          class="nav-link"
          class:active="{checkNavLink($page.path, '/references')}"
          href="/references">
          {$_("nav_links.references")}
        </a>
        <a
          class="nav-link"
          href="{Config.navigation.portfolio_github_link}"
          target="_blank">
          {$_("nav_links.this_website")}
        </a>
        <button
          class="btn btn-link nav-link ml-auto"
          on:click="{() => onLocaleChangeClick()}"
          title="{$_('language.change_title')}">
          {$_("language.next_lang_title")}
        </button>
      </nav>
    </div>
  </header>

  <div class="row justify-content-center">
    <div class="col-lg-4 text-center d-lg-block d-none">
      <h4 class="font-weight-normal text-white">{@html $_("bio.name")}</h4>
      <p class="mb-4">
        {@html $_("bio.status")}
      </p>
      <ul class="list-unstyled pb-3">
        {#each Config.bio.social_links as link, index (link)}
          <a
            href="{link.url}"
            title="{link.name}"
            target="_blank"
            class:mr-3="{index !== Config.bio.social_links.length - 1}">
            {@html link.svg_code}
          </a>
        {/each}
      </ul>
      <div>
        <a
          href="mailto:{Config.bio.email_address}"
          class="btn btn-outline-lightglass text-primary">
          {$_("bio.contact_button")}
        </a>
        <a
          href="/assets/cv/{$_('language.CV_file')}"
          target="_blank"
          class="btn btn-outline-lightglass text-light"
          download>
          {$_("bio.download_cv_button")}
        </a>
      </div>

      <small class="d-inline-block text-muted pt-5">
        {@html $_("bio.made_with")}
      </small>
      <div class="particle-1"></div>
    </div>

    <div class="col-lg-6">
      <LoadingPlaceHolder hidden="{!$navigating}" />
      <div hidden="{$navigating}">
        <slot />
      </div>
    </div>
  </div>
</div>

<script>
  import { browser } from "$app/env";

  import {
    _,
    locale,
    addMessages,
    init,
    getLocaleFromNavigator,
  } from "svelte-i18n";

  import { get } from "svelte/store";
  import { navigating, page, session } from "$app/stores";

  import LoadingPlaceHolder from "./_LoadingPlaceHolder.svelte";

  import Config from "$lib/Config";

  import tr from "../../locales/tr.js";
  import en from "../../locales/en.js";

  addMessages("tr", tr);
  addMessages("tr-tr", tr);
  addMessages("en", en);

  init({
    fallbackLocale: "en",
    initialLocale: browser
      ? get(locale) === null
        ? getLocaleFromNavigator()
        : get(locale)
      : get(session).acceptedLanguage,
  });

  function onLocaleChangeClick() {
    changeLanguage();

    return false;
  }

  function changeLanguage() {
    if (
      get(locale).toUpperCase() === "tr".toUpperCase() ||
      get(locale).toUpperCase() === "tr-tr".toUpperCase()
    )
      locale.set("en");
    else locale.set("tr");
  }

  function checkNavLink(path, pathName, startsWith = false) {
    return (
      path.toUpperCase() === pathName.toUpperCase() ||
      path.toUpperCase() === (pathName + "/").toUpperCase() ||
      (startsWith && path.startsWith(pathName))
    );
  }
</script>
