export const getEnvVars = () => import.meta.env;

export const mapIVsToString = (ivs) => {
  return `${ivs.hp}/${ivs.atk}/${ivs.def}/${ivs.spa}/${ivs.spd}/${ivs.spe}`;
};

export const mapEVsToString = (evs) => {
  return `${evs.hp}/${evs.atk}/${evs.def}/${evs.spa}/${evs.spd}/${evs.spe}`;
};
