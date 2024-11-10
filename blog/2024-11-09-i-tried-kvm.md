---
slug: i-tried-kvm
title: I tried some software KVMs
authors: [Thopterulu]
tags: [setup, lazy, KVM]
---

J'ai cherché une solution pour passer facilement de mon pc windows à mon linux, j'ai donc voulu tester les KVM (ces switchs qui permettent de passer les périphériques d'un pc à un autre sans ce poser de question). 

J'ai vu pas mal de KVM en tant que périphériques mais cela ne me plaisait pas car je souhaitais conserver la fluidité que j'ai sur mes périphériques (il y a un peu d'input lag supplémentaire en rajoutant des périphériques intermédiaires.). 

Je me suis donc tourné vers les KVM software avec un fonctionnement très simple : un pc host qui gère plusieurs clients. J'ai testé avec la version open source la plus utilisée [deskflow](https://github.com/deskflow/deskflow). 

Et autant vous dire que le flow est pas idéal, l'input lag est assez immense (mes deux pc étaient sur le mm réseau et tous deux en wifi).


Tout ça pour arriver à ma conclusion triste mais réelle : rien ne remplacera le rdp :D Tout est plus simple et pensé pour, c'est juste magique 😉