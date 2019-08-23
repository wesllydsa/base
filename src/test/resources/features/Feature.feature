@Feature:GoogleDrive
Feature: Google Drive

Background: Acessar site 'Google Drive'
	Given estou na pagina inical do site 'Google Drive'
	When clico em 'Aceder ao Google Drive'
	And preencho 'E-mail'
	And preencho 'Senha'
	Then sistema apresenta tela 'Meu Drive'


@Test:UploadDeArquivo
Scenario Outline: Upload de Arquivo
	When clico no botao 'Novo'
	And clico em 'Upload de arquivos'
	And seleciono arquivo "<arquivo>"
	Then valido arquivo salvo no 'Google Drive'

Examples:
   | arquivo 	 |
   | IMAGEM_NAME |


@Test:DownloadDeArquivo
Scenario Outline: Download de Arquivo
	When clico com o botao direito do mouse no arquivo "<arquivo>"
	And clico em 'Fazer Download'
	Then valido arquivo salvo com sucesso

Examples:
   | arquivo 	 |
   | IMAGEM_NAME |
   
   
@Test:RemoverArquivo
Scenario Outline: Remover Arquivo
	When clico com o botao direito do mouse no arquivo "<arquivo>"
	And clico em 'Remover'
	And clico no menu 'Lixeira'
	And seleciono a opção 'Esvaziar lixeira'
	Then valido arquivo removido com sucesso

Examples:
   | arquivo 	 |
   | IMAGEM_NAME |