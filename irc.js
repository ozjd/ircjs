// EventEmitter3 - https://unpkg.com/eventemitter3@latest/umd/eventemitter3.min.js
(function(e){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=e()}else if(typeof define==="function"&&define.amd){define([],e)}else{var t;if(typeof window!=="undefined"){t=window}else if(typeof global!=="undefined"){t=global}else if(typeof self!=="undefined"){t=self}else{t=this}t.EventEmitter3=e()}})(function(){var e,t,n;return function e(t,n,r){function s(o,f){if(!n[o]){if(!t[o]){var u=typeof require=="function"&&require;if(!f&&u)return u(o,!0);if(i)return i(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,s="~";function i(){}if(Object.create){i.prototype=Object.create(null);if(!(new i).__proto__)s=false}function o(e,t,n){this.fn=e;this.context=t;this.once=n||false}function f(){this._events=new i;this._eventsCount=0}f.prototype.eventNames=function e(){var t=[],n,i;if(this._eventsCount===0)return t;for(i in n=this._events){if(r.call(n,i))t.push(s?i.slice(1):i)}if(Object.getOwnPropertySymbols){return t.concat(Object.getOwnPropertySymbols(n))}return t};f.prototype.listeners=function e(t,n){var r=s?s+t:t,i=this._events[r];if(n)return!!i;if(!i)return[];if(i.fn)return[i.fn];for(var o=0,f=i.length,u=new Array(f);o<f;o++){u[o]=i[o].fn}return u};f.prototype.emit=function e(t,n,r,i,o,f){var u=s?s+t:t;if(!this._events[u])return false;var c=this._events[u],l=arguments.length,h,v;if(c.fn){if(c.once)this.removeListener(t,c.fn,undefined,true);switch(l){case 1:return c.fn.call(c.context),true;case 2:return c.fn.call(c.context,n),true;case 3:return c.fn.call(c.context,n,r),true;case 4:return c.fn.call(c.context,n,r,i),true;case 5:return c.fn.call(c.context,n,r,i,o),true;case 6:return c.fn.call(c.context,n,r,i,o,f),true}for(v=1,h=new Array(l-1);v<l;v++){h[v-1]=arguments[v]}c.fn.apply(c.context,h)}else{var a=c.length,p;for(v=0;v<a;v++){if(c[v].once)this.removeListener(t,c[v].fn,undefined,true);switch(l){case 1:c[v].fn.call(c[v].context);break;case 2:c[v].fn.call(c[v].context,n);break;case 3:c[v].fn.call(c[v].context,n,r);break;case 4:c[v].fn.call(c[v].context,n,r,i);break;default:if(!h)for(p=1,h=new Array(l-1);p<l;p++){h[p-1]=arguments[p]}c[v].fn.apply(c[v].context,h)}}}return true};f.prototype.on=function e(t,n,r){var i=new o(n,r||this),f=s?s+t:t;if(!this._events[f])this._events[f]=i,this._eventsCount++;else if(!this._events[f].fn)this._events[f].push(i);else this._events[f]=[this._events[f],i];return this};f.prototype.once=function e(t,n,r){var i=new o(n,r||this,true),f=s?s+t:t;if(!this._events[f])this._events[f]=i,this._eventsCount++;else if(!this._events[f].fn)this._events[f].push(i);else this._events[f]=[this._events[f],i];return this};f.prototype.removeListener=function e(t,n,r,o){var f=s?s+t:t;if(!this._events[f])return this;if(!n){if(--this._eventsCount===0)this._events=new i;else delete this._events[f];return this}var u=this._events[f];if(u.fn){if(u.fn===n&&(!o||u.once)&&(!r||u.context===r)){if(--this._eventsCount===0)this._events=new i;else delete this._events[f]}}else{for(var c=0,l=[],h=u.length;c<h;c++){if(u[c].fn!==n||o&&!u[c].once||r&&u[c].context!==r){l.push(u[c])}}if(l.length)this._events[f]=l.length===1?l[0]:l;else if(--this._eventsCount===0)this._events=new i;else delete this._events[f]}return this};f.prototype.removeAllListeners=function e(t){var n;if(t){n=s?s+t:t;if(this._events[n]){if(--this._eventsCount===0)this._events=new i;else delete this._events[n]}}else{this._events=new i;this._eventsCount=0}return this};f.prototype.off=f.prototype.removeListener;f.prototype.addListener=f.prototype.on;f.prototype.setMaxListeners=function e(){return this};f.prefixed=s;f.EventEmitter=f;if("undefined"!==typeof t){t.exports=f}},{}]},{},[1])(1)});

// The ircJS class is a base class that should not be used directly, but
// extended by various transport mechanisms. The goal is to have an API that
// can be used through various. ~JD

/**
 * Extendable base class for ircJS classes
 *
 * @author Joshua Davison <joshua@davison.asia>
 * @
 * @class ircJS
 * @param {string}  hostname Hostname to connect to
 * @param {number}  port     Server port to connect to
 * @param {boolean} [useTLS] Describes if SSL/TLS encryption should be used
 * @fires start
 */
class ircJS extends EventEmitter3 {
  constructor(hostname = 'irc.irc7.com', port = 6667, useTLS = false) {
    super() // Call EventEmitter3's constructor()

    if (typeof hostname !== 'string')
      throw new TypeError('hostname should be of type string')
    else if (typeof port !== 'number')
      throw new TypeError('port should be of type number')
    else if (typeof useTLS !== 'boolean')
      throw new TypeError('useTLS should be of type boolean')

    /**
     * The client object object contains multiple properties about the
     * connection
     * #### Alias: ircJS.c
     *
     * @member {Object}
     * @property {boolean} away - Returns the value ````true```` or
     * ````false```` depending on whether you are marked as away or not.
     * @property {string} me - Returns your current nickname.
     * @property {number} port - Returns the port specified in the constructor
     * whether you are connected to the server or not.
     * @property {string} realName - Returns the connection's 'realname'.
     * in the constructor whether you are connected or not.
     * @property {string} server - Returns the name of the server to which you
     * are currently connected.
     * @property {string} serverTarget - Returns the address specified in the
     * constructor whether you are connected to the server or not.
     * @property {boolean} ssl - Returns ````true```` if TLS/SSL was requested
     * @property {string} userName - Returns your current username
     */

    this.client = this.c = {
      away: false,
      me: 'Guest_' + Math.floor((Math.random() * 4294967295) + 1).toString(16),
      port: port,
      realName: 'ircJS v0.01a',
      server: null,
      serverTarget: hostname,
      ssl: useTLS,
      userName: 'IRCSock'
    };

    /**
     * The events object contains multiple properties that are useful for
     * dealing with the handling of events.
     * #### Alias: ircJS.e
     *
     * @member {Object}
     * @property {string} address - Returns the address of the user associated
     * with an event in the form user@host.
     * @property {string} chann - Returns the name of the channel for a
     * specific event. For all non-channel events chan will be ````$null````.
     * @property {string} event - Returns the name of the event that was
     * triggered.
     * @property {string} fulladdress - Returns the full address of the user
     * triggering an event in the form nick!user@host.
     * @property {string} nick - Returns the nickname of the user associated
     * with an event.
     * @property {string} numeric - Returns the nickname of the user associated
     * with an event.
     * @property {string} rawMsg - Returns raw server line for server events.
     * @property {string} site - Returns the portion of $address after the @ for
     * the user associated with an event in the form user@host.
     * @property {string} target - Returns the target of an event.
     */
    this.event = this.e = {
      address: null,
      chan: null, // Not currently implemented. Try <target> as needed.
      event: null, // Not currently implemented.
      fullAddress: null,
      nick: null,
      numeric: null,
      rawMsg: null,
      site: null,
      target: null,
    };

    /**
     * Contains unprocessed incoming data, and is only useful during the
     * {@link #ircJS.event:data data} event.
     * @private @member {string}
     */
    this._incomingBuffer = ''

    /**
     * Start event - triggered whenever the instance is created
     * @event start
     * @memberof ircJS
     */
    this.emit('start')
  }

  /**
   * Connect the ircJS to the host specified in construction
   * @method
   * @param  {Function} [callback] An optional callback for when the client has
   * successfully connected.
   * @return {object}   Instance of ircJS
   * @fires ircJS#connect If a successfull connection was made
   * @fires ircJS#error If there was an error connecting to the server
   */
  connect(callback) {
    if (typeof callback === 'function')
      this.on('connect', callback)
    else if (typeof callback !== 'undefined')
      throw new TypeError('callback should be of type function')
  }

  /**
   * An object containing information extracted from an IRC prefix
   * @name IRCPrefix
   * @typedef {Object} IRCPrefix
   * @property {string} source - The full IRC prefix used to create this object
   * @property {string} name - The servername/nick of the prefix
   * @property {string} user - The username/ident of the prefix
   * @property {string} host - The hostname of the prefix
   * @property {string} server - The server that the IRCPrefix is connected to
   */

   ctcp(target, text) {
     this.msg(target, `\x01${ text }\x01`)
   }

   ctcpReply(target, text) {
     this.notice(target, `\x01${ text }\x01`)
   }

   describe(target, text) {
     this.ctcp(target, `ACTION ${ text }`)
   }

  /**
   * Converts a string representation of an IRC server/user (prefix) into a
   * javascript object.
   * @method parsePrefix
   * @param {string} prefix
   * @return {IRCPrefix}
   */
  parsePrefix(prefix) {
    const [source, name, user, host, server] = prefix
      .match(/^([^!@\$]+?)(?:!([^!@$]+?))?(?:@([^!@$]+?))?(?:\$([^!@$]+?))?$/)
    return { source, name, user, host, server }
  }

  msg(target, text) {
    this.send(`PRIVMSG ${ target } :${ text }`)
  }

  notice(target, text) {
    this.send(`NOTICE ${ target } :${ text }`)
  }

  /**
   * Used to send an unterminated string to the IRC server.
   * @method send
   * @param  {String} [data] Data to be send to server
   * @return {object} Current instance of ircJS
   */
  send(data = '') {
    // TODO: Should check connection is active.
    if (typeof data !== 'string')
      throw new TypeError('data should be of type string')
  }

  _setHandlers() {
    /**
     * This event is triggered when a successful connection has been made
     *
     * @event connect
     * @memberof ircJS
     * @param {ircJS} Subclass instance of ircJS
     */
    this.on('connect', (sock) => {
      this.client['server'] = this.hostname

      // BEGIN - TODO: Remove this stuff.
      let userAgent = ''
      if (typeof process !== 'undefined')
        for (let k in process.versions) { userAgent += `${ k }: ${ process.versions[k] }; ` }
      else if (typeof navigator !== 'undefined')
        userAgent = navigator.userAgent
      sock.send(`IRCVERS IRC8 ${ this.constructor.name } en-us :${ userAgent }`)
      // END -

      this.send(`USER ${ this.client.userName } - - :${ this.client.realName }`)
      this.send(`NICK ${ this.client.me }`)
    })

    this.on('CTCP', (cmd, text) => {
      if (cmd === 'PING')
        sock.ctcpReply(sock.event.nick, `${ cmd } ${ text }`)
      if (text === '') {
        if (cmd === 'TIME')
          sock.ctcpReply(sock.event.nick, `${ cmd } ${ new Date() }`)
        else if (cmd === 'VERSION')
          sock.ctcpReply(sock.event.nick, `${ cmd } ircJS v0 Alpha by JD`)
      }
    })

    /**
     * This event is triggered when raw data is received, and may not (yet) be
     * complete. This is useful only to override the way the data is parsed
     * into lines. In most cases, it would be advisable to see the
     * {@link #ircJS.event:line line} event.
     *
     * @event data
     * @memberof ircJS
     * @param {string} data Incoming data
     */
    this.on('data', (data) => {

      const lines = (this._incomingBuffer+data) // Use buffer AND new data
                      .split('\r')
                      .join('\n')
                      .split('\n')
      this._incomingBuffer = lines.pop() // Unterminated data returns to buffer
      for (const line of lines) {
        if (line !== '')
          this.emit('line', line)
      }
    })

    /**
     * This event is triggered when you are disconnected from the IRC server
     *
     * @event disconnect
     * @memberof ircJS
     */
    this.on('disconnect', () => {
      // TODO: Cleanup this object back to original state. (remove address list etc)
    })

   /**
    * This event is triggered when a new IRC formatted line arrives in the
    * buffer. Usually, you'll want the data to be parsed before processing,
    * which requires use of the {@link #ircJS.event:parsedLine parsedLine}
    * event.
    *
    * @event line
    * @memberof ircJS
    * @param {string} data Incoming data
    */
    this.on('line', (data) => {
      // Actual IRC parser
      // Will drop data if command is invalid/missing
      const words = data.split(' '),
            parsedLine = { params: [], source: data }
      for (let [i, word] of words.entries()) {
        if (word === '') // Empty word (multiple spaces)
          continue
        // Parse tags - see http://ircv3.net/specs/core/message-tags-3.2.html
        if (typeof parsedLine.tags === 'undefined')
          if ((word[0] === '@') && (word.length >= 2)) { // is a Tag. Parse.
            parsedLine.tags = word.substr(1).split(';')
            // TODO: Works, but does not yet turn key/value tags into arrays
            continue
          }
          else
            parsedLine.tags = null
        // Parse prefix
        // <servername> | <nick> [ '!' <user> ] [ '@' <host> ] ['$' <server>]
        if (typeof parsedLine.prefix === 'undefined') {
          if ((word[0] === ':') && (word.length >= 2)) { // is a Prefix.
            const pfx = parsedLine.prefix = this.parsePrefix(word.substr(1))
            this.event.nick = pfx.name
            if (pfx.user) {
              this.event.site = pfx.host
              this.event.address = `${ pfx.user }@{ pfx.host }`
              this.event.fullAddress = `${ pfx.name }!${ this.event.address }`
            }
            continue
          }
          else
            parsedLine.prefix = this.client.server
        }
        // Parse command
        if (typeof parsedLine.command === 'undefined') {
          if (/^([a-zA-Z]+|[0-9]{3})$/.test(word) === true)
            parsedLine.command = word.toUpperCase()
          else
            break
        }
        // Parse params
        else {
          if (word[0] !== ':')
            parsedLine.params.push(word)
          else {
            parsedLine.params.push(words.slice(i).join(' ').substr(1))
            break
          }
        }
      }
      if (typeof parsedLine.command === 'undefined')
        this.emit('parseError', data)
      else
        this.emit('parsedLine', parsedLine)

      this.event.nick = // Unset pre-set event vars.
      this.event.site =
      this.event.address =
      this.event.fullAddress =
        null
    })

    this.on('parsedLine', (parsedLine) => {
      const cmd = parsedLine.command.toUpperCase()
      this.event['rawMsg'] = parsedLine.source

      //TODO: add 'MODE'

      // JOIN [special] <channel>
      if (['JOIN'].indexOf(cmd) !== -1) {
        let special,
            [channel] = parsedLine.params
        if (parsedLine.params.length > 1) // IRCX
          [special, channel] = parsedLine.params
        this.event['target'] =
          channel
        this.emit('JOIN', special)
        this.event['target'] =
          null
      }

      // AUTH <name> <seq> [:<parameter>]
      else if ('AUTH' === cmd) {
        const [name, seq, parameters] = parsedLine.params
        this.emit(cmd, seq, parameters)
      }

      // NOTICE <Tnickname> :<text>
      // PRIVMSG <Treceiver> :<text>
      else if (['NOTICE', 'PRIVMSG'].indexOf(cmd) !== -1) {
        const [target, text] = parsedLine.params
        this.event['target'] = target
        if ((text.charCodeAt(0) === 1) && // CTCP / CTCPREPLY
            (text.charCodeAt(text.length -1) === 1) && (text.length > 3)) {
          const ctcpType = (cmd === 'PRIVMSG') ? 'CTCP' : 'CTCPREPLY'
          let   ctcpData = text.substr(1, text.length -2).split(' ')
          const ctcpCmd = ctcpData.shift().toUpperCase(),
                ctcpText = ctcpData.join(' ')
          if (ctcpCmd === 'ACTION')
            this.emit(ctcpCmd, ctcpText)
          else
            this.emit(ctcpType, ctcpCmd, ctcpText)
        }
        else
          this.emit(cmd, text)
        this.event['target'] = null
      }

      // <NICK> <nickname>
      // <PING> :server1
      // <QUIT> :[<Quit message>]
      else if (['ERROR', 'NICK', 'PING', 'QUIT', 'WALLOPS'].indexOf(cmd) !== -1) {
        const [text] = parsedLine.params
        this.emit(cmd, text)
      }

      // <TOPIC> <Tchannel> :<topic>
      // <INVITE> <Tnickname> <channel>
      // <KILL> <Tnickname> :<comment>
      else if (['INVITE', 'TOPIC'].indexOf(cmd) !== -1) {
        const [target, text] = parsedLine.params
        this.event['target'] = target
        this.emit(cmd, text)
        this.event['target'] = null
      }

      // PROP <Tchannel> <property> :<data>
      else if ('PROP' === cmd) {
        const [target, property, data] = parsedLine.params
        this.event['target'] = target
        this.emit(cmd, property, data)
        this.event['target'] = null
      }

      // <KICK> <channel> <Tuser> [:<comment>]
      // <WHISPER> <channel> <Tnickname> :<message> // TODO: WCTCP.
      else if (['KICK', 'WHISPER'].indexOf(cmd) !== -1) {
        const [channel, target, text] = parsedLine.params
        this.event['target'] = target
        this.emit(cmd, channel, text)
        this.event['target'] = null
      }

      //<000-999>
      else if (/^[0-9]{3}$/.test(cmd) === true) { // Raw numeric
        this.event['target'] = parsedLine.params[0]
        this.event['numeric'] = cmd
        this.emit(`raw ${ cmd }`, parsedLine)
        this.event['target'] =
        this.event['numeric'] =
          null
      }
      else // Unhandled command
        this.emit(`raw ${ cmd }`, parsedLine)

      this.event['rawMsg'] = null
    })

    this.on('raw 001', (parsedLine) => {
      this.client['me'] = this.event.target
      this.client['server'] = parsedLine.prefix.name
      // TODO: Connection state: LoggedIn
    })

    this.on('PING', (params) => this.send(`PONG :${ params }`))

  }
}
