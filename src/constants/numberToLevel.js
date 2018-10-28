export default function(data) {
  console.log(data);
  const level = data.map(num => {
    switch (num) {
      case (num <= 11):
        return 1
        break;
      case (num <= 23):
        return 2
        break;
      case (num <= 35):
        return 3
        break;
      case (num <= 41):
        return 4
        break;
      case (num <= 47):
        return 5
        break;
      case (num <= 53):
        return 6
        break;
      case (num <= 58):
        return 7
        break;
      case (num <= 64):
        return 8
        break;
      case (num <= 70):
        return 9
        break;
      case (num >= 71):
        return 10
        break;
    }
  })

  return level;
}