# ACCESSIBILITY MASTER

## Goal

Construire des interfaces utilisables par le plus grand nombre.

---

# 1. SEMANTIC HTML

Privilégier :

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
<button>
```

Ne pas remplacer inutilement un bouton par un `<div>`.

---

# 2. KEYBOARD

Toutes les actions importantes doivent être accessibles au clavier.

Vérifier :

* Tab ;
* Shift + Tab ;
* Enter ;
* Space ;
* Escape ;
* arrow keys lorsque nécessaire.

---

# 3. FOCUS

Le focus doit être visible.

Ne jamais supprimer :

```css
outline: none;
```

sans fournir une alternative accessible.

---

# 4. CONTRAST

Vérifier le contraste entre :

* texte/background ;
* boutons ;
* états ;
* éléments interactifs.

---

# 5. COLOR

Ne jamais communiquer une information uniquement avec la couleur.

Exemple mauvais :

Rouge = erreur.

Exemple meilleur :

Rouge + icône + message.

---

# 6. IMAGES

Les images importantes doivent avoir un `alt` pertinent.

Les images purement décoratives peuvent avoir :

```html
alt=""
```

---

# 7. FORMS

Chaque champ doit être identifiable.

Utiliser :

* label ;
* description ;
* error message ;
* autocomplete lorsque pertinent.

---

# 8. MOTION

Respecter :

```css
@media (prefers-reduced-motion: reduce)
```

---

# 9. TOUCH

Les éléments interactifs doivent avoir une zone tactile suffisamment grande.

Éviter les contrôles minuscules difficiles à utiliser sur mobile.

---

# 10. SCREEN READERS

Ne pas dépendre uniquement :

* de l'animation ;
* de la couleur ;
* de la position visuelle.

L'information doit également être disponible sémantiquement.
