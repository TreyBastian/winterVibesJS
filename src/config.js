// default configuration values
const PARAM_DEFAULTS = [
  { name: "v", value: 1 }, // version
  { name: "cw", value: 640 }, // canvas width
  { name: "ch", value: 360 }, // canvas height
  { name: "smx", value: 40 }, // snow max
  { name: "smnsz", value: 1 }, // snow min size
  { name: "smxsz", value: 4 }, // snow max size
  { name: "smxspd", value: 0.07 }, // snow max speed
  { name: "snmnspd", value: 0.04 }, // snow min speed
  { name: "pspd", value: 0.1 }, // plow speed
  { name: "pd", value: "left" }, // plow direction
  { name: "gamax", value: 4 }, // ground accumulator max
  { name: "gas", value: 20 }, // ground accumulatior slices
];

/**
 * @returns {Config} configuration object
 * gets configuration from query parameters or defaults
 */
function getConfiguration() {
  const urlParams = new URLSearchParams(window.location.search);
  if (PARAM_DEFAULTS.some(({ name }) => !urlParams.has(name))) {
    setParamsAndRefresh(PARAM_DEFAULTS);
  }

  return {
    version: parseInt(urlParams.get("v")),
    canvas: {
      width: parseInt(urlParams.get("cw")),
      height: parseInt(urlParams.get("ch")),
    },
    snow: {
      max: parseInt(urlParams.get("smx")),
      minSize: parseInt(urlParams.get("smnsz")),
      maxSize: parseInt(urlParams.get("smxsz")),
      maxSpeed: parseFloat(urlParams.get("smxspd")),
      minSpeed: parseFloat(urlParams.get("snmnspd")),
    },
    plow: {
      speed: parseFloat(urlParams.get("pspd")),
      // @ts-ignore -- I dunno how to get ts / jsdoc to be ok with this
      direction: urlParams.get("pd"),
    },
    groundAccumulator: {
      max: parseInt(urlParams.get("gamax")),
      slices: parseInt(urlParams.get("gas")),
    },
  };
}

/**
 * @param {Array<{name: string, value: any}>} params
 */
export function setParamsAndRefresh(params) {
  const urlParams = new URLSearchParams(window.location.search);
  params.forEach(({ name, value }) => {
    urlParams.set(name, value);
  });
  window.location.search = urlParams.toString();
}

const config = getConfiguration();

export default config;
