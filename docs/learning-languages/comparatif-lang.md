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

### 6. **TypeScript**

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




## je continue avec le LLM


---

### 1. **Go**

- **Pourquoi c'est intéressant** : Go est connu pour sa simplicité et sa courbe d’apprentissage douce. Il est conçu pour les **systèmes distribués** et le développement web, avec des **goroutines** pour la gestion de la concurrence, une collecte des ordures (garbage collection) intégrée, et une syntaxe claire.
- **Utilité générale** : Go est déjà adopté en production dans de nombreux secteurs (notamment chez Google, Dropbox, etc.) pour le développement de microservices, de services API et de systèmes distribués. Sa popularité vient de son efficacité dans les applications réseau et la simplicité avec laquelle il gère la concurrence.
- **Apprentissage et application** : Go convient parfaitement si tu recherches une introduction pratique à la programmation système et concurrente, avec des débouchés dans le développement web, le cloud, et les applications réseau.

**En résumé** : Go est un excellent choix pour des projets rapides en production, où la simplicité et la rapidité d'exécution sont prioritaires.

---

### 2. **Rust**

- **Pourquoi c'est intéressant** : Rust est conçu pour des performances et une sécurité mémoire maximales, sans garbage collection, avec un **système de types avancé** et un système de **propriété et d’emprunt** (ownership/borrowing) pour éviter les fuites de mémoire et les erreurs de concurrence.
- **Utilité générale** : Rust excelle dans les applications système, les logiciels embarqués, les jeux, et même les applications de haute performance sur le web. Il est souvent cité comme une alternative plus sécurisée et moderne à C et C++.
- **Apprentissage et application** : Rust est plus difficile à maîtriser que Go mais procure des compétences en gestion mémoire fine et en développement système. Si tu cherches une maîtrise accrue de la gestion mémoire avec des applications pratiques dans la sécurité et la performance, Rust est une option puissante et polyvalente.

**En résumé** : Rust est le meilleur choix pour des projets qui nécessitent à la fois sécurité, performance, et contrôle mémoire, avec des concepts de bas niveau plus avancés.

---

### 3. **Zig**

- **Pourquoi c'est intéressant** : Zig est un langage moderne qui vise à remplacer C avec une syntaxe épurée, un contrôle total sur la gestion mémoire, et une compatibilité native avec le code C sans le côté complexe de C++.
- **Utilité générale** : Zig est en pleine croissance dans les domaines du développement système et des logiciels embarqués. Il est utilisé pour des applications bas niveau, les jeux, et les outils de compilation, avec un contrôle absolu sur les ressources et sans runtime.
- **Apprentissage et application** : Zig est assez spécialisé mais peut être une excellente introduction pour comprendre les concepts de bas niveau, sans les complexités syntaxiques de C++. Si tu cherches une alternative à C avec des options de mémoire avancées, Zig est très intéressant.

**En résumé** : Zig est un choix idéal pour des développeurs système cherchant une alternative plus moderne et sécurisée à C, particulièrement adapté aux projets de bas niveau et à l’embarqué.

---

### 4. **Haskell**

- **Pourquoi c'est intéressant** : Haskell est un langage fonctionnel pur, avec un système de types avancé et des abstractions comme les monades et les foncteurs qui le rendent parfait pour apprendre et appliquer des concepts fonctionnels profonds.
- **Utilité générale** : Bien que Haskell soit surtout populaire dans les milieux académiques et pour les analyses de données, il est également utilisé dans des projets nécessitant une **logique robuste** et une **vérification formelle**. Sa capacité à minimiser les effets de bord en fait un choix solide pour les systèmes critiques.
- **Apprentissage et application** : Haskell est idéal pour maîtriser la programmation fonctionnelle pure et pour développer une rigueur dans la gestion de la logique et des structures de données. Cependant, il est moins polyvalent pour les projets courants en production.

**En résumé** : Haskell est une excellente option pour s’immerger dans la programmation fonctionnelle et pour des applications nécessitant une rigueur mathématique et logique, mais il est moins pratique pour le développement généraliste ou les projets orientés production.

---

### **Conclusion**

- **Si tu cherches un langage polyvalent pour des projets en production, particulièrement dans le développement web ou les systèmes distribués** : **Go** est un bon choix, simple et efficace pour des solutions rapides.

- **Pour une compréhension et un contrôle mémoire avancés avec des débouchés en applications système et embarquées** : **Rust** est l’option la plus robuste, combinant sécurité et performance.

- **Pour une approche de bas niveau moderne et une alternative à C dans le développement système** : **Zig** est un excellent compromis, spécialement pour les projets où le contrôle mémoire est crucial mais où tu souhaites éviter la complexité de C++.

- **Si tu veux explorer et maîtriser les concepts fonctionnels avancés et aborder la rigueur logique** : **Haskell** est la meilleure option pour l'apprentissage académique et la recherche en logique fonctionnelle. 

En général, **Rust** est le choix le plus complet pour des projets ambitieux en production, particulièrement si tu veux des connaissances approfondies en systèmes et sécurité mémoire.

## Haskell

- by [haskell-perf](https://github.com/haskell-perf/checklist)
- by [iand675](https://github.com/iand675/haskell-checklist)
- [package](https://github.com/tfausak/haskell-package-checklist)

*Huge list of videos, talks , courses for Haskell programming language, that i want to remember.*
- [awesome haskell must watch](https://github.com/hzlmn/haskell-must-watch)


## LISP based

- [awesome lisp languages](https://github.com/dundalek/awesome-lisp-languages)
- [awesome commmon lisp](https://github.com/CodyReichert/awesome-cl)

### Why should I care as a lisp programmer?

If you already love s-expressions then lisp-flavored languages will make it nicer when you need to build on existing platforms. In case the target language does not support advanced features like macros and REPL-driven development, these can often be easily added by using the s-expressions layer.

The second point is about helping to spread lisp and its powerful ideas more. The example of Clojure and its relative popularity shows that being hosted on existing mainstream language and leveraging ecosystems of existing libraries is a key to broader adoption. It also lowers the barrier for people to try lisp and learn about the ideas behind it. Traditionally to learn lisp one needs to learn and get used to very unfamiliar syntax while at the same time being exposed to a completely new environment and ecosystem. Taking the environment out of the equation can make the experience of trying out lisp more approachable.

## Conclusion

it's horsecrap. But I choosed : Haskell si c'est trop dur => GO (je connais déjà un peu) => Rust => Zig