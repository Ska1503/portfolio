export const playSoundsInChat = (src: string): void => {
  const audio = new Audio(src)
  audio.play()
}
