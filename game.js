const gameData = {
  characters: {
    narration: {
      name: "Narration",
      color: "var(--text-secondary)",
      title: "Regards croisés",
    },
    marion: {
      name: "Marion",
      color: "var(--accent-marion)",
      title: "Pensées",
    },
    leon: {
      name: "Léon",
      color: "var(--accent-leon)",
      title: "Peintre prodige",
    },
    sofia: {
      name: "Sofia",
      color: "var(--accent-sofia)",
      title: "Photographe nomade",
    },
    hugo: {
      name: "Guilherme",
      color: "var(--accent-hugo)",
      title: "Boulanger-sculpteur",
    },
  },
  memoryTexts: {
    metLeon: "Premier regard échangé avec Léon dans l'atelier violet.",
    metSofia: "Conversation suspendue avec Sofia dans le jardin suspendu.",
    metHugo: "Rires partagés avec Guilherme entre les odeurs de brioche.",
    dayWithLeon: "Peindre côte à côte avec Léon pendant l'atelier libre.",
    dayWithSofia: "Course lumineuse avec Sofia dans les rues de la ville.",
    dayWithHugo: "Création pâtissière avec Guilherme avant l'aube.",
    festivalPrepLeon: "Préparatifs du bal avec Léon sous les verrières.",
    festivalPrepSofia: "Décor de lanternes imaginé avec Sofia.",
    festivalPrepHugo: "Banquet secret monté avec Guilherme dans les coulisses.",
    finalLeon: "Confession échangée sous la verrière violette.",
    finalSofia: "Promesse figée dans la lumière du flash.",
    finalHugo: "Serment murmuré au parfum de vanille.",
    finalSolo: "Marion choisit de suivre son propre rythme.",
  },
  scenes: {
    prologue: {
      speaker: "marion",
      role: "Pensées",
      background: "atelier",
      text: `La lourde porte du conservatoire d'Allières se referme derrière moi. Marion Ravel, boursière tardive, cœur qui bat plus vite que les talons sur le marbre. L'endroit sent les pigments et la pluie. J'inspire et me promets de ne plus me cacher derrière mes toiles inachevées.`,
      journal: `Premiers pas au conservatoire d'Allières. L'adrénaline compense la peur - je peux vraiment trouver ma place ici.`,
      choices: [
        {
          text: "Pousser la porte du hall principal.",
          next: "academyEntrance",
        },
      ],
    },
    academyEntrance: {
      speaker: "narration",
      background: "atelier",
      text: `Le hall est une mosaïque de voix. Les élèves déambulent entre chevalets et stands illuminés. Trois espaces captent l'attention : une verrière baignée de violet, un jardin suspendu rempli de câbles et d'appareils photo, et un coin de hall transformé en café éphémère.`,
      choices: [
        {
          text: "S'approcher de la verrière violette où un peintre travaille en silence.",
          next: "atelierLeon",
          require: { notFlags: ["metLeon"] },
          setFlags: ["metLeon"],
          affection: { leon: 1 },
          addMemories: ["metLeon"],
        },
        {
          text: "Gravir les escaliers vers le jardin suspendu et ses lumières.",
          next: "jardinSofia",
          require: { notFlags: ["metSofia"] },
          setFlags: ["metSofia"],
          affection: { sofia: 1 },
          addMemories: ["metSofia"],
        },
        {
          text: "Suivre l'odeur de brioche jusqu'au café improvisé.",
          next: "fourHugo",
          require: { notFlags: ["metHugo"] },
          setFlags: ["metHugo"],
          affection: { hugo: 1 },
          addMemories: ["metHugo"],
        },
        {
          text: "Rejoindre l'annonce officielle de la directrice.",
          next: "eveningReflectionOne",
          require: { flags: ["metLeon", "metSofia", "metHugo"] },
        },
      ],
    },
    atelierLeon: {
      speaker: "leon",
      role: "Peintre prodige",
      background: "atelier",
      text: `« Tu vois la lumière comme elle glisse, Marion ? » Léon ne relève pas les yeux de sa toile, mais son pinceau ralentit. « On m'a parlé de ta bourse. Ici, on n'applaudit pas les chances, on les transforme. Tu oses ajouter un trait ? »`,
      journal: `Léon travaille comme si le monde n'existait plus autour de lui. Sa confiance en mon geste me secoue plus que la foule.`,
      choices: [
        {
          text: "Retourner vers le hall pour continuer l'exploration.",
          next: "academyEntrance",
        },
      ],
    },
    jardinSofia: {
      speaker: "sofia",
      role: "Photographe nomade",
      background: "jardin",
      text: `Sofia déclenche son appareil sans prévenir. « Bouge pas ! Cette gêne dans ton regard, c'est le début d'une histoire. Si tu veux rester, il faudra courir avec moi quand la lumière change. Ça te dit ? »`,
      journal: `Sofia capture des fragments que je n'aurais jamais regardés. Son énergie est contagieuse.`,
      choices: [
        {
          text: "Redescendre et voir le reste du hall.",
          next: "academyEntrance",
        },
      ],
    },
    fourHugo: {
      speaker: "hugo",
      role: "Boulanger-sculpteur",
      background: "bibliotheque",
      text: `Guilherme rit en attrapant une miche dorée. « On nourrit le corps pour libérer l'esprit, non ? Si tu veux survivre ici, viens goûter mon croissant sculpté. Je raconte mieux les histoires avec le sucre qu'avec les mots. »`,
      journal: `Guilherme a les mains couvertes de farine et un sourire rassurant. Il parle d'art comme d'un repas partagé.`,
      choices: [
        {
          text: "Saluer Guilherme et retourner dans le hall.",
          next: "academyEntrance",
        },
      ],
    },
    eveningReflectionOne: {
      speaker: "marion",
      role: "Carnet du soir",
      background: "atelier-nuit",
      text: `La journée s'achève en notes dispersées. Trois visages orbitent autour de moi. Léon et sa rigueur lumineuse, Sofia et ses courses imprévisibles, Guilherme et sa chaleur créative. Peut-être que ce conservatoire a prévu une place pour moi, finalement.`,
      journal: `Rencontré Léon, Sofia, Guilherme. Chacun réveille une partie différente de ma voix. Rester ouverte aux possibles.`,
      choices: [
        {
          text: "Fermer le carnet et accueillir l'aube suivante.",
          next: "dayTwoDawn",
        },
      ],
    },
    dayTwoDawn: {
      speaker: "narration",
      background: "atelier",
      text: `La directrice annonce une journée libre pour créer quelque chose qui parlera de qui nous sommes. Les élèves se dispersent. Trois projets cherchent visiblement de l'aide...`,
      choices: [
        {
          text: "Observer les projets proposés.",
          next: "dayTwoChoice",
        },
      ],
    },
    dayTwoChoice: {
      speaker: "narration",
      background: "atelier",
      text: `Les ateliers bruissent. Une odeur d'huile, un éclat de flash, un parfum de caramel. Qui accompagner aujourd'hui ?`,
      choices: [
        {
          text: "Retrouver Léon pour peindre un portrait en duo.",
          next: "dayTwoLeon",
          require: { flags: ["metLeon"] },
          setFlags: ["dayWithLeon"],
          addMemories: ["dayWithLeon"],
          affection: { leon: 2 },
        },
        {
          text: "Suivre Sofia dans une chasse à la lumière.",
          next: "dayTwoSofia",
          require: { flags: ["metSofia"] },
          setFlags: ["dayWithSofia"],
          addMemories: ["dayWithSofia"],
          affection: { sofia: 2 },
        },
        {
          text: "Donner un coup de main à Guilherme aux fourneaux.",
          next: "dayTwoHugo",
          require: { flags: ["metHugo"] },
          setFlags: ["dayWithHugo"],
          addMemories: ["dayWithHugo"],
          affection: { hugo: 2 },
        },
      ],
    },
    dayTwoLeon: {
      speaker: "leon",
      background: "atelier",
      text: `« Laisse-moi voir ta touche. » Léon pose sa main sur la mienne pour stabiliser le pinceau. « Tu hésites avant chaque trait. Peins comme si tu défendais ta place ici. » Ses yeux brillent d'un sérieux tendre que je ne devinais pas.`,
      journal: `Avec Léon, j'apprends à affirmer mon geste. La peur recule, remplacée par une forme de confiance partagée.`,
      choices: [
        {
          text: "Nettoyer les pinceaux et savourer la fatigue.",
          next: "duskReflection",
        },
      ],
    },
    dayTwoSofia: {
      speaker: "sofia",
      background: "jardin",
      text: `Sofia court dans les ruelles et je cours derrière. « Respire ! » rit-elle. « Le flou raconte notre vitesse. Garde ton regard sur moi, pas sur tes doutes. » Quand nous reprenons notre souffle, ses doigts frôlent les miens autour de l'objectif partagé.`,
      journal: `Sofia me pousse à ressentir avant de réfléchir. Je me découvre capable d'improviser.`,
      choices: [
        {
          text: "Rentrer au conservatoire quand la lumière tombe.",
          next: "duskReflection",
        },
      ],
    },
    dayTwoHugo: {
      speaker: "hugo",
      background: "bibliotheque",
      text: `Guilherme pétrit la pâte en chantonnant. « On façonne comme on respire. » Il me guide pour sculpter un dessert en forme de plume. « Pour toi, Marion, le croustillant en guise de courage. À partager seulement si tu le souhaites. »`,
      journal: `Guilherme transforme chaque geste en attention. Je me sens accueillie sans condition.`,
      choices: [
        {
          text: "Laisser refroidir les créations et se retirer.",
          next: "duskReflection",
        },
      ],
    },
    duskReflection: {
      speaker: "marion",
      role: "Carnet du soir",
      background: "atelier-nuit",
      text: `La ville s'endort. Mon carnet se remplit de silhouettes et de mots qui vibrent encore. Qui suis-je quand je choisis d'être vue ?`,
      journal: `J'ai partagé ma journée, et le monde semble moins vaste. Demain, le conservatoire ouvre ses portes au public pour le grand bal des ateliers.`,
      choices: [
        {
          text: "Fermer les yeux et accueillir l'aube.",
          next: "dayThreeAube",
        },
      ],
    },
    dayThreeAube: {
      speaker: "narration",
      background: "festival",
      text: `L'annonce tombe : ce soir, bal des ateliers. Chaque élève doit préparer une surprise pour le public. Les mêmes regards que hier me cherchent déjà.`,
      choices: [
        {
          text: "Choisir qui accompagner dans les préparatifs.",
          next: "dayThreeChoice",
        },
      ],
    },
    dayThreeChoice: {
      speaker: "narration",
      background: "festival",
      text: `Entre tissus suspendus et guirlandes, chacun s'active. Un dernier choix avant le bal.`,
      choices: [
        {
          text: "Imaginer une mise en scène avec Léon sous la verrière.",
          next: "dayThreeLeon",
          require: { flags: ["dayWithLeon"] },
          setFlags: ["festivalPrepLeon", "finalWithLeon"],
          addMemories: ["festivalPrepLeon"],
          affection: { leon: 2 },
        },
        {
          text: "Aider Sofia à composer un ciel de lanternes.",
          next: "dayThreeSofia",
          require: { flags: ["dayWithSofia"] },
          setFlags: ["festivalPrepSofia", "finalWithSofia"],
          addMemories: ["festivalPrepSofia"],
          affection: { sofia: 2 },
        },
        {
          text: "Participer au banquet secret de Guilherme.",
          next: "dayThreeHugo",
          require: { flags: ["dayWithHugo"] },
          setFlags: ["festivalPrepHugo", "finalWithHugo"],
          addMemories: ["festivalPrepHugo"],
          affection: { hugo: 2 },
        },
        {
          text: "Prendre du recul et préparer mon propre numéro.",
          next: "dayThreeSolo",
          setFlags: ["finalSoloPath"],
        },
      ],
    },
    dayThreeLeon: {
      speaker: "leon",
      background: "atelier",
      text: `Sous la verrière, Léon m'invite à tracer les lumières qui guideront les visiteurs. « Ce soir, je veux que les gens te voient comme je te vois : intrépide. » Sa voix tremble légèrement lorsqu'il ajoute : « Reste près de moi quand la foule arrivera. »`,
      journal: `Léon m'offre une place dans son œuvre. Son regard ne fuit plus le mien.`,
      choices: [
        {
          text: "Se préparer à accueillir le public.",
          next: "festivalIntro",
        },
      ],
    },
    dayThreeSofia: {
      speaker: "sofia",
      background: "jardin",
      text: `Nous suspendons des lanternes qui diffuseront les clichés de Sofia. « J'ai gardé celle de toi pour ce soir, si tu l'acceptes. » Elle ajuste ma posture avec délicatesse. « J'aimerais que tu sois la dernière image de ma série. »`,
      journal: `Sofia me place au centre d'un ciel de couleurs. Je suis prête à briller avec elle.`,
      choices: [
        {
          text: "Inspirer profondément avant le bal.",
          next: "festivalIntro",
        },
      ],
    },
    dayThreeHugo: {
      speaker: "hugo",
      background: "bibliotheque",
      text: `Nous dressons un banquet derrière la scène. « Je veux que les visiteurs goûtent à ta audace, Marion. Cette ganache, c'est toi. » Il approche sa main de la mienne. « Ce soir, promet-moi de rester jusqu'à la dernière note. »`,
      journal: `Avec Guilherme, chaque détail est une invitation à partager plus que des saveurs.`,
      choices: [
        {
          text: "Terminer les préparatifs avant l'arrivée du bal.",
          next: "festivalIntro",
        },
      ],
    },
    dayThreeSolo: {
      speaker: "marion",
      role: "Pensées",
      background: "atelier",
      text: `Je m'offre une salle annexe pour y exposer mes toiles inachevées. Ce soir, je montrerai mon propre voyage, même si mes mains tremblent.`,
      journal: `Choisi de m'appartenir pleinement. Le bal révélera ma voix avant toute autre.`,
      choices: [
        {
          text: "Se recentrer avant le bal.",
          next: "festivalIntro",
        },
      ],
    },
    festivalIntro: {
      speaker: "narration",
      background: "festival",
      text: `Les portes s'ouvrent. Musique, rires, lanternes. Marion observe la foule qui s'émerveille. Les regards qu'elle a croisés ces derniers jours l'attendent au cœur de la nuit.`,
      choices: [
        {
          text: "Laisser la nuit révéler ce qui doit l'être.",
          next: "festivalChoice",
        },
      ],
    },
    festivalChoice: {
      speaker: "narration",
      background: "festival",
      text: `Au milieu des lanternes qui s'élèvent, un instant se fige. Marion sait que ses prochains mots laisseront une empreinte durable.`,
      choices: [
        {
          text: "Rejoindre Léon sous la verrière scintillante.",
          require: { flags: ["finalWithLeon"], affection: { leon: 4 } },
          ending: "leon",
          addMemories: ["finalLeon"],
        },
        {
          text: "Trouver Sofia près de la scène improvisée.",
          require: { flags: ["finalWithSofia"], affection: { sofia: 4 } },
          ending: "sofia",
          addMemories: ["finalSofia"],
        },
        {
          text: "Retrouver Guilherme derrière le banquet secret.",
          require: { flags: ["finalWithHugo"], affection: { hugo: 4 } },
          ending: "hugo",
          addMemories: ["finalHugo"],
        },
        {
          text: "Accueillir la nuit seule, pour écouter sa propre voix.",
          require: {
            any: [
              { flags: ["finalSoloPath"] },
              { notAffectionAbove: 4 },
            ],
          },
          ending: "solo",
          addMemories: ["finalSolo"],
        },
      ],
    },
  },
  endings: {
    leon: {
      speaker: "leon",
      background: "atelier",
      text: `Léon tend un pinceau trempé dans l'or. « Reste avec moi cette nuit. Ensemble, on fera parler la lumière jusqu'à l'aube. » Il dépose ma main sur la toile, nos gestes se confondent. Entre deux éclats de musique, sa confession est un murmure rien que pour nous.`,
      journal: `J'ai choisi le silence vibrant de Léon. Nos ombres se mêlent sur la toile encore humide.`,
    },
    sofia: {
      speaker: "sofia",
      background: "jardin",
      text: `Sofia enclenche son projecteur. Ma silhouette apparaît sur les lanternes qu'elle avait préparées. « C'est toi ma dernière image, Marion. Viens écrire la suite à mes côtés. » Nous rions, lumière contre lumière, et la foule s'efface.`,
      journal: `Avec Sofia, la nuit devient une série d'étincelles et de promesses capturées.`,
    },
    hugo: {
      speaker: "hugo",
      background: "bibliotheque",
      text: `Guilherme m'attire derrière le rideau des cuisines. « J'ai gardé la dernière pâtisserie pour toi. » Son regard est doux. « Restons après la fête. J'ai des histoires à pétrir avec toi, Marion. » Le sucre fond entre nous, aussi sincère que son sourire.`,
      journal: `Guilherme m'apprend que le réconfort peut être audacieux. Nous écrivons un futur à la saveur de vanille.`,
    },
    solo: {
      speaker: "marion",
      role: "Pensées",
      background: "atelier-nuit",
      text: `Je contemple la foule depuis la mezzanine. Mes toiles, mes mots, mes gestes - ce soir ils existent enfin. Je serre mon carnet contre moi et laisse mes propres échos me bercer. Demain, qui sait quelles rencontres je choisirai ?`,
      journal: `Je me suis choisie. Le cœur plein, prête à créer par moi-même et pour ceux que je croiserai.`,
    },
  },
};

