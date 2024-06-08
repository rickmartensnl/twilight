searchState.loadedDescShard("twilight_cache_inmemory", 0, "twilight-cache-inmemory\nInformation relating to channels.\nConfiguration for an <code>InMemoryCache</code>.\nThe default implementation of <code>InMemoryCache</code>. This is a …\nInformation relating to emojis.\nInformation relating to guilds.\nResource associated with a guild.\nInformation relating to guild integrations.\nAn in-memory cache of Discord data.\nBuilder to configure and construct an <code>InMemoryCache</code>.\nRetrieve statistics about the number of entities of each …\nInformation relating to members.\nInformation relating to messages.\nInformation relating to presences.\nInformation relating to reactions.\nInformation relating to roles.\nImmutable reference to a resource in the cache.\nA set of bitflags which can be used to specify what …\nInformation relating to stage instances.\nInformation relating to guild stickers.\nInformation relating to users.\nInformation relating the current user.\nImplemented for dispatch events.\nInformation relating to voice states.\nIterator over a voice channel’s list of voice states.\nGet a flags value with all known bits set.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nGet the underlying bits value.\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nConsume the builder, returning a configured cache.\nCreate a new builder to configure and construct an …\nReturn an immutable reference to the underlying cache.\nGets a channel by ID.\nNumber of messages in a given channel in the cache.\nGets the set of messages in a channel.\nNumber of voice states in a given channel in the cache.\nNumber of channels in the cache.\nClear the state of the Cache.\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nReturns a copy of the config cache.\nWhether all set bits in a source flags value are also set …\nGets the current user.\nThe intersection of a source flags value with the …\nGets an emoji by ID.\nNumber of emojis in the cache.\nGet a flags value with all bits unset.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from a bits value.\nConvert from a bits value exactly.\nConvert from a bits value, unsetting any unknown bits.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nGet a flags value with the bits of a flag with the given …\nGets a guild by ID.\nNumber of channels in a given guild in the cache.\nGets the set of channels in a guild.\nNumber of emojis in a given guild in the cache.\nGets the set of emojis in a guild.\nID of the guild associated with the resource.\nGets the set of integrations in a guild.\nNumber of members in a given guild in the cache.\nGets the set of members in a guild.\nNumber of presences in a given guild in the cache.\nGets the set of presences in a guild.\nNumber of roles in a given guild in the cache.\nGets the set of roles in a guild.\nGets the set of stage instances in a guild.\nGets the set of the stickers in a guild.\nNumber of voice states in a given guild in the cache.\nGets the set of voice states in a guild.\nNumber of guilds in the cache.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nGets an integration by guild ID and integration ID.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nWhether any set bits in a source flags value are also set …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsume the statistics interface, returning the underlying …\nWhether all known bits in this flags value are set.\nWhether all bits in this flags value are unset.\nIterators over the various resources stored in the cache.\nYield a set of contained flags values.\nCreate an interface for iterating over the various …\nYield a set of contained named flags values.\nImmutable reference to the key identifying the resource.\nGets a member by guild ID and user ID.\nGets the highest role of a member.\nNumber of members in the cache.\nGets a message by ID.\nSets the number of messages to cache per channel.\nReturns an immutable reference to the message cache size.\nReturns a mutable reference to the message cache size.\nModels built for utilizing efficient caching.\nCreates a builder to configure and construct an …\nCreate a new default configuration.\nCreates a new, empty cache.\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nCalculate the permissions for members in on a guild- or …\nCreate an interface for retrieving the permissions of a …\nGets a presence by, optionally, guild ID, and user ID.\nNumber of presences in the cache.\nThe intersection of a source flags value with the …\nImmutable reference to the resource’s value.\nSets the list of resource types for the cache to handle.\nReturns an immutable reference to the resource types …\nReturns a mutable reference to the resource types enabled.\nGets a role by ID.\nNumber of roles in the cache.\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\nGets a stage instance by ID.\nCreate an interface for retrieving statistics about the …\nGets a sticker by ID.\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nTraits for implementing a <code>InMemoryCache</code> with custom …\nNumber of unavailable guilds in the cache.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nUpdates the cache based on data contained within an event.\nUpdate the cache with an event from the gateway.\nGets a user by ID.\nGet the guilds a user is in by ID.\nNumber of users in the cache.\nImmutable reference to the underlying value.\nGets the voice states within a voice channel.\nGets a voice state by user ID and Guild ID.\nNumber of voice states in the cache.\nInterface to create iterators over various resources.\nReference to a resource value being iterated over in the …\nGeneric iterator over key-value pairs of a resource.\nImmutable reference to the underlying cache.\nCreate an iterator over the channels in the cache.\nCreate an iterator over the emojis in the cache.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate an iterator over the guilds in the cache.\nCreate an iterator over the integrations in the cache.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nImmutable reference to the resource’s key.\nCreate an iterator over the members across all guilds in …\nCreate an iterator over the messages in the cache.\nCreate an iterator over the presences in the cache.\nCreate an iterator over the roles in the cache.\nCreate an iterator over the stage instances in the cache.\nCreate an iterator over the stickers in the cache.\nCreate an iterator over the users in the cache.\nImmutable reference to the resource’s value.\nCreate an iterator over the voice states in the cache.\nRepresents a cached <code>Emoji</code>.\nRepresents a cached <code>Guild</code>.\nRepresents a cached <code>Member</code>.\nRepresents a cached <code>Presence</code>.\nRepresentation of a cached <code>Sticker</code>.\nRepresents a cached <code>VoiceState</code>.\nComputed components required to complete a full cached …\nCurrent activities.\nID of the AFK channel.\nAFK timeout in seconds.\nWhether the emoji is animated.\nFor bot created guilds, the ID of the creating application.\nWhether this emoji can be used.\nWhether the sticker is available.\nMember’s guild avatar.\nMember’s guild avatar.\nBanner hash.\nID of the channel that this user is connected to.\nPlatform-dependent status.\nWhen the user can resume communication in a guild again.\nWhether the member is deafened in a voice channel.\nWhether the user is deafened.\nWhether the member is deafened in a voice channel.\nDefault message notification level.\nFor Community guilds, the description.\nDescription of the sticker.\nFor discoverable guilds, the discovery splash hash.\nExplicit content filter level.\nEnabled guild features.\nFlags for the member.\nFormat type.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nID of the guild.\nID of the guild that owns the sticker.\nID of the guild that this user is connected in, if there …\nIcon hash.\nID of the Emoji.\nID of the guild.\nUnique ID of the sticker.\nMember that performed the interaction.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n<code>Timestamp</code> of the user’s join date.\n<code>Timestamp</code> of this member’s join date.\nKind of sticker.\nWhether this guild is “large”.\nWhether the emoji is managed.\nMaximum members.\nMaximum presences.\nMaximum number of users in a video channel.\nTotal number of members in the guild.\nCached message-related models.\nRequired MFA level.\nWhether the member is muted in a voice channel.\nWhether the user is muted.\nWhether the member is muted in a voice channel.\nName of the Emoji.\nName of the guild.\nName of the sticker.\nNickname of the member.\nNSFW level.\nWhether the current user is the owner of the guild.\nID of the guild’s owner.\nUnique ID of the pack the sticker is in.\nWhether the member has not yet passed the guild’s …\nTotal permissions for the current user in the guild, …\nPreferred locale for Community guilds.\nWhether the premium progress bar is enabled.\n<code>Timestamp</code> of the date the member boosted the guild.\nNumber of boosts this guild currently has.\nServer boost level.\nID of the where moderators of Community guilds receive …\nTimestamp of when the user requested to speak.\nWhether the emoji must be wrapped in colons.\nList of roles allowed to use this emoji.\nList of role IDs this member has.\nFor Community guilds, the ID of the rules channel.\nThe ID of the channel where admins and moderators of …\nWhether the user has deafened themself.\nWhether the user has muted themself.\nWhether the user is streaming via “Go Live”.\nWhether the user’s camera is enabled.\nSession ID.\nSticker’s sort order within a pack.\nSplash hash.\nStatus of the user.\nWhether this user is muted by the current user.\nSystem channel flags.\nID of the channel where notices are posted.\nCSV list of tags the sticker is assigned to, if any.\nWhether the guild is unavailable due to an outage.\nID of the user who created the emoji.\nID of the user relating to the member.\nID of the user.\nID of the user that uploaded the sticker.\nID of the user.\nID of the user relating to the member.\nVanity URL code.\nRequired verification level.\nID of the channel that a widget generates an invite to.\nWhether the widget is enabled.\nRepresents a cached <code>Message</code>.\nInformation about the message interaction.\nFor rich presence chat embeds, the activity object.\nFor interaction responses, the ID of the interaction’s …\nAssociated application’s ID.\nList of attached files.\nID of the message author.\nID of the channel the message was sent in.\nList of provided components, such as buttons.\nContent of a message.\n<code>Timestamp</code> of the date the message was last edited.\nList of embeds.\nMessage flags.\nReturns the argument unchanged.\nReturns the argument unchanged.\nID of the guild the message was sent in, if there is one.\nID of the interaction.\nID of the message.\nInformation about the message interaction.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nType of the interaction.\nType of the message.\nMember data for the author, if there is any.\nChannels mentioned in the content.\nWhether or not ‘@everyone’ or ‘@here’ is mentioned …\nRoles mentioned in the content.\nUsers mentioned in the content.\nName of the interaction used.\nWhether or not the message is pinned.\nReactions to the message.\nMessage reference.\nInformation about the role subscription purchase or …\nStickers within the message.\nID of the thread the message was sent in.\n<code>Timestamp</code> of the date the message was sent.\nWhether the message is text-to-speech.\nID of the user who invoked the interaction.\nFor messages sent by webhooks, the webhook ID.\nError calculating permissions with the information in a …\nType of <code>ChannelError</code> that occurred.\nChannel is not in a guild.\nGuild channel is not present in the cache.\nCalculate the permissions of a member with information …\nPermissions a member is allowed to have when their …\nThe user’s member information is not available in the …\nThe user’s member information is not available in the …\nA thread’s parent ID is not present.\nOne of the user’s roles is not available in the guild.\nOne of the user’s roles is not available in the guild.\nError calculating permissions with information in a cache.\nType of <code>RootError</code> that occurred.\nImmutable reference to the underlying cache.\nWhether to check whether a member’s communication is …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalculate the permissions of a member in a guild channel.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsume the statistics interface, returning the underlying …\nConsume the error, returning the owned error type and the …\nConsume the error, returning the owned error type and the …\nConsume the error, returning the source error if there is …\nConsume the error, returning the source error if there is …\nImmutable reference to the type of error that occurred.\nImmutable reference to the type of error that occurred.\nCalculate the guild-level permissions of a member.\nID of the channel.\nID of the channel.\nID of the guild.\nID of the role that the user has but details about is …\nID of the thread.\nID of the user.\nID of the guild.\nID of the role that the user has but details about is …\nID of the user.\nTrait for a generic cached representation of a <code>Channel</code>.\nTrait for a generic cached representation of a <code>CurrentUser</code>.\nTrait for a generic cached representation of a <code>Emoji</code>.\nTrait for a generic cached representation of a <code>Guild</code>.\nTrait for a generic cached representation of a …\nTrait for a generic cached representation of a <code>Member</code>.\nTrait for a generic cached representation of a <code>Message</code>.\nSuper-trait for the generic cached representations of …\nTrait for a generic cached representation of a <code>Presence</code>.\nTrait for a generic cached representation of a <code>Role</code>.\nTrait for a generic cached representation of a …\nTrait for a generic cached representation of a <code>Sticker</code>.\nTrait for a generic cached representation of a <code>User</code>.\nTrait for a generic cached representation of a <code>VoiceState</code>.\nThe cached <code>Channel</code> model representation.\nThe cached <code>CurrentUser</code> model representation.\nThe cached <code>Emoji</code> model representation.\nThe cached <code>Guild</code> model representation.\nThe cached <code>GuildIntegration</code> model representation.\nThe cached <code>Member</code> model representation.\nThe cached <code>Message</code> model representation.\nThe cached <code>Presence</code> model representation.\nThe cached <code>Role</code> model representation.\nThe cached <code>StageInstance</code> model representation.\nThe cached <code>Sticker</code> model representation.\nThe cached <code>User</code> model representation.\nThe cached <code>VoiceState</code> model representation.\nAdd a reaction to this message.\nAvatar of this member.\nID of the channel this voice state belongs to.\nClear all reactions to this message.\nTimestamp until which this member’s communication is …\nWhether this member is deafened.\nDecrease the guild member count.\nID of the guild this channel belongs to.\nID of the role.\nID of the channel.\nID of the guild.\nID of the user.\nID of the sticker.\nIncrease the guild member count.\nType of the channel.\nWhether this member is muted.\nID of the guild’s owner.\nID of the parent channel if this is a thread.\nPermission overwrites for the channel.\nPermissions granted to members with the role.\nRole’s position in the guild roles.\nReactions added to this message.\nMutable getter for reactions added to this message.\nRemove a reaction from this message.\nRetain all reactions to this message matching a predicate, …\nRoles of this member.\nSet the last pin timestamp to a new timestamp.\nSet the guild’s unavailable flag.\nUpdate the cached data with a <code>GuildUpdate</code> event. Fields …\nUpdate the cached data with a <code>MemberUpdate</code> event.\nUpdate the cached data with a <code>MessageUpdate</code> event.")