$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Feature.feature");
formatter.feature({
  "name": "Google Drive",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature:GoogleDrive"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Upload de Arquivo",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test:UploadDeArquivo"
    }
  ]
});
formatter.step({
  "name": "clico no botao \u0027Novo\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "clico em \u0027Upload de arquivos\u0027",
  "keyword": "And "
});
formatter.step({
  "name": "seleciono arquivo \"\u003carquivo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "valido arquivo salvo no \u0027Google Drive\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "arquivo"
      ]
    },
    {
      "cells": [
        "IMAGEM_NAME"
      ]
    }
  ]
});
formatter.background({
  "name": "Acessar site \u0027Google Drive\u0027",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "estou na pagina inical do site \u0027Google Drive\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "Teste.estou_na_pagina_inical_do_site_Google_Drive()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em \u0027Aceder ao Google Drive\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "Teste.clico_em_Aceder_ao_Google_Drive()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho \u0027E-mail\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "Teste.preencho_E_mail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho \u0027Senha\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "Teste.preencho_Senha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sistema apresenta tela \u0027Meu Drive\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "Teste.sistema_apresenta_tela_Meu_Drive()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Upload de Arquivo",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature:GoogleDrive"
    },
    {
      "name": "@Test:UploadDeArquivo"
    }
  ]
});
formatter.step({
  "name": "clico no botao \u0027Novo\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "Teste.clico_no_botao_Novo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em \u0027Upload de arquivos\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "Teste.clico_em_Upload_de_arquivos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono arquivo \"IMAGEM_NAME\"",
  "keyword": "And "
});
formatter.match({
  "location": "Teste.seleciono_arquivo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido arquivo salvo no \u0027Google Drive\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "Teste.valido_arquivo_salvo_no_Google_Drive()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Download de Arquivo",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test:DownloadDeArquivo"
    }
  ]
});
formatter.step({
  "name": "clico com o botao direito do mouse no arquivo \"\u003carquivo\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "clico em \u0027Fazer Download\u0027",
  "keyword": "And "
});
formatter.step({
  "name": "valido arquivo salvo com sucesso",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "arquivo"
      ]
    },
    {
      "cells": [
        "IMAGEM_NAME"
      ]
    }
  ]
});
formatter.background({
  "name": "Acessar site \u0027Google Drive\u0027",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "estou na pagina inical do site \u0027Google Drive\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "Teste.estou_na_pagina_inical_do_site_Google_Drive()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em \u0027Aceder ao Google Drive\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "Teste.clico_em_Aceder_ao_Google_Drive()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho \u0027E-mail\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "Teste.preencho_E_mail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho \u0027Senha\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "Teste.preencho_Senha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sistema apresenta tela \u0027Meu Drive\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "Teste.sistema_apresenta_tela_Meu_Drive()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Download de Arquivo",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature:GoogleDrive"
    },
    {
      "name": "@Test:DownloadDeArquivo"
    }
  ]
});
formatter.step({
  "name": "clico com o botao direito do mouse no arquivo \"IMAGEM_NAME\"",
  "keyword": "When "
});
formatter.match({
  "location": "Teste.clico_com_o_botao_direito_do_mouse_no_arquivo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em \u0027Fazer Download\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "Teste.clico_em_Fazer_Download()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido arquivo salvo com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "Teste.valido_arquivo_salvo_com_sucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Remover Arquivo",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test:RemoverArquivo"
    }
  ]
});
formatter.step({
  "name": "clico com o botao direito do mouse no arquivo \"\u003carquivo\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "clico em \u0027Remover\u0027",
  "keyword": "And "
});
formatter.step({
  "name": "clico no menu \u0027Lixeira\u0027",
  "keyword": "And "
});
formatter.step({
  "name": "seleciono a opção \u0027Esvaziar lixeira\u0027",
  "keyword": "And "
});
formatter.step({
  "name": "valido arquivo removido com sucesso",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "arquivo"
      ]
    },
    {
      "cells": [
        "IMAGEM_NAME"
      ]
    }
  ]
});
formatter.background({
  "name": "Acessar site \u0027Google Drive\u0027",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "estou na pagina inical do site \u0027Google Drive\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "Teste.estou_na_pagina_inical_do_site_Google_Drive()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em \u0027Aceder ao Google Drive\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "Teste.clico_em_Aceder_ao_Google_Drive()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho \u0027E-mail\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "Teste.preencho_E_mail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho \u0027Senha\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "Teste.preencho_Senha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sistema apresenta tela \u0027Meu Drive\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "Teste.sistema_apresenta_tela_Meu_Drive()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Remover Arquivo",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature:GoogleDrive"
    },
    {
      "name": "@Test:RemoverArquivo"
    }
  ]
});
formatter.step({
  "name": "clico com o botao direito do mouse no arquivo \"IMAGEM_NAME\"",
  "keyword": "When "
});
formatter.match({
  "location": "Teste.clico_com_o_botao_direito_do_mouse_no_arquivo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em \u0027Remover\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "Teste.clico_em_Remover()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no menu \u0027Lixeira\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "Teste.clico_no_menu_Lixeira()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono a opção \u0027Esvaziar lixeira\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "Teste.seleciono_a_opção_Esvaziar_lixeira()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido arquivo removido com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "Teste.valido_arquivo_removido_com_sucesso()"
});
formatter.result({
  "status": "passed"
});
});