<script>
  import { FeedbackStore } from '../stores';
  import FeedbackItem from './FeedbackItem.svelte';
  import { fade, scale } from 'svelte/transition';
</script>

{#each $FeedbackStore as item (item.id)}
  <div in:scale out:fade>
    <FeedbackItem {item} />
  </div>
{/each}
