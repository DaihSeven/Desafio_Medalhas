 # Desafio Contador de Medalhas por País | PretaLab

 O desafio consistia em fazer um programa que com interação somente por terminal recebesse o nome do país e a quantidade de medalhas: ouro, prata e bronze.

 E que tivesse a opção de 'sair' para o usuário e interromper o loop, retornando assim o ranking.

 ## Tecnolgias

 - JavaScript (código);
 - NodeJs (terminal e prompt);
 - Git e Github (para versionamento);
 - VScode (IDE para desenvolvimento);

 ## Explicação do desenvolvimento

 Obs: No desafio pedia apenas JavaScript, mas como atualmente estou estudando NodeJS e o desafio necessitava de prompt e terminal achei que seria mais útil e fácil.

 ## Início

 - Start e instalações:

 ````
//Comando que usei para iniciar o projeto com nodeJS.

$ npm init -y

// Comando para intalar o prompt
$ npm install prompt-sync

````
- Criação do arquivo medalhas.js;

- Alteração no package.json:
````
de:
"main": "index.js",
"description": "",

para:
"main": "medalhas.js",
"description": "Desafio Contador de Medalhas, Lógica com JavaScript",
````

## Desenvolvimento de código

- Criei para armazenar os dados;
````
const paises = {};
````

- Na função <i>calcularMedalhas()</i>:

    - Adicionei dois consoles para o título e opção de 'sair';
    - Um loop com while para que recebesse os dados: nome do país e a quantidade das medalhas para cada tipo;
    - Uma contagem do total colocado pelo usuário;
    - E um retorno de feedback em detalhes.

- Consoles finais pós comando <i>'sair'</i>:
    - RELATÓRIO FINAL: vai exibir todos os paises e quantidade de medalhas em detalhes;
    - RANKING DE MEDALHAS: vai organizar de acordo com o total de medalhas dos paises em ordem decrescente;

## Exemplo de saída no terminal
````
PS C:\Users\*privacidade*\ContadorDeMedalhas> node medalhas.js       
=== Contador de Medalhas Olímpicas ===
Digite 'sair' a qualquer momento para encerrar

Nome do país:Brasil
Medalhas de ouro:7
Medalhas de prata:5
Medalhas de bronze:9

Brasil adicionado com sucesso!
Resumo: Ouro: 7, Prata: 5, Bronze: 9 (Total: 21)

Nome do país:USA
Medalhas de ouro:5
Medalhas de prata:9
Medalhas de bronze:11

USA adicionado com sucesso!
Resumo: Ouro: 5, Prata: 9, Bronze: 11 (Total: 25)

Nome do país:Portugal
Medalhas de ouro:4
Medalhas de prata:8
Medalhas de bronze:9

Portugal adicionado com sucesso!
Resumo: Ouro: 4, Prata: 8, Bronze: 9 (Total: 21)

Nome do país:France
Medalhas de ouro:8
Medalhas de prata:4
Medalhas de bronze:8

France adicionado com sucesso!
Resumo: Ouro: 8, Prata: 4, Bronze: 8 (Total: 20)

Nome do país:sair

=== RELATÓRIO FINAL ===
Brasil:        Ouro: 7   Prata: 5  Bronze: 9   Total: 21
USA:           Ouro: 5   Prata: 9  Bronze: 11  Total: 25
Portugal:      Ouro: 4   Prata: 8  Bronze: 9   Total: 21
France:        Ouro: 8   Prata: 4  Bronze: 8   Total: 20

=== RANKING DE MEDALHAS ===
1. USA: 25 medalhas
2. Brasil: 21 medalhas
3. Portugal: 21 medalhas
4. France: 20 medalhas

````
## Testando
- Caso já tenha o NodeJS instalado e configurado, caso contrário pode seguir este tutorial antes: 
    - [link tutorial Medium](https://medium.com/@habbema/nodejs-instala%C3%A7%C3%A3o-2d8d1f2c8ea0#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImMzN2RhNzVjOWZiZTE4YzJjZTkxMjViOWFhMWYzMDBkY2IzMWU4ZDkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDI4NzY2NTM4NjI0NTM2ODk5MTgiLCJlbWFpbCI6ImRhaWhiYXJib3NhMTZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5iZiI6MTc0NDgyMDM4MywibmFtZSI6IkRhaWFuZSBCYXJib3NhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pyMWZIM2NLRDE1T0U0OENzZ0s5V1k1WU1sWGFxZWhDQVVocEM5M1BVbTZNV0VPaXNCPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkRhaWFuZSIsImZhbWlseV9uYW1lIjoiQmFyYm9zYSIsImlhdCI6MTc0NDgyMDY4MywiZXhwIjoxNzQ0ODI0MjgzLCJqdGkiOiJlNzcyNGYxN2M1Y2M3NGMxNWMxMGYwOTFiODY2NDZjZmYzNzQ3YmU4In0.TEC_GzAJOT4avm8Is3D35HzdEJ2jr1GrSGWLT2B27EsKQdN8XKdtaiqus5kBzlYS8VLVXeivKilW9ktKFC9aM9cDuDdSyXO-YEXGK5YIZdZLxrmtIRwIbpwDGTUIlcap5ZKukyMUZqbGBtNUBNjeiJwQmjXmQLwwOsTjDWUkqWxZx2bE2Ru_nywh7ID612sfGtRuLf0gZ45QIcQbweHJ0e_eN9d37rtcqFWIVROe2nEfFeWnS6elDuLcTEE3-KwZMKJ_zAQvZfXMTcYDGO3Ao1WiBbPOst23g6c-A5BNMNiZptGPS0Dji0M2ITX8BKfpOoDGbb-PH3R96_Vuk8TszA)
- Abra o terminal no local escolhido:
````
$ git clone https://github.com/DaihSeven/Desafio_Medalhas.git

$ cd Desafio_Medalhas

//comando para abrir direto no vscode
$ code . 

- No vscode para dar start
$ node medalhas.js
````

## Comandos git que usei para subir o arquivo

````
$ git status

$ git add .

$ git commit -m ":heavy_check_mark: Desafio finalizado! :tada:"

$ git push origin main

````
## Autora:

[Daiane das Graças Barbosa Koslowski](https://github.com/DaihSeven)