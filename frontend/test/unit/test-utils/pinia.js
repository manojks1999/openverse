// eslint-disable-next-line no-restricted-imports
import * as pinia from "pinia"

export const createPinia = () =>
  pinia.createPinia().use(() => ({
    $nuxt: {
      $openverseApiToken: "",
      $sentry: {
        captureException: jest.fn(),
        captureEvent: jest.fn(),
      },
      $cookies: {
        set: jest.fn(),
        get: jest.fn(),
        setAll: jest.fn(),
      },
      i18n: {
        localeProperties: {
          code: "es",
          translated: 100,
          name: "Spanish",
        },
      },
      error: jest.fn(),
      localePath: jest.fn(),
    },
  }))

export const setActivePinia = pinia.setActivePinia

export const PiniaVuePlugin = pinia.PiniaVuePlugin
