import { posix } from "path";
import React from "react";

export const links = [
    {
      name: "O nás",
      hash: "/About",
    },
    {
      name: "Náhradné vozidlá",
      hash: "/Vehicles",
    },
    {
      name: "Správa o nehode",
      hash: "/Report",
    },
    {
      name: "Novinky",
      hash: "/Activity",
    },
    {
      name: "Čísla poisťovní",
      hash: "/Numbers",
      },
  ] as const;

  export const cards = [
    {
      image: "https://via.placeholder.com/400x300",
      title: "Nadpis 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.",
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "Nadpis 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.",
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "Nadpis 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.",
    },
  ] as const;

  export const reviews = [
    {
      name: "alan majernik",
      rating: 5,
      text: "ProAssist po prvé 🚙 - za mňa zlatá medaila 🥇 Byť účastníkom dopravnej nehody prináša neočakávane množstvo stresu, pocitu ohrozenia, či tažko zvladnuteľného napätia 😱.A keď poľaví táto prvá fáza, vynoria sa závažné praktické otázky, ako pokračovať v ceste, čo urobiť s nepojazdným autom, Koho všetkého treba kontaktovať… 🔭Napriek tomu že by som takúto situáciu nikomu neprial, z času na čas človek môže zažiť prekvapivo pozitivne skúsenosti aj v takýchto situáciách 🫣.Pri zabezpečovaní obhliadky vozidla zmluvnom servise som sa po prvýkrát dostal do kontaktu s ProAssist. Zaujala ma mimoriadne kultivovaná konverzácia, ktorá bola vecne veľmi praktickýzameraná na všetky potrebné detaily. Po odtiahnutí vozidla do servisu sa mi hneď v ten deň, v piatok podvečer podarilo stretnúť s pracovníkom zodpovedným za obhliadku a dohodnúť si termínobhliadky. Spolu s praktickým a proklientským pristupom, ktorý sa často nevidí 👍.Navyše mi pracovník bez zavaváhania a s mimoriadnou ochotou pomohol stihnúť posledný vlak 🚂, ktorým som sa dokázal dostať do ciela moje cesty 🎯. ✅ A tak som vďaka ProAssist nemal ešte aj pokazený víkend. Pre mňa netradičný a velmi cenný extra bonus, vďaka ProAssist.",
      date: "pred 1 dňom",
    },
    {
      name: "Marina Polonska",
      rating: 5,
      text: "ProAssist po druhé 🚖 - neuveriteľné a neočakávané - snímam svoj klobúk 🎩, ako hovorí môj manžel. V istom momente sa sa stal rukojemníkom medzi poisťovňou, servisom, ktorý realizoval opravu auta po nehode a spoločnosťou na vyúčtovanie navýšenia opravy❓ Poisťovňa neragovala, spoločnosť nekomunikovala so servisom a opravené auto si nemohol prevziať zo servisu. Blbá situácia 😡. Skúšal možnosti a vytočil aj ProAssist, či by mu vedeli sprostredkovať kontakt na poisťovňu. Z tohto výstrelu takmer naprázdno 🔫 sa nakoniec ukázala najpozitívnejšia skúsenosť posledných dní. Samotná komunikácia s pani Novekovou bola ukážková - kultovovaná, príjemná a adresná ☎️. Pani Noveková presne rozumela celej nešťastnej situácii, vedela, ako by bolo možné pomôcť a navyše neváhala využiť svoje kontakty na to, aby tento stav úspešne vyriešila 🧨. A naozaj, neuveriteľné sa podarilo a vďaka vytrvalej komunikácii pani Novekovej sme sa dostali ku svojmu autu 🚙. Takže, ak ste v ťažkej situácii, nezúfajte, vždy sa nájde niekto, kto vám vie pomôcť 🛎️. A ak by aj nie, skúste ProAssist👌",
      date: "pred 1 dňom",
    },
    {
      name: "Simon Šefčík",
      rating: 5,
      text: "Od prvej sekundy nesmierne milý, až som váhal či v tom nebude nejaky háčik - NEBOL! Konrétne pán Adrián K. bol maximálne nápomocný. Mal som pocit že nemusím pohnúť ani prstom. Vrelo odporúčam a ĎAKUJEM.",
      date: "pred 4 dňami",
    },
    {
      name: "Petra Vargová",
      rating: 5,
      text: "Profesionalita, ochota, pracovitosť a pozitivny prístup na jednom mieste. Odporucam ProAssist, lebo kazdy si zasluzi pomoc pri nehode a oni pomahaju vo vsetkych smeroch a k spokojnosti zakaznika. Za nas aj napriek okolnostiam velmi pozitivna skusenost s dobrym koncom",
      date: "pred mesiacom",
    },
    {
      name: "Peter Banovsky",
      rating: 5,
      text: "Ďakujem za expresné vyriešenie mojej poistnej udalosti. Môžem len odporučiť túto službu , ktorá je naozaj bezplatná.",
      date: "pred mesiacom",
    },
    {
      name: "Matis Otiepka",
      rating: 5,
      text: "Mal som možnosť využiť služby od Proassist firmy. Pán prišiel , vypísal papiere, vybavil prijatie na servis, odťah vozidla a zotrval na mieste dokým vozidlo nebolo odtiahnuté a vyriešené na servise. Taktiež pri vzniknutom probléme v priebehu opravy sa na mňa nakontaktovala konateľka firma , ktorá daný problém somňou vyriešila čo sa týka náhradného vozidla . Super prístup , neskončilo to len pri odovzdaní vozidla do servisu, zaujímajú sa v priebehu opravy , flebilnosť a ochota z ich strany určite nechýba. Odporúčam, jedine ich žiadne iné podvodné firmy 💪🏼.",
      date: "pred rokom",
    },
    {
      name: "Nikola Bartošová",
      rating: 5,
      text: "Ďakujem za perfektný prístup, rýchle jednanie a ochotu Michal Š. Nemám čo vytknúť, s takýmto prístupom ma už žiadna búračka nezaskočí. ODPORÚČAM!!👍🏼🙂",
      date: "pred 3 rokmi",
    },
    {
      name: "Dominik Olah",
      rating: 5,
      text: "Dnes sa mi stala moja prvá nehoda (nie mojou vinou), prišiel k nám pán ktorý nás upokojil, spýtal sa či sme zranení, spísal s nami papiere a dokonca čakal 2,5 hodiny na príchod polície, tento pán by si zaslúžil minimálne príplatok ak nie povýšenie, veľmi milý človek (12:55, Rača)",
      date: "pred 3 rokmi",
    },
  ] as const;