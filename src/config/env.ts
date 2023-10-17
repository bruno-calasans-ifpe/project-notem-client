// getting env variables
const { DEV, PROD } = import.meta.env

// simplified env config
const ENVCONFIG = {
  DEV,
  PROD,
} as const

// exporting
export default ENVCONFIG
