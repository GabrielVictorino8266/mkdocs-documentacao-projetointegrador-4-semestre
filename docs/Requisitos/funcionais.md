---
sidebar_position: 1
---

# ⚙️ Requisitos Funcionais

Os requisitos funcionais descrevem as funcionalidades específicas que o sistema deve oferecer aos usuários.

---

## 🚘 Gerenciamento de Motoristas

### RF01 - Cadastro de Motoristas

O sistema deve permitir o cadastro completo de motoristas com as seguintes informações:

- **Nome completo**
- **CPF** (validado)
- **RG**
- **CNH**
  - Número da CNH
  - Data de validade
  - Categoria
- **Telefone** (contato principal)
- **Contato de emergência**
  - Nome
  - Telefone
  - Parentesco

#### Regras de Negócio

- CPF deve ser único no sistema
- CNH deve ser válida e não vencida
- Todos os campos são obrigatórios
- Telefones devem seguir formato válido

---

### RF02 - Listagem de Motoristas

O sistema deve exibir uma **lista atualizada de motoristas** contendo:

- Nome completo
- Status (ativo/inativo)
- Telefone de contato
- Categoria da CNH

#### Comportamento

- Lista deve ser atualizada **automaticamente** após:
  - Cadastro de novo motorista
  - Edição de dados existentes
  - Mudança de status
- Ordenação padrão: alfabética por nome
- Paginação para listas grandes

---

### RF03 - Busca de Motoristas

O sistema deve permitir **busca por nome** para localizar motoristas rapidamente.

#### Funcionalidades

- Busca em tempo real (enquanto digita)
- Busca parcial (encontra "João" ao digitar "Joa")
- Não sensível a maiúsculas/minúsculas
- Exibição de resultados instantânea

---

### RF04 - Visualização de Perfil

O sistema deve permitir acesso ao **perfil completo** de cada motorista, exibindo:

- Todos os dados cadastrais
- Foto (se disponível)
- Status atual
- Histórico de viagens
- Documentação anexada

---

### RF05 - Edição de Dados

O sistema deve permitir a **edição de dados** de motoristas cadastrados.

#### Funcionalidades

- Edição de todos os campos cadastrais
- Validação em tempo real
- Confirmação antes de salvar
- Log de alterações (auditoria)

---

### RF06 - Alteração de Status

O sistema deve permitir alteração de **status do motorista**:

- 🟢 **Ativo**: Disponível para viagens
- 🔴 **Inativo**: Não disponível temporariamente

#### Regras

- Motorista inativo não pode ser alocado para novas viagens
- Viagens em andamento devem ser finalizadas antes de inativar
- Histórico de mudanças de status deve ser mantido

---

### RF07 - Desativação de Motoristas

O sistema deve permitir **desativação sem exclusão** dos dados.

#### Comportamento

- Dados permanecem no banco de dados
- Motorista não aparece em listagens ativas
- Histórico permanece disponível para consulta
- Possibilidade de reativação futura

---

## 📊 Dashboard Administrativo

### RF08 - Dashboard do Administrador

O sistema deve fornecer um **painel visual (dashboard)** exclusivo para o administrador **Anderson**.

#### Indicadores Principais

##### 📈 Viagens no Mês
- Total de viagens realizadas no mês atual
- Comparativo com mês anterior
- Gráfico de evolução diária

##### 🔧 Vans em Manutenção
- Quantidade de veículos em manutenção
- Lista dos veículos
- Previsão de retorno

##### 🛢️ Próxima Troca de Óleo
- Veículos próximos da troca de óleo
- Quilometragem atual vs. quilometragem da troca
- Alertas visuais (cores)

##### 📊 Status dos Veículos
- Quantidade por status
- Percentuais
- Gráfico visual

---

### RF09 - Priorização de Manutenção

O sistema deve exibir **priorização dos veículos** próximos da troca de óleo.

#### Critérios de Priorização

- 🔴 **Crítico**: Faltam menos de 500 km
- 🟠 **Atenção**: Faltam entre 500-1000 km
- 🟡 **Alerta**: Faltam entre 1000-2000 km

---

### RF10 - Gráfico de Status

