---
title: "Hoe Deze Site Werkt"
date: 2022-12-05T20:21:55+01:00
draft: true
toc: false
images:
tags:
  - WebDev
---

Deze site is met [Hugo](https://gohugo.io/) wat een static site generator is. Alles is dus statis html, css en een klein beetje JavaScript. maar is wel snel zonder herhaling van layout zoals navbars en zo.

# The "backend"

Dit is natuurlijk geen echt backend want alles is statis maar ik had er geen betere naam voor.

voor de server local te draaien voor dev gebruik je het volgende commando. De `-D` flag is voor drafts ook te generen, wat je meestal wilt bij dev.

```sh
hugo server -D
```

# Deploy

Voor het vervolgens te genereren word het volgend commando gebruikt. De `--minify` flag spreekt voor zich.

```sh
hugo --minify
```

Nu is de site gebouwt, nu nog online brengen. Hier voor gebruik ik [Rclone](https://rclone.org/). De makelijkste manier voor dit te gebruiken is met de config. Deze moet eerst ingestelt worden met het volgende commando.

```sh
rclone config
```

Eens de config klaar is kan het volgende commando gebuikt worden voor het de uploaden. Het pad op het einde is specifiek aan de gebruikte hosting.

```sh
rclone sync --interactive public/ pine32:domains/pine32.be/public_html
```
