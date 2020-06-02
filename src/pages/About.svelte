<script>
  import { _ } from "svelte-i18n";
</script>

<artice class="d-block mb-5">
  <h4 class="mb-4 text-light">{$_("pages.about.title")}</h4>
  <p class="mb-0">
    {$_("pages.about.description")}
  </p>
</artice>

<artice class="d-block mb-5">
  <h4 class="mb-4 text-light">{$_("pages.about.interests_title")}</h4>

  <div class="row">
    <div class="col-6">
      <div class="row">
        <div
          class="col-auto text-primary d-flex align-items-center
          justify-content-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-smartphone"
          >
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
        </div>
        <div class="col">Android</div>
      </div>
    </div>
    <div class="col-6">
      <div class="row">
        <div
          class="col-auto text-primary d-flex align-items-center
          justify-content-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-code"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        <div class="col">Front-End Engineering</div>
      </div>

    </div>
    <div class="w-100 py-3"></div>
    <div class="col-6">
      <div class="row">
        <div
          class="col-auto text-primary d-flex align-items-center
          justify-content-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-coffee"
          >
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
        </div>
        <div class="col">Back-End Engineering</div>
      </div>

    </div>
    <div class="col-6">
      <div class="row">
        <div
          class="col-auto text-primary d-flex align-items-center
          justify-content-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-server"
          >
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6.01" y2="6"></line>
            <line x1="6" y1="18" x2="6.01" y2="18"></line>
          </svg>
        </div>
        <div class="col">Server</div>
      </div>

    </div>
  </div>

</artice>

<artice class="d-block mb-5">
  <h4 class="mb-4 text-light">{$_("pages.about.skills_title")}</h4>
  <div class="row flex-wrap">
    <div class="col-auto">
      <div class="skill kotlin-bg">
        <span>
          Kotlin
          <small class="text-muted">
            Android
            <br />
            Web
          </small>
        </span>
      </div>
    </div>
    <div class="col-auto">
      <div class="skill js-bg">
        <span>
          Javascript
          <small class="text-muted">
            Svelte
            <br />
            Vue.js
          </small>
        </span>
      </div>
    </div>
    <div class="col-auto">
      <div class="skill java-bg">
        <span>
          Java
          <br />
          <small class="text-muted">
            JVM Apps
            <br />
            Web Server
          </small>
        </span>
      </div>
    </div>
    <div class="col-auto">
      <div class="skill linux-bg">
        <span>
          Linux
          <small class="text-muted">
            <br />
            DevOps
            <br />
            Server
          </small>
        </span>
      </div>
    </div>
    <div class="col-auto">
      <div class="skill db-bg">
        <span>
          {$_("pages.about.skills.database_title")}
          <small class="text-muted">
            <br />
            MySQL
            <br />
            SQLite
          </small>
        </span>
      </div>
    </div>
    <div class="col-auto">
      <div class="skill">
        <span>
          {$_("pages.about.skills.others_title")}
          <small class="text-muted">
            <br />
            Git
            <br />
            Docker
          </small>
        </span>
      </div>
    </div>
  </div>
</artice>
