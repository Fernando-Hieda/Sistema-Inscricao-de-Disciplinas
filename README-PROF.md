Sistema-Inscricao-de-Disciplinas

O sistema a seguir, consiste em listar alunos cadastrados no sistema, indicando explicitamente seus dados: nome, ira, id, perfil, status de matrícula, curso e as OFERTAS inscritas, através da classe ./Model/Aluno.js.
URL da lista de alunos:

$ localhost:3001/alunos

Ou Através do link disponível no Heroku:

$ https://evening-tor-20872.herokuapp.com/alunos

Ainda sobre os alunos, fica disponível as ofertas de disciplinas inscritas, assim como a quantidade delas, a partir do id de determinado aluno.
URL da lista de ofertas inscritas:

$ localhost:3001/alunos/:id

Ou Através do link disponível no Heroku:

$ https://evening-tor-20872.herokuapp.com/alunos/:id

O sistema também consegue listar as ofertas disponíveis e cadastradas no sistema, e assim, obtendo informações da oferta, como, a disciplina, id, professor, vagas, período, perfil e os Alunos inscritos na oferta.
URL da lista de ofertas:

$ localhost:3001/ofertas

Ou Através do link disponível no Heroku:

$ https://evening-tor-20872.herokuapp.com/ofertas

Para filtrar essas ofertas, também é possível mostrar apenas aquelas disponíveis em determinado período.
URL da lista de ofertas de um período:

$ localhost:3001/lista_disciplina/:periodo

Ou Através do link disponível no Heroku:

$ https://evening-tor-20872.herokuapp.com/lista_disciplina/:periodo

Também é possível verificar os grupos academicos nos quais um determinado aluno está inscrito.
URL da lista de grupos academicos de um aluno:

$ localhost:3001/lista_grupos_academicos/:id

Ou Através do link disponível no Heroku:

$ https://evening-tor-20872.herokuapp.com/lista_grupos_academicos/:id