**Read in other languages: [Русский](README.md), [Polski](README.pl.md).**

# If you want to see MODALS Sign In/Up Go to .sign-in-> $'./src/partials/sign-in.html' OR .sign-up-> $'./src/partials/sign-up.html'and Delete Class is-hidden

# If you want to see Dropdown Menu Dropdown Menu -> $'./src/partials/drop-down-menu.html' and Delete Class is-hidden

# If you want to see Home Before Registration WebPage you Need -> $'./src/partials/home-before-reg.html' and Delete <div class='visually-hidden'> with class visually-hidden

# If you want to play a wild css file in the folder "dist"

This project was created with Parcel. For dating and setting additional features
[refer to documentation](https://parceljs.org/).

## Preparing a new project

1. Make sure you have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) if needed.
2. Clone this repository.
3. Change the folder name from `parcel-project-template` to the name of your
   project.
4. Create a new empty GitHub repository.
5. Open the project in VSCode, launch the terminal and link the project to the
   GitHub repository
   [by instructions](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Install the project's dependencies in the terminal with the `npm install`
   command.
7. Start development mode by running the `npm start` command.
8. Go to [http://localhost:1234](http://localhost:1234) in your browser. This
   page will automatically reload after saving changes to project files.

## Files and folders

- All parshas of style files must be in the `src/sass` folder and imported into
  page style files. For example, for `index.html` the style file is called
  `index.scss`.
- Add images to the `src/images` folder. The assembler optimizes them, but only
  when deploying the production version of the project. All this happens in the
  cloud, so as not to load your computer, because on weak machines it can take a
  lot time.

## Deploy

To set up a project deployment, you need to perform a few additional steps to
set up your repository. Go to the `Settings` tab and in the subsection `Actions`
select select item `General`.

![GitHub actions settings](./assets/actions-config-step-1.png)

Scroll down the page to the last section in which make sure the options are
selected as on the next image and click `Save`. Without these settings, the
assembly will have insufficient rights to automate the deployment process.

![GitHub actions settings](./assets/actions-config-step-2.png)

The production version of the project will be automatically built and deployed
to GitHub Pages, to the `gh-pages` branch, every time the `main` branch is
updated. For example, after a direct push or an accepted pull request. For this
it is necessary in the file `package.json` edit the `homepage` field and the
`build` script, replacing `your_username` and `your_repo_name` with your own,
and push the changes to GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/",
scripts: {
  "build": "parcel build src/*.html --public-url /your_repo_name/"
},
```

Next, you need to go to the settings of the GitHub repository (`Settings` >
`Pages`) and set the distribution of the production version of files from the
`/root` folder of the `gh-pages` branch, if this was not done automatically.

![GitHub Pages settings](./assets/repo-settings.png)

### Deployment status

The deployment status of the latest commit is displayed with an icon next to its
ID.

- **Yellow color** - the project is being built and deployed.
- **Green color** - deployment completed successfully.
- **Red color** - an error occurred during linting, build or deployment.

More detailed information about the status can be viewed by clicking on the
icon, and in drop-down window to follow the link `Details`.

![Deployment status](./assets/status.png)

### Live page

After some time, usually a couple of minutes, the live page can be viewed at the
address specified in the edited `homepage` property. For example, here link to
live version for this repository
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

If a blank page opens, make sure there are no errors in the `Console` tab
associated with incorrect paths to CSS and JS project files (**404**). Quicker
all you have is the wrong value of the `homepage` property or the `build` script
in file `package.json`.

## How it works

![How it works](./assets/how-it-works.png)

1. After each push to the `main` branch of the GitHub repository, a special
   script (GitHub Action) from `.github/workflows/deploy.yml` file.
2. All repository files are copied to the server where the project is
   initialized and is being built before deployment.
3. If all steps were successful, the assembled production version of the project
   files goes to the `gh-pages` branch. Otherwise, in the execution log The
   script will indicate what the problem is.
