<svelte:head>
  <title>{$page.status} | {$_("page_title")}</title>
</svelte:head>

<h4 class="text-primary">404</h4>
{$_("pages.error_404.message")}

<script>
  import { _ } from "svelte-i18n";
  import { page } from "$app/stores";
</script>
