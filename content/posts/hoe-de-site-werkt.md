---
title: "Hoe Deze Site Werkt"
date: 2022-12-05T20:21:55+01:00
draft: false
toc: false
images:
tags:
  - WebDev
---

Deze website is ontwikkeld met [Hugo](https://gohugo.io/), een static site generator. Dit betekent dat alles bestaat uit statische HTML, CSS en een klein beetje JavaScript. Het grote voordeel hiervan is dat de website snel is en geen herhaling van lay-outonderdelen zoals navigatiebalken bevat.

# Het "backend"

Hoewel het geen echt backend is, omdat alles statisch is, kon ik geen betere naam bedenken.

Om de server lokaal te draaien voor ontwikkeling, gebruik je het volgende commando. De `-D` vlag is bedoeld om concepten (drafts) ook te genereren, wat meestal handig is tijdens ontwikkeling.

```sh
hugo server -D
```

# Implementatie

Om de website vervolgens te genereren, kun je het volgende commando gebruiken. De `--minify` vlag spreekt voor zich.

```sh
hugo --minify
```

Nu de website is gebouwd, moet deze nog online worden gebracht. Hiervoor maak ik gebruik van [Rclone](https://rclone.org/). De gemakkelijkste manier om dit te doen, is door de configuratie eerst in te stellen met het volgende commando.

```sh
rclone config
```

Zodra de configuratie gereed is, kun je het volgende commando gebruiken om de website te uploaden. Het pad aan het einde is specifiek voor de hosting die je gebruikt.

```sh
rclone sync public/ pine32:domains/pine32.be/public_html
```
