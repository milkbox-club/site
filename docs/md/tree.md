```
milkbox app
├─ main
│  └─ index.js
└─ renderer
   ├─ modal
   │  ├─ cloud_menu.js
   │  ├─ select_playlist.js
   │  ├─ set_alias.js
   │  └─ submit_album.js
   ├─ renderer.js
   ├─ titlebar.js
   ├─ api.js
   ├─ tracks.js
   └─ playback.js
```

```
API
├─ routes
│  ├─ index.js
│  │  ├─ /ping
│  │  ├─ strToKey()                Returns string in a key format
│  │  ├─ generateId()              Returns a random character string
│  │  ├─ validApplicationId()      Returns application ID validity
│  │  ├─ validPostId()             Returns post ID validity
│  │  ├─ writeUncategorizedData()  Writes data to CSV file for reference
│  │  ├─ writeUserData()           Writes user data locally
│  │  ├─ writeAlbumData()          Writes album data locally
│  │  ├─ writePostData()           Writes post data locally
│  │  ├─ isAdmin()                 Returns true if user has an admin role
│  │  ├─ createArtist()            Creates artist object and writes to file
│  │  ├─ createAlbum()             Creates album object and writes to file
│  │  ├─ createUser()              Creates user object and writes to file
│  │  ├─ createPost()              Creates post object and writes to file
│  │  ├─ setUserAlias()            Updates user alias and writes to file
│  │  ├─ getUserAlias()            Return user alias or 'User' if not set
│  │  ├─ inc'ContributionCount()   Inc. contributions count and write to file
│  │  ├─ addVoteToPost()           Add user vote to post
│  │  ├─ removeVoteFromPost()      Remove user vote from post
│  │  ├─ togglePostVote()          Adds or removes user vote depending on state
│  ├─ albums.js
│  │  ├─ /getAlbum
│  │  ├─ /getAlbums
│  │  └─ /setAlbum
│  ├─ artist.js
│  │  ├─ /getArtist
│  │  └─ /setArtist
│  ├─ player.js
│  │  ├─ /setPlaying
│  │  ├─ /getPlaying
│  │  └─ /setPaused
│  ├─ post.js
│  │  ├─ /setPost
│  │  ├─ /getPost
│  │  ├─ /getTopPosts
│  │  ├─ /getRecentPosts
│  │  └─ /setVote
│  └─ user.js
│     ├─ /newUser
│     ├─ /getUser
│     ├─ /getAdmin
│     └─ /setAlias
└─ data
   ├─ albums.js
   ├─ users.json
   ├─ post.json
   └─ uncategorized.csv
```

```
site
├─ index.html                      Landing page
├─ forum.html                      Forum page
├─ artist.html                     Artist page
├─ docs
│  └─ ...
└─ lib
   ├─ authenticate.js
   │  └─ assertApplicationId()     Validates application_id in URLSearchParams
   ├─ motd.js                      Render the MOTD scrolling text
   ├─ markdown.js                  Load and render markdown files using Showdown
   ├─ showdown.js                  Third-party markdown renderer
   ├─ forum.js
   │  ├─ renderForumPage()         Renders page given the user API data
   │  ├─ gotoArtist()              Redirects to /artist.html with search params
   │  └─ gotoAlbum()               Redirects to /artist.html with search params
   ├─ artist.js
   └─ post.js
```