# Internal Red Tape Reduction Report

This repository powers a web version of the Blueprint 2020 report: _Cutting Internal Red Tape – Building a Service Culture_.

## Usage instructions

### Installing

Development of this website requires [Hugo](https://gohugo.io/getting-started/installing) and [npm](https://nodejs.org/en/download/).

After cloning the repository, run:

```
npm install
```

to install the [gh-pages](https://github.com/tschaub/gh-pages) package used for deployments.

### Local development

For local development, use Hugo's built-in server:

```
hugo server -D --disableFastRender
```

To deploy updates to GitHub pages, use:

```
npm run deploy
```

## An [Ottawa Civic Tech](https://ottawacivictech.ca/) project

This is a volunteer project and is not affiliated with the Government of Canada.
