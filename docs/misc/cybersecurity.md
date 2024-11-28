# Cybersecurity

some stuff I keep about cyber and co.

## Cybersec OS
*knowledge in cybersec about diff OS.*

---

### MOBILE

https://github.com/vaib25vicky/awesome-mobile-security

### android

https://github.com/ashishb/android-security-awesome

---

### WINDOWS

https://github.com/marcosValle/awesome-windows-red-team

---

### **OSX**

*OSX security and stuff related*

[osx security awesome](https://github.com/kai5263499/osx-security-awesome)

*IOS and macOS security related tools*
[awesome macOS and iOS Security Related Tools](https://github.com/ashishb/osx-and-ios-security-awesome)

### QUBE OS

[Introduction](https://www.qubes-os.org/intro/)

## Networks

### Network Health checklist

https://github.com/fukawi2/NetworkHealthChecklist

### cheatsheets

- [ ]  https://packetlife.net/library/cheat-sheets/

---

### CloudFlare

*DNS + DDOs protection*

[awesome cloudflare](https://github.com/irazasyed/awesome-cloudflare)

---

### Network analysis

https://github.com/briatte/awesome-network-analysis

---

### ROUTER

#### Router Security Checklist

https://github.com/jonmbake/router-security-checklist

---

### Payloads

Les payloads, ou charges utiles, sont les éléments de cyberattaques qui provoquent des dégâts. Les payloads malveillants peuvent rester en sommeil sur un ordinateur ou un réseau pendant plusieurs secondes, voire plusieurs mois, avant d'être déclenchés.

Dans le cadre d'une cyber-attaque, le payload malveillant est le composant de l'attaque qui cause un préjudice à la victime. À la manière des soldats grecs dissimulés à l'intérieur du cheval de Troie, un payload malveillant peut demeurer inoffensif pendant un certain temps jusqu'à ce qu'il soit déclenché.

Les vecteurs d'attaque tels que les virus, les vers et les logiciels malveillants peuvent tous contenir un ou plusieurs payloads malveillants. Des payloads malveillants peuvent également être dissimulés dans les pièces jointes des e-mails. En fait, Symantec a révélé qu'un e-mail sur 359 contient un payload malveillant, et ce rapport tend à augmenter.

dommages causés par des payloads malveillants :

- **Vol de données :** le vol d'informations sensibles, telles que des identifiants de connexion ou des coordonnées bancaires, est particulièrement fréquent dans les différentes formes de [violations de données](https://www.cloudflare.com/learning/security/what-is-a-data-breach).
- **Surveillance des activités :** un payload malveillant exécuté peut servir à surveiller l'activité des utilisateurs sur un ordinateur, à des fins d'espionnage, de chantage, ou pour déterminer des modèles de comportement des consommateurs qui peuvent être vendus à des annonceurs.
- **Affichage de publicités :** certains payloads malveillants affichent des publicités persistantes et indésirables, par exemple des pop-ups et des pop-unders, sur l'appareil de la victime.
- **Suppression ou modification de fichiers** : Voilà l'une des conséquences les plus graves engendrées par un payload malveillant. Des fichiers peuvent être supprimés ou modifiés dans le but de modifier le comportement d'un ordinateur, voire de désactiver le système d'exploitation et/ou les processus de démarrage. Par exemple, certains payloads malveillants sont conçus pour « briquer » des smartphones, ce qui signifie qu'il devient impossible de les allumer ou de les utiliser de quelque manière que ce soit.
- **Téléchargement de nouveaux fichiers :** Certains payloads malveillants se présentent sous la forme de fichiers très légers et faciles à distribuer, mais une fois exécutés, ils déclenchent le téléchargement d'un logiciel malveillant beaucoup plus néfaste.
- **Exécution de processus en arrière-plan :** Un payload malveillant peut également être activé pour exécuter discrètement des processus en arrière-plan, par exemple pour miner des crypto-monnaies ou stocker des données.

# **Comment les payloads malveillants sont-ils exécutés ?**

Les pirates doivent d'abord trouver une méthode pour introduire le payload malveillant dans l'ordinateur de la victime. [Les attaques par ingénierie sociale](https://www.cloudflare.com/learning/security/threats/social-engineering-attack/) et le détournement du DNS sont deux exemples courants de techniques de transmission de payload malveillant.

Une fois le payload malveillant en place, ce dernier reste généralement en sommeil jusqu'à son exécution. Les pirates peuvent exécuter leurs payloads malveillants de différentes manières. Voici quelques exemples courants de méthodes d'exécution d'un payload malveillant :

- **Ouverture d'un fichier exécutable :** par exemple, une victime télécharge la pièce jointe d'un e-mail qui est en fait un logiciel piraté et double-clique sur le fichier d'installation qui exécute le payload.
- **Déclenchement d'un ensemble spécifique de comportements :** appelé « bombe logique ». Par exemple, un employé peu scrupuleux pourrait introduire dans le réseau de son entreprise une bombe logique qui vérifierait en permanence si cet employé figure toujours sur le registre du personnel. Lorsqu'il ne sera plus employé, la condition de déclenchement de la bombe logique sera remplie et le payload malveillant sera activé.
- **Ouverture de certains fichiers non exécutables :** certains fichiers non exécutables peuvent également contenir des payloads malveillants. Ainsi, certaines attaques cachent des payloads malveillants dans des fichiers d'images PNG. Lorsqu'une victime ouvre ces images, le payload malveillant est activé.

# **Méthodes permettant de bloquer les payloads malveillants**

Compte tenu de la grande diversité des méthodes de distribution et d'activation des payloads malveillants, il n'existe aucune solution universelle pour les atténuer. Il est important de se méfier des escroqueries par hameçonnage et des autres attaques d'ingénierie sociale, mais il convient également de prendre des précautions lors du téléchargement de fichiers ou de la réception de tout type de données sur Internet. Il est conseillé de toujours effectuer une recherche de virus sur les fichiers téléchargés, même s'ils semblent provenir d'une source fiable. Il est important de se méfier des [escroqueries par hameçonnage](https://www.cloudflare.com/learning/security/threats/phishing-attack/) et des autres attaques d'ingénierie sociale, mais il convient également de prendre des précautions lors du téléchargement de fichiers ou de la réception de tout type de données sur Internet. Il est conseillé de toujours effectuer une recherche de virus sur les fichiers téléchargés, même s'ils semblent provenir d'une source fiable.

---

### NMAP

nmap -PR 192.168.1.1-1/24 pour découvrir mon réseau local

[Nmap Cheat Sheet 2023: All the Commands, Flags & Switches](https://www.stationx.net/nmap-cheat-sheet/)

## Forensic

### liste des awesome githubs à lire

[fbi tools](https://github.com/danieldurnea/FBI-tools)
[awesome forensictools](https://github.com/ivbeg/awesome-forensicstools)
[Digital forensics Guide](https://github.com/mikeroyal/Digital-Forensics-Guide)

### **Incident Response**

> A curated list of tools and resources for security incident response, aimed to help security analysts and DFIR teams.
> 

Digital Forensics and Incident Response (DFIR) teams are groups of people in an organization responsible for managing the response to a security incident, including gathering evidence of the incident, remediating its effects, and implementing controls to prevent the incident from recurring in the future.
https://github.com/meirwah/awesome-incident-response

## Honeypots

https://github.com/paralax/awesome-honeypots

## References

- [Newbie Contest - Challenges informatiques francophones](https://www.newbiecontest.org/)
- [picocrypt - tool for encryption](https://github.com/HACKERALERT/Picocrypt)
- [some thingy about honeypots](https://burningmalware.com/Catching-Threat-Actors-using-honeypots!-(Part1)/#introduction)
