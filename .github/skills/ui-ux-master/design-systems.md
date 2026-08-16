# DESIGN SYSTEM MASTER

## Goal

Construire un système visuel cohérent et évolutif.

---

# DESIGN TOKENS

Centraliser :

* colors ;
* typography ;
* spacing ;
* radius ;
* shadows ;
* motion ;
* breakpoints.

---

# COLORS

Exemple :

```text
primary
secondary
accent
background
surface
foreground
muted
border
success
warning
error
info
```

---

# TYPOGRAPHY

Définir :

```text
display
h1
h2
h3
body
small
caption
label
```

---

# SPACING

Utiliser une échelle cohérente.

Exemple :

```text
4
8
12
16
24
32
48
64
96
128
```

---

# RADIUS

Définir quelques niveaux :

```text
sm
md
lg
xl
full
```

Éviter une multitude de border-radius arbitraires.

---

# COMPONENTS

Créer des composants réutilisables :

* Button ;
* Input ;
* Card ;
* Modal ;
* Navbar ;
* Dropdown ;
* Tabs ;
* Tooltip ;
* Toast ;
* Badge.

---

# STATES

Chaque composant interactif devrait considérer :

```text
default
hover
focus
active
disabled
loading
success
error
```

---

# VARIANTS

Préférer :

```jsx
<Button variant="primary" size="lg" />
```

à la duplication de composants.

---

# CONSISTENCY

Une même action doit avoir une apparence et un comportement similaires partout dans le produit.
