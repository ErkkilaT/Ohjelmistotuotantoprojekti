# Auctionplatform
## Overview

This project is an auction system. It provides a basic system for creating timed auctions and bidding on them.

The repository for the required database can be found [here](https://github.com/NullByte3/AuctionBackend)

You can find readymade docker images on hub.docker here : 
[Frontend](https://hub.docker.com/r/oomis1/auction_frontend)
[Backend](https://hub.docker.com/r/oomis1/auction_backend)

Team members: Teemu Erkkilä, Mikko Varis, Wissam Al-dabbagh

---

## Features
- Create auctions
- Manage auctions
- Bid on auctions
- Recieve notifications on winning auctions
- View upcoming auctions
- Register account(register,login)

---

## Technologies Used
**Backend**
- Java
- Java hibernate framework
- Maven
- PostgreSQL
- JUnit 5
- Jenkins
  
**Frontend**
- TypeScript
- React
- Tailwind
- npm
- Vite
  
**Both**
- Docker

---

## Installation
### Backend
1. Clone the BACKEND repository:
```
git clone https://github.com/NullByte3/AuctionBackend.git
```
2. Configure the database:
   - Install PostgreSQL from [here](https://www.postgresql.org/download/)
   - create a database called auction
    ```
    CREATE DATABASE auction;
    ```
    - if you want to use the configs below also run thsese queries:
    ```
    CREATE USER test WITH PASSWORD 'test';
    GRANT ALL PRIVILEGES ON DATABASE auction TO test;
    ```
3. Set the hibernate config
   - make a copy of hibernate.cfg.xml.template file and remove the .template
   - replace this portion with your own variables e.g.
     ```
     <property name="connection.url">jdbc:postgresql://localhost:5432/auction</property>
     <property name="connection.username">test</property>
     <property name="connection.password">test</property>
     ```
4. Run the Main in the Application file
5. Congrats your backend is operational!

### Frontend
1. Clone this repository:
```
git clone https://github.com/ErkkilaT/Ohjelmistotuotantoprojekti.git
```
2. Set the enviroment variables
   - Create a .env file in the auction-frontend folder
   - Set your api/ws url to where you set up the backend (defaults below)
   ```
   VITE_API_URL=http://localhost:7070
   VITE_WS_URL=ws://localhost:7070/ws/bid
   ```
3. Install dependencies:
```
npm install
```
4. Start the application:
```
npm run start
```
5. Congrats the program is operational!

#### Localization

This project supports English, Japanese and Arabic

The [react-i18next](https://react.i18next.com/) library was used for setting up localization. No extra setup is required to enable localization.
The language can be changed from the dropdown found inside the header, with the globe icon.

If you would like to add languages add the translations into the i18n.ts-file in the lib-folder (see template in the i18n.ts-file).
Also edit the Header.tsx-file to include it in the dropdown menu in the following format
```
<DropdownMenuItem onClick={() => changeLanguage("en")}>
                            English
</DropdownMenuItem>
```

If you are adding a language that is RTL also edit line 14 in file main.tsx to include the language code that you used in the i18n.ts-file
```
if (currLang && (currLang === "ar" || currLang === [ADD LANGUAGE CODE HERE])) document.dir = "rtl";
```

