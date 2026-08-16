# DESIGN PRINCIPLES MASTER

## 1. USER FIRST

Le design existe pour aider l'utilisateur.

Avant toute décision visuelle, se demander :

* Qui utilise cette interface ?
* Quel problème essaie-t-il de résoudre ?
* Quelle action veut-il accomplir ?
* Quel niveau de connaissance possède-t-il ?
* Dans quel contexte utilise-t-il le produit ?

Ne jamais privilégier l'esthétique au détriment de l'utilisabilité.

---

# 2. CLARITY OVER DECORATION

La clarté est prioritaire sur la décoration.

Une interface doit permettre de comprendre rapidement :

* où l'utilisateur se trouve ;
* ce qui est important ;
* ce qu'il peut faire ;
* ce qui vient de se passer.

Si un élément décoratif augmente la confusion, le supprimer.

---

# 3. HIERARCHY

Tout ne peut pas être important.

Créer une hiérarchie avec :

* taille ;
* poids ;
* contraste ;
* position ;
* espacement ;
* couleur ;
* mouvement.

La hiérarchie doit guider naturellement le regard.

---

# 4. SIMPLICITY

La simplicité ne signifie pas supprimer des fonctionnalités.

Elle signifie supprimer la complexité inutile.

Avant d'ajouter quelque chose, demander :

> Est-ce réellement nécessaire ?

Avant de créer un nouveau composant :

> Existe-t-il déjà quelque chose qui peut être réutilisé ?

---

# 5. CONSISTENCY

Une interface cohérente réduit la charge cognitive.

Un même élément doit généralement :

* avoir la même apparence ;
* avoir le même comportement ;
* utiliser les mêmes états ;
* respecter les mêmes espacements.

Éviter les exceptions visuelles sans raison.

---

# 6. VISUAL RHYTHM

Une interface doit avoir un rythme.

Utiliser de manière cohérente :

* spacing ;
* typography ;
* proportions ;
* repetition ;
* contrast ;
* alignment.

Les sections ne doivent pas sembler assemblées indépendamment.

---

# 7. WHITESPACE

L'espace vide est un outil de hiérarchie.

Ne pas remplir chaque espace disponible.

Utiliser le whitespace pour :

* séparer ;
* respirer ;
* mettre en valeur ;
* créer une pause ;
* structurer.

---

# 8. ALIGNMENT

Les éléments doivent avoir des relations géométriques compréhensibles.

Utiliser :

* grids ;
* columns ;
* consistent margins ;
* shared baselines.

Un alignement approximatif donne rapidement une impression amateur.

---

# 9. PROXIMITY

Les éléments liés doivent être visuellement proches.

Les éléments différents doivent être suffisamment séparés.

La proximité permet de communiquer les relations sans texte supplémentaire.

---

# 10. CONTRAST

Le contraste permet de créer la hiérarchie.

Il peut être créé par :

* couleur ;
* taille ;
* poids ;
* luminosité ;
* espace ;
* forme ;
* mouvement.

Éviter le contraste excessif qui transforme toute l'interface en compétition visuelle.

---

# 11. AFFORDANCE

Un élément doit suggérer son comportement.

Un bouton doit ressembler à quelque chose que l'on peut activer.

Un champ doit ressembler à quelque chose dans lequel on peut écrire.

Un élément draggable doit suggérer qu'il peut être déplacé.

Ne pas demander à l'utilisateur de deviner comment fonctionne l'interface.

---

# 12. FEEDBACK

Chaque action importante doit produire un feedback approprié.

Exemple :

```text
User action
    ↓
System response
    ↓
User understanding
```

Le feedback peut être :

* visuel ;
* textuel ;
* sonore ;
* haptique ;
* animé.

Sur le web, privilégier généralement le feedback visuel et textuel.

---

# 13. PREDICTABILITY

Une interface doit se comporter comme l'utilisateur s'y attend.

Éviter :

* interactions surprises ;
* animations qui bloquent ;
* navigation imprévisible ;
* boutons qui changent complètement de comportement ;
* éléments qui disparaissent sans explication.

---

# 14. DIRECT MANIPULATION

Lorsque pertinent, permettre à l'utilisateur d'interagir directement avec les objets.

Exemples :

* drag & drop ;
* sliders ;
* reorder ;
* resize ;
* gestures.

Ces interactions doivent avoir un feedback immédiat.

---

# 15. PROGRESSIVE DISCLOSURE

Ne pas afficher toutes les informations simultanément.

Afficher d'abord l'essentiel.

Puis révéler les détails lorsque l'utilisateur en a besoin.

Exemples :

* accordion ;
* tabs ;
* modal ;
* expandable card ;
* advanced settings.

---

# 16. RECOGNITION OVER RECALL

L'utilisateur ne devrait pas avoir à mémoriser des informations inutiles.

Préférer :

* labels visibles ;
* suggestions ;
* historique ;
* autocomplete ;
* exemples ;
* indications contextuelles.

---

# 17. ERROR PREVENTION

