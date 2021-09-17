# Sukurta full-stack aplikacija, kurioje galima kurti,perziureti,atnaujinti ir istrinti vartotojus.

# Aplikacijai reikalingos programos,instaliavimo ir projekto paleidimo programos:

Aplikacijos kliento puse sukurta naudojant React.js biblioteka;
Aplikacijos serverio puse sukurta naudojant node.js ir express.js karkasa.

## Aplikacijoje naudojami moduliai ir versijos:

Kliento puseje:

"axios": "^0.21.4",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-scripts": "4.0.3",

Serverio puseje:

"cors": "^2.8.5",
"dotenv": "^10.0.0",
"express": "^4.17.1",
"mongoose": "^6.0.6"
"nodemon": "^2.0.12"

\*\*\*\*Paleisti kliento puses React.js naudojamos komandos:

### `npm start`

Atidaro [http://localhost:3000](http://localhost:3000) narsykleje.

Paleidzia testavimo komanda:

### `npm test`

Sukuria build aplanka su optimizuota versija produkcija:

### `npm run build`

\*\*\*\*Paleisti serverio puses React serveri naudojamos komandos:

Paleidzia severi http://localhost:5000 ir sujungia su Mongo db duomenu baze,naudodamas suteikta prisijungimo uri:

### `npm run nodemon`
