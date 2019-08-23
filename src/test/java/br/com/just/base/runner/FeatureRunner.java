package br.com.just.base.runner;

import net.serenitybdd.cucumber.CucumberWithSerenity;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
		features = "classpath:features/Feature.feature",
		plugin = { "pretty", "html:target/cucumber-html-report", "json:target/cucumber.json", "junit:target/cucumber.xml" },
		monochrome = true,
		glue = {"br.com.just.base.stepDefinition"},
		dryRun = false,
		strict = true )
public class FeatureRunner {

}