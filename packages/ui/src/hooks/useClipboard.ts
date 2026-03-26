import { computed, ref } from 'vue'

export function useClipboard() {
  const copiedText = ref('')
  const copied = ref(false)
  const isSupported = typeof navigator !== 'undefined' && Boolean(navigator.clipboard)

  async function copy(text: string) {
    if (!isSupported) {
      return false
    }

    await navigator.clipboard.writeText(text)
    copiedText.value = text
    copied.value = true

    window.setTimeout(() => {
      copied.value = false
    }, 1600)

    return true
  }

  return {
    copiedText,
    copied,
    isSupported: computed(() => isSupported),
    copy,
  }
}
