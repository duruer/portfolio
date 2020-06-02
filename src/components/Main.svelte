<script>
  import Router, { path, isPageLoading } from "routve";
  import { onDestroy } from "svelte";
  import {
    _,
    addMessages,
    init,
    getLocaleFromNavigator,
    locale,
  } from "svelte-i18n";
  import { get } from "svelte/store";

  import tr from "../lang/tr.json";
  import en from "../lang/en.json";

  import RouterConfig from "../router.config";
  import LoadingPlaceHolder from "./LoadingPlaceHolder.svelte";

  let showLoading = true;
  let showLoadingAlways = false;

  const isPageLoadingUnsubscribe = isPageLoading.subscribe((value) => {
    showLoading = value;
  });

  addMessages("tr", tr);
  addMessages("en", en);

  init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator(),
  });

  function onLocaleChangeClick() {
    if (get(locale) === "tr") locale.set("en");
    else locale.set("tr");
  }

  onDestroy(isPageLoadingUnsubscribe);
</script>

<svelte:head>
  <title>{$_('page_title')}</title>
</svelte:head>

<div class="container">

  <header class="row justify-content-center py-5">
    <div class="col-4">
      <div class="pb-4">
        <img
          src="/assets/img/pp.jpeg"
          class="rounded-circle d-block m-auto mb-3 pp"
          width="100"
          height="100"
          alt="Ahmet Enes Duruer"
        />
      </div>
    </div>
    <div class="col d-lg-none">
      <h4 class="font-weight-normal text-white">Ahmet Enes Duruer</h4>
      <p class="mb-2">
        Software Developer,
        <br />
        Entrepreneur
      </p>
      <ul class="list-unstyled py-2">
        <a href="https://gitlab.com/kahverengi" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-gitlab"
          >
            <path
              d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78
              2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1
              .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1
              .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
            ></path>
          </svg>
        </a>
        <a href="https://github.com/kahverengi001" target="_blank" class="mx-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0
              0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07
              5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65
              5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0
              5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
        </a>
        <a
          class="mr-3"
          href="https://www.facebook.com/Ahmet.Enes.Duruer"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-facebook"
          >
            <path
              d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1
              1-1h3z"
            ></path>
          </svg>
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-twitter"
          >
            <path
              d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66
              10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0
              20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            ></path>
          </svg>
        </a>
      </ul>
      <div>
        <a
          href="mailto:mail@mail.com"
          class="btn btn-outline-lightglass text-primary"
        >
          Contact
        </a>
        <a href="#" class="btn btn-outline-lightglass text-light">
          Download CV
        </a>
      </div>
    </div>
    <div class="col-lg-6">
      <nav class="nav pt-lg-0 pt-4">
        <a class="nav-link pl-0" class:active="{$path === '/'}" href="/">
          {$_("nav_links.about")}
        </a>
        <a
          class="nav-link"
          class:active="{$path === '/references'}"
          href="/references"
        >
          {$_("nav_links.references")}
        </a>
        <a
          class="nav-link"
          href="https://github.com/kahverengi001/portfolio"
          target="_blank"
        >
          {$_("nav_links.this_website")}
        </a>
        <a
          class="nav-link ml-auto"
          href="javascript:void(0);"
          on:click="{() => onLocaleChangeClick()}"
        >
          {$locale === "tr" ? "EN (US)" : "TR"}
        </a>
      </nav>
    </div>
  </header>

  <div class="row justify-content-center">

    <div class="col-lg-4 text-center d-lg-block d-none">
      <h4 class="font-weight-normal text-white">Ahmet Enes Duruer</h4>
      <p class="mb-4">
        {@html $_("bio.status")}
      </p>
      <ul class="list-unstyled pb-3">
        <a href="https://gitlab.com/kahverengi" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-gitlab"
          >
            <path
              d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78
              2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1
              .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1
              .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
            ></path>
          </svg>
        </a>
        <a href="https://github.com/kahverengi001" target="_blank" class="mx-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0
              0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07
              5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65
              5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0
              5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
        </a>
        <a
          class="mr-3"
          href="https://www.facebook.com/Ahmet.Enes.Duruer"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-facebook"
          >
            <path
              d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1
              1-1h3z"
            ></path>
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/ahmet-enes-duruer-9bb3b554"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-linkedin"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2
              2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </ul>
      <div>
        <a
          href="mailto:mail@mail.com"
          class="btn btn-outline-lightglass text-primary"
        >
          {$_("bio.contact_button")}
        </a>
        <a href="#" class="btn btn-outline-lightglass text-light">
          {$_("bio.download_cv_button")}
        </a>
      </div>

      <small class="d-inline-block text-muted pt-5">
        Made with
        <span class="text-primary">❤</span>
        and
        <a href="https://svelte.dev/" target="_blank">Svelte</a>
        .
      </small>
      <div class="particle-1"></div>
    </div>

    <div class="col-lg-6">
      <Router
        routerConfig="{RouterConfig}"
        hidden="{showLoading || showLoadingAlways}"
      />
      <LoadingPlaceHolder hidden="{!showLoading && !showLoadingAlways}" />
    </div>

  </div>
</div>
