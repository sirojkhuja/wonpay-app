export const ANNUTET = "ANNUTED";
export const DIFFERENSIAL = "DIFFERENSIAL";

export const annuted = (creditTime, creditValue) => ({
  type: ANNUTET,
  creditTime,
  creditValue,
});
export const differensial = (creditTime, creditValue) => ({
  type: DIFFERENSIAL,
  creditTime,
  creditValue,
});
