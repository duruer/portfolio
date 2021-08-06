4
<h4 class="text-primary">404</h4>
{$_("pages.error_404.message")}

<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        status,
        message: error.message,
        title: `${status}: ${error.message}`,
      },
    };
  }
</script>

<script>
  import { _ } from "svelte-i18n";
</script>
