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
├─ index.html                          Landing page
├─ forum.html                          Forum page
├─ artist.html                         Artist page
├─ docs
│  └─ ...
└─ lib
   ├─ authenticate.js   
   │  └─ assertApplicationId()         Validates application_id in URLSearchParams and callsback/redirects
   ├─ motd.js                          Render the MOTD scrolling text
   ├─ markdown.js                      Load and render markdown files using Showdown
   ├─ showdown.js                      Third-party markdown renderer
   ├─ forum.js
   │  ├─ renderForumPage()             Called on authentication, renders given the user API data
   │  ├─ gotoArtist()                  Redirects to /artist.html with URLSearchParams
   │  └─ gotoAlbum()                   Redirects to /artist.html with URLSearchParams
   ├─ artist.js
   └─ post.js
```