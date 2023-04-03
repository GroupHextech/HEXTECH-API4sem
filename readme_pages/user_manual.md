## 1. Pré-Requisitos

#### Primeiramente, para a executarmos do projeto precisamos baixar os seguintes itens:
- [Java JDK 11](https://www.oracle.com/br/java/technologies/javase/jdk11-archive-downloads.html "Java JDK")
- [Java JRE 8 ou superior](https://www.oracle.com/br/java/technologies/javase/javase8u211-later-archive-downloads.html)
- [PostgreSQL 12.0 ou 14.5](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
- [Eclipse IDE](https://www.eclipse.org/downloads/download.php?file=/oomph/epp/2022-09/R/eclipse-inst-jre-win64.exe)

## 2. Primeiros Passos:
#### PostgreSQL
 → Após a instalação do SGBD, abra o PostgreSQL <br>
 <br>
 → Configure o usuário para: ___postgres___ **/** senha: ___password___ <br>
 <br>
 → Feita a configuração/criação do banco, execute o script SQL para preparação do ambiente: [Script SQL](https://github.com/GroupHextech/HEXTECH-API3sem/blob/sprint03_Feature/documents/IACIT_PostgreSQL_Physical_Export_create.sql)
 <br>
<br>
## 3. Executando a Aplicação:
#### IoWeather
→ Abra o repositório do projeto no Github: [IoWeather](https://github.com/GroupHextech/HEXTECH-API3sem/tree/sprint03_Feature)
→ Clique no botão 'Code' e escolha a opção que preferir importar o projeto para sua máquina, seja via download .zip ou clonando através do git (exemplo abaixo).<br>
<br>
<img align="center" src="https://user-images.githubusercontent.com/82103455/200172110-deb2068a-f2ee-4bef-ac94-9ad3be39b42f.png" height="360px"><br>
<br>


→ Caso tenha preferido o download via .zip, localize o arquivo na sua máquina e faça a extração do mesmo. <br>
<br>
→ Feito isso, abra o **Eclipse IDE** <br>
<br>
→ Ao abrir o Eclipse, selecione o diretório onde você baixou o projeto (exemplo abaixo).<br>
<br>
<img align="center" src="https://user-images.githubusercontent.com/82103455/200172405-4deb0f82-94bc-4bba-90ab-7610ff11e9c8.png" height="360px"><br>
<br>
→ Após abrir o projeto, o Eclipse irá baixar as dependências do _Maven_ **automaticamente**, basta aguardar a conclusão.<br>
<br>
→ Concluído os downloads das dependências, basta abrir o caminho _"sr/main/java" > "com.iacit.ioweather" > clicar com o botão direito no item "IoweatherApplication.java" > Run As > Java Application_ (conforme exemplo abaixo).<br>
<br>
<img align="center" src="https://user-images.githubusercontent.com/82103455/200172709-93315fca-f8df-4147-8edd-5f752698e4b3.png" height="440px"><br>
<br>
→ Por fim, após todos estes passos, basta abrir algum navegador e digitar no endereço: '**localhost:8082/principal**' e a aplicação estará disponível!
