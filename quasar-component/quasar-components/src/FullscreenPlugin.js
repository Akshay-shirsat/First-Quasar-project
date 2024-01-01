import { AppFullscreen } from 'quasar'

// Requesting fullscreen mode:
AppFullscreen.request()
  .then(() => {
    // success!
  })
  .catch(err => {
    // oh, no!!!
  })

// Exiting fullscreen mode:
AppFullscreen.exit()
  .then(() => {
    // success!
  })
  .catch(err => {
    // oh, no!!!
  })
