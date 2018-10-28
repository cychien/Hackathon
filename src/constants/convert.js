export default function(data) {
  console.log(data.map(item => Number(item)));
  const level = data.map(item => {return Number(item);}).map(num => {
    if (num <= 11) return 1
    if (num <= 23) return 2
    if (num <= 35) return 3
    if (num <= 41) return 4
    if (num <= 47) return 5
    if (num <= 53) return 6
  })
  console.log(level);
  return level[0];
}