const state = {
  currentSceneId: null,
  affection: {
    leon: 0,
    sofia: 0,
    hugo: 0,
  },
  flags: new Set(),
  memories: new Set(),
  memoryTimeline: [],
  journal: `Les émotions du conservatoire d'Allières ne font que commencer...`,
  gameOver: false,
};

const dom = {
  body: document.body,
  speakerRole: document.getElementById("speaker-role"),
  speakerName: document.getElementById("speaker-name"),
  dialogueText: document.getElementById("dialogue-text"),
  choiceContainer: document.getElementById("choice-container"),
  affectionList: document.getElementById("affection-list"),
  memoryList: document.getElementById("memory-list"),
  journalEntry: document.getElementById("journal-entry"),
  restartButton: document.getElementById("restart-button"),
};

function resetState() {
  state.currentSceneId = null;
  state.affection = { leon: 0, sofia: 0, hugo: 0 };
  state.flags = new Set();
  state.memories = new Set();
  state.memoryTimeline = [];
  state.journal = `Les émotions du conservatoire d'Allières ne font que commencer...`;
  state.gameOver = false;
  dom.restartButton.hidden = true;
}

function goToScene(sceneId) {
  const scene = gameData.scenes[sceneId];
  if (!scene) {
    // eslint-disable-next-line no-console
    console.warn(`Scene "${sceneId}" introuvable.`);
    return;
  }

  state.currentSceneId = sceneId;
  if (scene.background) {
    setBackground(scene.background);
  }

  if (scene.journal) {
    state.journal = scene.journal;
  }

  if (Array.isArray(scene.addMemories)) {
    scene.addMemories.forEach(addMemory);
  }

  renderScene(scene);
}

