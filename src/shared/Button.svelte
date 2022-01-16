<script>
  export let style = 'primary'
  export let type = 'button'
  export let disabled = false
</script>

<button {type} {disabled} class={style}>
  <slot></slot>
</button>


<style>
  button {
    font-family: inherit;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    border: 0;
    border-radius: 8px;
    color: #fff;
    width: 100px;
    height: 40px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  .primary {
    background-color: #202142;
  }
  .secondary {
    background: #ff6a95;
  }
  button:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }
  button:disabled{
    background-color: #cccccc;
    color: #333;
    cursor:auto;
  }
  button:disabled:hover{
    transform:scale(1);
    opacity: 1;
  }
</style>