/* Question : .... */ 

// URL : https://app.codesignal.com/arcade/code-arcade/secret-archives/W59RqZTbGo2vwNSsc


function befunge(program) {
  var stack = [], out = '', dir = '>', i = 0, j = 0, v, k = 0, s = 1
      n = program.length, m = program[0].length, str = 0;
  while (((v = program[i][j]) !== '@' || str) &&
         k++ < 100000 && out.length < 100) {
      //if (k < 1000) console.log([v,i,j,out,stack.slice(-5),dir])
      if (v == '"') {
          str = 1 - str
      }
      if (str) {
          if (v != '"') stack.push(v.charCodeAt(0))
          if (dir == '^') i = (n + i - 1) % n
          if (dir == 'v') i = (n + i + 1) % n
          if (dir == '<') j = (m + j - 1) % m
          if (dir == '>') j = (m + j + 1) % m
          continue
      }
      if (!stack.length) stack = [0,0]
      if ('<>v^'.indexOf(v) > -1) dir = v
      if (v == '_') dir = stack.pop() | 0 ? '<' : '>'
      if (v == '|') dir = stack.pop() | 0 ? '^' : 'v'
      s = v == '#' ? 2 : 1
      if (dir == '^') i = (n + i - s) % n
      if (dir == 'v') i = (n + i + s) % n
      if (dir == '<') j = (m + j - s) % m
      if (dir == '>') j = (m + j + s) % m
      if ('+-*/%'.indexOf(v) > -1) {
          a = stack.pop()
          b = stack.pop()
          stack.push(eval(b + v + a) | 0)        
      }
      if (v == '!') stack.push(stack.pop() ? 0 : 1)
      if (v == '`') stack.push(stack.pop() < stack.pop() ? 1 : 0)
      if (v == ':') stack.push(stack.slice(-1)[0])
      if (v == '\\') stack = stack.concat([stack.pop(), stack.pop()])
      if (v == '$') stack.pop()
      if (v == '.') out += stack.pop() + ' '
      if (v == ',') out += String.fromCharCode(stack.pop())
      if (v.match(/\d/)) stack.push(v)
  }
  return out
}
