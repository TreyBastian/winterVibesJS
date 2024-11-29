<br />
<div align="center">

  <h3 align="center">Winter Vibes JS</h3>

  <p align="center">
    Simple, no build OBS winter overlay!
    <br />
    <a href="https://treybastian.github.io/winterVibesJS/?v=1&cw=320&ch=180&smx=40&smnsz=1&smxsz=4&smxspd=0.07&snmnspd=0.04&plwspd=0.1&plwd=left&plws=1&gamax=4&gas=20">Github Pages</a>
    ·
    <a href="https://github.com/TreyBastian/winterVibesJS/blob/main/README.md">Docs</a>
    ·
    <a href="https://github.com/TreyBastian/winterVibesJS/issues/new">Report Bug</a>
  </p>
</div>

## About

This is a simple winter overlay you can use for your Twitch stream or for anything else! What does it do? It adds snow that you can adjust, and a small plow that will clear all the accumulated snow. The easiest way to use it for your stream is by adding it as a browser source in OBS, and boom, it's snowing!!

You can find it at <a href="https://treybastian.github.io/winterVibesJS/?v=1&cw=320&ch=180&smx=40&smnsz=1&smxsz=4&smxspd=0.07&snmnspd=0.04&plwspd=0.1&plwd=left&plws=1&gamax=4&gas=20">GitHub pages</a>.

Once on the page, you can right-click, and a context menu will appear, from which you can navigate to settings.

##### What all can you adjust:
- Window size
- Snow (max, size, speed)
- Plow (speed, direction WIP, scale)
- Ground (accumulator max, accumulator slices)


You can run it locally if you want to change sprites or any other code. It has 0 dependencies; the only dependency in the `package.json` is Vite for HMR purposes while developing.

To run it, use:
```sh
   pnpm run dev
   ```
or any other way you would like to render index.html

Optionally, if you want to use dependencies:
```sh
   pnpm install
   ```

## WIP

Keep in mind that this project is still a work in progress. Some features are not yet implemented.
- [ ] Plow direction - Right
- [ ] More customization
- [ ] More weather types... 


## Contributing

If you would like to contribute to the project, please fork the repo and create a pull request. All suggestions are appreciated! For any bugs, you can open an issue and provide more information about the bug, so we can fix it as quickly as possible!
