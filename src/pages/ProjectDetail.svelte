<script>
  import { route } from "routve";
  import { _, locale } from "svelte-i18n";
  import { onDestroy } from "svelte";
  import { get } from "svelte/store";

  import References from "../references.config";

  export let projectID;
  let project;

  if (
          typeof projectID === "undefined" ||
          projectID === null ||
          typeof References["projects"][projectID] === "undefined"
  ) {
    route("/error-404");
    project = null;
  } else {
    const localeUnsubscribe = locale.subscribe((value) => {
      project = References["projects"][projectID][value];
    });

    project = References["projects"][projectID][get(locale)];

    onDestroy(localeUnsubscribe);
  }
</script>

<artice class="mb-5">
  <h4 class="mb-4 text-light">
    <a href="#">Project</a>
    ≫ Pano
  </h4>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non esse fugiat
    corporis optio voluptatum a eveniet. Dolorum ex praesentium ducimus! Quasi
    incidunt impedit aut, rem at repellat repudiandae quas a!
  </p>
  <h6 class="text-muted">2018 - 2020 Present</h6>

  <h5 class="my-4">Links</h5>
  <ul class="list-group list-group-horizontal list-unstyled mb-3">
    <li class="list-group-item bg-transparent pl-0">
      <a href="#">Website</a>
    </li>
    <li class="list-group-item bg-transparent">
      <a href="#">Github</a>
    </li>
    <li class="list-group-item bg-transparent">
      <a href="#">Gitlab</a>
    </li>
  </ul>

  <h5 class="my-4">Screenshots</h5>
  <img
    src="../assets/img/pano-ss-1.png"
    class="border rounded img-fluid mb-3"
    alt="Project Image 1"
    title="Project Image 1"
  />
</artice>
