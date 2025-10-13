---
sidebar_position: 2
---

# 🧱 Requisitos Não Funcionais

Os requisitos não funcionais descrevem as características de qualidade, desempenho e restrições técnicas do sistema.

---

## ⚡ Desempenho

### RNF01 - Tempo de Resposta

O sistema deve responder em **menos de 10 segundos** para operações comuns.

#### Operações Comuns

- Cadastro de motorista
- Cadastro de veículo
- Consulta de dados
- Listagem de registros
- Busca e filtragem
- Geração de relatórios simples

#### Métricas

- **Tempo médio**: < 3 segundos
- **Tempo máximo**: < 10 segundos
- **Percentil 95**: < 5 segundos

---

### RNF02 - Capacidade de Processamento

O sistema deve suportar:

- **Usuários simultâneos**: Até 50 usuários
- **Registros de motoristas**: Até 500
- **Registros de veículos**: Até 200
- **Registros de viagens**: Ilimitado (com paginação)

---

### RNF03 - Otimização de Recursos

O sistema deve:

- Utilizar cache para consultas frequentes
- Implementar lazy loading em listagens
- Comprimir imagens automaticamente
- Minimizar requisições ao servidor

---

## 🔐 Segurança

### RNF04 - Autenticação Obrigatória

O sistema deve exigir **autenticação** para acesso a qualquer funcionalidade.

#### Requisitos de Senha

- **Tamanho mínimo**: 4 caracteres
- **Composição**: Letras e números obrigatórios
- **Validação**: No momento do cadastro e login

#### Exemplo de Senhas Válidas
- `abc123`
- `user2024`
- `admin99`

#### Exemplo de Senhas Inválidas
- `abc` (muito curta)
- `abcd` (sem números)
- `1234` (sem letras)

---

### RNF05 - Controle de Sessão

O sistema deve:

- Criar sessão após login bem-sucedido
- Expirar sessão após **30 minutos** de inatividade
- Permitir logout manual
- Invalidar sessão ao fechar navegador (opcional)

---

### RNF06 - Proteção de Dados

O sistema deve:

- Armazenar senhas com **hash criptográfico** (bcrypt, SHA-256)
- Utilizar **HTTPS** para comunicação
- Proteger contra **SQL Injection**
- Proteger contra **XSS (Cross-Site Scripting)**
- Proteger contra **CSRF (Cross-Site Request Forgery)**

---

### RNF07 - Controle de Acesso

O sistema deve:

- Implementar **autorização baseada em perfis**
- Restringir acesso a funcionalidades por perfil
- Registrar todas as ações dos usuários (auditoria)
- Bloquear acesso após 3 tentativas de login falhas

---

## 🌐 Disponibilidade

### RNF08 - Disponibilidade do Sistema

O sistema deve estar disponível **24 horas por dia, 7 dias por semana** (24/7).

#### Metas de Disponibilidade

- **Uptime**: 99% (aproximadamente 7 horas de downtime por mês)
- **Manutenções programadas**: Janelas curtas (máximo 2 horas)
- **Notificação prévia**: 48 horas antes de manutenções

---

### RNF09 - Recuperação de Falhas

O sistema deve:

- Recuperar-se automaticamente de falhas menores
- Exibir mensagens claras em caso de erro
- Manter integridade dos dados em caso de falha
- Permitir retomada de operações após falha

---

## 💾 Backup e Recuperação

### RNF10 - Backup Automático

O sistema deve realizar **backups automáticos diários**.

#### Especificações

- **Frequência**: Diária (horário de menor uso)
- **Retenção**: Mínimo de **30 dias**
- **Tipo**: Backup completo
- **Armazenamento**: Local seguro (preferencialmente off-site)

---

### RNF11 - Recuperação de Dados

O sistema deve permitir:

- Restauração completa do backup
- Recuperação de dados específicos
- Teste periódico de backups
- Tempo de recuperação (RTO): Máximo 4 horas
- Ponto de recuperação (RPO): Máximo 24 horas

---

## 🧩 Compatibilidade

### RNF12 - Navegadores Suportados

O sistema deve ser compatível com os principais navegadores modernos:

#### Navegadores Obrigatórios

- **Google Chrome** (versão 90+)
- **Microsoft Edge** (versão 90+)
- **Mozilla Firefox** (versão 88+)

#### Navegadores Opcionais

- Safari (versão 14+)
- Opera (versão 76+)

---

### RNF13 - Dispositivos Suportados

O sistema deve funcionar em:

