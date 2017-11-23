<template>
  <input id="input-credential"
    class="form-control"
    :value="value"
    @input="$emit('input', $event.target.value)"
    autofocus
  />
</template>

<script>
export default {
  name: 'CredentialForm',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>

</style>
