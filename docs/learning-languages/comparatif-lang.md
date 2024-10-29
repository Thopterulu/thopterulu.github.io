# Comparatif Lang

## Test LLM

J'ai demandé à un LLM de me présenter les différents lang qui permettent la POO. La syntaxe utilisée est moyenne sur certains langages...


Voici des exemples d'une classe `Humain` dans certains des langages les plus populaires et largement utilisés pour la programmation orientée objet. Ces langages sont connus pour leurs écosystèmes robustes et sont couramment utilisés dans divers secteurs :

---

### 1. **Python**

Python est apprécié pour sa syntaxe simple et sa versatilité, avec une orientation objet puissante et des bibliothèques pour presque tout.

```python
class Humain:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age

    def se_presenter(self):
        print(f"Je m'appelle {self.nom} et j'ai {self.age} ans.")

# Utilisation
humain = Humain("Alice", 30)
humain.se_presenter()
```

---

### 2. **Java**

Java est un pilier des systèmes d’entreprise, connu pour sa portabilité (écrire une fois, exécuter partout) et sa forte orientation objet.

```java
public class Humain {
    private String nom;
    private int age;

    public Humain(String nom, int age) {
        this.nom = nom;
        this.age = age;
    }

    public void sePresenter() {
        System.out.println("Je m'appelle " + nom + " et j'ai " + age + " ans.");
    }

    public static void main(String[] args) {
        Humain humain = new Humain("Alice", 30);
        humain.sePresenter();
    }
}
```

---

### 3. **C#**

C# est utilisé principalement pour les applications Windows, le développement Web, et les jeux (avec Unity). Sa syntaxe est similaire à Java et offre des fonctionnalités orientées objets avancées.

```csharp
using System;

public class Humain {
    public string Nom { get; set; }
    public int Age { get; set; }

    public Humain(string nom, int age) {
        Nom = nom;
        Age = age;
    }

    public void SePresenter() {
        Console.WriteLine($"Je m'appelle {Nom} et j'ai {Age} ans.");
    }
}

// Utilisation
public class Program {
    public static void Main() {
        Humain humain = new Humain("Alice", 30);
        humain.SePresenter();
    }
}
```

---

### 4. **C++**

C++ combine programmation orientée objet et performances élevées, utilisé pour les systèmes embarqués, jeux, et logiciels à haute performance.

```cpp
#include <iostream>
#include <string>

class Humain {
public:
    Humain(std::string nom, int age) : nom(nom), age(age) {}

    void sePresenter() const {
        std::cout << "Je m'appelle " << nom << " et j'ai " << age << " ans." << std::endl;
    }

private:
    std::string nom;
    int age;
};

// Utilisation
int main() {
    Humain humain("Alice", 30);
    humain.sePresenter();
    return 0;
}
```

---

### 5. **Ruby**

Ruby est apprécié dans le développement Web, surtout avec le framework Rails, pour sa syntaxe élégante et sa forte orientation objet.

```ruby
class Humain
    def initialize(nom, age)
        @nom = nom
        @age = age
    end

    def se_presenter
        puts "Je m'appelle #{@nom} et j'ai #{@age} ans."
    end
end

# Utilisation
humain = Humain.new("Alice", 30)
humain.se_presenter
```

---

### 6. **Swift**

Swift est principalement utilisé pour le développement d'applications iOS et macOS. Il est orienté objet et combine des éléments de programmation fonctionnelle.

```swift
class Humain {
    var nom: String
    var age: Int

    init(nom: String, age: Int) {
        self.nom = nom
        self.age = age
    }

    func sePresenter() {
        print("Je m'appelle \(nom) et j'ai \(age) ans.")
    }
}

// Utilisation
let humain = Humain(nom: "Alice", age: 30)
humain.sePresenter()
```

---

### 7. **JavaScript (avec ES6 Classes)**

JavaScript est essentiel pour le développement Web, et avec ES6, il prend en charge une syntaxe orientée objet via les classes.

```javascript
class Humain {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

    sePresenter() {
        console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
}

// Utilisation
const humain = new Humain("Alice", 30);
humain.sePresenter();
```

---

### 8. **TypeScript**

TypeScript est un sur-ensemble de JavaScript qui ajoute des types, idéal pour des projets de grande envergure. Il est orienté objet, avec une syntaxe proche de celle de JavaScript.

```typescript
class Humain {
    nom: string;
    age: number;

    constructor(nom: string, age: number) {
        this.nom = nom;
        this.age = age;
    }

    sePresenter(): void {
        console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
}

// Utilisation
const humain = new Humain("Alice", 30);
humain.sePresenter();
```

---

### 9. **PHP**

