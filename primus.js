class webIrcJS extends ircJS {
  constructor(hostname, port, useTLS) {
    super(hostname, port, useTLS)
    this._transport = new window.Primus('https://irc.irc7.com/') // Ignore params.
    this._setHandlers()
  }

  connect(callback) {
    super.connect(callback)
    // TODO: Make sure disconnected state or throw error
    this._transport.open()
  }

  send(data) {
    super.send(data)
    // TODO: Make sure connected state or throw error
    this._transport.write(`${ data }\r\n`)
    console.log(`--> ${ data }`) // TODO: Remove (debugging)
  }

  _setHandlers() {
    super._setHandlers()
    this._transport
      .on('data', (data) => { this.emit('data', data) })
      .on('open', () => { this.emit('connect', this) })
      .on('error', (err) => { this.emit('error', err) })
      .on('end', () => { this.emit('disconnect') })
  }
}

/**
 * # Note: Not a static member.
 * This event tree is provided to make it easier to visualise. It's important
 * to note that if you remove the default listeners from events, you should
 * call the sub-events yourself, otherwise some events may not trigger.
 * IRCSocket uses the publically modifiable events, which allows maximum
 * customisation.
 * ````
 * IRCSocket
 * ├-- start
 * |-- connect
 * |-- data
 * |   └-- line
 * |       ├-- parsedLine
 * |       |   └-- raw [command]
 * |       └-- parseFail
 * └-- disconnect
 * ````
 * @memberof IRCSocket
 * @name EventTree
 */