function renderScene(scene) {
  const character = gameData.characters[scene.speaker] ?? {
    name: scene.speaker ?? "???",
    color: "var(--text-primary)",
    title: "",
  };

  dom.speakerName.textContent = character.name;
  dom.speakerName.style.color = character.color || "var(--text-primary)";
  dom.speakerRole.textContent = scene.role ?? character.title ?? "";
  dom.dialogueText.textContent = scene.text;

  renderJournal();
  renderAffection();
  renderMemories();
  renderChoices(scene.choices || []);
}

function renderChoices(choices) {
  dom.choiceContainer.innerHTML = "";

  const available = choices
    .map((choice) => ({ choice, visible: isChoiceVisible(choice) }))
    .filter((entry) => entry.visible)
    .map((entry) => entry.choice);

  if (available.length === 0) {
    const disabledButton = document.createElement("button");
    disabledButton.className = "choice-button";
    disabledButton.disabled = true;
    disabledButton.textContent = "Aucun choix disponible pour l'instant.";
    dom.choiceContainer.append(disabledButton);
    return;
  }

  available.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = choice.text;
    button.addEventListener("click", () => handleChoice(choice));
    dom.choiceContainer.append(button);
  });
}

function isChoiceVisible(choice) {
  if (!choice.require) {
    return true;
  }

  const { flags, notFlags, affection, any, notAffectionAbove } = choice.require;

  if (Array.isArray(any) && any.length > 0) {
    return any.some((requirement) => isChoiceVisible({ require: requirement }));
  }

  if (Array.isArray(flags)) {
    for (const flag of flags) {
      if (!state.flags.has(flag)) {
        return false;
      }
    }
  }

  if (Array.isArray(notFlags)) {
    for (const flag of notFlags) {
      if (state.flags.has(flag)) {
        return false;
      }
    }
  }

  if (affection) {
    for (const [character, value] of Object.entries(affection)) {
      if ((state.affection[character] ?? 0) < value) {
        return false;
      }
    }
  }

  if (typeof notAffectionAbove === "number") {
    return (
      state.affection.leon <= notAffectionAbove &&
      state.affection.sofia <= notAffectionAbove &&
      state.affection.hugo <= notAffectionAbove
    );
  }

  return true;
}

