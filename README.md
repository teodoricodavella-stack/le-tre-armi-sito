# Le Tre Armi Fencing Academy

Sito statico in italiano, senza dipendenze di produzione. Mantiene l'impostazione grafica e i contenuti del progetto originale, con pagine dedicate agli eventi.

## Stato

Versione di lavoro da rivedere prima della pubblicazione. Nessuna modifica a DNS, hosting Register.it o sito pubblico è inclusa. Non è WordPress e non richiede SiteBuilder.

- `index.html`: home, presentazione, corsi, eventi, progetti e contatti.
- `winter-fencing-camp.html`: date 27–30 dicembre 2026, sede Via Zara 22 a Trani, destinatari e preparazione richiesta email.
- `trofeo-adriatico.html`: informazioni e archivio della Finalissima di giugno 2026.
- `privacy.html`: descrizione tecnica della navigazione e del contatto email, da completare con l'informativa della società.
- `styles.css`, `site.js`, `camp.js`: stile e interazioni condivise.

## Modulo Camp: comportamento reale

Il modulo valida i campi e prepara una richiesta via `mailto:`. L'utente deve aprire il proprio programma di posta e inviare il messaggio; in alternativa può copiarne il testo. Non esiste un backend, non vengono salvate iscrizioni e non viene mostrata una falsa conferma di invio. La consegna effettiva dipende dal programma di posta e non è verificata dal sito. Nessun pagamento o prenotazione automatica.

Per un'iscrizione automatica completa occorre concordare un servizio di raccolta richieste, collegarlo e provare la ricezione prima della pubblicazione. Non inserire credenziali nel repository pubblico.

## Dati da completare prima della pubblicazione

- Giorni confermati: lunedì, mercoledì e venerdì. Per scelta del titolare non pubblicare orari precisi.
- Quote, programma generale, staff e condizioni del Camp inseriti dai documenti organizzativi; i link pubblici dei moduli IT/EN restano da verificare.
- Informativa privacy della società e dati legali del titolare, da verificare sull'hosting effettivo.
- Eventuale calendario futuro del Trofeo Adriatico.
- Eventuali foto reali autorizzate. I segnaposto fotografici sono stati rimossi, non sostituiti con immagini inventate.

La biografia, l'anno di fondazione, la citazione e il testo sui progetti sono quelli già presenti nel progetto di partenza: verificarli in revisione.

## Anteprima e verifiche

Servire la cartella con un server HTTP statico. Nessuna compilazione necessaria. Controlli disponibili con Node.js:

```sh
node --check site.js
node --check camp.js
node --test tests/site.test.cjs
```

Prima di trasferire i file sull'hosting: verificare le pagine su desktop e mobile, inviare una richiesta reale autorizzata e verificarne la ricezione, completare privacy e dati legali, predisporre un backup del sito attuale. Configurare URL canonici e sitemap soltanto dopo la scelta dell'indirizzo definitivo e della struttura di pubblicazione. Non attivare pubblicazione automatica durante questa revisione.

## Aggiornamento contenuti del 3 novembre 2026

Fonti consultate: invito alle società del 3 novembre, calendario operativo aggiornato al 3 novembre e specifiche iscrizioni del 28 ottobre, nella cartella Drive Winter Fencing Camp 2026. Il calendario recente prevale sul vecchio dato di 20 posti: ora 28 posti letto, senza promessa di disponibilità in tempo reale. Le scadenze del calendario operativo non sono presentate come scadenze pubbliche di iscrizione. La formula dettagliata della gara non è pubblicata perché il calendario segnala che la struttura finale va ancora chiusa.

Aggiunta sezione scherma storica con presentazione essenziale: nome specifico del nuovo progetto, referente, attività e requisiti restano da confermare. I materiali storici rinvenuti non sono stati trattati come descrizione del nuovo progetto. Non sono stati copiati dati di iscritti, coordinate bancarie o documenti interni nel repository.
