import express from "express";

import http from 'http';
import mongoose from "mongoose";
import { mongoURI } from './config/db'
import User from "./models/user";
import BankAccount from "./models/bankAccount";
import { apiRouter } from "./routers/apiRouter";

const app = express();
const server = http.createServer(app);


app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});


server.listen(3000, () => {
    console.log('Serveur en cours d\'exécution sur le port 3000');
});

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connexion à MongoDB réussie');
    // Démarrer le serveur une fois la connexion établie

  User.exists({}).then((exists) => {
    if (exists) {
      console.log('Le schéma User existe déjà. Aucun nouvel utilisateur ne sera créé.', exists);
    } else {
      // Exemple d'utilisation : création d'un nouvel utilisateur
      const newUser = new User({
        username: 'John Doe',
        email: 'test@gmail.com',
        password: '1234'
      }
      )

      newUser.save().then(user => {  
          console.log('Utilisateur enregistré avec succès', user);
        })
        .catch((error) => {
          console.error('Erreur lors de l\'enregistrement de l\'utilisateur', error);
        }
        );
  }

  });


BankAccount.exists({}).then(exists =>
    {
        if(exists){
            console.log('Le schéma BankAccount existe déjà. Aucun nouvel utilisateur ne sera créé.', exists);
        }else{
            const newBankAccount = new BankAccount({
            name: 'Compte courant',
            balance: 1000,
            userId: '60a5a2a1d3f4a51d5c5b0f5f'
            })
    
            newBankAccount.save().then(bankAccount => {
            console.log('Compte enregistré avec succès', bankAccount);
            })
            .catch((error) => {
            console.error('Erreur lors de l\'enregistrement du compte', error);
            }
            );
        }
    })
  
  
  })
  .catch((error) => {
    console.error('Erreur de connexion à MongoDB', error);
  });

app.use(apiRouter)

