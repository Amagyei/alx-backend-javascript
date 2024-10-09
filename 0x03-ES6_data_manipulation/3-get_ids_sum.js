export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return (arr.reduce((sum, {id}), => sum + id, 0)
}
