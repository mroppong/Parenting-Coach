// Tiny i18n helper: translates elements with [data-i18n] using selected language.
(function(){
  const DEFAULT_LANG = 'en';
  const storeKey = 'pc_lang';

  const messages = {
    en: {
      'pulse.title': 'Pulse check',
      'pulse.step1': 'Step 1',
      'pulse.step2': 'Step 2',
      'pulse.step3': 'Step 3',
      'pulse.step4': 'Step 4',
      'pulse.step1.title': 'The Pulse Check — How are things feeling right now?',
      'pulse.step1.desc': "This helps us understand your primary pain points and goals.",
      'pulse.step1.q1': 'What about parenting has felt hard lately? Select all that apply.',
      'pulse.step1.hard.meltdowns': "Big, explosive feelings & meltdowns (my child's)",
      'pulse.step1.hard.power': 'Everything turns into a power struggle',
      'pulse.step1.hard.physical': 'Hitting, biting, throwing, and other physical behaviors',
      'pulse.step1.hard.routines': 'Routines feel like a constant battle (mornings, bedtime, etc.)',
      'pulse.step1.hard.anger': 'My own anger & reactivity',
      'pulse.step1.hard.a_lot': 'Everything just feels like a lot right now',
      'pulse.step1.hard.board': "I'm just looking for a supportive sounding board",
      'pulse.step1.q2': 'If parenting were to feel a little easier, what would that look like for you? Pick one.',
      'pulse.step1.easy.needs': "Truly understanding my child's needs and behaviors",
      'pulse.step1.easy.connection': 'Feeling more connected and joyful with my child',
      'pulse.step1.easy.control': 'Feeling less overwhelmed and more in control',
      'pulse.step1.easy.cooperation': 'Experiencing less chaos and more cooperation day-to-day',
      'pulse.step1.easy.calm': 'Responding calmly and confidently in difficult moments',
      'pulse.step1.easy.validated': 'Feeling more secure and validated in my parenting choices',

      'pulse.step2.title': 'The Current Landscape — What’s the most pressing issue?',
      'pulse.step2.desc': "Pick the one that best matches your situation.",
      'pulse.step2.big_feelings': "My child's feelings seem too big for them to handle",
      'pulse.step2.listen': "My child doesn’t seem to listen to me",
      'pulse.step2.bedtime': 'Bedtime has become a nightly struggle',
      'pulse.step2.rudeness': "I'm seeing a lot of rudeness, defiance, or hitting",
      'pulse.step2.tantrums': 'Tantrums are becoming physical and overwhelming',
      'pulse.step2.worry': 'My child seems to worry a lot',
      'pulse.step2.siblings': 'My kids are constantly arguing with each other',
      'pulse.step2.parent_calm': 'I struggle to stay calm when my child is dysregulated',
      'pulse.step2.teen': 'I’m navigating the unique challenges of the teenage years',
      'pulse.step2.new_baby': 'I’m adjusting to life with a new baby',

      'pulse.step3.title': 'Your Family Constellation — Tell us about your crew.',
      'pulse.step3.desc': 'This helps us provide age- and family-specific guidance.',
      'pulse.step3.q1': 'How many kids are in your family?',
      'pulse.step3.q2': 'And what are their age ranges? Select all that apply.',
      'pulse.step3.age.0_1': '0 - 1 Years (Infant)',
      'pulse.step3.age.2_5': '2 - 5 Years (Toddler/Preschooler)',
      'pulse.step3.age.6_9': '6 - 9 Years (School-Aged)',
      'pulse.step3.age.10_12': '10 - 12 Years (Pre-Teen)',
      'pulse.step3.age.13_plus': '13+ Years (Teenager)',

      'pulse.step4.title': 'Your Support Style — How do you learn best?',
      'pulse.step4.desc': 'Select all that apply—this shapes how we support you.',
      'pulse.step4.instant': 'Give me instant answers to my questions',
      'pulse.step4.scripts': 'Offer quick scripts and strategies I can use right away',
      'pulse.step4.workshops': 'Help me go deeper with expert-led workshops and guides',
      'pulse.step4.audio': 'Provide on-the-go audio lessons I can fit into my routine',
      'pulse.step4.all': "I'm open to all forms of support!",
      'splash.subtitle': 'Personalized coaching for everyday parenting.',
      'action.getStarted': 'Get started',

      'nav.back': 'Back',
      'onboarding.createAccount.title': 'Create account',
      'form.email': 'Email',
      'form.password': 'Password',
      'action.continue': 'Continue',

      'onboarding.parentProfile.title': 'Your profile',
      'form.firstName': 'First name',
      'form.lastName': 'Last name',
      'form.timezone': 'Timezone',
      'form.coachStyle': 'Preferred coach style',
      'coachStyle.supportive': 'Supportive',
      'coachStyle.structured': 'Structured',
      'action.next': 'Next',

      'onboarding.childCount.title': 'How many children?',

      'child_profiles.title': 'Child Profiles',
      'child_profiles.child_title': 'Child {{index}}',
      'child_profiles.name_label': "Child's Name",
      'child_profiles.age_label': 'Age',

      'onboarding.childMore.title': 'More about your child',
      'form.interests': 'Interests',
      'form.goals': 'Goals',
      'action.previous': 'Previous',
      'action.finish': 'Finish',

      'chat.title': 'Coach',
      'chat.systemWelcome': 'Welcome! How can I help today?',
      'chat.exampleUser': 'Bedtime is tough with Sophie.',
      'chat.placeholder': 'Type a message',
      'action.send': 'Send',

      'menu.title': 'Parenting Coach',
      'menu.home': 'Home',
      'menu.profile': 'Profile',
      'menu.children': 'Children',
      'menu.signout': 'Sign out'
    },
    fr: {
      'pulse.title': 'Bilan rapide',
      'pulse.step1': 'Étape 1',
      'pulse.step2': 'Étape 2',
      'pulse.step3': 'Étape 3',
      'pulse.step4': 'Étape 4',
      'pulse.step1.title': 'Le bilan — Comment vous sentez‑vous en ce moment ?',
      'pulse.step1.desc': "Cela nous aide à comprendre vos difficultés principales et vos objectifs.",
      'pulse.step1.q1': 'Qu’est‑ce qui est difficile en ce moment dans la parentalité ? Sélectionnez tout ce qui s’applique.',
      'pulse.step1.hard.meltdowns': "Émotions explosives et grosses colères (de mon enfant)",
      'pulse.step1.hard.power': 'Tout tourne au bras de fer',
      'pulse.step1.hard.physical': 'Coups, morsures, jets d’objets et autres comportements physiques',
      'pulse.step1.hard.routines': 'Les routines sont un combat (matins, coucher, etc.)',
      'pulse.step1.hard.anger': 'Ma propre colère et réactivité',
      'pulse.step1.hard.a_lot': 'J’ai l’impression que tout est trop en ce moment',
      'pulse.step1.hard.board': 'Je cherche surtout une écoute et un soutien',
      'pulse.step1.q2': 'Si la parentalité devenait un peu plus simple, à quoi cela ressemblerait‑il pour vous ? Choisissez une réponse.',
      'pulse.step1.easy.needs': "Mieux comprendre les besoins et comportements de mon enfant",
      'pulse.step1.easy.connection': 'Me sentir plus connecté·e et joyeux·se avec mon enfant',
      'pulse.step1.easy.control': 'Me sentir moins débordé·e et plus en maîtrise',
      'pulse.step1.easy.cooperation': 'Moins de chaos et plus de coopération au quotidien',
      'pulse.step1.easy.calm': 'Réagir avec calme et confiance dans les moments difficiles',
      'pulse.step1.easy.validated': 'Me sentir plus sûr·e et validé·e dans mes choix parentaux',

      'pulse.step2.title': 'La situation actuelle — Quel est l’enjeu le plus urgent ?',
      'pulse.step2.desc': 'Choisissez ce qui se rapproche le plus de votre situation.',
      'pulse.step2.big_feelings': 'Les émotions de mon enfant semblent trop intenses pour lui/elle',
      'pulse.step2.listen': 'Mon enfant ne semble pas m’écouter',
      'pulse.step2.bedtime': 'Le coucher est devenu un combat quotidien',
      'pulse.step2.rudeness': 'Beaucoup d’insolence, de défi, ou de coups',
      'pulse.step2.tantrums': 'Les crises deviennent physiques et difficiles à gérer',
      'pulse.step2.worry': 'Mon enfant semble beaucoup s’inquiéter',
      'pulse.step2.siblings': 'Mes enfants se disputent sans cesse',
      'pulse.step2.parent_calm': 'J’ai du mal à rester calme quand mon enfant est dysrégulé',
      'pulse.step2.teen': 'Je traverse les défis spécifiques à l’adolescence',
      'pulse.step2.new_baby': 'Je m’adapte à la vie avec un nouveau bébé',

      'pulse.step3.title': 'Votre constellation familiale — Parlez‑nous de votre tribu.',
      'pulse.step3.desc': 'Cela nous permet d’adapter nos conseils à votre famille et aux âges.',
      'pulse.step3.q1': 'Combien d’enfants y a‑t‑il dans votre famille ?',
      'pulse.step3.q2': 'Quelles sont leurs tranches d’âge ? Sélectionnez tout ce qui s’applique.',
      'pulse.step3.age.0_1': '0 - 1 an (bébé)',
      'pulse.step3.age.2_5': '2 - 5 ans (tout‑petit / préscolaire)',
      'pulse.step3.age.6_9': '6 - 9 ans (école primaire)',
      'pulse.step3.age.10_12': '10 - 12 ans (pré‑ado)',
      'pulse.step3.age.13_plus': '13 ans et + (ado)',

      'pulse.step4.title': 'Votre style de soutien — Comment apprenez‑vous le mieux ?',
      'pulse.step4.desc': 'Sélectionnez tout ce qui s’applique — nous adapterons notre accompagnement.',
      'pulse.step4.instant': 'Donnez‑moi des réponses immédiates à mes questions',
      'pulse.step4.scripts': 'Proposez des scripts et stratégies à utiliser tout de suite',
      'pulse.step4.workshops': 'Approfondir avec des ateliers et guides d’experts',
      'pulse.step4.audio': 'Des leçons audio à écouter dans mon quotidien',
      'pulse.step4.all': 'Je suis ouvert·e à toutes les formes de soutien !',
      'splash.subtitle': 'Coaching personnalisé pour le quotidien des parents.',
      'action.getStarted': 'Commencer',

      'nav.back': 'Retour',
      'onboarding.createAccount.title': 'Créer un compte',
      'form.email': 'E‑mail',
      'form.password': 'Mot de passe',
      'action.continue': 'Continuer',

      'onboarding.parentProfile.title': 'Votre profil',
      'form.firstName': 'Prénom',
      'form.lastName': 'Nom',
      'form.timezone': 'Fuseau horaire',
      'form.coachStyle': 'Style de coaching préféré',
      'coachStyle.supportive': 'Bienveillant',
      'coachStyle.structured': 'Structuré',
      'action.next': 'Suivant',

      'onboarding.childCount.title': 'Combien d’enfants ?',

      'child_profiles.title': 'Profils des enfants',
      'child_profiles.child_title': 'Enfant {{index}}',
      'child_profiles.name_label': "Nom de l'enfant",
      'child_profiles.age_label': 'Âge',

      'onboarding.childMore.title': 'Plus d’informations sur votre enfant',
      'form.interests': 'Centres d’intérêt',
      'form.goals': 'Objectifs',
      'action.previous': 'Précédent',
      'action.finish': 'Terminer',

      'chat.title': 'Coach',
      'chat.systemWelcome': 'Bienvenue ! Comment puis‑je vous aider aujourd’hui ?',
      'chat.exampleUser': 'L’heure du coucher est difficile avec Sophie.',
      'chat.placeholder': 'Écrire un message',
      'action.send': 'Envoyer',

      'menu.title': 'Parenting Coach',
      'menu.home': 'Accueil',
      'menu.profile': 'Profil',
      'menu.children': 'Enfants',
      'menu.signout': 'Se déconnecter'
    }
  };

  function getLang(){
    return localStorage.getItem(storeKey) || DEFAULT_LANG;
  }
  function setLang(lang){
    localStorage.setItem(storeKey, lang);
    document.documentElement.setAttribute('lang', lang);
    highlightActive(lang);
    updateGlobeLabel(lang);
  }

  function t(key, options){
    const lang = getLang();
    let text = messages[lang]?.[key] || messages.en[key] || key;
    if (options) {
      for (const [k, v] of Object.entries(options)) {
        text = text.replace(`{{${k}}}`, v);
      }
    }
    return text;
  }

  function translate(root=document){
    root.querySelectorAll('[data-i18n]')?.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const options = JSON.parse(el.getAttribute('data-i18n-options') || '{}');
      const text = t(key, options);
      if (el.placeholder !== undefined && el.tagName === 'INPUT') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    });
  }

  function wireToggle(){
    // Legacy individual buttons (if present)
    document.getElementById('lang-en')?.addEventListener('click', ()=>{ setLang('en'); translate(); });
    document.getElementById('lang-fr')?.addEventListener('click', ()=>{ setLang('fr'); translate(); });
    // Single globe toggle
    const globe = document.getElementById('lang-toggle');
    globe?.addEventListener('click', ()=>{
      const next = getLang() === 'en' ? 'fr' : 'en';
      setLang(next);
      translate();
    });
    // initial
    setLang(getLang());
  }

  function updateGlobeLabel(lang){
    const code = document.getElementById('lang-code');
    const btn = document.getElementById('lang-toggle');
    if (code) code.textContent = (lang || getLang()).toUpperCase();
    if (btn) btn.title = (lang === 'fr' ? 'Changer la langue' : 'Change language');
  }

  function highlightActive(lang){
    document.querySelectorAll('.lang-toggle .flag').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }

  window.i18n = { t, translate, setLang, getLang, wireToggle };
  window.addEventListener('DOMContentLoaded', () => {
    wireToggle();
    translate();
  });
})();
