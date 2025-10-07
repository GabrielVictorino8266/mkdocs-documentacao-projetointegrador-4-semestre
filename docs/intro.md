---
sidebar_position: 1
---

# Sistema de Gestão de Frota de Veículos de Transporte

Integrantes

Bruno Alexander - 
Gabriel Victorino - 
Izabely Campos - 

# Disiciplinas Envolvidas

As diciplinas que fazem parte do Desenvolvimento do projeto são as aulas de "Laboratório de Desenvolvimento Web" e ""


# Nossa empresa

A empresa (ficticia) formada para esse projeto recebeu o nome de PRODEV, uma companhia de tecnologia fundada por alunos do curso de Desenvolvimento de Software Multiplataforma (DSM) da Fatec Araras, com a finalidade de proporcionar soluções inovadoras fundamentadas na excelência técnica.  Ao empregar metodologias ágeis, a equipe busca fazer entregas regulares que proporcionem valor concreto aos clientes.

# O Projeto 

O objetivo do projeto é desenvolver e implementar um sistema completo para a gestão de frotas. A proposta é aprimorar o controle e a gestão de viagens, veículos e motoristas, proporcionando uma maior consciência situacional e uma gestão mais eficiente.  Com isso, espera-se melhorar a eficiência, diminuir o tempo de tomada de decisões, otimizar o uso dos recursos disponíveis e fornecer informações precisas para apoiar decisões estratégicas.

A implementação dessa solução tecnológica trará uma modernização significativa para os processos da Viação União. Espera-se maior controle da frota, redução de custos com manutenções corretivas, melhor uso dos recursos e melhora na qualidade do serviço prestado aos usuários.

# Nosso cliente 

O projeto consiste em um sistema para a Viação União, empresa que atua no transporte coletivo de passageiros, visando modernizar suas operações por meio da criação de um sistema unificado de informações.  Atualmente, a gestão da empresa é realizada de forma manual, o que gera ineficiências operacionais, dificulta a tomada de decisões em razão da falta de dados confiáveis e compromete o monitoramento adequado da frota.

# Requisitos funcionais

## Gerenciamento de Motoristas 

- O sistema deve permitir o cadastro de motoristas com as seguintes informações: 
 -Nome completo
 -CPF
 -RG
 -CNH (número, validade e categoria)
 -Telefone,
 -Contato de emergência.

- O sistema deve disponibilizar uma interface com uma lista de motoristas cadastrados, exibindo pelo menos o nome, status e telefone. A lista deve ser atualizada automaticamente após cada novo cadastro ou alteração.

- O sistema deve fornecer uma funcionalidade de busca por nome do motorista na lista, permitindo que o administrador localize rapidamente um cadastro específico.

- O sistema deve permitir que o administrador acesse o perfil completo de qualquer motorista cadastrado, onde serão exibidas todas as informações inseridas, incluindo dados pessoais, CNH, contatos, status atual (ativo ou inativo) .

- O sistema deve permitir que o administrador edite os dados de motoristas a qualquer momento, garantindo a atualização de informações como validade da CNH, contato telefônico ou dados pessoais corrigidos.

- O sistema deve permitir que o administrador altere o status de um motorista de “ativo” para “inativo” ou vice-versa.
- O sistema deve permitir a desativação de motoristas sem exclusão definitiva dos dados, mantendo todo o histórico cadastral disponível para futuras consultas.

## Dashboard 

- O sistema deve disponibilizar um painel visual para cada módulo (dashboard) exclusivo para Anderson, contendo gráficos e indicadores com informações como: Viagens no mês, Vans em Manutenção, Próxima troca de óleo, Status veículo.

- O sistema deve exibir os registros na seção “Listagem de veículos”, priorizando as vans que estão mais próximas da troca de óleo.

- Deve exibir, na seção “Listagem de veículos” , um gráfico em forma de pizza, onde a cor verde representa os veículos disponíveis, a cor vermelha representa os veículos indisponíveis e a laranja os veículos em manutenção. Abaixo do gráfico, deve haver uma descrição clara para identificar o que cada cor representa.

## Controle de Veículos 

- Permitir que o administrador cadastre veículos com os seguintes dados: 
 -Placa
 -Modelo
 -Marca
 -Ano
 -Quilometragem atual
 -Imagem do veículo
 -Status (disponível, em manutenção, etc.)

 - O sistema deve permitir a consulta e busca de veículos cadastrados por: placa,  status, para facilitar a localização de veículos específicos.

 - O sistema deve permitir que o administrador atualize a quilometragem e o status a qualquer momento, garantindo que os dados dos veículos estejam sempre atualizados

## Viagens 

- Realizar o registro automático do horário e da quilometragem no início e no fim de cada viagem. O motorista não pode escolher a data manualmente; o sistema deve capturar os dados no momento da ação (início/finalização). Ao finalizar a viagem, o sistema deve registrar a quilometragem final (informada pelo motorista) e o horário de entrada na garagem.

- Permitir que o administrador (Anderson) realize o lançamento manual de viagens, com a definição do motorista, veículo, data e horário de início e previsão de término. O administrador também poderá finalizar manualmente uma viagem não encerrada para manter a continuidade do controle.


# Requisitos não funcionais

## Desempenho
- O sistema deve responder em menos de 10 segundos para operações comuns, como cadastro e consulta de dados.

## Segurança
- O sistema deve exigir autenticação com senha, contendo no mínimo 4 caracteres, permitindo ser letras e números.

- Os paineis devem estar disponíveis apenas para os usuários autenticados.

## Disponibilidade
- O sistema deve estar disponível 24 horas por dia, 7 dias por semana, com indisponibilidade a ser definida pelo time técnico, mas se limitando a poucas horas.

## Backup
- O sistema deve realizar backups automáticos diariamente, com retenção de dados por pelo menos 30 dias.

## Integração
- Deve ser compatível com os principais navegadores modernos, incluindo Google Chrome, Microsoft Edge e Mozilla Firefox.

