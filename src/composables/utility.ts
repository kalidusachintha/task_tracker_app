export default function useUtility() {

  const formatStatus = (status:string) => {
    return status?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return {
    formatStatus
  }
}
