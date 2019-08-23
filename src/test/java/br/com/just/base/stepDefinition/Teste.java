package br.com.just.base.stepDefinition;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import br.com.just.base.pageObject.TestePageObject;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;

public class Teste {

	private static final Logger LOGGER = LoggerFactory.getLogger(Teste.class);
	
	private static TestePageObject teste;
	
	@Before
	public void before(Scenario scenario) {
		LOGGER.info("------------------------------");
		LOGGER.info("Starting - {}", scenario.getName());
		LOGGER.info("------------------------------");
	}

	@Given("^estou na pagina inical do site 'Google Drive'$")
	public void estou_na_pagina_inical_do_site_Google_Drive() throws Throwable {
		teste.teste();
	}

	@When("^clico em 'Aceder ao Google Drive'$")
	public void clico_em_Aceder_ao_Google_Drive() {
	    
	}

	@When("^preencho 'E-mail'$")
	public void preencho_E_mail() {
	    
	    
	}

	@When("^preencho 'Senha'$")
	public void preencho_Senha() {
	    
	    
	}

	@Then("^sistema apresenta tela 'Meu Drive'$")
	public void sistema_apresenta_tela_Meu_Drive() {
	    
	    
	}

	@When("^clico no botao 'Novo'$")
	public void clico_no_botao_Novo() {
	    
	    
	}

	@When("^clico em 'Upload de arquivos'$")
	public void clico_em_Upload_de_arquivos() {
	    
	    
	}

	@When("^seleciono arquivo \"([^\"]*)\"$")
	public void seleciono_arquivo(String arg1) {
	    
	    
	}

	@Then("^valido arquivo salvo no 'Google Drive'$")
	public void valido_arquivo_salvo_no_Google_Drive() {
	    
	    
	}

	@When("^clico com o botao direito do mouse no arquivo \"([^\"]*)\"$")
	public void clico_com_o_botao_direito_do_mouse_no_arquivo(String arg1) {
	    
	    
	}

	@When("^clico em 'Fazer Download'$")
	public void clico_em_Fazer_Download() {
	    
	    
	}

	@Then("^valido arquivo salvo com sucesso$")
	public void valido_arquivo_salvo_com_sucesso() {
	    
	    
	}

	@When("^clico em 'Remover'$")
	public void clico_em_Remover() {
	    
	    
	}

	@When("^clico no menu 'Lixeira'$")
	public void clico_no_menu_Lixeira() {
	    
	    
	}

	@When("^seleciono a opção 'Esvaziar lixeira'$")
	public void seleciono_a_opção_Esvaziar_lixeira() {
	    
	    
	}

	@Then("^valido arquivo removido com sucesso$")
	public void valido_arquivo_removido_com_sucesso() {
	    
	    
	}
	
}
