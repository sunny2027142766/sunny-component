import { ref } from 'vue'

export function useToggle(initialValue = false) {
  const state = ref(initialValue)

  function open() {
    state.value = true
  }

  function close() {
    state.value = false
  }

  function toggle() {
    state.value = !state.value
  }

  return {
    state,
    open,
    close,
    toggle,
  }
}
