# Network

## SSL/TLS

Secure Socket Layer (SSL) was the original protocol that was used to provide encryption for HTTP traffic, in the form of HTTPS. There were two publicly released versions of SSL - versions 2 and 3. Both of these have serious cryptographic weaknesses and should no longer be used.

For [various reasons](http://tim.dierks.org/2014/05/security-standards-and-name-changes-in.html) the next version of the protocol (effectively SSL 3.1) was named Transport Layer Security (TLS) version 1.0. Subsequently TLS versions 1.1, 1.2 and 1.3 have been released.

The terms "SSL", "SSL/TLS" and "TLS" are frequently used interchangeably, and in many cases "SSL" is used when referring to the more modern TLS protocol. This cheatsheet will use the term "TLS" except where referring to the legacy protocols.

### Test the Server Configuration[¶](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html#test-the-server-configuration)

Once the server has been hardened, the configuration should be tested. The [OWASP Testing Guide chapter on SSL/TLS Testing](https://owasp.org/www-project-web-security-testing-guide/stable/4-Web_Application_Security_Testing/09-Testing_for_Weak_Cryptography/01-Testing_for_Weak_Transport_Layer_Security) contains further information on testing.

There are a number of online tools that can be used to quickly validate the configuration of a server, including:

- [SSL Labs Server Test](https://www.ssllabs.com/ssltest)
- [CryptCheck](https://cryptcheck.fr/)
- [CypherCraft](https://www.cyphercraft.io/)
- [Hardenize](https://www.hardenize.com/)
- [ImmuniWeb](https://www.immuniweb.com/ssl/)
- [Observatory by Mozilla](https://observatory.mozilla.org/)
- [Scanigma](https://scanigma.com/)
- [OWASP PurpleTeam](https://purpleteam-labs.com/) `cloud`

Additionally, there are a number of offline tools that can be used:

- [O-Saft - OWASP SSL advanced forensic tool](https://wiki.owasp.org/index.php/O-Saft)
- [CipherScan](https://github.com/mozilla/cipherscan)
- [CryptoLyzer](https://gitlab.com/coroner/cryptolyzer)
- [SSLScan - Fast SSL Scanner](https://github.com/rbsec/sslscan)
- [SSLyze](https://github.com/nabla-c0d3/sslyze)
- SSLTAP
- [testssl.sh - Testing any TLS/SSL encryption](https://testssl.sh/)
- [tls-scan](https://github.com/prbinu/tls-scan)
- [OWASP PurpleTeam](https://purpleteam-labs.com/) `local`

`openssl x509`

`openssl x509` is a command-line tool that is used to display information about the X.509 certificate files. This tool is part of the OpenSSL library and can be used to view certificate details such as issuer, validity, and subject.

To use the `openssl x509` command, you need to have an X.509 certificate file. You can specify the file path as an argument to the command. For example, to view the details of a certificate file named `example.crt`, you can run the following command:

```
openssl x509 -in example.crt -text

```

This will display the certificate details in a human-readable format. You can also use the `openssl x509` command to verify the validity of a certificate using a trusted root certificate.

It is recommended to test the server configuration and validate the certificate configuration using the tools mentioned in the document before deploying the application to production.

## DNS

Quand un record DNS est de Type A il s’agit d’une adresse IPV4.

Le serveur DNS le plus commun dans Linux est nommé BIND pour Berkeley Internet Name Domain. Dans certains cas les utilisateurs Linux vont se référer au DNS par le mot BIND.

Pour requérir des informations sur les DNS dans Linux on peut se servir de la commande.

```bash
dig
```

Pour connaitre des informations sur le serveur ayant servit l’url voul on peut faire la commande suivante :

```bash
dig hacker-arise.com ns
```

Le ns spécifie qu’on requête un serveur dns.

```bash
dig www.hacker-arise.com mx
```

mx pour Mail Exchange, on requête des informations sur un possible serveur de mails.

### Changer de serveur DNS sur Linux

la config se trouve dans /etc/resolv.conf.

pour inscrire un nouveau dns :

```bash
echo "nameserver 8.8.8.8"> /etc/resolv.conf
```

Ce fichier est modifié à chaque fois que le lien DHCP est refait si le serveur DHCP embarque une configuration DNS, ce qui est le cas pour les box domestiques par exemple.


## Kerberos Authentication Protocol

Kerberos is a computer network authentication protocol that was developed by the Massachusetts Institute of Technology (MIT). It is designed to provide strong authentication for client/server applications by using secret-key cryptography.

### How Kerberos works

Kerberos works on the basis of a trusted third-party authentication system. The three main components of the Kerberos protocol are:

1. **Client** - The client is the user or application that needs to access a network resource.
2. **Server** - The server is the network resource that the client is trying to access.
3. **Key Distribution Center (KDC)** - The KDC is the trusted third-party that authenticates the client and server.

The authentication process in Kerberos follows these basic steps:

1. The client sends a request for a ticket to the KDC.
2. The KDC sends a ticket-granting ticket (TGT) to the client.
3. The client sends the TGT to the KDC to request a service ticket for the specific server it wants to access.
4. The KDC sends a service ticket to the client.
5. The client sends the service ticket to the server.
6. The server grants access to the client.

The funny explaination :

One way to  think of  using Kerberos  is  to  think of  going to  an  amusement park. When  you arrive at  the park, you go  to  the main gate. You then  proceed to  the main ticket  booth (the authentication  server  in the key distribution  center) and purchase  an  all-day pass  to  the park  (a  ticket-granting ticket).  You receive a purple  wristband (because  purple  is  the color for Wednesday)  that  indicates that  you have paid  your fee for that  day and you have full access  to  the park. The colored wristband is  good  for all day. While in the park, you must  purchase  additional  tickets for the rides.  You walk  up  to  a ticket  booth (ticket-granting  server) and the attendant notices that  you have a purple wristband.  You tell her you are wanting to  ride  the roller  coaster.  She issues  you a ticket (session  ticket) for the roller  coaster.  When  you get to  the roller  coaster,  the roller  coaster attendant sees  your purple  wristband and accepts the ticket  issued  to  you by  the ticket seller. The roller  coaster attendant does  not need  to  check with  the ticket  seller  because that  is  the only  place you could have obtained  that  ticket. At  the end of  the day,  when  the park  closes, the purple  wristband for Wednesday no  longer authenticates you.  The wristband color for Thursday  is  orange. You also  noticed that you did all the work. None  of  the ticket  sellers or  ride  operators communicated  with  each other.  It  was up  to  you to  procure tickets and walk  around  and distribute  them. This  is exactly the model as  designed  by  MIT for Kerberos.

### Advantages of Kerberos

Kerberos offers several advantages over other authentication protocols, including:

1. **Strong authentication** - Kerberos provides strong authentication that is difficult to compromise.
2. **Centralized authentication** - The KDC provides centralized authentication, making it easier to manage authentication for a large number of clients and servers.
3. **Single sign-on** - Once a client has been authenticated by the KDC, it can access multiple servers without having to authenticate again.
4. **Mutual authentication** - Both the client and the server are authenticated, providing a higher level of security.

### Conclusion

Kerberos is a widely used authentication protocol that provides strong security for client/server applications. By using secret-key cryptography and a trusted third-party authentication system, Kerberos is able to provide centralized authentication, single sign-on, and mutual authentication.

## GSSAPI

The Generic Security Services Application Programming Interface (GSSAPI) is a library that provides a standard interface for secure communication between networked applications. It is used to establish secure communication channels between the client and the server over an insecure network such as the internet.

GSSAPI is an open standard and is available on multiple operating systems, including Unix, Linux, and Windows. It supports multiple security mechanisms, including Kerberos, SPNEGO, and NTLM, which can be used to authenticate and encrypt data transmitted over the network.

One of the key benefits of GSSAPI is that it allows applications to be developed independently of the underlying security mechanisms. This means that applications can use GSSAPI to establish secure communication channels without needing to know the details of the security mechanisms being used.

To use GSSAPI, an application must first acquire a security context. This involves negotiating a security mechanism with the server, authenticating the client, and establishing a secure communication channel. Once the security context has been established, the application can use GSSAPI to encrypt and decrypt data transmitted over the network.

In summary, GSSAPI is a powerful library that provides a standard interface for secure communication between networked applications. It supports multiple security mechanisms and allows applications to be developed independently of the underlying security mechanisms.