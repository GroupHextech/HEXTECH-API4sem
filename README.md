# HexTech - Technology Solutions
HexTech is a fictitious technology company created by students from the 4th Semester of Database at [Fatec SJC - Prof. Jessen Vidal](https://fatecsjc-prd.azurewebsites.net/suporte-moodle.php "Fatec SJC - Prof. Jessen Vidal") to complete their coursework and semester API project. We specialize in software development, database management, and technological innovation.

## Table of Contents
- [About HexTech](#about-hextech)
- [Project Purpose](#project-purpose)
- [Getting Started](#getting-started)
- [Sprint Timeline and Backlog](#sprint-timeline-and-backlog)
- [Development Tools](#development-tools)
- [Team Members](#team-members)

## About HexTech
We are a fictional company, developing semester projects during our graduation in Database at Fatec. These projects are API (Learning by Integrated Projects). The current members of the group are listed in the README.md at the end.

## Project Purpose
Our [project purpose](./api_project_Embraer/%5BAC%20Config%20Control%5D%20Proposta%20FATEC%202023-1_rev1_0.docx) is to develop an Aircraft Configuration Control (ACC) system for Embraer, the Brazilian Aeronautics Company. Embraer is responsible for manufacturing military, commercial, executive, and agricultural aircraft. As the third-largest company in the world in executive aviation, Embraer is gradually reducing the dominance of European and American companies in the sector. With the ACC, Embraer will be able to manage and control the configuration of its aircraft, providing an efficient and effective solution to optimize their production process. The system will allow pilots to check the configuration of the aircraft they are flying, compare the items present, and know if there are Follow-on-Limitations (FOLs) for them, thus ensuring dispatch quality.

<!-- Old Part -->
Presentation of the wireframe for each proposal: 
![WIREFRAME](./readme_documents/wireframes/wireframe_gif.gif "Wireframe_Gif")
<br>

## Getting Started
To begin working on this project, you'll need to follow these steps:

1. Clone this repository by running ``git clone https://github.com/GroupHextech/HEXTECH-API4sem.git`` in your terminal.
2. Download the necessary submodules by running git ``submodule update --init --recursive``.
3. Install the dependencies for each submodule separately. This project is divided into three submodules: <b>[acc-frontend](https://github.com/GroupHextech/acc-frontend)</b>, <b>[acc-backend](https://github.com/GroupHextech/acc-backend)</b>, and <b>[acc-documentation](https://github.com/GroupHextech/acc-documentation)</b>.

### Prerequisites
Before you start, make sure you have the following installed:

- Node.js and npm (for acc-frontend)
- Java 11 or higher (for acc-backend)
- Maven (for acc-backend)

### Installing
To install the necessary dependencies for each submodule, navigate to the submodule directory and run the following commands:

#### acc-frontend:
- The frontend is made with Vue.js and Typescript, and it is initialized by Vite. To get started with the frontend, navigate to the acc-frontend directory and run the following command:
```sh
# Navigate to acc-frontend directory
cd acc-frontend

# Install dependencies
npm install
```

#### acc-backend:
- The backend is made with Springboot and has some dependencies such as Maven and other Spring Framework dependencies, and Lombok is also used. To get started with the backend, navigate to the acc-backend directory and run the following command:
```sh
# Navigate to acc-backend directory
cd acc-backend

# Install dependencies
mvn install
```

#### acc-documentation:
- The documentation module contains the documentation of the API endpoints. To access the documentation, navigate to the acc-documentation directory and open the index.html file in your web browser.
```sh
# Navigate to acc-documentation directory
cd acc-documentation

# Install dependencies
npm install
npm install --global yarn
yarn install
```

### Running
Each submodule has its own instructions on how to run it:

#### acc-frontend:
```sh
# Navigate to acc-frontend directory
cd acc-frontend

# Start the development server
npm run dev
```

#### acc-backend:
```sh
# Navigate to acc-backend directory
cd acc-backend

# Start the Springboot application
mvn spring-boot:run
```

#### acc-documentation:
```sh
# Navigate to acc-documentation directory
cd acc-documentation

# Start the documentation server
yarn dev
```
By following these steps, you should be able to run each submodule independently and start working on your project. Good luck!

<!-- Old Part -->
<h2>User's Manual (Excuting the application)</h2>

Manual with all the steps to run the desktop application.
[User's Manual](./readme_pages/user_manual.md "User's Manual")
<br>

## Sprint Timeline and Backlog

## Sprint 1: 03/05/2023 - 17/05/2023

### Sprint Goals:

- 
- 
- 

### Sprint Backlog:

| Item | Description | Estimate |
| --- | --- | --- |
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |
| 4 |  |  |

### Sprint Progess:

| Item | Description | Estimate | Status |
| --- | --- | --- | --- |
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |
| 4 |  |  |  |

<!-- Old Part -->
![Backlog_do_Produto](./readme_documents/sprintslogs/product_backlog.png "Backlog do Produto")

- [Sprint 1 Backlog and timeline](./readme_pages/sprint01_atividades_entrega.md)
- [Sprint 2 Backlog and timeline](./readme_pages/sprint02_atividades_entrega.md)
- Sprint 3 Backlog and timeline
- Sprint 4 Backlog and timeline

<br />

## Development Tools

### Frontend:
<img src="https://skillicons.dev/icons?i=figma,vscode,vite,vue,ts,html,css,js,svg,jquery" />

[![Pinia](https://img.shields.io/badge/Pinia-orange?style=flat-square&logo=pinia)](https://pinia.esm.dev/)
[![Axios](https://img.shields.io/badge/Axios-purple?style=flat-square&logo=axios)](https://axios-http.com/)
[![JSON](https://img.shields.io/badge/JSON-yellow?style=flat-square&logo=json)](https://www.json.org/)
[![Bulma](https://img.shields.io/badge/Bulma-pink?style=flat-square&logo=bulma)](https://bulma.io/)

### Backend:
<img src="https://skillicons.dev/icons?i=eclipse,spring,java,maven,nodejs,hibernate" />

[![Springboot](https://img.shields.io/badge/Springboot-green?style=flat-square&logo=springboot)](https://spring.io/projects/spring-boot)
[![Lombok](https://img.shields.io/badge/Lombok-green?style=flat-square&logo=lombok)](https://projectlombok.org/)

### Database:
[![Oracle Cloud](https://img.shields.io/badge/Oracle_Cloud-red?style=flat-square&logo=oracle)](https://www.oracle.com/cloud/)

## Team Members
| Photo | Name | Function | Links |
| --- | --- | --- | --- |
| <img src="https://avatars.githubusercontent.com/Daniloel" alt="Danilo Verginio" width="50"> | <b>Danilo Verginio</b> | Product Owner | ![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=[https://github.com/Daniloel]) ![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=[https://linkedin.com/in/daniloverginio]) |
| <img src="https://avatars.githubusercontent.com/michelrubens" alt="Michel Rubens" width="50"> | <b>Michel Rubens</b> | Scrum Master | ![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=[https://github.com/michelrubens]) ![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=[https://linkedin.com/in/michelrubens]) |
| <img src="https://avatars.githubusercontent.com/luizborges17" alt="Luiz Borges" width="50"> | <b>Luiz Borges</b> | Developer | ![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=[https://github.com/luizborges17]) ![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=[https://linkedin.com/in/luizborges17]) |
| <img src="https://avatars.githubusercontent.com/victornaca" alt="Victor Fernandes" width="50"> | Victor Fernandes | Developer | ![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=[https://github.com/victornaca]) ![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=[https://linkedin.com/in/victorfernandescpv]) |
| <img src="https://avatars.githubusercontent.com/williamantoniazzi" alt="William Antoniazzi" width="50"> | William Antoniazzi | Developer | ![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=[https://github.com/williamantoniazzi]) ![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=[https://linkedin.com/in/williamantoniazzi]) |

<br>

:house: [→ Back to Home](#hextech---technology-solutions)
