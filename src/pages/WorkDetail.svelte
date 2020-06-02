<script>
  import { route } from "routve";
  import { _, locale } from "svelte-i18n";
  import { onDestroy } from "svelte";
  import { get } from "svelte/store";

  import References from "../references.config";

  export let workID;
  let work;

  if (
    typeof workID === "undefined" ||
    workID === null ||
    typeof References["works"][workID] === "undefined"
  ) {
    route("/error-404");
    work = null;
  } else {
    const localeSubscriber = locale.subscribe((locale) => {
      work = References["works"][workID][locale];
    });

    work = References["works"][workID][get(locale)];

    onDestroy(localeSubscriber);
  }
</script>

<artice class="mb-5">
  <h4 class="mb-4 text-light">
    <a href="/references#work">{$_('pages.work_details.work')}</a>
    ≫ {work ? work.companyName : ''}
  </h4>
  <img
    src="{work ? work.logoImage : ''}"
    alt="General Mobile Inc."
    class="rounded img-fluid"
  />
  <h5 class="my-4">{$_('pages.work_details.description')}</h5>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non esse fugiat
    corporis optio voluptatum a eveniet. Dolorum ex praesentium ducimus! Quasi
    incidunt impedit aut, rem at repellat repudiandae quas a!
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
          class="feather feather-briefcase"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      </span>
      {$_('pages.work_details.position', {
        values: {
          position: work ? work.position : '',
          startDate: work ? work.startDate : '',
          endDate: work
            ? work.endDate === ''
              ? $_('pages.work_details.still')
              : work.endDate
            : '',
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
          class="feather feather-map-pin"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      </span>
      {work ? work.location.city : ''}, {work ? work.location.country : ''}
    </li>
  </ul>

  <h5 class="my-4">{$_('pages.work_details.used_technologies')}</h5>
  <ul class="list-inline">
    <li>- Kotlin</li>
    <li>- Java</li>
  </ul>
</artice>