PHP est largement utilisé pour le développement Web côté serveur et supporte la programmation orientée objet depuis la version 5.

```php
<?php
class Humain {
    public $nom;
    public $age;

    public function __construct($nom, $age) {
        $this->nom = $nom;
        $this->age = $age;
    }

    public function sePresenter() {
        echo "Je m'appelle {$this->nom} et j'ai {$this->age} ans.\n";
    }
}

// Utilisation
$humain = new Humain("Alice", 30);
$humain->sePresenter();
?>
```

---

### 10. **Dart**

Dart est souvent utilisé pour le développement d’applications mobiles avec Flutter. Il est orienté objet et intègre des concepts modernes.

```dart
class Humain {
    String nom;
    int age;

    Humain(this.nom, this.age);

    void sePresenter() {
        print("Je m'appelle $nom et j'ai $age ans.");
    }
}

// Utilisation
void main() {
    var humain = Humain("Alice", 30);
    humain.sePresenter();
}
```

---


## je ne trouve pas de lang cool alors je continue avec le LLM

Pour une expérience vraiment rafraîchissante, voici quelques langages aux syntaxes uniques et concepts originaux qui pourraient te plaire si tu veux t'éloigner de la simplicité de Python :

---

### 1. **Elixir**
   - **Style** : Fonctionnel et concurrent.
   - **Particularité** : Inspiré d'Erlang, Elixir se distingue par une syntaxe proche de Ruby et une gestion native de la concurrence. Il est idéal pour des applications hautement concurrentes.
   - **Pourquoi c’est intéressant** : L'approche modulaire et les paradigmes fonctionnels, avec des **processus légers**, offrent une expérience de programmation très fluide et idiomatique, surtout pour la gestion de serveurs et services Web.

   ```elixir
   defmodule Humain do
       defstruct nom: "", age: 0

       def se_presenter(%Humain{nom: nom, age: age}) do
           IO.puts("Je m'appelle #{nom} et j'ai #{age} ans.")
       end
   end
   ```

---

### 2. **Haskell**
   - **Style** : Fonctionnel pur.
   - **Particularité** : Haskell se distingue par une syntaxe minimaliste et purement fonctionnelle, où chaque fonction est une expression immuable.
   - **Pourquoi c’est intéressant** : La rigueur imposée par l’absence d’effets de bord et le système de types avancé offre une perspective unique sur la gestion de données et de flux d’information.

   ```haskell
   data Humain = Humain { nom :: String, age :: Int }
   sePresenter (Humain nom age) = "Je m'appelle " ++ nom ++ " et j'ai " ++ show age ++ " ans."
   ```

---

### 3. **Racket**
   - **Style** : Lispy (style de langage de la famille Lisp).
   - **Particularité** : Racket est extrêmement flexible et conçu pour écrire des langages spécifiques au domaine (DSL).
   - **Pourquoi c’est intéressant** : La structure du code est totalement différente grâce aux parenthèses et à la flexibilité des macros, ce qui donne une puissance inégalée pour la personnalisation syntaxique.

   ```racket
   (define humain%
     (class object%
       (init-field [nom "Alice"] [age 30])
       (define/public (se-presenter)
         (printf "Je m'appelle ~a et j'ai ~a ans.\n" nom age))
       (super-new)))
   ```

---

### 4. **Nim**
   - **Style** : Langage impératif avec un typage statique et une syntaxe similaire à Python.
   - **Particularité** : Nim est conçu pour être performant comme C mais facile à lire comme Python.
   - **Pourquoi c’est intéressant** : Nim compile vers C, C++, JavaScript, et offre des concepts novateurs comme les *métaprogrammes*, mais avec un équilibre rare entre flexibilité et performance.

   ```nim
   type Humain = object
       nom: string
       age: int

   proc sePresenter(h: Humain) =
       echo "Je m'appelle ", h.nom, " et j'ai ", h.age, " ans."
   ```

---

### 5. **Prolog**
   - **Style** : Langage logique et déclaratif.
   - **Particularité** : Construit pour résoudre des problèmes logiques, Prolog repose sur des faits, des règles, et des requêtes.
   - **Pourquoi c’est intéressant** : Prolog est excellent pour les tâches de logique et d’IA, offrant une approche totalement différente de la programmation impérative ou fonctionnelle.

   ```prolog
   humain(nom("Alice"), age(30)).
   se_presenter(X) :- humain(nom(X), age(Y)), format("Je m'appelle ~w et j'ai ~w ans.~n", [X, Y]).
   ```

---

