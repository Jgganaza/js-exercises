const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

function averageWord(param) {
  let totalNum = 0
  let totalStr = ''

  for (const item of param) {
    if (typeof item === 'number') {
      totalNum = totalNum + item
    }

    if (typeof item === 'string') {
      totalStr = totalStr + item
    }
  }
  console.log(totalNum)
  console.log(totalStr)
}

averageWord(mixedElements)
