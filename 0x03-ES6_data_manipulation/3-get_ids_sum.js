export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }
  return arr.reduce((sum, { id }) => sum + id, 0);
}