O sistema deve exibir **gráfico de pizza** com status dos veículos:

- 🟢 **Disponíveis**: Prontos para uso
- 🔴 **Indisponíveis**: Fora de operação
- 🟠 **Em Manutenção**: Em processo de manutenção

#### Características

- Atualização em tempo real
- Valores absolutos e percentuais
- Interativo (clique para ver detalhes)

---

## 🚐 Controle de Veículos

### RF11 - Cadastro de Veículos

O sistema deve permitir o cadastro de veículos com:

- **Placa** (única)
- **Modelo**
- **Marca**
- **Ano de fabricação**
- **Quilometragem atual**
- **Imagem do veículo**
- **Status inicial**
- **Intervalo de troca de óleo** (em km)

#### Validações

- Placa deve seguir padrão brasileiro
- Ano não pode ser futuro
- Quilometragem deve ser numérica e positiva
- Imagem em formato válido (JPG, PNG)

---

### RF12 - Busca e Filtragem de Veículos

O sistema deve permitir **busca e filtragem** de veículos por:

- Placa (busca parcial)
- Status (filtro)
- Marca (filtro)
- Modelo (filtro)

#### Funcionalidades

- Múltiplos filtros simultâneos
- Busca em tempo real
- Limpar filtros

---

### RF13 - Atualização de Veículos

O sistema deve permitir **atualização em tempo real** de:

- Quilometragem atual
- Status do veículo
- Dados cadastrais

#### Regras

- Quilometragem só pode aumentar
- Mudança de status requer justificativa
- Log de todas as alterações

---

## 🧭 Gestão de Viagens

### RF14 - Registro Automático de Viagens

O sistema deve realizar **registro automático** de:

- **Horário de início** (ao iniciar viagem)
- **Quilometragem inicial** (capturada automaticamente)
- **Horário de fim** (ao finalizar viagem)
- **Quilometragem final** (capturada automaticamente)

#### Comportamento

- Data e hora capturadas do sistema (sem entrada manual)
- Validação: km final > km inicial
- Cálculo automático de km rodados
- Cálculo automático de duração

---

### RF15 - Registro de Entrada na Garagem

O sistema deve registrar o **horário de entrada na garagem** no encerramento da viagem.

#### Informações Capturadas

- Horário de chegada na garagem
- Quilometragem final do veículo
- Status do veículo ao retornar

---

### RF16 - Lançamento Manual de Viagens

O sistema deve permitir que o administrador **Anderson** lance viagens manualmente.

#### Funcionalidades

- Seleção de motorista (lista de ativos)
- Seleção de veículo (lista de disponíveis)
- Definição de data
- Definição de horários (início e fim)
- Possibilidade de finalizar manualmente

#### Validações

- Motorista deve estar ativo
- Veículo deve estar disponível
- Não pode haver conflito de horários
- Horário de fim > horário de início

---

### RF17 - Histórico de Viagens

O sistema deve manter **histórico completo** de todas as viagens:

- Data e horários
- Motorista responsável
- Veículo utilizado
- Quilometragem (inicial e final)
- Duração
- Observações

#### Funcionalidades

- Filtros por período, motorista, veículo
- Exportação de relatórios
- Visualização detalhada

---

## 🔐 Controle de Acesso

### RF18 - Autenticação de Usuários

O sistema deve exigir **autenticação** para acesso.

#### Credenciais

- Usuário (e-mail ou login)
- Senha

---

### RF19 - Níveis de Acesso

O sistema deve implementar **controle de acesso** por perfil:

- **Administrador**: Acesso total
- **Motorista**: Apenas consulta

---

## 📱 Interface e Usabilidade

### RF20 - Interface Responsiva

O sistema deve ser **responsivo** e funcionar em:

- Desktop (resolução mínima 1366x768)
- Tablet (landscape e portrait)
- Smartphone (para consultas)

---

## 📄 Relatórios

### RF21 - Geração de Relatórios

O sistema deve gerar relatórios de:

- Viagens por período
- Viagens por motorista
- Viagens por veículo
- Manutenções realizadas

#### Formatos

- PDF (para impressão)
- Excel (para análise)
- Visualização online
