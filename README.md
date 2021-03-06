<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [ircJS](#ircjs)
    -   [client](#client)
        -   [Alias: ircJS.c](#alias-ircjsc)
    -   [event](#event)
        -   [Alias: ircJS.e](#alias-ircjse)
    -   [connect](#connect)
    -   [parsePrefix](#parseprefix)
    -   [send](#send)
-   [IRCPrefix](#ircprefix)

## ircJS

**Extends EventEmitter3**

Extendable base class for ircJS classes

**Parameters**

-   `hostname` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Hostname to connect to (optional, default `'irc.irc7.com'`)
-   `port` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Server port to connect to (optional, default `6667`)
-   `useTLS` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** Describes if SSL/TLS encryption should be used (optional, default `false`)

**Meta**

-   **author**: Joshua Davison &lt;joshua@davison.asia>

### client

The client object object contains multiple properties about the
connection

#### Alias: ircJS.c

Type: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

**Properties**

-   `away` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Returns the value `true` or
    `false` depending on whether you are marked as away or not.
-   `me` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns your current nickname.
-   `port` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Returns the port specified in the constructor
    whether you are connected to the server or not.
-   `realName` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns the connection's 'realname'.
    in the constructor whether you are connected or not.
-   `server` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns the name of the server to which you
    are currently connected.
-   `serverTarget` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns the address specified in the
    constructor whether you are connected to the server or not.
-   `ssl` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Returns `true` if TLS/SSL was requested
-   `userName` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns your current username

### event

The events object contains multiple properties that are useful for
dealing with the handling of events.

#### Alias: ircJS.e

Type: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

**Properties**

-   `address` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns the address of the user associated
    with an event in the form user@host.
-   `chann` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns the name of the channel for a
    specific event. For all non-channel events chan will be `$null`.
-   `event` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns the name of the event that was
    triggered.
-   `fulladdress` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns the full address of the user
    triggering an event in the form nick!user@host.
-   `nick` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns the nickname of the user associated
    with an event.
-   `numeric` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns the nickname of the user associated
    with an event.
-   `rawMsg` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns raw server line for server events.
-   `site` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns the portion of $address after the @ for
    the user associated with an event in the form user@host.
-   `target` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns the target of an event.

### connect

Connect the ircJS to the host specified in construction

**Parameters**

-   `callback` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)?** An optional callback for when the client has
    successfully connected.

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Instance of ircJS

### parsePrefix

Converts a string representation of an IRC server/user (prefix) into a
javascript object.

**Parameters**

-   `prefix` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[IRCPrefix](#ircprefix)** 

### send

Used to send an unterminated string to the IRC server.

**Parameters**

-   `data` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** Data to be send to server (optional, default `''`)

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Current instance of ircJS

## IRCPrefix

An object containing information extracted from an IRC prefix

Type: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

**Parameters**

-   `target`  
-   `text`  

**Properties**

-   `source` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The full IRC prefix used to create this object
-   `name` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The servername/nick of the prefix
-   `user` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The username/ident of the prefix
-   `host` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The hostname of the prefix
-   `server` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The server that the IRCPrefix is connected to
