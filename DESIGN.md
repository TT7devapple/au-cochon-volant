# Au Cochon Volant — Design system (papier découpé)

Monde : papier découpé façon Łowicz. Couleurs unies, profondeur uniquement par superposition de feuilles (jamais d'ombre ni de dégradé décoratif). Bords festonnés et nuages coupés en SVG. Le seul dégradé autorisé est le voile de lisibilité posé sur la photo d'accueil.

## Couleurs (styles.css `:root`)
| Token | Valeur | Rôle |
|---|---|---|
| `--night` | #14183a | accueil, avis, pied de page, texte principal |
| `--paper` | #fffdf9 | fond des sections claires, feuille du menu |
| `--ink-soft` | #464b6b | texte secondaire sur papier |
| `--pink` | #f28ba8 | nuages, liserés, bandes d'avis, soulignés |
| `--pink-light` | #f7a9be | corps du cochon |
| `--pink-deep` | #d94775 | groin et oreilles, étoiles ; grands éléments seulement |
| `--cobalt` | #2443c4 | section carte, ciel de la rosace |
| `--green` | #0f8a56 | couronne de la rosace, feuille sous la carte |
| `--yellow` | #f6c230 | étiquettes, jour courant, anneau de focus |
| `--red` | #ec4a2c | point « fermé », petits ornements |

Rythme des sections : nuit (photo), papier, cobalt, nuit, papier, nuit. Chaque passage se fait par un bord festonné (`.edge`).

## Typographie
- Titres : Young Serif (une seule graisse), interlignage 0,98 à 1,05 ; taille d'affichage plafonnée à 6rem.
- Texte : Figtree 400/500/600/700, 1,0625rem, interlignage 1,65.
- Chiffres en `tabular-nums` (horaires, prix).

## Composants
- **Pile de papiers** (`.sheet-stack`, `.find__map`) : deux feuilles de couleur pivotées entre −2,4° et +2,2° sous l'élément principal.
- **Bande d'avis** (`.strip`) : papier uni, rotation `--r` entre −1,2° et +1,2°, citation en Young Serif.
- **Étiquette** (`.about__tip`, `.dish__tag`) : jaune ou rose, en capitales pour les tags.
- **Rosace** : couches empilées (`--i`) qui se collent une à une ; la couronne tourne avec le défilement.
- **Navigation** : liens texte soulignés en rose au survol et sur la section active ; transparente sur la photo, fond papier ensuite ; panneau plein écran sous 900px.

## Mouvement
Easing `cubic-bezier(.16,1,.3,1)`. Parallaxe sur la photo et les nuages, collage des couches de la rosace, flottement du cochon. Tout est désactivé avec `prefers-reduced-motion`. Le contenu est visible par défaut ; l'animation ne s'arme que pour les éléments hors écran.