function handleChoice(choice) {
  lockChoices();

  if (choice.affection) {
    for (const [character, value] of Object.entries(choice.affection)) {
      state.affection[character] = (state.affection[character] ?? 0) + value;
    }
  }

  if (Array.isArray(choice.setFlags)) {
    choice.setFlags.forEach((flag) => state.flags.add(flag));
  }

  if (Array.isArray(choice.clearFlags)) {
    choice.clearFlags.forEach((flag) => state.flags.delete(flag));
  }

  if (Array.isArray(choice.addMemories)) {
    choice.addMemories.forEach(addMemory);
  }

  if (choice.journal) {
    state.journal = choice.journal;
  }

  if (choice.ending) {
    presentEnding(choice.ending);
    return;
  }

  if (choice.next) {
    goToScene(choice.next);
  }
}

function lockChoices() {
  dom.choiceContainer.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
  });
}

function renderAffection() {
  dom.affectionList.innerHTML = "";

  const affectionEntries = Object.entries(state.affection);
  const maxAffection = 6;

  affectionEntries.forEach(([characterId, value]) => {
    const li = document.createElement("li");
    li.className = "affection-item";

    const header = document.createElement("header");
    const character = gameData.characters[characterId];
    const nameSpan = document.createElement("span");
    nameSpan.textContent = character?.name ?? characterId;
    const valueSpan = document.createElement("span");
    valueSpan.textContent = `${value} pts`;

    header.append(nameSpan, valueSpan);

    const bar = document.createElement("div");
    bar.className = "affection-bar";
    const fill = document.createElement("div");
    fill.className = "affection-bar-fill";
    fill.style.background = character?.color ?? "var(--accent-marion)";
    const percent = Math.max(0, Math.min(100, Math.round((value / maxAffection) * 100)));
    fill.style.width = `${percent}%`;
    bar.append(fill);

    li.append(header, bar);
    dom.affectionList.append(li);
  });
}

