export function navigator (path) {
    console.log(this)
    // window.location.href = path
}

export function timeChanges (source, inFormat, outFormat) {
    let checkTime = function (time) {
      if (time < 10) {
        time = '0' + time
      }
      return time
    }
    let reg
    switch (inFormat) {
      case 'Y-m-d H:i:s':
        reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/
        source = source.match(reg)
        source = new Date(source[1], source[3] - 1, source[4], source[5], source[6], source[7])
        break
      case 'Y-m-d H:i':
        reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2})$/
        source = source.match(reg)
        source = new Date(source[1], source[3] - 1, source[4], source[5])
        break
      case 'Y-m-d':
        reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/
        source = source.match(reg)
        source = new Date(source[1], source[3] - 1, source[4])
        break
      case 'timestamp':
        source = new Date(parseInt(source) * 1000)
        break
    }
    switch (outFormat) {
      case 'Y-m-d H:i:s':
        return source.getFullYear() + '-' +
          checkTime(source.getMonth() + 1) + '-' +
          checkTime(source.getDate()) + ' ' +
          checkTime(source.getHours()) + ':' +
          checkTime(source.getMinutes()) + ':' +
          checkTime(source.getSeconds())
      case 'Y-m-d':
        return source.getFullYear() + '-' +
          checkTime(source.getMonth() + 1) + '-' +
          checkTime(source.getDate())
      case 'Y.m.d':
        return source.getFullYear() + '.' +
          checkTime(source.getMonth() + 1) + '.' +
          checkTime(source.getDate())
      case 'Y/m':
        return source.getFullYear() + '/' +
          checkTime(source.getMonth() + 1)
      case 'm.d':
        return checkTime(source.getMonth() + 1) + '.' + checkTime(source.getDate())
      case 'm-d':
        return checkTime(source.getMonth() + 1) + '-' + checkTime(source.getDate())
      case 'week':
        return source.getDay()
      case 'timestamp':
        return parseInt(source.getTime() / 1000)
      case 'newDate':
        return source
    }
  }
/*移除HTML标签代码*/
export function removeHTMLTag (str) {
  str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
  str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
  str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
  str=str.replace(/ /ig,'');//去掉 
  return str;
}
// 转意符换成普通字符
export function escape2Html (str) {
  let arrEntities={'lt':'<', 'gt':'>', 'nbsp':' ', 'amp':'&', 'quot':'"'}; 
  return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, (all, t) => {return arrEntities[t];}) 
} 