### 6. **OCaml**
   - **Style** : Langage fonctionnel impératif, statiquement typé.
   - **Particularité** : Il combine les paradigmes fonctionnels et impératifs dans un style concis et expressif, avec un système de types puissant.
   - **Pourquoi c’est intéressant** : OCaml offre des caractéristiques de programmation fonctionnelle mais reste très performant, avec une syntaxe concise et élégante.

   ```ocaml
   type humain = { nom : string; age : int }
   let se_presenter h = Printf.printf "Je m'appelle %s et j'ai %d ans.\n" h.nom h.age
   ```

---

### 7. **Idris**
   - **Style** : Langage fonctionnel à typage dépendant.
   - **Particularité** : La vérification de types peut inclure des valeurs, permettant de créer des types et fonctions basés sur des conditions spécifiques.
   - **Pourquoi c’est intéressant** : Idris est idéal pour des systèmes nécessitant une garantie de correction, où les types jouent un rôle central dans la logique de programmation.

   ```idris
   data Humain = Humain String Int
   sePresenter : Humain -> String
   sePresenter (Humain nom age) = "Je m'appelle " ++ nom ++ " et j'ai " ++ show age ++ " ans."
   ```

---

Ces langages offrent des perspectives originales et souvent transformantes, idéales pour un changement rafraîchissant et une nouvelle vision de la programmation. Chacun d’eux est bien adapté pour explorer des paradigmes différents de Python et de la POO traditionnelle.


Pour explorer des syntaxes et concepts vraiment différents de Python, voici quelques langages rafraîchissants à étudier, chacun apportant une approche unique :

---

### 1. **Elixir**

   - **Paradigme** : Fonctionnel, concurrent.
   - **Particularités** : Inspiré d’Erlang, Elixir est axé sur la concurrence avec un modèle de processus léger et une syntaxe lisible et concise. Il utilise aussi des “pipes” (`|>`) pour structurer le flux de données.
   - **Utilisation** : Web, applications distribuées, et microservices (ex. framework Phoenix pour le Web).
  
---

### 2. **Racket**

   - **Paradigme** : Fonctionnel, Lisp.
   - **Particularités** : Orienté expressions, Racket utilise une syntaxe de type S-expressions (basée sur des parenthèses). Il est très flexible pour créer des DSL (Domain-Specific Languages) et favorise une approche de manipulation syntaxique.
   - **Utilisation** : Enseignement de la programmation, développement de langages spécifiques.

---

### 3. **Idris**

   - **Paradigme** : Fonctionnel, typage dépendant.
   - **Particularités** : Langage purement fonctionnel comme Haskell, avec un système de types dépendants puissant, ce qui permet d’écrire des programmes extrêmement sûrs et contrôlés au niveau du typage. Idris peut être utilisé pour la preuve de théorèmes et pour définir des types basés sur des données.
   - **Utilisation** : Conception de logiciels critiques, recherche académique, preuve de programme.

---

### 4. **Forth**

   - **Paradigme** : Stack-based.
   - **Particularités** : Un langage minimaliste orienté pile, Forth se distingue par une approche de programmation où chaque fonction manipule une pile. Cela force une façon de penser radicalement différente et donne un contrôle bas niveau du système.
   - **Utilisation** : Systèmes embarqués, systèmes critiques.

---

### 5. **Prolog**

   - **Paradigme** : Logique, déclaratif.
   - **Particularités** : Basé sur des règles et des relations logiques, Prolog utilise un moteur de résolution pour prouver les relations définies. Cela change complètement la manière de penser un programme, car il n’y a pas de flux d’instructions linéaire.
   - **Utilisation** : Intelligence artificielle, systèmes experts, NLP.

---

### 6. **Nim**

   - **Paradigme** : Multi-paradigme (procédural, fonctionnel, orienté objet).
   - **Particularités** : Nim produit du code performant en C, avec une syntaxe inspirée de Python mais avec une sémantique qui favorise des optimisations bas niveau. Il permet un contrôle avancé de la mémoire et est intéressant pour combiner lisibilité et performance.
   - **Utilisation** : Systèmes embarqués, jeux, applications à haute performance.

---

### 7. **Factor**

   - **Paradigme** : Stack-based, orienté objets.
   - **Particularités** : Factor est similaire à Forth mais ajoute des fonctionnalités orientées objets et des collections modernes. La syntaxe axée sur la pile crée une structure inhabituelle mais puissante pour des applications d’exploration.
   - **Utilisation** : Programmation de systèmes, applications où un contrôle bas niveau est requis.

---

Ces langages offrent des perspectives uniques, que ce soit par une approche de programmation logicielle (fonctionnelle, logique, pile) ou par une syntaxe et une sémantique différentes. Chacun pousse à explorer de nouvelles manières de structurer le code et de penser les problèmes.

## Conclusion

it's horsecrap.