function addMemory(memoryId) {
  if (state.memories.has(memoryId)) {
    return;
  }
  state.memories.add(memoryId);
  state.memoryTimeline.push(memoryId);
  renderMemories();
}

function renderMemories() {
  dom.memoryList.innerHTML = "";
  state.memoryTimeline.forEach((memoryId) => {
    const message = gameData.memoryTexts[memoryId];
    if (!message) {
      return;
    }
    const li = document.createElement("li");
    li.textContent = message;
    dom.memoryList.append(li);
  });
}

function renderJournal() {
  dom.journalEntry.textContent = state.journal;
}

function setBackground(backgroundKey) {
  dom.body.dataset.background = backgroundKey;
}

function presentEnding(endingKey) {
  const ending = gameData.endings[endingKey];
  if (!ending) {
    // eslint-disable-next-line no-console
    console.warn(`Fin "${endingKey}" introuvable.`);
    return;
  }

  state.gameOver = true;
  dom.restartButton.hidden = false;

  const speakerId = ending.speaker ?? "narration";
  const character = gameData.characters[speakerId] ?? {
    name: speakerId,
    color: "var(--text-primary)",
    title: "",
  };

  if (ending.background) {
    setBackground(ending.background);
  }

  state.journal = ending.journal ?? state.journal;
  renderJournal();
  renderAffection();
  renderMemories();

  dom.speakerName.textContent = character.name;
  dom.speakerName.style.color = character.color || "var(--text-primary)";
  dom.speakerRole.textContent = ending.role ?? character.title ?? "";
  dom.dialogueText.textContent = ending.text;

  dom.choiceContainer.innerHTML = "";

  const button = document.createElement("button");
  button.className = "choice-button";
  button.type = "button";
  button.textContent = "Rester dans ce moment encore un peu.";
  button.disabled = true;
  dom.choiceContainer.append(button);
}

function restartGame() {
  resetState();
  goToScene("prologue");
}

dom.restartButton.addEventListener("click", restartGame);

resetState();
goToScene("prologue");
