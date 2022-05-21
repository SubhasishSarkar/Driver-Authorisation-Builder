export default function generateLetter(state) {
  const letter = `I ${state.ownerName}, ${state.ownerRelation} ${state.ownerGurdian}, ${state.ownerAddress}, by caste ${state.ownerCast} by profession Business, do hearby authorise my driver namely ${state.driverName}, S/O ${state.driverFatherName}, Address: ${state.driverAddress}. 
    Being driving License No. ${state.driverLicenseNumber} vide regd No. ${state.vehicle} in my consent.

    He will undertake to make the full responsibility of my said vehicle. This authorised letter will be valid from  ${state.dateFrom} to ${state.dateTo}.`;

  return letter;
}