Prévenir les erreurs avant de devoir les corriger.

Exemples :

* validation ;
* contraintes ;
* confirmation ;
* disabled state ;
* preview ;
* undo.

---

# 18. ERROR RECOVERY

Lorsqu'une erreur arrive, aider l'utilisateur à récupérer.

Un bon message d'erreur doit répondre :

1. Qu'est-ce qui s'est passé ?
2. Pourquoi ?
3. Que dois-je faire maintenant ?

Éviter les erreurs techniques incompréhensibles pour l'utilisateur.

---

# 19. REVERSIBILITY

Lorsque possible, permettre d'annuler une action.

Exemples :

* Undo ;
* Cancel ;
* Restore ;
* Back.

Les actions destructives doivent demander une confirmation lorsque nécessaire.

---

# 20. FEWER DECISIONS

Réduire le nombre de décisions inutiles.

Si deux options sont presque identiques et qu'une seule suffit, simplifier.

L'objectif n'est pas de donner le maximum de choix.

L'objectif est de permettre la meilleure décision avec le minimum d'effort.

---

# 21. ACCESSIBILITY IS NOT OPTIONAL

L'accessibilité fait partie du design initial.

Elle ne doit pas être ajoutée à la fin.

Toujours considérer :

* clavier ;
* contraste ;
* screen readers ;
* focus ;
* reduced motion ;
* touch ;
* taille du texte ;
* sémantique HTML.

---

# 22. RESPONSIVE BY DESIGN

Ne jamais concevoir une interface uniquement pour desktop.

Le design doit s'adapter à :

* écran ;
* orientation ;
* input method ;
* contexte ;
* connexion ;
* puissance de l'appareil.

---

# 23. MOBILE IS NOT SMALL DESKTOP

Sur mobile, réévaluer :

* navigation ;
* hiérarchie ;
* spacing ;
* interactions ;
* contenu ;
* motion.

Ne pas simplement réduire les dimensions.

---

# 24. MOTION WITH PURPOSE

Chaque animation doit avoir une raison.

Une animation peut :

* expliquer ;
* guider ;
* confirmer ;
* attirer l'attention ;
* montrer une relation ;
* créer une continuité.

Si elle n'apporte rien, la supprimer.

---

# 25. MOTION HIERARCHY

Les animations importantes doivent avoir plus de poids que les animations décoratives.

Priorité :

1. feedback ;
2. navigation ;
3. compréhension ;
4. hiérarchie ;
5. storytelling ;
6. décoration.

---

# 26. PHYSICALITY

Les mouvements doivent sembler cohérents avec les propriétés de l'objet.

Exemples :

Un panneau qui apparaît :

→ rapide entrée.

Un objet lourd :

→ mouvement plus lent.

Un élément interactif :

→ réponse immédiate.

Ne pas appliquer la même animation à tout.

---

# 27. CONTINUITY

Les transitions doivent montrer la relation entre deux états.

Exemple :

Card
→ Expanded card

L'utilisateur doit comprendre que le deuxième état vient du premier.

---

# 28. PERFORMANCE IS PART OF UX

Une interface qui ralentit l'utilisateur est une mauvaise expérience.

Toujours considérer :

* bundle size ;
* images ;
* fonts ;
* animations ;
* JavaScript ;
* network ;
* rendering.

Une animation magnifique à 20 FPS est un échec UX.

---

# 29. PERCEIVED PERFORMANCE

La vitesse perçue est aussi importante que la vitesse réelle.

Utiliser lorsque pertinent :

* skeleton ;
* optimistic UI ;
* progressive loading ;
* transitions ;
* placeholders ;
* immediate feedback.

---

# 30. CONTENT IS DESIGN

Le texte fait partie de l'interface.

Les labels doivent être :

* courts ;
* compréhensibles ;
* précis ;
* orientés action.

Éviter le jargon inutile.

---

# 31. EMPTY STATES ARE PART OF THE DESIGN

Une interface ne doit pas être conçue uniquement avec des données.

Prévoir :

* empty ;
* loading ;
* error ;
* success ;
* disabled ;
* offline lorsque pertinent.

---

# 32. DESIGN FOR FAILURE

Toujours se demander :

> Que se passe-t-il si quelque chose ne fonctionne pas ?

Prévoir :

* réseau indisponible ;
* API lente ;
* API en erreur ;
* données manquantes ;
* utilisateur non autorisé ;
* session expirée ;
* contenu trop long ;
* utilisateur inexpérimenté.

---

# 33. DATA DENSITY

Pour les dashboards et applications métier :

Ne pas confondre information density et visual clutter.

Une interface dense peut rester claire grâce à :

* hierarchy ;
* grouping ;
* spacing ;
* typography ;
* filtering ;
* progressive disclosure.

---

# 34. TRUST

Les interfaces manipulant :

* données personnelles ;
* paiements ;
* comptes ;
* documents ;
* informations sensibles ;

doivent communiquer la confiance.

Utiliser :

* transparence ;
* feedback ;
* états explicites ;
* confirmation ;
* sécurité visible ;
* langage clair.

