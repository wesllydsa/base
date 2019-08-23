package br.com.just.base.pageObject;

import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.core.pages.WebElementFacade;

import org.openqa.selenium.support.FindBy;

public class TestePageObject extends PageObject {

	@FindBy(id = "teste")
	private WebElementFacade teste;

	public void teste() {
	}
	
}
