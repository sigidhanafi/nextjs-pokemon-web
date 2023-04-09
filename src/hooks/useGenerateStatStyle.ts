export default function useGenerateStatStyle(stat: number) {
  const statNumber = Math.round(stat / 10) * 10;
  let statStyle = "";
  switch (statNumber) {
    case 10:
      statStyle = "bg-blue-300 h-1 w-10%";
      break;
    case 20:
      statStyle = "bg-blue-300 h-1 w-20%";
      break;
    case 30:
      statStyle = "bg-blue-300 h-1 w-30%";
      break;
    case 40:
      statStyle = "bg-blue-300 h-1 w-40%";
      break;
    case 50:
      statStyle = "bg-blue-300 h-1 w-50%";
      break;
    case 60:
      statStyle = "bg-blue-300 h-1 w-60%";
      break;
    case 70:
      statStyle = "bg-blue-300 h-1 w-70%";
      break;
    case 80:
      statStyle = "bg-blue-300 h-1 w-80%";
      break;
    case 90:
      statStyle = "bg-blue-300 h-1 w-90%";
      break;
    case 100:
      statStyle = "bg-blue-300 h-1 w-100%";
      break;
  }
  return statStyle;
}
