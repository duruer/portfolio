<script>
  import { route } from "routve";

  import References from "../references.config";

  export let work;

  $: {
    if (
      typeof work === "undefined" ||
      work === null ||
      typeof References["works"][work] === "undefined"
    ) {
      route("/error-404");
      work = null;
    } else work = References["works"][work];
  }
</script>

<artice class="mb-5">
  <h4 class="mb-4 text-light">
    <a href="/references#work">Work</a>
    ≫ {work ? work.companyName : ''}
  </h4>
  <img
    src="{work ? work.logoImage : ''}"
    alt="General Mobile Inc."
    class="rounded img-fluid"
  />
  <h5 class="my-4">Description</h5>
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
      as {work ? work.position : ''}, between {work ? work.startDate : ''}-{work ? work.endDate : ''}
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

  <h5 class="my-4">Used Technologies</h5>
  <ul class="list-inline">
    <li>- Kotlin</li>
    <li>- Java</li>
  </ul>
</artice>
