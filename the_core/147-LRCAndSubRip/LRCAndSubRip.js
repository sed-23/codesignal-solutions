/* Question : During your most recent trip to Codelandia you decided to buy a brand new CodePlayer, a music player that (allegedly) can work with any possible media format. 
              As it turns out, this isn't true: the player can't read lyrics written in the LRC format. It can, however, read the SubRip format, so now you want to translate 
              all the lyrics you have from LRC to SubRip.

              Since you are a pro programmer (no noob would ever get to Codelandia!), you're happy to implement a function that, given lrcLyrics and songLength, returns the 
              lyrics in SubRip format. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/secret-archives/oAwCH6ecrzA4ARb6d


function LRCAndSubRip(lrcLyrics, songLength) {
  timeConverter = t => {
      [,m,s,x] = t.match(/(\d\d):(\d\d).(\d\d)/)
      h = (m - m % 60) / 60
      m = m % 60
      console.log([h,m,s,x])
      return ('00'+h).slice(-2) + ':' + 
          ('00'+m).slice(-2) + ':' +
          ('00'+s).slice(-2) + ',' + x + '0'
  }
  lrcLyrics = lrcLyrics.map(x => /\[(.+)\] ?(.*)/g.exec(x))
      .map(x => ({time: timeConverter(x[1]), text: x[2]}))
  var subRip = [], i;
  for (i = 0; i < lrcLyrics.length; ++i) {
      t1 = lrcLyrics[i].time
      t2 = lrcLyrics[i+1] ? lrcLyrics[i+1].time : songLength + ',000'
      if (i > 0) subRip.push('')
      subRip.push(''+(i+1))
      subRip.push(t1 + ' --> ' + t2)
      subRip.push(lrcLyrics[i].text)
  }
  return subRip
}