// eslint-disable-next-line import/prefer-default-export
export function guidGenerator() {
  const S4 = () => ((1 + Math.random()) * 0x10000).toString(16).substring(1)
  return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`
}
