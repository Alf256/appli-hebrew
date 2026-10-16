// Contenu des leçons de « Shalom ! ».
// Chaque mot ou phrase en hébreu s'écrit "hébreu|transcription" : la transcription en lettres latines
// porte un accent sur la syllabe où on appuie (shalóm). Elle sert aussi à retrouver l'enregistrement audio.
//
// Types d'étapes :
//  lesson   explication (p), avec en option un tableau hébreu/français (gram) et un encadré (note)
//  words    cartes de vocabulaire [emoji ou lettre, "hébreu|transcription", français]
//  phrases  phrases utiles ["hébreu|transcription", français]
//  listen   on entend une phrase, on choisit sa traduction
//  quiz     question à choix (he:true si les réponses sont en hébreu)
//  build    reconstruire la phrase hébraïque avec des étiquettes (extra = mots pièges)
//  dialog   conversation : l'autre parle, on choisit la bonne réponse (la première est la bonne)
// Dans les phrases de « toi », l'élève parle au masculin (un garçon). Les leçons montrent aussi la forme au féminin.

window.MODULES = [
  { id:"l0", em:"🔤", title:"L'alphabet : alef-bet", sub:"Découvrir les lettres et les voyelles", steps:[
    {t:"lesson", h:"Une écriture qui va de droite à gauche", p:[
      "L'hébreu s'écrit et se lit de droite à gauche. Un livre hébreu commence donc par ce qui, pour nous, est la fin !",
      "L'alphabet a 22 lettres. Il n'y a pas de majuscules. Le premier mot à connaître : " + E("שָׁלוֹם|shalóm") + ", qui veut dire bonjour, au revoir et paix.",
      "Sous chaque mot hébreu, tu verras sa prononciation en lettres latines. L'accent (comme sur le ó de shalóm) montre la syllabe où on appuie.",
      "Touche un mot en couleur pour l'entendre. Le bouton 🐢 en haut fait parler la voix plus lentement."],
      note:"Deux sons à connaître : kh se prononce en raclant la gorge, comme la jota espagnole (ou le « ch » de l'allemand Bach). Le r se dit au fond de la gorge, comme en français."},
    {t:"words", h:"Les lettres (1/2)", letters:true, items:[
      ["א","אָלֶף|álef","muette, porte une voyelle"],["ב","בֵּית|bet","b ou v"],["ג","גִּימֶל|gímel","g (comme gare)"],["ד","דָּלֶת|dálet","d"],
      ["ה","הֵא|he","h léger"],["ו","וָו|vav","v, o ou u"],["ז","זַיִן|záyin","z"],["ח","חֵית|khet","kh (raclé)"],
      ["ט","טֵית|tet","t"],["י","יוּד|yud","y ou i"],["כ","כַּף|kaf","k ou kh"]]},
    {t:"words", h:"Les lettres (2/2)", letters:true, items:[
      ["ל","לָמֶד|lámed","l"],["מ","מֵם|mem","m"],["נ","נוּן|nun","n"],["ס","סָמֶךְ|sámekh","s"],
      ["ע","עַיִן|áyin","muette, porte une voyelle"],["פ","פֵּא|pe","p ou f"],["צ","צָדִי|tsádi","ts"],["ק","קוּף|kuf","k"],
      ["ר","רֵישׁ|resh","r"],["ש","שִׁין|shin","sh ou s"],["ת","תָּו|tav","t"]]},
    {t:"lesson", h:"Les voyelles : des petits signes", p:[
      "En hébreu, les voyelles ne sont pas des lettres : ce sont des petits points et traits sous ou au-dessus des lettres. On les appelle le nikoud.",
      "Voici la lettre ב (b) avec chaque voyelle. Touche une ligne pour l'entendre."],
      gram:[["בַּ|ba","un petit trait dessous : a"],["בֶּ|be","trois points en triangle : e"],["בִּ|bi","un point dessous : i"],["בּוֹ|bo","ו avec un point en haut : o"],["בּוּ|bu","ו avec un point au milieu : u"]],
      note:"Cinq lettres changent de forme à la fin d'un mot : כ devient ך, מ devient ם, נ devient ן, פ devient ף et צ devient ץ. Regarde le ם à la fin de שָׁלוֹם."},
    {t:"listen", say:"שָׁלוֹם|shalóm", c:["bonjour","merci","oui"], a:0},
    {t:"quiz", q:"Quelle lettre fait le son « sh » ?", c:["ש","ס","צ"], a:0, why:"ש (shin) fait sh. ס (samekh) fait s, et צ (tsadi) fait ts."},
    {t:"quiz", q:"Quelle lettre fait le son « m » ?", c:["מ","נ","ל"], a:0, why:"מ, c'est mem : m. נ (nun) fait n et ל (lamed) fait l."},
    {t:"quiz", q:"Comment se lit le mot דָּג (poisson) ?", c:["dag","gad","tag"], a:0, why:"On lit de droite à gauche : ד (d), puis la voyelle a, puis ג (g). Ça donne dag."},
    {t:"quiz", q:"Comment se lit le mot כֵּן (oui) ?", c:["ken","kan","nek"], a:0, why:"כּ (k), les deux points dessous font e, et ן est le nun de fin de mot (n) : ken."},
    {t:"build", fr:"Assemble « shalom » dans l'ordre (de droite à gauche).", he:"שָׁ לוֹם|sha lom", extra:["מָה|ma"]}
  ]},

  { id:"l1", em:"👋", title:"Shalom ! Se présenter", sub:"Dire bonjour, son nom, son âge, d'où on vient", steps:[
    {t:"lesson", h:"Dire bonjour", p:[
      E("שָׁלוֹם|shalóm") + " sert à tout : bonjour, salut et au revoir.",
      "Selon le moment : " + E("בֹּקֶר טוֹב|bóker tov") + " le matin, " + E("עֶרֶב טוֹב|érev tov") + " le soir, " + E("לַיְלָה טוֹב|láyla tov") + " pour bonne nuit.",
      "Pour partir : " + E("לְהִתְרָאוֹת|lehitraót") + " (à la prochaine) ou, entre jeunes, " + E("בַּי|bay") + "."]},
    {t:"words", h:"Les premiers mots", items:[
      ["👋","שָׁלוֹם|shalóm","bonjour, au revoir"],["🖐️","לְהִתְרָאוֹת|lehitraót","au revoir, à bientôt"],["🙏","בְּבַקָּשָׁה|bevakashá","s'il te plaît, je t'en prie"],["💐","תּוֹדָה|todá","merci"],
      ["✅","כֵּן|ken","oui"],["❌","לֹא|lo","non"],["🏷️","שֵׁם|shem","nom, prénom"],["🌍","אֶרֶץ|érets","pays"],
      ["🇫🇷","צָרְפַת|tsarfát","la France"],["🧑‍🎓","סְטוּדֶנְט|studént","étudiant"]]},
    {t:"phrases", h:"Phrases pour se présenter", items:[
      ["אֵיךְ קוֹרְאִים לְךָ?|eykh kor'ím lekhá?","Comment tu t'appelles ? (à un garçon)"],
      ["אֵיךְ קוֹרְאִים לָךְ?|eykh kor'ím lakh?","Comment tu t'appelles ? (à une fille)"],
      ["קוֹרְאִים לִי אָלֶכְּס.|kor'ím li áleks.","Je m'appelle Alex."],
      ["נָעִים מְאוֹד.|na'ím me'ód.","Enchanté."],
      ["מָה שְׁלוֹמְךָ?|ma shlomkhá?","Comment vas-tu ? (à un garçon)"],
      ["מָה שְׁלוֹמֵךְ?|ma shlomékh?","Comment vas-tu ? (à une fille)"],
      ["אֲנִי בְּסֵדֶר, תּוֹדָה.|aní beséder, todá.","Je vais bien, merci."],
      ["מֵאֵיפֹה אַתָּה?|me'éyfo atá?","D'où viens-tu ?"],
      ["אֲנִי מִצָּרְפַת.|aní mitsarfát.","Je viens de France."],
      ["אֲנִי בֶּן עֶשְׂרִים.|aní ben esrím.","J'ai vingt ans. (une fille dit : aní bat esrím)"]]},
    {t:"lesson", h:"Je, tu, il, elle… et pas de verbe être !", p:[
      "Bonne nouvelle : au présent, l'hébreu n'a pas de verbe être. On dit simplement « moi étudiant ».",
      "Mais attention : en hébreu, on ne parle pas pareil à un garçon et à une fille, même pour dire « tu »."],
      gram:[["אֲנִי|aní","je, moi"],["אַתָּה|atá","tu (à un garçon)"],["אַתְּ|at","tu (à une fille)"],["הוּא|hu","il"],["הִיא|hi","elle"],["אֲנַחְנוּ|anákhnu","nous"],["הֵם|hem","ils, elles"]],
      note:"Exemple : " + E("אֲנִי סְטוּדֶנְט|aní studént") + " veut dire « je suis étudiant ». Une fille dit " + E("אֲנִי סְטוּדֶנְטִית|aní studéntit") + "."},
    {t:"listen", say:"נָעִים מְאוֹד.|na'ím me'ód.", c:["Enchanté","À bientôt","Comment ça va ?"], a:0},
    {t:"listen", say:"מֵאֵיפֹה אַתָּה?|me'éyfo atá?", c:["D'où viens-tu ?","Comment tu t'appelles ?","Quel âge as-tu ?"], a:0},
    {t:"quiz", q:"Comment dit-on « Je suis étudiant » ?", he:true, c:["אֲנִי סְטוּדֶנְט.|aní studént.","אֲנִי הוּא סְטוּדֶנְט.|aní hu studént.","אַתָּה סְטוּדֶנְט.|atá studént."], a:0, why:"Pas de verbe être au présent : aní studént suffit. Atá studént veut dire « tu es étudiant »."},
    {t:"quiz", q:"Pour dire « tu » à une fille :", he:true, c:["אַתָּה|atá","אַתְּ|at","הִיא|hi"], a:1, why:"At, c'est « tu » pour une fille. Atá, c'est pour un garçon. Hi veut dire « elle »."},
    {t:"build", fr:"Je m'appelle Alex.", he:"קוֹרְאִים לִי אָלֶכְּס|kor'ím li áleks", extra:["לְךָ|lekhá","שֵׁם|shem"]},
    {t:"dialog", h:"Premier jour à la fac", who:"Noa", lines:[
      {say:"שָׁלוֹם! אֲנִי נוֹעָה. אֵיךְ קוֹרְאִים לְךָ?|shalóm! aní nóa. eykh kor'ím lekhá?", fr:"Salut ! Moi c'est Noa. Comment tu t'appelles ?", c:["קוֹרְאִים לִי אָלֶכְּס.|kor'ím li áleks.","אֲנִי בֶּן עֶשְׂרִים.|aní ben esrím.","לְהִתְרָאוֹת!|lehitraót!"]},
      {say:"נָעִים מְאוֹד, אָלֶכְּס! מֵאֵיפֹה אַתָּה?|na'ím me'ód, áleks! me'éyfo atá?", fr:"Enchantée, Alex ! D'où viens-tu ?", c:["אֲנִי מִצָּרְפַת.|aní mitsarfát.","אֲנִי בְּסֵדֶר.|aní beséder.","כֵּן, בְּבַקָּשָׁה.|ken, bevakashá."]},
      {say:"יָפֶה! מָה שְׁלוֹמְךָ הַיּוֹם?|yafé! ma shlomkhá hayóm?", fr:"Joli ! Comment ça va aujourd'hui ?", c:["בְּסֵדֶר, תּוֹדָה. וּמָה שְׁלוֹמֵךְ?|beséder, todá. umá shlomékh?","בְּסֵדֶר, תּוֹדָה. וּמָה שְׁלוֹמְךָ?|beséder, todá. umá shlomkhá?","קוֹרְאִים לִי אָלֶכְּס.|kor'ím li áleks."], why:"Noa est une fille : on lui dit shlomékh. Shlomkhá, c'est pour un garçon."},
      {say:"מְצֻיָּן, תּוֹדָה! אַתָּה סְטוּדֶנְט כָּאן?|metsuyán, todá! atá studént kan?", fr:"Super bien, merci ! Tu es étudiant ici ?", c:["כֵּן. וְאַתְּ?|ken. ve'át?","כֵּן. וְאַתָּה?|ken. ve'atá?","תּוֹדָה.|todá."], why:"À une fille, « et toi ? » se dit ve'át. Ve'atá, c'est pour un garçon."},
      {say:"גַּם אֲנִי! לְהִתְרָאוֹת בַּשִּׁעוּר!|gam aní! lehitraót bashi'úr!", fr:"Moi aussi ! À tout à l'heure en cours !", c:["לְהִתְרָאוֹת, נוֹעָה!|lehitraót, nóa!","בֹּקֶר טוֹב!|bóker tov!","אֲנִי מִצָּרְפַת.|aní mitsarfát."]}]}
  ]},

  { id:"l2", em:"🕐", title:"Chiffres, heure et jours", sub:"Compter, dire l'heure, les jours de la semaine", steps:[
    {t:"words", h:"Compter jusqu'à 10", items:[
      ["1️⃣","אַחַת|akhát","un"],["2️⃣","שְׁתַּיִם|shtáyim","deux"],["3️⃣","שָׁלוֹשׁ|shalósh","trois"],["4️⃣","אַרְבַּע|árba","quatre"],["5️⃣","חָמֵשׁ|khámesh","cinq"],
      ["6️⃣","שֵׁשׁ|shesh","six"],["7️⃣","שֶׁבַע|shéva","sept"],["8️⃣","שְׁמוֹנֶה|shmóne","huit"],["9️⃣","תֵּשַׁע|tésha","neuf"],["🔟","עֶשֶׂר|éser","dix"]]},
    {t:"lesson", h:"Après 10", p:[
      "Les dizaines finissent par -im : " + E("עֶשְׂרִים|esrím") + " (20), " + E("שְׁלוֹשִׁים|shloshím") + " (30), " + E("אַרְבָּעִים|arba'ím") + " (40), " + E("חֲמִישִׁים|khamishím") + " (50).",
      "Pour 21, on dit « vingt et un » avec ve- (et) : " + E("עֶשְׂרִים וְאַחַת|esrím ve'akhát") + "."],
      note:"Les chiffres de cette page servent à compter et à dire l'heure. Pour compter des choses « masculines », il existe une deuxième série (ekhád, shnáyim…). Pas de panique, on la croise plus tard."},
    {t:"listen", say:"שָׁלוֹשׁ|shalósh", c:["3","30","8"], a:0},
    {t:"listen", say:"חֲמִישִׁים|khamishím", c:["5","50","15"], a:1},
    {t:"words", h:"Les jours de la semaine", items:[
      ["☀️","יוֹם רִאשׁוֹן|yom rishón","dimanche"],["📅","יוֹם שֵׁנִי|yom shení","lundi"],["📅","יוֹם שְׁלִישִׁי|yom shlishí","mardi"],["📅","יוֹם רְבִיעִי|yom revi'í","mercredi"],
      ["📅","יוֹם חֲמִישִׁי|yom khamishí","jeudi"],["🎉","יוֹם שִׁשִּׁי|yom shishí","vendredi"],["🕯️","שַׁבָּת|shabát","samedi (shabbat)"],["🗓️","סוֹף שָׁבוּעַ|sof shavúa","le week-end"]]},
    {t:"phrases", h:"Parler de l'heure et des jours", items:[
      ["מָה הַשָּׁעָה?|ma hasha'á?","Quelle heure est-il ?"],
      ["הַשָּׁעָה שָׁלוֹשׁ.|hasha'á shalósh.","Il est trois heures."],
      ["שֶׁבַע וָחֵצִי.|shéva vakhétsi.","Sept heures et demie."],
      ["אֵיזֶה יוֹם הַיּוֹם?|éyze yom hayóm?","On est quel jour aujourd'hui ?"],
      ["הַיּוֹם יוֹם שֵׁנִי.|hayóm yom shení.","Aujourd'hui, c'est lundi."],
      ["נִתְרָאֶה בְּיוֹם שִׁשִּׁי!|nitra'é beyóm shishí!","À vendredi !"]]},
    {t:"lesson", h:"be- : le petit mot du temps", p:[
      "Pour dire « à huit heures » ou « lundi », on colle be- (à, en, dans) devant le mot. Il ne s'écrit pas seul : c'est juste la lettre ב."],
      gram:[["בְּשָׁעָה שְׁמוֹנֶה|besha'á shmóne","à huit heures"],["בְּיוֹם שֵׁנִי|beyóm shení","lundi (ce lundi-là)"],["בַּבֹּקֶר|babóker","le matin"],["בָּעֶרֶב|ba'érev","le soir"],["בְּשַׁבָּת|beshabát","samedi"]],
      note:"La semaine israélienne commence le dimanche (yom rishón veut dire « premier jour »). Le week-end, c'est vendredi et samedi."},
    {t:"listen", say:"שְׁמוֹנֶה וָחֵצִי.|shmóne vakhétsi.", c:["8 h 30","8 h 15","3 h 08"], a:0},
    {t:"quiz", q:"Comment dire « à neuf heures » ?", he:true, c:["בְּשָׁעָה תֵּשַׁע|besha'á tésha","הַשָּׁעָה תֵּשַׁע|hasha'á tésha","תֵּשַׁע שָׁנִים|tésha shaním"], a:0, why:"be- veut dire « à » : besha'á tésha. Hasha'á tésha veut dire « il est neuf heures »."},
    {t:"quiz", q:"Quel jour est yom rishón ?", c:["Dimanche","Lundi","Samedi"], a:0, why:"Rishón veut dire premier : c'est le premier jour de la semaine, le dimanche."},
    {t:"build", fr:"Quelle heure est-il ?", he:"מָה הַשָּׁעָה?|ma hasha'á?", extra:["יוֹם|yom","אֵיזֶה|éyze"]},
    {t:"dialog", h:"Une soirée samedi", who:"Dani", lines:[
      {say:"הֵי! מָה הַשָּׁעָה?|hey! ma hasha'á?", fr:"Hé ! Il est quelle heure ?", c:["הַשָּׁעָה עֶשֶׂר.|hasha'á éser.","הַיּוֹם יוֹם שֵׁנִי.|hayóm yom shení.","אֲנִי בֶּן עֶשֶׂר.|aní ben éser."], why:"Aní ben éser veut dire « j'ai dix ans » !"},
      {say:"תּוֹדָה! בְּאֵיזֶה יוֹם הַמְּסִבָּה?|todá! be'éyze yom hamesibá?", fr:"Merci ! La fête, c'est quel jour ?", c:["בְּשַׁבָּת.|beshabát.","הַשָּׁעָה שַׁבָּת.|hasha'á shabát.","אֲנִי שַׁבָּת.|aní shabát."], why:"Pour dire « samedi » comme moment, on colle be- : beshabát."},
      {say:"מְעוּלֶּה! וּבְאֵיזוֹ שָׁעָה?|me'ulé! uve'éyzo sha'á?", fr:"Génial ! Et à quelle heure ?", c:["בִּשְׁמוֹנֶה בָּעֶרֶב.|bishmóne ba'érev.","שְׁמוֹנֶה שָׁנִים.|shmóne shaním.","יוֹם שְׁמוֹנֶה.|yom shmóne."], why:"À huit heures du soir : bishmóne ba'érev. Shmóne shaním veut dire « huit ans »."},
      {say:"סַבָּבָה. נִתְרָאֶה בְּשַׁבָּת!|sababá. nitra'é beshabát!", fr:"Cool. À samedi !", c:["יַאלְלָה, בַּי!|yála, bay!","נָעִים מְאוֹד!|na'ím me'ód!","אֲנִי בְּסֵדֶר.|aní beséder."]}]}
  ]},

  { id:"l3", em:"👨‍👩‍👧", title:"Ma famille et mes amis", sub:"Parler de ses proches", steps:[
    {t:"words", h:"La famille", items:[
      ["👩","אִמָּא|íma","maman, mère"],["👨","אַבָּא|ába","papa, père"],["👧","אָחוֹת|akhót","sœur"],["👦","אָח|akh","frère"],
      ["👵","סָבְתָא|sávta","grand-mère"],["👴","סַבָּא|sába","grand-père"],["👫","הוֹרִים|horím","les parents"],["🧑‍🤝‍🧑","חָבֵר|khavér","ami (une amie : khaverá)"],
      ["🐶","כֶּלֶב|kélev","chien"],["🐱","חָתוּל|khatúl","chat"]]},
    {t:"phrases", h:"Parler de sa famille", items:[
      ["יֵשׁ לְךָ אַחִים?|yesh lekhá akhím?","Tu as des frères et sœurs ?"],
      ["יֵשׁ לִי אָח וְאָחוֹת.|yesh li akh ve'akhót.","J'ai un frère et une sœur."],
      ["אֵין לִי אַחִים.|eyn li akhím.","Je n'ai pas de frères et sœurs."],
      ["זֶה הֶחָבֵר שֶׁלִּי, דָּנִי.|ze hakhavér shelí, dáni.","Voici mon ami Dani."],
      ["הִיא בַּת עֶשְׂרִים וּשְׁתַּיִם.|hi bat esrím ushtáyim.","Elle a vingt-deux ans."],
      ["הַהוֹרִים שֶׁלִּי גָּרִים בְּלִיּוֹן.|hahorím shelí garím belyón.","Mes parents habitent à Lyon."]]},
    {t:"lesson", h:"Avoir : « il y a à moi »", p:[
      "Le verbe avoir n'existe pas en hébreu ! On dit yesh li, mot à mot « il y a à moi ».",
      "Pour dire « mon, ma », on met shelí après le mot : " + E("הָאָח שֶׁלִּי|ha'akh shelí") + " = mon frère."],
      gram:[["יֵשׁ לִי|yesh li","j'ai"],["יֵשׁ לְךָ|yesh lekhá","tu as (à un garçon)"],["יֵשׁ לָךְ|yesh lakh","tu as (à une fille)"],["יֵשׁ לוֹ|yesh lo","il a"],["יֵשׁ לָהּ|yesh la","elle a"],["אֵין לִי|eyn li","je n'ai pas"]],
      note:"Pour dire non, yesh devient eyn : " + E("אֵין לִי כֶּלֶב|eyn li kélev") + " = je n'ai pas de chien."},
    {t:"listen", say:"סָבְתָא שֶׁלִּי|sávta shelí", c:["ma grand-mère","mon grand-père","ma mère"], a:0},
    {t:"listen", say:"יֵשׁ לִי שְׁנֵי אַחִים.|yesh li shney akhím.", c:["J'ai deux frères.","J'ai deux sœurs.","Je n'ai pas de frères."], a:0},
    {t:"quiz", q:"Comment dire « Je n'ai pas de chat » ?", he:true, c:["אֵין לִי חָתוּל.|eyn li khatúl.","לֹא יֵשׁ לִי חָתוּל.|lo yesh li khatúl.","יֵשׁ לִי חָתוּל.|yesh li khatúl."], a:0, why:"Le contraire de yesh, c'est eyn : eyn li khatúl. On ne dit jamais lo yesh."},
    {t:"quiz", q:"Tu demandes à Noa (une fille) : « Tu as un chien ? »", he:true, c:["יֵשׁ לָךְ כֶּלֶב?|yesh lakh kélev?","יֵשׁ לְךָ כֶּלֶב?|yesh lekhá kélev?","יֵשׁ לוֹ כֶּלֶב?|yesh lo kélev?"], a:0, why:"À une fille, « tu as » se dit yesh lakh. Yesh lekhá, c'est pour un garçon."},
    {t:"build", fr:"J'ai un frère et une sœur.", he:"יֵשׁ לִי אָח וְאָחוֹת|yesh li akh ve'akhót", extra:["אֵין|eyn","לְךָ|lekhá"]},
    {t:"dialog", h:"La photo de famille", who:"Noa", lines:[
      {say:"תִּרְאֶה, זֹאת תְּמוּנָה שֶׁל הַמִּשְׁפָּחָה שֶׁלִּי.|tir'é, zot tmuná shel hamishpakhá shelí.", fr:"Regarde, c'est une photo de ma famille.", c:["יָפֶה! מִי זֶה?|yafé! mi ze?","הַשָּׁעָה שָׁלוֹשׁ.|hasha'á shalósh.","לְהִתְרָאוֹת!|lehitraót!"]},
      {say:"זֶה אָחִי, תּוֹם. הוּא בֶּן שְׁמוֹנֶה עֶשְׂרֵה.|ze akhí, tom. hu ben shmóne esré.", fr:"C'est mon frère, Tom. Il a dix-huit ans.", c:["גַּם לִי יֵשׁ אָח.|gam li yesh akh.","הִיא בַּת שְׁמוֹנֶה עֶשְׂרֵה.|hi bat shmóne esré.","אֲנִי תּוֹם.|aní tom."]},
      {say:"בֶּאֱמֶת? אֵיךְ קוֹרְאִים לוֹ?|be'emét? eykh kor'ím lo?", fr:"Vraiment ? Il s'appelle comment ?", c:["קוֹרְאִים לוֹ הוּגוֹ.|kor'ím lo húgo.","קוֹרְאִים לָהּ הוּגוֹ.|kor'ím la húgo.","קוֹרְאִים לִי הוּגוֹ.|kor'ím li húgo."], why:"Ton frère est un garçon : kor'ím lo (à lui). La, c'est « à elle », et li, « à moi »."},
      {say:"וְיֵשׁ לְךָ חַיּוֹת?|veyésh lekhá khayót?", fr:"Et tu as des animaux ?", c:["כֵּן, יֵשׁ לִי חָתוּל.|ken, yesh li khatúl.","כֵּן, אֲנִי חָתוּל.|ken, aní khatúl.","לֹא יֵשׁ לִי.|lo yesh li."], why:"Aní khatúl veut dire « je suis un chat » ! Pour « j'ai », c'est yesh li."},
      {say:"אוֹי, אֲנִי מֵתָה עַל חֲתוּלִים!|oy, aní metá al khatulím!", fr:"Oh, j'adore les chats !", c:["גַּם אֲנִי!|gam aní!","אֵין לִי אַחִים.|eyn li akhím.","נִתְרָאֶה בְּיוֹם שִׁשִּׁי!|nitra'é beyóm shishí!"]}]}
  ]},

  { id:"l4", em:"🎓", title:"Mes études et la fac", sub:"Les cours, demander de l'aide", steps:[
    {t:"words", h:"À la fac", items:[
      ["🎓","אוּנִיבֶרְסִיטָה|universíta","université"],["🧑‍🏫","מוֹרֶה|moré","professeur"],["📚","סֵפֶר|séfer","livre"],["🖊️","עֵט|et","stylo"],
      ["💻","מַחְשֵׁב|makhshév","ordinateur"],["📓","שִׁעוּרֵי בַּיִת|shi'uréy báyit","devoirs"],["📝","מִבְחָן|mivkhán","examen"],["🏛️","סִפְרִיָּה|sifriyá","bibliothèque"],
      ["🪑","שִׁעוּר|shi'úr","cours"],["🗣️","עִבְרִית|ivrít","l'hébreu"]]},
    {t:"phrases", h:"Phrases de survie en cours", items:[
      ["מָה אַתָּה לוֹמֵד?|ma atá loméd?","Qu'est-ce que tu étudies ?"],
      ["אֲנִי לוֹמֵד מִנְהַל עֲסָקִים.|aní loméd minhál asakím.","J'étudie la gestion."],
      ["אֲנִי בְּשָׁנָה רִאשׁוֹנָה.|aní beshaná rishoná.","Je suis en première année."],
      ["אֶפְשָׁר לַחֲזוֹר עַל זֶה?|efshár lakhazór al ze?","Tu peux répéter ?"],
      ["אֲנִי לֹא מֵבִין.|aní lo mevín.","Je ne comprends pas."],
      ["אֵיךְ אוֹמְרִים אֶת זֶה בְּעִבְרִית?|eykh omrím et ze be'ivrít?","Comment on dit ça en hébreu ?"],
      ["אֵיפֹה הַסִּפְרִיָּה?|éyfo hasifriyá?","Où est la bibliothèque ?"]]},
    {t:"lesson", h:"Le présent : garçon, fille, groupe", p:[
      "Au présent, le verbe change selon qu'on parle d'un garçon, d'une fille ou de plusieurs personnes. Mais il ne change pas pour je, tu, il !",
      "Pour dire non, on met lo juste avant le verbe. Pour poser une question, on garde la même phrase et on monte la voix à la fin."],
      gram:[["אֲנִי לוֹמֵד|aní loméd","j'étudie (garçon)"],["אֲנִי לוֹמֶדֶת|aní lomédet","j'étudie (fille)"],["אַתָּה לוֹמֵד|atá loméd","tu étudies (garçon)"],["אַתְּ לוֹמֶדֶת|at lomédet","tu étudies (fille)"],["אֲנַחְנוּ לוֹמְדִים|anákhnu lomdím","nous étudions"],["אַתָּה מֵבִין?|atá mevín?","tu comprends ?"]],
      note:"Une fille dit " + E("אֲנִי לֹא מְבִינָה|aní lo mevína") + " pour « je ne comprends pas »."},
    {t:"listen", say:"אֶפְשָׁר לַחֲזוֹר עַל זֶה?|efshár lakhazór al ze?", c:["Tu peux répéter ?","Tu peux m'aider ?","Tu comprends ?"], a:0},
    {t:"listen", say:"מִבְחָן|mivkhán", c:["l'examen","les devoirs","la bibliothèque"], a:0},
    {t:"quiz", q:"Noa (une fille) dit « j'étudie » :", he:true, c:["אֲנִי לוֹמֶדֶת|aní lomédet","אֲנִי לוֹמֵד|aní loméd","הִיא לוֹמֶדֶת|hi lomédet"], a:0, why:"Une fille dit lomédet. Loméd, c'est pour un garçon, et hi lomédet veut dire « elle étudie »."},
    {t:"quiz", q:"Comment dire « Je ne comprends pas » ?", he:true, c:["אֲנִי לֹא מֵבִין.|aní lo mevín.","לֹא אֲנִי מֵבִין.|lo aní mevín.","אֲנִי מֵבִין לֹא.|aní mevín lo."], a:0, why:"Lo se place juste avant le verbe : aní lo mevín."},
    {t:"build", fr:"Qu'est-ce que tu étudies ?", he:"מָה אַתָּה לוֹמֵד?|ma atá loméd?", extra:["מִי|mi","לִי|li"]},
    {t:"dialog", h:"À la bibliothèque", who:"Dani", lines:[
      {say:"הֵי! הַמָּקוֹם הַזֶּה פָּנוּי?|hey! hamakóm hazé panúy?", fr:"Salut ! Cette place est libre ?", c:["כֵּן, בֶּטַח!|ken, bétakh!","אֲנִי בֶּן עֶשְׂרִים.|aní ben esrím.","בְּיוֹם שֵׁנִי.|beyóm shení."]},
      {say:"תּוֹדָה! מָה אַתָּה לוֹמֵד?|todá! ma atá loméd?", fr:"Merci ! Tu étudies quoi ?", c:["אֲנִי לוֹמֵד מִשְׁפָּטִים. וְאַתָּה?|aní loméd mishpatím. ve'atá?","כֵּן, תּוֹדָה.|ken, todá.","אֲנִי מִשְׁפָּטִים.|aní mishpatím."], why:"Aní mishpatím veut dire « je suis le droit ». Il faut le verbe : aní loméd mishpatím."},
      {say:"אֲנִי לוֹמֵד מַחְשְׁבִים. יֵשׁ לְךָ מִבְחָן בְּיוֹם חֲמִישִׁי?|aní loméd makhshevím. yesh lekhá mivkhán beyóm khamishí?", fr:"Moi, l'informatique. Tu as l'examen jeudi ?", c:["כֵּן! אֲנִי קְצָת בְּלַחַץ.|ken! aní ktsat belákhats.","כֵּן, אֲנִי מִבְחָן.|ken, aní mivkhán.","לֹא יֵשׁ לִי.|lo yesh li."], why:"Aní mivkhán veut dire « je suis un examen » !"},
      {say:"גַּם אֲנִי! אֶפְשָׁר לִלְמוֹד בְּיַחַד, אִם אַתָּה רוֹצֶה.|gam aní! efshár lilmód beyákhad, im atá rotsé.", fr:"Moi aussi ! On peut réviser ensemble, si tu veux.", c:["רַעְיוֹן טוֹב! נִפָּגֵשׁ פֹּה מָחָר.|ra'yón tov! nipagésh po makhár.","קוֹרְאִים לִי דָּנִי.|kor'ím li dáni.","תִּפְנֶה שְׂמֹאלָה.|tifné smóla."]},
      {say:"סַבָּבָה, נִתְרָאֶה מָחָר!|sababá, nitra'é makhár!", fr:"Cool, à demain !", c:["יַאלְלָה, בַּי!|yála, bay!","נָעִים מְאוֹד.|na'ím me'ód.","כַּמָּה זֶה עוֹלֶה?|káma ze olé?"]}]}
  ]},

  { id:"l5", em:"☕", title:"Manger et commander au café", sub:"Commander poliment, payer", steps:[
    {t:"words", h:"Au café", items:[
      ["☕","קָפֶה|kafé","café"],["🍵","תֵּה|te","thé"],["💧","מַיִם|máyim","eau"],["🧃","מִיץ|mits","jus"],
      ["🥪","כָּרִיךְ|karíkh","sandwich"],["🍰","עוּגָה|ugá","gâteau"],["🧆","פָלָאפֶל|faláfel","falafel"],["🥗","סָלָט|salát","salade"],
      ["🫓","פִּיתָה|píta","pita"],["🧾","חֶשְׁבּוֹן|kheshbón","l'addition"]]},
    {t:"phrases", h:"Commander", items:[
      ["אֶפְשָׁר קָפֶה, בְּבַקָּשָׁה?|efshár kafé, bevakashá?","Je peux avoir un café, s'il te plaît ?"],
      ["אֲנִי רוֹצֶה כָּרִיךְ, בְּבַקָּשָׁה.|aní rotsé karíkh, bevakashá.","Je voudrais un sandwich, s'il te plaît."],
      ["לְשֶׁבֶת אוֹ לָקַחַת?|lashévet o lakákhat?","Sur place ou à emporter ?"],
      ["לָקַחַת, בְּבַקָּשָׁה.|lakákhat, bevakashá.","À emporter, s'il te plaît."],
      ["כַּמָּה זֶה עוֹלֶה?|káma ze olé?","C'est combien ?"],
      ["אֶפְשָׁר לְשַׁלֵּם בְּאַשְׁרַאי?|efshár leshalém be'ashráy?","Je peux payer par carte ?"],
      ["הַחֶשְׁבּוֹן, בְּבַקָּשָׁה.|hakheshbón, bevakashá.","L'addition, s'il te plaît."]]},
    {t:"lesson", h:"Commander poliment", p:[
      "La façon la plus simple : " + E("אֶפְשָׁר|efshár") + " (c'est possible ?) + ce que tu veux + " + E("בְּבַקָּשָׁה|bevakashá") + ".",
      "En Israël, on dit aussi très souvent « je veux » : ce n'est pas impoli, surtout avec bevakashá."],
      gram:[["אֲנִי רוֹצֶה|aní rotsé","je veux (garçon)"],["אֲנִי רוֹצָה|aní rotsá","je veux (fille)"],["קָפֶה|kafé","un café"],["הַקָּפֶה|hakafé","le café"],["קָפֶה וְעוּגָה|kafé ve'ugá","un café et un gâteau"]],
      note:"Il n'y a pas de mot pour « un, une » : kafé veut dire « un café ». Pour « le, la », on colle ha- devant le mot : hakafé."},
    {t:"listen", say:"לְשֶׁבֶת אוֹ לָקַחַת?|lashévet o lakákhat?", c:["Sur place ou à emporter ?","Tu paies comment ?","Ce sera tout ?"], a:0},
    {t:"listen", say:"כַּמָּה זֶה עוֹלֶה?|káma ze olé?", c:["C'est combien ?","Ça dure combien de temps ?","Il est quelle heure ?"], a:0},
    {t:"quiz", q:"Une fille commande : « Je veux un thé, s'il te plaît. »", he:true, c:["אֲנִי רוֹצָה תֵּה, בְּבַקָּשָׁה.|aní rotsá te, bevakashá.","אֲנִי רוֹצֶה תֵּה, בְּבַקָּשָׁה.|aní rotsé te, bevakashá.","אֲנִי תֵּה, בְּבַקָּשָׁה.|aní te, bevakashá."], a:0, why:"Une fille dit rotsá. Rotsé, c'est pour un garçon. Et aní te veut dire « je suis un thé » !"},
    {t:"quiz", q:"Que veut dire ha- dans הַקָּפֶה (hakafé) ?", c:["le, la","un, une","et"], a:0, why:"Ha- collé devant un mot veut dire « le, la, les ». « Et » se dit ve-."},
    {t:"build", fr:"Je voudrais un café, s'il te plaît.", he:"אֲנִי רוֹצֶה קָפֶה בְּבַקָּשָׁה|aní rotsé kafé bevakashá", extra:["תּוֹדָה|todá","מַיִם|máyim"]},
    {t:"dialog", h:"Commander au café", who:"Maya", lines:[
      {say:"שָׁלוֹם! מָה תִּרְצֶה?|shalóm! ma tirtsé?", fr:"Bonjour ! Qu'est-ce que je te sers ?", c:["אֶפְשָׁר תֵּה, בְּבַקָּשָׁה?|efshár te, bevakashá?","אֲנִי בְּסֵדֶר, תּוֹדָה.|aní beséder, todá.","לְהִתְרָאוֹת!|lehitraót!"]},
      {say:"בֶּטַח. עוֹד מַשֶּׁהוּ?|bétakh. od máshehu?", fr:"Bien sûr. Autre chose ?", c:["כֵּן, כָּרִיךְ, בְּבַקָּשָׁה.|ken, karíkh, bevakashá.","כֵּן, אֲנִי כָּרִיךְ.|ken, aní karíkh.","בְּשָׁעָה עֶשֶׂר.|besha'á éser."], why:"Aní karíkh veut dire « je suis un sandwich » !"},
      {say:"לְשֶׁבֶת אוֹ לָקַחַת?|lashévet o lakákhat?", fr:"Sur place ou à emporter ?", c:["לָקַחַת, בְּבַקָּשָׁה.|lakákhat, bevakashá.","אֲנִי מִצָּרְפַת.|aní mitsarfát.","יֵשׁ לִי חָתוּל.|yesh li khatúl."]},
      {say:"זֶה שְׁלוֹשִׁים וְחָמֵשׁ שֶׁקֶל.|ze shloshím vekhámesh shékel.", fr:"Ça fait trente-cinq shekels.", c:["אֶפְשָׁר לְשַׁלֵּם בְּאַשְׁרַאי?|efshár leshalém be'ashráy?","מָה הַשָּׁעָה?|ma hasha'á?","נָעִים מְאוֹד.|na'ím me'ód."]},
      {say:"בֶּטַח! יוֹם טוֹב!|bétakh! yom tov!", fr:"Bien sûr ! Bonne journée !", c:["תּוֹדָה, גַּם לָךְ!|todá, gam lakh!","תּוֹדָה, גַּם לְךָ!|todá, gam lekhá!","תִּפְנֶה יָמִינָה.|tifné yamína."], why:"Maya est une fille : « toi aussi » se dit gam lakh. Gam lekhá, c'est pour un garçon."}]}
  ]},

  { id:"l6", em:"🗺️", title:"Demander son chemin", sub:"Se repérer et se déplacer en ville", steps:[
    {t:"words", h:"En ville", items:[
      ["🚌","אוֹטוֹבּוּס|ótobus","bus"],["🚆","רַכֶּבֶת|rakévet","train"],["🚲","אוֹפַנַּיִם|ofanáyim","vélo"],["🚉","תַּחֲנָה|takhaná","gare, arrêt"],
      ["🏦","בַּנְק|bank","banque"],["⬅️","שְׂמֹאלָה|smóla","à gauche"],["➡️","יָמִינָה|yamína","à droite"],["⬆️","יָשָׁר|yashár","tout droit"],
      ["🚶","בָּרֶגֶל|barégel","à pied"],["🏙️","עִיר|ir","ville"]]},
    {t:"phrases", h:"Demander et comprendre", items:[
      ["סְלִיחָה, אֵיפֹה הַתַּחֲנָה?|slikhá, éyfo hatakhaná?","Excusez-moi, où est la gare ?"],
      ["תֵּלֵךְ יָשָׁר.|telékh yashár.","Va tout droit."],
      ["תִּפְנֶה שְׂמֹאלָה.|tifné smóla.","Tourne à gauche."],
      ["תִּפְנֶה יָמִינָה.|tifné yamína.","Tourne à droite."],
      ["זֶה לְיַד הַבַּנְק.|ze leyád habánk.","C'est à côté de la banque."],
      ["זֶה רָחוֹק?|ze rakhók?","C'est loin ?"],
      ["תִּקַּח אֶת אוֹטוֹבּוּס חָמֵשׁ.|tikákh et ótobus khámesh.","Prends le bus numéro cinq."]]},
    {t:"lesson", h:"Donner une direction", p:[
      "Pour dire à quelqu'un où aller, on utilise des verbes tout prêts : telékh (va), tifné (tourne), tikákh (prends). Ce n'est pas impoli.",
      "Pour aborder quelqu'un dans la rue, on commence toujours par " + E("סְלִיחָה|slikhá") + ", comme « excusez-moi »."],
      gram:[["לְיַד|leyád","à côté de"],["מוּל|mul","en face de"],["בֵּין|beyn","entre"],["קָרוֹב|karóv","près"],["רָחוֹק|rakhók","loin"]],
      note:"Si la personne est une fille, les verbes changent un peu : telkhí (va), tifní (tourne)."},
    {t:"listen", say:"תִּפְנֶה יָמִינָה.|tifné yamína.", c:["Tourne à droite.","Tourne à gauche.","Va tout droit."], a:0},
    {t:"listen", say:"זֶה מוּל הַבַּנְק.|ze mul habánk.", c:["C'est en face de la banque.","C'est à côté de la banque.","C'est loin de la banque."], a:0},
    {t:"quiz", q:"Comment dire « Excusez-moi, où est la gare ? »", he:true, c:["סְלִיחָה, אֵיפֹה הַתַּחֲנָה?|slikhá, éyfo hatakhaná?","סְלִיחָה, מָה הַתַּחֲנָה?|slikhá, ma hatakhaná?","סְלִיחָה, מִי הַתַּחֲנָה?|slikhá, mi hatakhaná?"], a:0, why:"Éyfo veut dire où. Ma veut dire quoi, et mi, qui."},
    {t:"quiz", q:"Que veut dire « ze rakhók? » ?", c:["C'est loin ?","C'est cher ?","C'est ouvert ?"], a:0, why:"Rakhók veut dire loin. Le contraire, c'est karóv (près)."},
    {t:"build", fr:"Tourne à gauche après la banque.", he:"תִּפְנֶה שְׂמֹאלָה אַחֲרֵי הַבַּנְק|tifné smóla akharéy habánk", extra:["יָמִינָה|yamína","לְיַד|leyád"]},
    {t:"dialog", h:"Perdu en ville", who:"Avi", lines:[
      {say:"שָׁלוֹם, אֶפְשָׁר לַעֲזוֹר?|shalóm, efshár la'azór?", fr:"Bonjour, je peux t'aider ?", c:["כֵּן, תּוֹדָה. אֵיפֹה הַתַּחֲנָה?|ken, todá. éyfo hatakhaná?","כֵּן, אֲנִי בֶּן עֶשְׂרִים.|ken, aní ben esrím.","לֹא, יֵשׁ לִי חָתוּל.|lo, yesh li khatúl."]},
      {say:"תַּחֲנַת הָרַכֶּבֶת? תֵּלֵךְ יָשָׁר, וְאָז תִּפְנֶה שְׂמֹאלָה.|takhanát harakévet? telékh yashár, ve'áz tifné smóla.", fr:"La gare ? Va tout droit, puis tourne à gauche.", c:["זֶה רָחוֹק?|ze rakhók?","כַּמָּה זֶה עוֹלֶה?|káma ze olé?","אֵיךְ קוֹרְאִים לְךָ?|eykh kor'ím lekhá?"]},
      {say:"לֹא, זֶה חָמֵשׁ דַּקּוֹת בָּרֶגֶל.|lo, ze khámesh dakót barégel.", fr:"Non, c'est à cinq minutes à pied.", c:["מְעוּלֶּה, תּוֹדָה רַבָּה!|me'ulé, todá rabá!","תִּפְנֶה יָמִינָה, בְּבַקָּשָׁה.|tifné yamína, bevakashá.","אֲנִי רוֹצֶה תֵּה.|aní rotsé te."]},
      {say:"בְּבַקָּשָׁה. נְסִיעָה טוֹבָה!|bevakashá. nesi'á tová!", fr:"Je t'en prie. Bon voyage !", c:["תּוֹדָה, בַּי!|todá, bay!","גַּם אֲנִי!|gam aní!","בְּיוֹם שֵׁנִי.|beyóm shení."]}]}
  ]},

  { id:"l7", em:"🎸", title:"Mes loisirs", sub:"Dire ce qu'on aime et ce qu'on fait", steps:[
    {t:"words", h:"Les loisirs", items:[
      ["⚽","כַּדּוּרֶגֶל|kadurégel","foot"],["🎵","מוּזִיקָה|múzika","musique"],["🎬","סְרָטִים|sratím","films"],["🎮","מִשְׂחֲקֵי וִידֵאוֹ|miskhakéy vídeo","jeux vidéo"],
      ["📖","קְרִיאָה|kri'á","la lecture"],["🏃","רִיצָה|ritsá","la course"],["🍳","בִּשּׁוּל|bishúl","la cuisine"],["✈️","טִיּוּלִים|tiyulím","les voyages, les balades"],
      ["🎸","גִּיטָרָה|gitára","guitare"],["🏊","שְׂחִיָּה|skhiyá","la natation"]]},
    {t:"phrases", h:"Parler de ce qu'on aime", items:[
      ["מָה אַתָּה אוֹהֵב לַעֲשׂוֹת בִּזְמַן הַפָּנוּי?|ma atá ohév la'asót bizmán hapanúy?","Qu'est-ce que tu aimes faire pendant ton temps libre ?"],
      ["אֲנִי אוֹהֵב מוּזִיקָה.|aní ohév múzika.","J'aime la musique."],
      ["אֲנִי מֵת עַל כַּדּוּרֶגֶל.|aní met al kadurégel.","J'adore le foot."],
      ["אֲנִי לֹא אוֹהֵב לָרוּץ.|aní lo ohév larúts.","Je n'aime pas courir."],
      ["אֵיזוֹ מוּזִיקָה אַתָּה אוֹהֵב?|éyzo múzika atá ohév?","Tu aimes quel genre de musique ?"],
      ["אֲנִי מְנַגֵּן בְּגִיטָרָה.|aní menagén begitára.","Je joue de la guitare."],
      ["גַּם אֲנִי!|gam aní!","Moi aussi !"]]},
    {t:"lesson", h:"Aimer faire quelque chose", p:[
      "Après « aimer », le deuxième verbe commence souvent par l- : likró (lire), larúts (courir), levashél (cuisiner).",
      "Pour dire « j'adore », les Israéliens disent " + E("אֲנִי מֵת עַל|aní met al") + ", mot à mot « je meurs pour » ! Une fille dit aní metá al."],
      gram:[["אֲנִי אוֹהֵב לִקְרוֹא|aní ohév likró","j'aime lire (garçon)"],["אֲנִי אוֹהֶבֶת לְבַשֵּׁל|aní ohévet levashél","j'aime cuisiner (fille)"],["אֲנִי שׂוֹנֵא לָרוּץ|aní soné larúts","je déteste courir"],["אֲנִי מְשַׂחֵק כַּדּוּרֶגֶל|aní mesakhék kadurégel","je joue au foot"],["לִפְעָמִים|lif'amím","parfois"],["אַף פַּעַם לֹא|af pá'am lo","jamais"]],
      note:"Pour un sport ou un jeu, « jouer » se dit mesakhék. Pour un instrument de musique, c'est menagén."},
    {t:"listen", say:"אֲנִי אוֹהֵב לְבַשֵּׁל.|aní ohév levashél.", c:["J'aime cuisiner.","Je déteste cuisiner.","J'aime voyager."], a:0},
    {t:"listen", say:"אֲנִי אַף פַּעַם לֹא מְשַׂחֵק בְּמִשְׂחֲקֵי וִידֵאוֹ.|aní af pá'am lo mesakhék bemiskhakéy vídeo.", c:["Je ne joue jamais aux jeux vidéo.","Je joue souvent aux jeux vidéo.","J'adore les jeux vidéo."], a:0},
    {t:"quiz", q:"Comment dire « J'aime lire » ?", he:true, c:["אֲנִי אוֹהֵב לִקְרוֹא.|aní ohév likró.","אֲנִי אוֹהֵב קוֹרֵא.|aní ohév koré.","אֲנִי קְרִיאָה.|aní kri'á."], a:0, why:"Après ohév, le verbe commence par l- : likró."},
    {t:"quiz", q:"Noa (une fille) dit « j'aime » :", he:true, c:["אֲנִי אוֹהֶבֶת|aní ohévet","אֲנִי אוֹהֵב|aní ohév","הִיא אוֹהֵב|hi ohév"], a:0, why:"Une fille dit ohévet. Ohév, c'est pour un garçon."},
    {t:"build", fr:"Je joue de la guitare le week-end.", he:"אֲנִי מְנַגֵּן בְּגִיטָרָה בְּסוֹף הַשָּׁבוּעַ|aní menagén begitára besóf hashavúa", extra:["מְשַׂחֵק|mesakhék","לֹא|lo"]},
    {t:"dialog", h:"Faire connaissance", who:"Noa", lines:[
      {say:"אָז מָה אַתָּה אוֹהֵב לַעֲשׂוֹת בִּזְמַן הַפָּנוּי?|az ma atá ohév la'asót bizmán hapanúy?", fr:"Alors, qu'est-ce que tu aimes faire pendant ton temps libre ?", c:["אֲנִי אוֹהֵב לִקְרוֹא.|aní ohév likró.","אֲנִי אוֹהֵב קוֹרֵא.|aní ohév koré.","בְּשַׁבָּת.|beshabát."], why:"Après ohév, le verbe commence par l- : likró."},
      {say:"יָפֶה! אֵיזוֹ מוּזִיקָה אַתָּה אוֹהֵב?|yafé! éyzo múzika atá ohév?", fr:"Cool ! Tu aimes quel genre de musique ?", c:["אֲנִי מֵת עַל רוֹק. וְאַתְּ?|aní met al rok. ve'át?","אֲנִי מִצָּרְפַת.|aní mitsarfát.","כֵּן, תּוֹדָה.|ken, todá."]},
      {say:"אֲנִי מֵתָה עַל גֶ'ז! אַתָּה מְנַגֵּן?|aní metá al djez! atá menagén?", fr:"J'adore le jazz ! Tu joues d'un instrument ?", c:["כֵּן, אֲנִי מְנַגֵּן בְּגִיטָרָה.|ken, aní menagén begitára.","כֵּן, אֲנִי מְשַׂחֵק גִּיטָרָה.|ken, aní mesakhék gitára.","כֵּן, אֲנִי גִּיטָרָה.|ken, aní gitára."], why:"Pour un instrument, on dit menagén. Mesakhék, c'est pour un sport ou un jeu."},
      {say:"מָה? גַּם אֲנִי! אֲנַחְנוּ חַיָּבִים לְנַגֵּן בְּיַחַד.|ma? gam aní! anákhnu khayavím lenagén beyákhad.", fr:"Quoi ? Moi aussi ! Il faut qu'on joue ensemble.", c:["בֶּטַח, זֶה נִשְׁמָע כֵּיף!|bétakh, ze nishmá keyf!","תִּפְנֶה שְׂמֹאלָה.|tifné smóla.","כַּמָּה זֶה עוֹלֶה?|káma ze olé?"]},
      {say:"אַחְלָה!|akhlá!", fr:"Génial !", c:["נִתְרָאֶה בְּקָרוֹב!|nitra'é bekaróv!","אֵין לִי אַחִים.|eyn li akhím.","אֶפְשָׁר לְשַׁלֵּם בְּאַשְׁרַאי?|efshár leshalém be'ashráy?"]}]}
  ]},

  { id:"l8", em:"🎉", title:"Proposer une sortie", sub:"Inviter, accepter, refuser, se donner rendez-vous", steps:[
    {t:"words", h:"Sortir", items:[
      ["🎉","מְסִבָּה|mesibá","fête, soirée"],["🎬","קוֹלְנוֹעַ|kolnóa","cinéma"],["🍔","מִסְעָדָה|mis'adá","restaurant"],["🌳","פַּארְק|park","parc"],
      ["🏖️","חוֹף הַיָּם|khof hayám","la plage"],["🎤","הוֹפָעָה|hofa'á","concert"],["🌙","הָעֶרֶב|ha'érev","ce soir"],["☀️","מָחָר|makhár","demain"],
      ["📱","מִסְפַּר טֶלֶפוֹן|mispár télefon","numéro de téléphone"],["⏰","מְאַחֵר|me'akhér","en retard"]]},
    {t:"phrases", h:"Inviter et répondre", items:[
      ["אַתָּה פָּנוּי הָעֶרֶב?|atá panúy ha'érev?","Tu es libre ce soir ?"],
      ["רוֹצֶה לָלֶכֶת לַקּוֹלְנוֹעַ?|rotsé lalékhet lakolnóa?","Tu veux aller au cinéma ?"],
      ["בּוֹא נֵלֵךְ לַפַּארְק!|bo nelékh lapárk!","Allons au parc !"],
      ["כֵּן, בְּשִׂמְחָה!|ken, besimkhá!","Oui, avec plaisir !"],
      ["סְלִיחָה, אֲנִי לֹא יָכוֹל. אֲנִי עָסוּק.|slikhá, aní lo yakhól. aní asúk.","Désolé, je ne peux pas. Je suis occupé."],
      ["אוּלַי בְּפַעַם אַחֶרֶת.|uláy befá'am akhéret.","Une autre fois, peut-être."],
      ["נִפָּגֵשׁ בְּשֶׁבַע.|nipagésh beshéva.","Retrouvons-nous à sept heures."],
      ["אֶפְשָׁר אֶת הַמִּסְפָּר שֶׁלְּךָ?|efshár et hamispár shelkhá?","Je peux avoir ton numéro ?"]]},
    {t:"lesson", h:"Proposer quelque chose", p:[
      "Pour proposer, le plus naturel est bo nelékh (viens, on y va). À une fille, on dit bó'i nelékh."],
      gram:[["בּוֹא נֵלֵךְ!|bo nelékh!","allons-y ! (à un garçon)"],["בּוֹאִי נֵלֵךְ!|bó'i nelékh!","allons-y ! (à une fille)"],["רוֹצֶה לָצֵאת?|rotsé latsét?","tu veux sortir ?"],["מָה דַּעְתְּךָ עַל פִּיצָה?|ma da'atkhá al pítsa?","et si on prenait une pizza ?"],["אֲנִי הוֹלֵךְ לִרְאוֹת סֶרֶט.|aní holékh lir'ót séret.","je vais voir un film."]],
      note:"Comme en français, pour ce qu'on va faire bientôt, on dit « je vais » (aní holékh) + le verbe en l- : " + E("אֲנִי הוֹלֵךְ לְהִתְקַשֵּׁר אֵלֶיךָ|aní holékh lehitkashér eléykha") + ", je vais t'appeler."},
    {t:"listen", say:"סְלִיחָה, אֲנִי לֹא יָכוֹל. אֲנִי עָסוּק.|slikhá, aní lo yakhól. aní asúk.", c:["Désolé, je ne peux pas, je suis occupé.","Désolé, je suis en retard.","Oui, avec plaisir."], a:0},
    {t:"listen", say:"זֶה נִשְׁמָע מְעוּלֶּה!|ze nishmá me'ulé!", c:["Ça a l'air génial !","C'est trop cher !","C'est trop loin !"], a:0},
    {t:"quiz", q:"Pour accepter une invitation avec plaisir :", he:true, c:["כֵּן, בְּשִׂמְחָה!|ken, besimkhá!","לֹא, תּוֹדָה.|lo, todá.","אוּלַי בְּפַעַם אַחֶרֶת.|uláy befá'am akhéret."], a:0, why:"Besimkhá veut dire « avec joie ». Lo, todá veut dire « non merci »."},
    {t:"quiz", q:"Tu proposes à Noa (une fille) : « Allons à la plage ! »", he:true, c:["בּוֹאִי נֵלֵךְ לַחוֹף!|bó'i nelékh lakhóf!","בּוֹא נֵלֵךְ לַחוֹף!|bo nelékh lakhóf!","אֲנִי חוֹף!|aní khof!"], a:0, why:"À une fille, on dit bó'i nelékh. Bo nelékh, c'est pour un garçon."},
    {t:"build", fr:"Tu veux aller au cinéma ?", he:"רוֹצֶה לָלֶכֶת לַקּוֹלְנוֹעַ?|rotsé lalékhet lakolnóa?", extra:["הוֹלֵךְ|holékh","מָחָר|makhár"]},
    {t:"dialog", h:"Un samedi soir", who:"Dani", lines:[
      {say:"הֵי! אַתָּה פָּנוּי בְּשַׁבָּת?|hey! atá panúy beshabát?", fr:"Salut ! Tu es libre samedi ?", c:["כֵּן, לָמָּה?|ken, láma?","כֵּן, אֲנִי שַׁבָּת.|ken, aní shabát.","אֲנִי בֶּן עֶשְׂרִים.|aní ben esrím."], why:"Aní shabát veut dire « je suis samedi » !"},
      {say:"רוֹצֶה לָלֶכֶת לַקּוֹלְנוֹעַ?|rotsé lalékhet lakolnóa?", fr:"Tu veux aller au cinéma ?", c:["כֵּן, בְּשִׂמְחָה! בְּאֵיזוֹ שָׁעָה?|ken, besimkhá! be'éyzo sha'á?","כֵּן, אֲנִי קוֹלְנוֹעַ.|ken, aní kolnóa.","תִּפְנֶה שְׂמֹאלָה.|tifné smóla."]},
      {say:"הַסֶּרֶט מַתְחִיל בִּשְׁמוֹנֶה. נִפָּגֵשׁ בְּשֶׁבַע וָחֵצִי.|haséret matkhíl bishmóne. nipagésh beshéva vakhétsi.", fr:"Le film commence à huit heures. Retrouvons-nous à sept heures et demie.", c:["מְצֻיָּן! אֵיפֹה נִפָּגֵשׁ?|metsuyán! éyfo nipagésh?","מְצֻיָּן! בֶּן כַּמָּה אַתָּה?|metsuyán! ben káma atá?","בְּיוֹם שֵׁנִי.|beyóm shení."]},
      {say:"מוּל הַקּוֹלְנוֹעַ, לְיַד בֵּית הַקָּפֶה.|mul hakolnóa, leyád beyt hakafé.", fr:"En face du cinéma, à côté du café.", c:["סַבָּבָה, נִתְרָאֶה בְּשַׁבָּת!|sababá, nitra'é beshabát!","תִּפְנֶה יָמִינָה.|tifné yamína.","נָעִים מְאוֹד.|na'ím me'ód."]},
      {say:"נִתְרָאֶה שָׁם!|nitra'é sham!", fr:"À samedi, là-bas !", c:["יַאלְלָה, בַּי!|yála, bay!","אֵין לִי אַחִים.|eyn li akhím.","לָקַחַת, בְּבַקָּשָׁה.|lakákhat, bevakashá."]}]}
  ]}
];

// Personnes à voix d'homme dans les dialogues
window.MALE = ["Dani","Avi"];
