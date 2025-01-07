const rememberableName = 42

export function middleware() {
  if (rememberableName > 10) {
    console.log('I am middleware')
  }
}
