const scriptLoader = function(e,t,i,n){var r=!0,a=function(e){r===!0&&(clearInterval(o),r=!1,n.call(void 0,e))},c=(new Date).getTime(),d=document.createElement("script"),s=document.head,o=setInterval(function(){"undefined"!=typeof t?a(!0):(new Date).getTime()-c>=e&&a(!1)},100);d.setAttribute("type","text/javascript"),d.setAttribute("src",t),s.appendChild(d),s.removeChild(s.lastChild)}
// This is a pretty shitty way at loading all of this, but it'll work for now.
// In the future, we'll likely use a packer. ~JD
// START CUSTOM CONTENT. DO NOT EDIT ABOVE.

primusLoaded = (isLoaded) => {
  if (isLoaded === false)
    alert('Unable to load required libraries.')
  else {
    const sock = new webIrcJS('irc.irc7.net', 6697, true)
      .on('line', (data) => console.log('<--', data))
      .on('disconnect', () => console.log('XXX'))
      .on('ACTION', (text) => console.log(`* ${ sock.event.nick } ${ text }`))
      .on('PRIVMSG', (text) => console.log(`<${ sock.event.nick }> ${ text }`))
      .on('NOTICE', (text) => console.log(`-${ sock.event.nick }- ${ text }`))
      .on('CTCP', (cmd, text) => {
        if (text === '') {
          if (cmd === 'VERSION')
            sock.ctcpReply(sock.event.nick, `${ cmd } IRCSocket v0 Alpha by JD`)
        }
        console.log(`[${ sock.event.nick } ${ cmd }] ${ text }`)
      })
      .on('CTCPREPLY', (cmd, text) => console.log(`[${ sock.event.nick } ${ cmd } reply] ${ text }`))
    sock.connect((sock) => {
      console.log('*** Connected')
      sock.send('JOIN %#Test')
    })
    window.sock = sock // Expose.
  }
}

// END OF CUSTOM CONTENT. DO NOT EDIT BELOW.
document.addEventListener("DOMContentLoaded",function(i){scriptLoader(1e4,"https://irc.irc7.com/js/primus.js",window.Primus,function(i){var o=function(i){alert("Couldn't load module: "+i)};i===!0?scriptLoader(1e4,"./irc.js",window.ircJS,function(i){i===!0?scriptLoader(1e4,"./primus.js",window.primusLoaded,function(i){i===!0?window.primusLoaded.call(i):o("webIrcJS")}):o("webIrc.JS")}):o("Primus")})});