---

# 35. DESIGN FOR REAL CONTENT

Ne jamais concevoir uniquement avec :

```text
Lorem ipsum
```

Tester avec :

* texte court ;
* texte long ;
* noms longs ;
* erreurs ;
* données manquantes ;
* plusieurs langues lorsque nécessaire.

Le design doit survivre au contenu réel.

---

# 36. DESIGN FOR EXTREMES

Tester les cas extrêmes :

* écran très petit ;
* écran très grand ;
* texte très long ;
* utilisateur lent ;
* connexion lente ;
* beaucoup de données ;
* aucune donnée ;
* erreur serveur.

---

# 37. DESIGN SYSTEM THINKING

Ne pas concevoir chaque écran comme un projet indépendant.

Identifier les patterns répétitifs.

Transformer les patterns en :

* tokens ;
* components ;
* variants ;
* states ;
* patterns.

---

# 38. REUSE BEFORE REINVENT

Avant de créer :

* un bouton ;
* une modal ;
* une card ;
* une animation ;
* un formulaire ;

chercher si un pattern existant peut être réutilisé.

La cohérence est souvent préférable à une nouveauté inutile.

---

# 39. VISUAL IDENTITY

Une interface doit avoir une personnalité lorsque le produit le justifie.

Définir :

* typography ;
* color ;
* imagery ;
* shapes ;
* spacing ;
* motion ;
* tone.

Mais l'identité ne doit jamais détruire la usability.

---

# 40. TREND RESISTANCE

Ne jamais utiliser une tendance uniquement parce qu'elle est populaire.

Exemples :

* glassmorphism ;
* bento grid ;
* 3D ;
* parallax ;
* cursor effects ;
* kinetic typography.

Avant de l'utiliser :

1. Quel problème résout-elle ?
2. Apporte-t-elle quelque chose à l'utilisateur ?
3. Est-elle performante ?
4. Est-elle accessible ?
5. Est-elle adaptée au produit ?

Si la réponse est non, ne pas l'utiliser.

---

# 41. REFERENCE ANALYSIS

Lorsqu'une référence est donnée, ne pas simplement dire :

> "Fais quelque chose comme ça."

Analyser :

```text
Visual language
+
Layout
+
Typography
+
Spacing
+
Interaction
+
Motion
+
Responsive behavior
+
UX strategy
```

Puis reconstruire une solution originale adaptée au produit.

---

# 42. DESIGN CRITIQUE

Lorsqu'un design existant est mauvais, ne pas simplement l'améliorer visuellement.

Identifier :

### Problem

Quel est le problème ?

### Cause

Pourquoi existe-t-il ?

### Impact

Comment affecte-t-il l'utilisateur ?

### Solution

Quelle modification le résout ?

### Trade-off

Quel compromis introduit-elle ?

---

# 43. TRADE-OFFS

Il n'existe pas toujours de solution parfaite.

Évaluer :

* esthétique ;
* UX ;
* accessibilité ;
* performance ;
* complexité ;
* maintenance ;
* coût technique.

Choisir la meilleure solution globale.

---

# 44. DESIGN BEFORE CODE

Lorsque la tâche est importante :

Ne pas commencer immédiatement à coder.

D'abord définir :

```text
Goal
↓
User
↓
UX
↓
Structure
↓
Visual system
↓
Interaction
↓
Motion
↓
Responsive
↓
Accessibility
↓
Implementation
```

---

# 45. CODE QUALITY

Le design et le code doivent être cohérents.

Éviter :

* composants gigantesques ;
* duplication ;
* CSS incohérent ;
* styles hardcodés partout ;
* animations impossibles à maintenir.

Favoriser :

* composants ;
* tokens ;
* variants ;
* hooks ;
* utilities ;
* conventions.

---

# 46. FINAL DESIGN TEST

Avant de considérer une interface comme terminée, vérifier :

## UX

* Est-elle compréhensible ?
* L'utilisateur sait-il quoi faire ?

## UI

* La hiérarchie est-elle claire ?
* Les espacements sont-ils cohérents ?

## Interaction

* Les états sont-ils présents ?
* Le feedback est-il clair ?

## Motion

* Les animations sont-elles utiles ?
* Sont-elles fluides ?

## Responsive

* Mobile ?
* Tablet ?
* Desktop ?

## Accessibility

* Keyboard ?
* Focus ?
* Contrast ?
* Reduced motion ?

## Performance

* Images ?
* Fonts ?
* JavaScript ?
* Animations ?

## Maintainability

* Composants réutilisables ?
* Design system cohérent ?
* Code compréhensible ?

---

# GOLDEN RULES

Toujours se rappeler :

**Clarity > Decoration**

**Usability > Novelty**

**Consistency > Randomness**

**Accessibility > Visual Tricks**

**Performance > Excessive Effects**

**User Value > Designer Ego**

**Purposeful Motion > Motion Everywhere**

**Simple > Complicated**

**Understand First → Design Second → Code Third**