- **Desktop**: Windows, macOS, Linux
- **Tablet**: Android, iOS (consulta)
- **Smartphone**: Android, iOS (consulta limitada)

---

### RNF14 - Resolução de Tela

O sistema deve suportar resoluções:

- **Mínima**: 1366x768 (desktop)
- **Recomendada**: 1920x1080 (desktop)
- **Mobile**: 360x640 (smartphone)
- **Tablet**: 768x1024

---

## 🎨 Usabilidade

### RNF15 - Interface Intuitiva

O sistema deve:

- Ter interface **limpa e organizada**
- Seguir padrões de design modernos
- Utilizar ícones reconhecíveis
- Ter navegação clara e consistente

---

### RNF16 - Acessibilidade

O sistema deve:

- Seguir diretrizes **WCAG 2.1** (nível AA)
- Suportar navegação por teclado
- Ter contraste adequado de cores
- Ter textos alternativos em imagens

---

### RNF17 - Feedback ao Usuário

O sistema deve fornecer:

- Mensagens claras de sucesso/erro
- Indicadores de carregamento
- Confirmação antes de ações destrutivas
- Tooltips explicativos

---

## 📊 Manutenibilidade

### RNF18 - Código Limpo

O código deve:

- Seguir padrões de codificação (style guide)
- Ter nomenclatura clara e descritiva
- Ser modular e reutilizável
- Ter comentários em partes complexas

---

### RNF19 - Documentação

O sistema deve ter:

- **Documentação técnica** completa
- **Manual do usuário** ilustrado
- **Documentação de API** (se aplicável)
- **Diagramas** de arquitetura e fluxos

---

### RNF20 - Versionamento

O sistema deve:

- Utilizar controle de versão (Git)
- Ter histórico completo de mudanças
- Seguir versionamento semântico (SemVer)
- Ter branches organizadas (GitFlow)

---

## 🔄 Escalabilidade

### RNF21 - Crescimento de Dados

O sistema deve:

- Suportar crescimento de dados sem degradação
- Implementar paginação em listagens
- Otimizar consultas ao banco de dados
- Permitir arquivamento de dados antigos

---

### RNF22 - Crescimento de Usuários

O sistema deve:

- Suportar aumento gradual de usuários
- Manter desempenho com carga maior
- Permitir expansão de infraestrutura

---

## 🌍 Localização

### RNF23 - Idioma

O sistema deve:

- Estar em **Português Brasileiro**
- Utilizar formato brasileiro de data (dd/mm/aaaa)
- Utilizar formato brasileiro de hora (24h)
- Utilizar formato brasileiro de moeda (R$)

---

### RNF24 - Fuso Horário

O sistema deve:

- Utilizar fuso horário de **Brasília (UTC-3)**
- Registrar timestamps em UTC no banco
- Exibir horários no fuso local do usuário

---

## 📈 Monitoramento

### RNF25 - Logs do Sistema

O sistema deve:

- Registrar todas as operações importantes
- Manter logs por no mínimo 90 dias
- Permitir consulta e análise de logs
- Registrar erros e exceções

---

### RNF26 - Métricas de Uso

O sistema deve coletar:

- Número de acessos por dia
- Funcionalidades mais utilizadas
- Tempo médio de resposta
- Erros e falhas ocorridas

---

## 🔧 Tecnologia

### RNF27 - Stack Tecnológica

O sistema deve utilizar:

- **Backend**: Java com Spring Boot
- **Frontend**: Tecnologia web moderna (React, Angular ou Vue)
- **Banco de Dados**: Relacional (PostgreSQL ou MySQL)
- **Servidor**: Linux (preferencialmente)

---

### RNF28 - Padrões e Boas Práticas

O sistema deve seguir:

- **Arquitetura MVC** ou similar
- **REST API** para comunicação
- **Injeção de Dependência**
- **Testes automatizados** (unitários e integração)

---

## 📦 Implantação

### RNF29 - Ambiente de Produção

O sistema deve:

- Ter ambiente de **desenvolvimento**, **homologação** e **produção**
- Utilizar variáveis de ambiente para configurações
- Ter processo de deploy automatizado
- Permitir rollback em caso de problemas

---

### RNF30 - Requisitos de Infraestrutura

O sistema requer:

- **Servidor**: 2 CPU cores, 4GB RAM (mínimo)
- **Armazenamento**: 50GB (inicial)
- **Banda**: 100 Mbps
- **Sistema Operacional**: Linux (Ubuntu 20.04+ ou similar)
