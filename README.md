# Checkpoint n°3 - JS - **4h**

Pour ce travail tu as 4h devant toi. Ce checkpoint n'est pas un examen, il va nous permettre de valider tes compétences, essaye donc de le faire au maximum de ton côté.
Ce checkpoint est très consistant, si tu n'arrives pas à tout faire ce n'est pas grave, fais de ton mieux ;)

**!!! PREMIERE ETAPE OBLIGATOIRE AVANT DE COMMENCER LE PREMIER EXERCICE !!!**

-----------------------------------
* Clone ce projet
* Crée une branche "ville_nom_prenom", qui va contenir ton avancée. (ville_nom_prenom sera remplacé par la ville de ton campus, ton nom et ton prénom...)

## Pré-requis (outils installés)

- NodeJS
- NPM
- MySQL
- Postman ou curl

## Étape 1 - Quiz

- Pour répondre au quiz rend toi sur [cette application](http://checkpoint-quiz.campus-bordeaux.ovh/).
- Réponds aux questions du Quiz `Checkpoint 3 - JS`
- Une fois le quiz terminé, copie et colle le lien fourni par l'application dans un fichier Quiz.md à la racine de ton projet, et `commit`
  
## Étape 2 - Une application de playlists avec Express

![Give Life Back to Music](https://laughingsquid.com/wp-content/uploads/2013/05/givelifebacktomusic5.gif)

Etant féru de musique, tu souhaites créer une application te permettant de gérer des playlists.

Le but ici est de créer le backend Node / Express.

Voici les user stories qui t'indiquent quelles routes tu vas devoir implémenter sur ton backend, et quelles requêtes SQL vont devoir être exécutées :

- en tant qu'utilisateur, je veux pouvoir créer une nouvelle playlist.
- en tant qu'utilisateur, je veux pouvoir consulter une playlist en renseignant son id dans l'url.
- en tant qu'utilisateur, je veux créer et affecter un morceau à une playlist.
- en tant qu'utilisateur, je veux lister tous les morceaux d'une playlist.
- en tant qu'utilisateur, je veux pouvoir supprimer une playlist.
- en tant qu'utilisateur, je veux pouvoir modifier une playlist.
- en tant qu'utilisateur, je veux supprimer un morceau d'une playlist.
- en tant qu'utilisateur, je veux modifier un morceau d'une playlist.

Tu devras réspecter les règles suivantes sur tes routes :
- Le body des **requêtes HTTP** doit être au **format JSON**
- Le body des **réponses HTTP** doit être au **format JSON**
- Les requêtes HTTP de **lecture** doivent **renvoyer le(s) élément(s)** dans la réponse HTTP
- Les requêtes HTTP de **création et modification** doivent **renvoyer l'élément créé/modifié** dans la réponse HTTP
- Les requêtes HTTP de **suppréssion** ne doivent **pas renvoyer d'élément** dans la réponse HTTP

**Respecte les principes de REST, notamment au niveau du nommage des différentes routes et des codes retour HTTP.**\
- [http-status-codes](https://restfulapi.net/http-status-codes/)
- [REST 5 règles](https://blog.nicolashachet.com/niveaux/confirme/larchitecture-rest-expliquee-en-5-regles/)

Prends soin de regrouper les routes en utilisant le routeur Express et de tester l'api via Postman.

Comme je suis sympa, je t'ai même préparé le schéma (MPD pour modèle physique de données) de la BDD.

![Schema BDD](https://wild31.com/wp-content/uploads/2018/12/checkpoint3-schema.png)

### Bonus

Créer une route qui permet de rechercher dans la base de données les playlists et les morceaux, selon les critères suivants :

- le titre d'une playlist
- le genre d'une playlist
- l'artiste d'une piste

Les **paramètres** doivent être renseignés dans **l'url**, tous les paramètres sont **optionnels** et ils peuvent être placés dans n'**importe quel ordre**.

### Super Bonus

Après tout ce travail, il reste encore plein de choses à faire ! On voudrait pouvoir gérer :

- des utilisateurs
- des playlists favorites pour chaque utilisateur

Il va donc falloir faire les choses suivantes :

#### SQL

- créer une table `user` contenant au moins les champs :

    - `id`
    - `first_name`
    - `last_name`
    - `email`
    - `password`
- ajouter un champ `owner_id` à la table `playlist`, pour lier une playlist à l'utilisateur qui l'a créée
- créer une table `user_playlist`, permettant de lier une playlist à un utilisateur, pour la mettre en favoris

#### Appli Express

Voici les user stories de ces fonctionnalités supplémentaires :

- en tant qu'utilisateur, je veux créer mon profil
- en tant qu'utilisateur, je veux ajouter une playlist (y compris d'autres utilisateurs) à mes favoris
- en tant qu'utilisateur, je veux enlever une playlist de mes favoris

Et une dernière (un super-super-bonus) : en tant qu'utilisateur, je veux pouvoir trouver toutes les playlists contenant des morceaux d'un certain artiste.
