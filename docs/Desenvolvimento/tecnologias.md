---
sidebar_position: 1
---

# 💻 Tecnologias Utilizadas

Este documento descreve todas as tecnologias, frameworks e ferramentas utilizadas no desenvolvimento do Sistema de Gestão de Frota.

---

## 🔧 Backend

### Java

**Versão**: 17 LTS (Long Term Support)

**Justificativa**:
- Linguagem robusta e amplamente utilizada no mercado
- Excelente performance e escalabilidade
- Grande comunidade e suporte
- Compatibilidade com Spring Framework

**Uso no Projeto**:
- Lógica de negócio
- APIs REST
- Integração com banco de dados
- Processamento de dados

---

### Spring Boot

**Versão**: 3.x

**Justificativa**:
- Framework mais popular para desenvolvimento Java
- Configuração simplificada
- Grande ecossistema de bibliotecas
- Produtividade no desenvolvimento

**Módulos Utilizados**:

#### Spring Web
- Criação de APIs REST
- Controllers e endpoints
- Serialização JSON

#### Spring Data JPA
- Abstração de acesso a dados
- Repositories automáticos
- Queries personalizadas

#### Spring Security
- Autenticação e autorização
- Proteção de endpoints
- Gerenciamento de sessões

#### Spring Validation
- Validação de dados de entrada
- Anotações declarativas
- Mensagens de erro customizadas

---

### Hibernate

**Versão**: 6.x

**Justificativa**:
- ORM (Object-Relational Mapping) maduro
- Integração nativa com Spring
- Gerenciamento automático de transações

**Uso no Projeto**:
- Mapeamento objeto-relacional
- Gerenciamento de entidades
- Queries HQL

---

## 🗄️ Banco de Dados

### PostgreSQL

**Versão**: 15.x

**Justificativa**:
- Banco de dados relacional robusto
- Open source e gratuito
- Excelente performance
- Suporte a JSON e tipos avançados
- ACID compliant

**Características Utilizadas**:
- Tabelas relacionais
- Constraints e foreign keys
- Indexes para otimização
- Triggers para automações
- Views para relatórios

---
## 🎨 Frontend

### Svelte

> ⚠️ **Status**: Sistema em desenvolvimento
---
## 🔐 Segurança

### JWT (JSON Web Tokens)

> ⚠️ **Status**: Sistema em desenvolvimento
---